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
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden hero-bg">
      {/* Editorial Noise background is loaded on body; mesh background is on .hero-bg */}
      <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <div className="flex flex-col items-center space-y-8">

          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="badge-brand rounded-full uppercase tracking-widest text-[10px] py-1.5 px-4 font-bold shadow-card-sm bg-white"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-brand-600 animate-pulse inline-block mr-1.5" />
            Made for Indian Painting Contractors
          </motion.div>

          {/* Headline (Editorial Playfair Serif) */}
          <div className="overflow-hidden py-2">
            <motion.h1
              variants={heroHeadline}
              initial="hidden"
              animate="show"
              className="headline-display max-w-5xl mx-auto"
            >
              Run every site. <br />
              Pay every worker. <br />
              <span className="text-gradient">
                Know every rupee.
              </span>
            </motion.h1>
          </div>

          {/* Subheadline */}
          <motion.p
            variants={heroSub}
            initial="hidden"
            animate="show"
            className="body-lg max-w-3xl mx-auto text-ink-secondary"
          >
            No more <span className="text-brand-600 font-bold italic">jugaad</span> on paper registers or messy WhatsApp logs. Manage multiple sites, mark worker attendance, track cash advances, and secure profits from one professional dashboard.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={heroCTA}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button
              render={<Link href={user ? "/dashboard" : "/signup"} />}
              nativeButton={false}
              size="lg"
              className="btn btn-primary btn-lg rounded-full"
            >
              {user ? "Go to Dashboard" : "Start Free — No Credit Card"}
            </Button>
            <Button
              render={<a href="#how-it-works" />}
              nativeButton={false}
              variant="outline"
              size="lg"
              className="btn btn-secondary btn-lg rounded-full gap-2.5"
            >
              <Play className="w-3.5 h-3.5 fill-ink-primary text-ink-primary" /> Watch Demo
            </Button>
          </motion.div>

          {/* Features check list */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-4 text-xs font-semibold uppercase tracking-wider text-ink-tertiary"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-600" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-600" />
              <span>Unlimited sites</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-600" />
              <span>SMS & WhatsApp sync</span>
            </div>
          </motion.div>


          <ProductPreview
            items={previewItems}
          />

        </div>
      </div>
    </section>
  );
}
