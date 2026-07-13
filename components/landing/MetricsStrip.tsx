"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface CountUpProps {
  target: string;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

function CountUp({ target, duration = 1.5, prefix = "", suffix = "" }: CountUpProps) {
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
    <span ref={ref} className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white">
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

export default function MetricsStrip() {
  const stats = [
    { label: "Active Painting Sites", target: "1200", prefix: "", suffix: "+" },
    { label: "Workers Wages Logged", target: "8500", prefix: "", suffix: "+" },
    { label: "Advances Recorded", target: "45", prefix: "₹", suffix: "Lakh+" },
    { label: "Site Profits Tracked", target: "1.8", prefix: "₹", suffix: "Cr+" },
  ];

  return (
    <section className="bg-[#0b192c] py-12 sm:py-16 border-y border-[#2c476f]/30 relative overflow-hidden">
      <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
        <div className="absolute top-1/2 left-1/4 w-96 h-24 bg-[#008dda] rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-400">
            Trusted by 200+ painting contractors in India
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="space-y-2 flex flex-col items-center"
            >
              <div className="flex items-center justify-center gap-0.5 text-[#008dda]">
                <CountUp
                  target={stat.target}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-xs sm:text-sm font-medium text-gray-400 max-w-[150px] sm:max-w-none leading-tight">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
