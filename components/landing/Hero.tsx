"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Play, TrendingUp, Users, Wallet, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { heroHeadline, heroSub, heroCTA, heroImage } from "@/lib/animations";
import { createClient } from "@/lib/supabase/client";

export default function Hero() {
  const [user, setUser] = useState<any>(null);

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

          {/* 3D Perspective Dashboard Preview */}
          <motion.div
            variants={heroImage}
            initial="hidden"
            animate="show"
            className="w-full max-w-5xl pt-12 relative [perspective:1200px]"
          >
            <motion.div
              style={{
                transform: "rotateX(8deg) rotateY(-4deg) rotateZ(0.5deg)",
                transformStyle: "preserve-3d",
              }}
              whileHover={{
                transform: "rotateX(4deg) rotateY(-2deg) rotateZ(0deg)",
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              className="relative mx-auto bg-white border border-edge-default rounded-3xl p-4 sm:p-6 shadow-card-xl"
            >
              {/* Dashboard Layout Header */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-edge-subtle text-left">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-red-400 shrink-0" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400 shrink-0" />
                  <span className="w-3 h-3 rounded-full bg-emerald-400 shrink-0" />
                  <div className="ml-1">
                    <h3 className="text-sm font-bold text-ink-primary font-heading tracking-tight">Lal Paint Works Dashboard</h3>
                    <p className="text-[10px] font-bold text-ink-tertiary uppercase tracking-wider">Site ID: #LPW-DEL-89</p>
                  </div>
                </div>
                
                {/* Active site tag */}
                <div className="flex items-center gap-2 text-xs badge-brand font-semibold py-1 px-3 bg-brand-50 border border-brand-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-600 animate-pulse" />
                  DLF Villa Phase 3 — Active
                </div>
              </div>

              {/* Grid Layout Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-left">
                {/* Stat Card 1 */}
                <div className="bg-surface-raised border border-edge-subtle rounded-2xl p-5 shadow-card-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-ink-secondary uppercase tracking-widest">Attendance Status</span>
                    <Users className="w-4 h-4 text-brand-600" />
                  </div>
                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="text-2xl font-extrabold text-ink-primary font-mono">24 / 28</span>
                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">Present</span>
                  </div>
                  <div className="mt-3 w-full bg-edge-subtle h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[85.7%]" />
                  </div>
                </div>

                {/* Stat Card 2 */}
                <div className="bg-surface-raised border border-edge-subtle rounded-2xl p-5 shadow-card-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-ink-secondary uppercase tracking-widest">Advances Logged</span>
                    <Wallet className="w-4 h-4 text-brand-600" />
                  </div>
                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="text-2xl font-extrabold text-ink-primary font-mono">₹8,500</span>
                    <span className="text-[10px] text-amber-600 font-bold bg-amber-50 border border-amber-100 px-2 py-0.5 rounded-full">Pending</span>
                  </div>
                  <div className="mt-3 text-[10px] text-ink-tertiary font-bold uppercase tracking-wider">
                    Settle scheduled: Saturday
                  </div>
                </div>

                {/* Stat Card 3 */}
                <div className="bg-surface-raised border border-edge-subtle rounded-2xl p-5 shadow-card-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-ink-secondary uppercase tracking-widest">Project Margin</span>
                    <TrendingUp className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div className="mt-3 flex items-baseline gap-1.5">
                    <span className="text-2xl font-extrabold text-emerald-600 font-mono">38.4%</span>
                    <span className="text-[10px] text-ink-secondary font-medium">Billed: ₹2.3L</span>
                  </div>
                  <div className="mt-3 w-full bg-edge-subtle h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-500 h-full w-[77.5%]" />
                  </div>
                </div>
              </div>

              {/* Bottom mockup layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
                
                {/* SVG Graph block */}
                <div className="lg:col-span-8 bg-surface-raised border border-edge-subtle rounded-2xl p-5 text-left">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs font-bold text-ink-secondary uppercase tracking-widest">Wages & Material Cost Trends</h4>
                    <span className="text-[10px] text-ink-tertiary">Unit: ₹ Thousands</span>
                  </div>
                  <div className="h-44 w-full relative flex items-end">
                    {/* SVG Line Graph */}
                    <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                      {/* Budget Line */}
                      <path d="M0 32 L20 28 L40 24 L60 20 L80 16 L100 12" fill="none" stroke="var(--edge-default)" strokeWidth="1" strokeDasharray="2,2" />
                      {/* Actual Expense Line */}
                      <path d="M0 35 L20 31 L40 29 L60 25 L80 20 L100 17" fill="none" stroke="url(#brand-gradient)" strokeWidth="2.5" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="brand-gradient" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="var(--brand-primary)" />
                          <stop offset="100%" stopColor="var(--brand-secondary)" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[9px] text-ink-tertiary font-bold uppercase pt-2">
                      <span>Wk 1</span>
                      <span>Wk 2</span>
                      <span>Wk 3</span>
                      <span>Wk 4</span>
                      <span>Wk 5</span>
                    </div>
                  </div>
                </div>

                {/* Check-in log list */}
                <div className="lg:col-span-4 bg-surface-raised border border-edge-subtle rounded-2xl p-5 text-left space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-ink-secondary uppercase tracking-widest">Active Crew (3)</h4>
                    <Calendar className="w-3.5 h-3.5 text-ink-tertiary" />
                  </div>
                  <div className="space-y-2">
                    {[
                      { name: "Rajesh Kumar", role: "Master", status: "Present", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
                      { name: "Amit Sharma", role: "Helper", status: "Present", color: "bg-emerald-50 text-emerald-700 border-emerald-200" },
                      { name: "Sanjay Singh", role: "Polisher", status: "₹800 Adv", color: "bg-amber-50 text-amber-700 border-amber-200" },
                    ].map((st, i) => (
                      <div key={i} className="flex justify-between items-center bg-white border border-edge-subtle p-2.5 rounded-xl">
                        <div>
                          <h5 className="text-xs font-bold text-ink-primary">{st.name}</h5>
                          <span className="text-[9px] text-ink-tertiary font-bold uppercase tracking-wider">{st.role}</span>
                        </div>
                        <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${st.color}`}>
                          {st.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
