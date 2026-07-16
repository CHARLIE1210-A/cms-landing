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
    const radius = 170;

    // Double the items list to create a 360-degree scroll wheel
    const doubledItems = [...items, ...items];
    const totalSlots = doubledItems.length;
    const angleStep = 360 / totalSlots; // 36 degrees for 10 items

    // Calculate initial rotation on mount to prevent spinning from 0 on load
    const [rotation, setRotation] = useState(() => -activeIndex * angleStep);

    useEffect(() => {
        // Calculate the closest target rotation that aligns activeIndex to the top center (0 degrees)
        const k = Math.round((-rotation - activeIndex * angleStep) / 180);
        const targetRotation = -activeIndex * angleStep - 180 * k;
        setRotation(targetRotation);
    }, [activeIndex, angleStep, rotation]);

    const springTransition = {
        type: "spring",
        stiffness: 140,
        damping: 20,
    };

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
            className="relative mt-12"
        >
            <div className="flex h-[230px] w-full items-end justify-center overflow-hidden">

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
                    "
                />

                {/* Active Indicator (Fixed in center bottom) */}
                <div
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center pointer-events-none"
                >
                    <div className="h-8 w-[2px] rounded-full bg-gradient-to-b from-primary to-primary/0 shadow-[0_0_12px_theme(colors.primary)]" />

                    <div className="mt-2 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg">
                        {items[activeIndex].label}
                    </div>
                </div>

                {/* Rotating Container for Dial Items */}
                <motion.div
                    className="absolute bottom-0 left-1/2 h-0 w-0"
                    animate={{
                        rotate: rotation,
                    }}
                    transition={springTransition}
                >
                    {doubledItems.map((item, index) => {
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
                                    "absolute flex items-center gap-2 rounded-full px-4 py-2 transition-all duration-300",
                                    active
                                        ? "scale-110 bg-primary text-white shadow-xl"
                                        : "bg-white/70 text-zinc-600 backdrop-blur-xl hover:scale-105 hover:bg-white"
                                )}
                                style={{
                                    left: "0px",
                                    bottom: "0px",
                                    transform: `translate(calc(-50% + ${x}px), ${-y}px)`,
                                }}
                            >
                                <motion.div
                                    className="flex items-center gap-2"
                                    animate={{
                                        rotate: -rotation,
                                    }}
                                    transition={springTransition}
                                >
                                    <Icon className="h-4 w-4" />
                                    <span className="text-xs font-medium">
                                        {item.label}
                                    </span>
                                </motion.div>
                            </button>
                        );
                    })}
                </motion.div>
            </div>
        </motion.div>
    );
}