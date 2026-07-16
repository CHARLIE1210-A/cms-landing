"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
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

    const startAngle = -65;
    const endAngle = 65;

    const angleStep =
        items.length > 1
            ? (endAngle - startAngle) / (items.length - 1)
            : 0;

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

                {/* Background Ring */}

                <div
                    className="
          absolute
          bottom-[-180px]
          h-[420px]
          w-[420px]
          rounded-full
          border
          border-white/10
          bg-white/[0.03]
          backdrop-blur-xl
        "
                />

                {/* Active Indicator (Fixed in center) */}

                <div
                    className="absolute bottom-0 left-1/2 z-20"
                    style={{
                        transform: "translateX(-50%) rotate(0deg)",
                        transformOrigin: `center -${radius}px`,
                    }}
                >
                    <div className="flex flex-col items-center">
                        <div className="h-8 w-[2px] rounded-full bg-gradient-to-b from-primary to-primary/0 shadow-[0_0_12px_theme(colors.primary)]" />

                        <div className="mt-2 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white shadow-lg">
                            {items[activeIndex].label}
                        </div>
                    </div>
                </div>

                {/* Rotating Container for Dial Items */}

                <motion.div
                    className="absolute bottom-0 left-1/2 h-0 w-0"
                    animate={{
                        rotate: -(startAngle + activeIndex * angleStep),
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 150,
                        damping: 22,
                    }}
                >
                    {items.map((item, index) => {
                        const Icon = item.icon;

                        const angle = startAngle + index * angleStep;

                        const rad = (angle * Math.PI) / 180;

                        const x = Math.sin(rad) * radius;

                        const y = Math.cos(rad) * radius;

                        const active = index === activeIndex;

                        return (
                            <button
                                key={item.id}
                                onClick={() => {

                                    if (index === activeIndex) return;

                                    setActiveIndex(index);

                                }}

                                disabled={index === activeIndex}
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
                                        rotate: startAngle + activeIndex * angleStep,
                                    }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 150,
                                        damping: 22,
                                    }}
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