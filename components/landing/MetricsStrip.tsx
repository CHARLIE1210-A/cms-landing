"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface CountUpProps {
  target: string;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

function CountUp({ target, duration = 1.2, prefix = "", suffix = "", className, }: CountUpProps) {
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
    <span ref={ref} className={cn("font-mono font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tighter", className)}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

export default function MetricsStrip() {
  const stats = [
    { label: "Active Painting Sites", target: "1200", prefix: "", suffix: "+" },
    { label: "Total Logs", target: "8500", prefix: "", suffix: "+" },
    { label: "Cash Advances Tracked", target: "45", prefix: "₹", suffix: "Lakh+" },
    { label: "Net Contractor Profits", target: "1.8", prefix: "₹", suffix: "Cr+" },
  ];

  return (
    <section className="relative overflow-hidden py-24">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[150px]" />
        <div className="absolute right-0 bottom-0 h-[380px] w-[380px] rounded-full bg-sky-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div
            className="
          inline-flex
          items-center
          rounded-full
          border
          border-primary/20
          bg-primary/10
          px-4
          py-1.5
          text-[11px]
          font-bold
          uppercase
          tracking-[0.22em]
          text-primary
          backdrop-blur-xl
        "
          >
            Growing Every Day
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Numbers That
            <span className="block text-primary">
              Speak For Themselves
            </span>
          </h2>

          <p className="mt-5 text-lg text-muted-foreground leading-8">
            Trusted by painting contractors across India to manage projects,
            labour, quotations and finances.
          </p>
        </motion.div>

        {/* Stats */}

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">

          {stats.map((stat, idx) => (

            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                duration: 0.25,
              }}
              className="h-full"
            >

              <div
                className="
              group
              relative
              overflow-hidden
              rounded-[30px]
              border
              border-white/20
              bg-white/70
              p-8
              text-center
              shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              backdrop-blur-3xl
              transition-all
              duration-500

              hover:border-primary/20
              hover:shadow-[0_25px_70px_rgba(59,130,246,0.12)]

              dark:border-white/10
              dark:bg-slate-950/70
            "
              >

                {/* Glow */}

                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="absolute -top-10 right-0 h-32 w-32 rounded-full bg-primary/15 blur-3xl" />
                </div>

                {/* Number */}

                <div className="relative">

                  <div className="text-4xl font-black tracking-tight bg-gradient-to-r from-primary to-sky-500 bg-clip-text text-transparent sm:text-5xl">
                    <CountUp
                      target={stat.target}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>

                  <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                  <p
                    className="
                  mt-5
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.20em]
                  text-muted-foreground
                  leading-6
                "
                  >
                    {stat.label}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
