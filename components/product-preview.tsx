"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { BrowserFrame } from "./browser-frame";
import { MacbookScreen } from "./macbook-frame";
import { SemiCircularDial } from "./semi-circular-dial";

import { useSwipeable } from "react-swipeable";
import { cn } from "@/lib/utils";

export interface PreviewItem {
    id: string;
    label: string;
    src: string;
    icon: React.ElementType;
}

interface ProductPreviewProps {
    items: PreviewItem[];
}

export function ProductPreview({ items }: ProductPreviewProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const AUTO_PLAY = true;
    const AUTO_PLAY_INTERVAL = 5000;

    useEffect(() => {
        if (!AUTO_PLAY || paused) return;

        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % items.length);
        }, AUTO_PLAY_INTERVAL);

        return () => clearInterval(interval);
    }, [paused, items.length]);

    const activeItem = items[activeIndex];

    const next = () =>
        setActiveIndex((prev) => (prev + 1) % items.length);

    const previous = () =>
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);

    useEffect(() => {

        const handler = (e: KeyboardEvent) => {

            if (e.key === "ArrowRight") {
                next();
            }

            if (e.key === "ArrowLeft") {
                previous();
            }

        };

        window.addEventListener("keydown", handler);

        return () => window.removeEventListener("keydown", handler);

    }, []);

    const handlers = useSwipeable({
        onSwipedLeft: () =>
            setActiveIndex((prev) => (prev + 1) % items.length),

        onSwipedRight: () =>
            setActiveIndex((prev) => (prev - 1 + items.length) % items.length),

        trackMouse: true,
    });

    return (
        <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* ambient glow behind the mac screen */}
            <div className="absolute -inset-x-10 -top-10 -bottom-10 -z-10 pointer-events-none">
                <div className="w-full h-full bg-gradient-to-b from-brand-400/15 via-transparent to-transparent blur-3xl" />
            </div>

            {/* ---------------- Mac Screen ---------------- */}
            <div {...handlers} className="relative w-full">
                <MacbookScreen className="w-full drop-shadow-[0_35px_60px_rgba(0,0,0,0.25)]">
                    <BrowserFrame url="app.cms.io">
                        <div className="relative overflow-hidden bg-[#0b0b0d]">
                            {items.map((item, index) => {
                                const active = index === activeIndex;
                                const isFirst = index === 0;
                                return (
                                    <div
                                        key={item.id}
                                        className={cn(
                                            "w-full transition-opacity duration-300 ease-in-out",
                                            isFirst ? "relative" : "absolute inset-0 h-full"
                                        )}
                                        style={{
                                            opacity: active ? 1 : 0,
                                            pointerEvents: active ? "auto" : "none",
                                            willChange: "opacity",
                                        }}
                                    >
                                        <Image
                                            src={item.src}
                                            alt={item.label}
                                            width={1800}
                                            height={890}
                                            priority
                                            className="block w-full h-auto select-none"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </BrowserFrame>
                </MacbookScreen>

                {/* soft contact shadow / reflection under the screen */}
                <div className="mx-auto mt-4 h-6 w-[70%] rounded-full bg-black/20 blur-2xl" />
            </div>

            {/* Dial */}
            <SemiCircularDial
                items={items}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex}
            />
        </div>
    );
}