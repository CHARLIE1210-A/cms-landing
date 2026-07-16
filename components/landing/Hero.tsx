"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Play,
  TrendingUp,
  Users,
  Wallet,
  Calendar,
  CheckCircle2,
  ArrowRight,
  LayoutDashboard,
  CalendarRange,
  IndianRupee,
  Building2,
  Hammer,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { heroHeadline, heroSub, heroCTA, heroImage } from "@/lib/animations";
import { createClient } from "@/lib/supabase/client";
import { MacbookScreen } from "../macbook-frame";
import { BrowserFrame } from "../browser-frame";
import Image from "next/image";
import { ProductPreview } from "../product-preview";
import { AnimatedMeshBackground } from "./AnimatedMeshBackground";


export default function Hero() {
  const [user, setUser] = useState<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const previewItems = [
    { id: "dashboard", label: "Dashboard", src: "/preview/dashboard.png", icon: LayoutDashboard },
    { id: "sites", label: "Sites", src: "/preview/sites.png", icon: Building2 },
    { id: "workers", label: "Workers", src: "/preview/worker.png", icon: Users },
    { id: "payroll", label: "Payroll", src: "/preview/payroll.png", icon: Wallet },
    { id: "attendance", label: "Attendance", src: "/preview/attendance.png", icon: CalendarRange },
    { id: "advance", label: "Advance", src: "/preview/advances.png", icon: IndianRupee },
  ];

  const wheelRotation = (2 - activeIndex) * 30;

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#fcfcfd] pt-36 pb-24 lg:pt-44">

      {/* Premium Dynamic Mesh Background */}
      <AnimatedMeshBackground />


      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Premium Content Container */}
        <div className="relative rounded-[32px] border border-white/20 bg-gradient-to-br from-white/25 via-white/10 to-transparent backdrop-blur-[6px] shadow-[0_1px_0_rgba(255,255,255,0.4)_inset] p-8 sm:p-10 lg:p-14">

          {/* corner accent */}
          <div className="absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          <div className="grid lg:grid-cols-[1.2fr_auto_0.8fr] gap-10 xl:gap-14 items-center">

            {/* LEFT COLUMN — Headline */}
            <div>
              <div className="overflow-hidden">
                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-4 flex justify-center lg:justify-start"
                >
                  <div className="inline-flex items-center gap-2 rounded-full uppercase tracking-widest text-[10px] py-2 px-4 font-bold shadow-card-sm bg-white/70 backdrop-blur-md border border-black/[0.06] text-ink-secondary">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75 animate-ping" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-600" />
                    </span>
                    Made for Indian Painting Contractors
                  </div>
                </motion.div>

                <motion.h1
                  variants={heroHeadline}
                  initial="hidden"
                  animate="show"
                  className="headline-display text-left max-w-4xl text-5xl lg:text-6xl xl:text-7xl leading-[0.95] tracking-[-0.04em]"
                >
                  Run every site.
                  <br />
                  Pay every worker.
                  <br />
                  <span className="text-gradient">Know every rupee.</span>
                </motion.h1>
              </div>
            </div>

            {/* DIVIDER — visual anchor between columns, desktop only */}
            <div className="hidden lg:block h-full w-px bg-gradient-to-b from-transparent via-black/10 to-transparent self-stretch" />

            {/* RIGHT COLUMN — Copy + CTA */}
            <div className="max-w-md">

              <motion.p
                variants={heroSub}
                initial="hidden"
                animate="show"
                className="body-lg text-ink-secondary"
              >
                No more{" "}
                <span className="text-brand-600 font-bold italic">jugaad</span>{" "}
                on paper registers or messy WhatsApp logs. Manage multiple
                sites, mark worker attendance, track cash advances, and secure
                profits from one professional dashboard.
              </motion.p>

              <motion.div
                variants={heroCTA}
                initial="hidden"
                animate="show"
                className="mt-8 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3.5"
              >
                <Button
                  render={<Link href={user ? "/dashboard" : "/signup"} />}
                  nativeButton={false}
                  size="lg"
                  className="btn btn-primary btn-lg rounded-full shadow-[0_8px_30px_rgba(var(--brand-600-rgb),0.35)] hover:shadow-[0_10px_40px_rgba(var(--brand-600-rgb),0.45)]"
                >
                  {user ? "Go to Dashboard" : "Start Free — No Credit Card"}
                </Button>

                <Button
                  render={<a href="#how-it-works" />}
                  nativeButton={false}
                  variant="outline"
                  size="lg"
                  className="btn btn-secondary btn-lg rounded-full gap-2.5 backdrop-blur-md bg-white/60"
                >
                  <Play className="w-3.5 h-3.5 fill-ink-primary text-ink-primary" />
                  Watch Demo
                </Button>
              </motion.div>

            </div>

          </div>

          {/* Feature strip — replaces plain checklist with a defined stat bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 pt-8 border-t border-black/[0.06] flex flex-wrap items-center justify-center lg:justify-start gap-x-10 gap-y-4"
          >
            <div className="flex items-center gap-2.5 text-sm font-semibold text-ink-secondary">
              <CheckCircle2 className="w-4.5 h-4.5 text-brand-600 flex-shrink-0" />
              <span>14-day free trial</span>
            </div>

            <div className="flex items-center gap-2.5 text-sm font-semibold text-ink-secondary">
              <CheckCircle2 className="w-4.5 h-4.5 text-brand-600 flex-shrink-0" />
              <span>Unlimited sites</span>
            </div>

            <div className="flex items-center gap-2.5 text-sm font-semibold text-ink-secondary">
              <CheckCircle2 className="w-4.5 h-4.5 text-brand-600 flex-shrink-0" />
              <span>SMS &amp; WhatsApp sync</span>
            </div>
          </motion.div>

        </div>

        {/* Product Preview */}
        <div className="relative w-full mt-20">
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="w-[110%] h-[110%] bg-gradient-to-tr from-brand-400/25 via-fuchsia-300/10 to-transparent blur-3xl rounded-[3rem]" />
          </div>

          <ProductPreview items={previewItems} />
        </div>

      </div>
    </section>
  );
}
