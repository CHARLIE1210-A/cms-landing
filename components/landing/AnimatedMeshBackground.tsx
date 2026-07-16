"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const schemes = [
  // Scheme 1: Soft Peach/Rose (Apricot & Pink)
  {
    id: "rose",
    background: `
      radial-gradient(circle at 20% 30%, rgba(251, 113, 133, 0.65), transparent 45%),
      radial-gradient(circle at 75% 20%, rgba(251, 146, 60, 0.55), transparent 40%),
      radial-gradient(circle at 50% 70%, rgba(244, 63, 94, 0.50), transparent 50%),
      radial-gradient(circle at 85% 75%, rgba(253, 164, 186, 0.45), transparent 38%)
    `,
  },
  // Scheme 2: Light Silver/Slate (Silver & Indigo Highlight)
  {
    id: "silver",
    background: `
      radial-gradient(circle at 20% 30%, rgba(148, 163, 184, 0.65), transparent 45%),
      radial-gradient(circle at 75% 20%, rgba(99, 102, 241, 0.45), transparent 40%),
      radial-gradient(circle at 50% 70%, rgba(186, 230, 253, 0.55), transparent 50%),
      radial-gradient(circle at 85% 75%, rgba(51, 65, 85, 0.45), transparent 38%)
    `,
  },
  // Scheme 3: Sky Blue/Ocean (Sky Blue & Teal)
  {
    id: "sky",
    background: `
      radial-gradient(circle at 20% 30%, rgba(56, 189, 248, 0.65), transparent 45%),
      radial-gradient(circle at 75% 20%, rgba(6, 182, 212, 0.55), transparent 40%),
      radial-gradient(circle at 50% 70%, rgba(45, 212, 191, 0.50), transparent 50%),
      radial-gradient(circle at 85% 75%, rgba(29, 78, 216, 0.45), transparent 38%)
    `,
  },
  // Scheme 4: Soft Beige/Nude (Amber & Cream)
  {
    id: "beige",
    background: `
      radial-gradient(circle at 20% 30%, rgba(245, 158, 11, 0.65), transparent 45%),
      radial-gradient(circle at 75% 20%, rgba(251, 191, 36, 0.55), transparent 40%),
      radial-gradient(circle at 50% 70%, rgba(254, 215, 170, 0.50), transparent 50%),
      radial-gradient(circle at 85% 75%, rgba(251, 146, 60, 0.45), transparent 38%)
    `,
  },
  // Scheme 5: Mint/Emerald (Mint & Green)
  {
    id: "mint",
    background: `
      radial-gradient(circle at 20% 30%, rgba(52, 211, 153, 0.65), transparent 45%),
      radial-gradient(circle at 75% 20%, rgba(34, 197, 94, 0.55), transparent 40%),
      radial-gradient(circle at 50% 70%, rgba(45, 212, 191, 0.50), transparent 50%),
      radial-gradient(circle at 85% 75%, rgba(16, 185, 129, 0.45), transparent 38%)
    `,
  },
  // Scheme 6: Lavender/Lilac (Lavender & Fuchsia)
  {
    id: "lavender",
    background: `
      radial-gradient(circle at 20% 30%, rgba(192, 132, 252, 0.65), transparent 45%),
      radial-gradient(circle at 75% 20%, rgba(167, 139, 250, 0.55), transparent 40%),
      radial-gradient(circle at 50% 70%, rgba(232, 121, 249, 0.50), transparent 50%),
      radial-gradient(circle at 85% 75%, rgba(139, 92, 246, 0.45), transparent 38%)
    `,
  },
];

export function AnimatedMeshBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % schemes.length);
    }, 6000); // Transitions to a new color scheme every 6 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Base Background */}
      <div className="absolute inset-0 bg-[#fcfcfd]" />

      {/* Center Spotlight */}
      <div
        className="
          absolute
          left-1/2
          top-[-8rem]
          h-[42rem]
          w-[42rem]
          -translate-x-1/2
          rounded-full
          bg-white/10
          blur-[100px]
        "
      />

      {/* Fluid Mesh Gradients */}
      <div className="absolute left-1/2 top-[-22rem] h-[56rem] w-[90rem] -translate-x-1/2 w-full h-full">
        <div className="w-full h-full origin-center">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3.0, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full blur-[110px]"
              style={{ background: schemes[index].background }}
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Top Overlay Fade */}
      <div
        className="absolute inset-x-0 top-0 h-48"
        style={{
          background:
            "linear-gradient(to bottom, rgba(252, 252, 253, 0.45), transparent)",
        }}
      />

      {/* Bottom Overlay Fade */}
      <div
        className="absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            "linear-gradient(to top, rgba(252, 252, 253, 0.55), transparent)",
        }}
      />

      {/* Noise Texture for Premium Finish */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.035] mix-blend-soft-light"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
