"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import type { PreviewItem } from "./product-preview";

interface SemiCircularDialProps {
    items: PreviewItem[];
    activeIndex: number;
    setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

export function SemiCircularDial({
    items,
    activeIndex,
    setActiveIndex,
}: SemiCircularDialProps) {
    const radius = 150;

    // Double the items list to create a 360-degree scroll wheel
    // const doubledItems = [...items, ...items];
    const totalSlots = items.length;
    const angleStep = 360 / totalSlots; // 36 degrees for 10 items

    // Calculate initial rotation on mount to prevent spinning from 0 on load
    const [rotation, setRotation] = useState(() => -activeIndex * angleStep);

    useEffect(() => {
        // Calculate the closest target rotation that aligns activeIndex to the top center (0 degrees)
        const k = Math.round((-rotation - activeIndex * angleStep) / 180);
        const targetRotation = -activeIndex * angleStep - 180 * k;
        setRotation(targetRotation);
    }, [activeIndex, angleStep, rotation]);

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 30
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{
                once: true
            }}
            transition={{
                duration: .8
            }}
            className="relative w-full h-full"
        >
            <div className="relative flex h-[230px] w-full items-end justify-center overflow-hidden">

                {/* Concentric Background Ring */}
                <div
                    className="
                      absolute
                      bottom-[-180px]
                      h-[360px]
                      w-[360px]
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.03]
                      backdrop-blur-xl
                      shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]
                    "
                />

                {/* Active Indicator (Fixed in center bottom) */}
                <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center pointer-events-none">
                    {/* Indicator */}
                    <div className="h-8 w-[2px] rounded-full bg-gradient-to-b from-primary via-primary/70 to-transparent shadow-[0_0_18px_rgba(var(--primary),0.35)]" />

                    {/* Active Label */}
                    {/* <div
                        className="
            mt-3
            rounded-full
            border border-white/60
            bg-white/65
            backdrop-blur-2xl
            px-4
            py-1.5
            shadow-[0_8px_30px_rgba(0,0,0,0.08)]
        "
                    >
                        <span
                            className="
                text-[11px]
                font-semibold
                tracking-[0.18em]
                uppercase
                text-zinc-800
            "
                        >
                            {items[activeIndex].label}
                        </span>
                    </div> */}
                </div>

                {/* Rotating Container for Dial Items */}
                <div
                    className="absolute bottom-0 left-1/2 h-0 w-0"
                    style={{
                        transform: `rotate(${rotation}deg)`,
                        transition:
                            "transform 550ms cubic-bezier(0.22, 1, 0.36, 1)",
                        willChange: "transform",
                    }}
                >
                    {items.map((item, index) => {
                        const Icon = item.icon;
                        const angle = index * angleStep;
                        const rad = (angle * Math.PI) / 180;

                        const x = Math.sin(rad) * radius;
                        const y = Math.cos(rad) * radius;

                        const active = (index % items.length) === activeIndex;

                        return (
                            <button
                                key={`${item.id}-${index}`}
                                onClick={() => {
                                    setActiveIndex(index % items.length);
                                }}
                                className={cn(
                                    "absolute flex items-center gap-2 rounded-full px-4 py-2 transition-[background-color,box-shadow,color] duration-500 ease-out",
                                    active
                                        ? "scale-110 bg-white text-primary border border-primary/20 shadow-md"
                                        : "bg-white/70 text-zinc-600 backdrop-blur-xl hover:scale-105 hover:bg-white"
                                )}
                                style={{
                                    left: "0px",
                                    bottom: "0px",
                                    transform: `translate(calc(-50% + ${x}px), ${-y}px) rotate(${-rotation}deg)`,
                                    transition: "transform 550ms cubic-bezier(0.22, 1, 0.36, 1)",
                                    willChange: "transform",
                                }}
                            >
                                <Icon className="h-4 w-4" />
                                <span className="text-xs font-medium">
                                    {item.label}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </motion.div>
    );
}