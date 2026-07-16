"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

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
            className="flex flex-col items-center"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >

            {/* ---------------- Mac Screen ---------------- */}
            <div {...handlers}>
                <motion.div

                    animate={{
                        y: [0, -6, 0]
                    }}

                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}

                >
                    <MacbookScreen className="w-full">
                        <BrowserFrame url="app.cms.io">

                            <div className="relative overflow-hidden bg-[#0b0b0d]">

                                <AnimatePresence mode="wait">

                                    <motion.div
                                        key={activeItem.id}
                                        initial={{
                                            opacity: 0,
                                            y: 24,
                                            filter: "blur(10px)",
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            filter: "blur(0px)",
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -24,
                                            filter: "blur(10px)",
                                        }}
                                        transition={{
                                            duration: 0.45,
                                            ease: [0.22, 1, 0.36, 1],
                                        }}
                                    >
                                        <Image
                                            src={activeItem.src}
                                            alt={activeItem.label}
                                            width={1800}
                                            height={890}
                                            priority
                                            className="block w-full h-auto select-none"
                                        />
                                    </motion.div>

                                </AnimatePresence>

                            </div>

                        </BrowserFrame>
                    </MacbookScreen>
                </motion.div>
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