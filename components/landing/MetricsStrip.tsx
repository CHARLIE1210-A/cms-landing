"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CountUpProps {
  target: string;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

function CountUp({ target, duration = 1.2, prefix = "", suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    
    const num = parseFloat(target.replace(/[^0-9.]/g, ""));
    if (isNaN(num)) {
      return;
    }

    const steps = 60 * duration;
    const stepTime = 1000 / 60;
    const increment = num / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const nextVal = increment * currentStep;
      if (currentStep >= steps) {
        clearInterval(timer);
        setCount(num);
      } else {
        setCount(nextVal);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  const formatNumber = (val: number) => {
    if (val % 1 === 0) {
      return val.toLocaleString("en-IN");
    }
    return val.toFixed(1);
  };

  return (
    <span ref={ref} className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tighter drop-shadow-[0_0_15px_rgba(56,189,248,0.2)]">
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

export default function MetricsStrip() {
  const stats = [
    { label: "Active Painting Sites", target: "1200", prefix: "", suffix: "+" },
    { label: "Wages & Attendance Logs", target: "8500", prefix: "", suffix: "+" },
    { label: "Cash Advances Tracked", target: "45", prefix: "₹", suffix: "Lakh+" },
    { label: "Net Contractor Profits", target: "1.8", prefix: "₹", suffix: "Cr+" },
  ];

  return (
    <section className="bg-[#030712] py-16 sm:py-20 border-y border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-32 bg-gradient-to-r from-[#38bdf8]/10 via-[#0ea5e9]/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <p className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-gray-500">
            Trusted by 200+ Indian painting contractors
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`space-y-3 flex flex-col items-center justify-center ${
                idx < 3 ? "lg:border-r lg:border-white/5" : ""
              } px-4`}
            >
              <div className="flex items-center justify-center text-[#38bdf8]">
                <CountUp
                  target={stat.target}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-400 max-w-[140px] sm:max-w-none leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
