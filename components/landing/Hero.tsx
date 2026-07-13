"use client";

import Link from "next/link";
import { Play, TrendingUp, Users, Wallet, Calendar, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#030712]">
      {/* Premium Gradient Grid Background */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-70" />
      
      {/* Decorative Radial Glowing Accents */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#38bdf8]/15 to-purple-500/5 blur-3xl opacity-60" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-[#38bdf8]/5 blur-3xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <div className="flex flex-col items-center space-y-8">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-300 uppercase tracking-widest shadow-xl backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-[#38bdf8] animate-pulse" />
            🇮🇳 India's #1 Painting Contractor Software
          </motion.div>
          
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter text-white leading-[1.05] max-w-5xl mx-auto"
          >
            Run every site. <br />
            Pay every worker. <br />
            <span className="bg-gradient-to-r from-[#38bdf8] via-[#0ea5e9] to-[#7dd3fc] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(56,189,248,0.2)]">
              Know every rupee.
            </span>
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl leading-relaxed font-medium"
          >
            No more <span className="text-[#38bdf8] font-bold italic">jugaad</span> on paper registers or messy WhatsApp logs. Manage multiple sites, mark worker attendance, track cash advances, and secure profits from one professional dashboard.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Button
              render={<Link href="/signup" />}
              size="lg"
              className="bg-white hover:bg-gray-100 text-[#030712] font-bold text-xs uppercase tracking-wider px-8 py-5 rounded-full border-0 shadow-xl hover:shadow-[#38bdf8]/20 transition-all duration-300"
            >
              Start Free — No Credit Card
            </Button>
            <Button
              render={<a href="#how-it-works" />}
              variant="outline"
              size="lg"
              className="bg-white/5 border-white/10 text-white hover:bg-white/10 px-8 py-5 rounded-full text-xs uppercase tracking-wider gap-2.5 transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-white" /> Watch Demo
            </Button>
          </motion.div>

          {/* Features check list */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 pt-4 text-xs font-semibold uppercase tracking-wider text-gray-500"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#38bdf8]" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#38bdf8]" />
              <span>Unlimited sites</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#38bdf8]" />
              <span>SMS & WhatsApp sync</span>
            </div>
          </motion.div>

          {/* 3D Perspective Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
            className="w-full max-w-5xl pt-12 relative [perspective:1200px]"
          >
            <motion.div
              style={{
                transform: "rotateX(10deg) rotateY(-4deg) rotateZ(1deg)",
                transformStyle: "preserve-3d",
              }}
              whileHover={{
                transform: "rotateX(5deg) rotateY(-2deg) rotateZ(0deg)",
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              className="relative mx-auto bg-[#0b1528]/90 border border-white/10 rounded-2xl p-4 sm:p-6 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl"
            >
              {/* Dashboard Layout Header */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-white/5 text-left">
                <div className="flex items-center gap-3">
                  <span className="w-3.5 h-3.5 rounded-full bg-red-500/80 shrink-0" />
                  <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 shrink-0" />
                  <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 shrink-0" />
                  <div className="ml-2">
                    <h3 className="text-sm font-extrabold text-white">Lal Paint Works Dashboard</h3>
                    <p className="text-[10px] font-semibold text-gray-500 uppercase tracking-wider">Site ID: #LPW-DEL-89</p>
                  </div>
                </div>
                
                {/* Active site tag */}
                <div className="flex items-center gap-3 text-xs bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20 px-3.5 py-1.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  DLF Villa Phase 3 — Active
                </div>
              </div>

              {/* Grid Layout Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 text-left">
                {/* Stat Card 1 */}
                <div className="bg-[#13243c]/40 border border-white/5 rounded-xl p-5 shadow-inner">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Attendance Status</span>
                    <Users className="w-4 h-4 text-[#38bdf8]" />
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-white">24 / 28</span>
                    <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">Present</span>
                  </div>
                  <div className="mt-3 w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-emerald-400 h-full w-[85.7%]" />
                  </div>
                </div>

                {/* Stat Card 2 */}
                <div className="bg-[#13243c]/40 border border-white/5 rounded-xl p-5 shadow-inner">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Wage Advances Today</span>
                    <Wallet className="w-4 h-4 text-[#38bdf8]" />
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-white">₹8,500</span>
                    <span className="text-xs text-amber-400 font-bold bg-amber-500/10 px-2 py-0.5 rounded">Pending Settle</span>
                  </div>
                  <div className="mt-3 flex items-center gap-1.5 text-[11px] text-gray-400 font-semibold">
                    <span>Last deduction: ₹1,200 yesterday</span>
                  </div>
                </div>

                {/* Stat Card 3 */}
                <div className="bg-[#13243c]/40 border border-white/5 rounded-xl p-5 shadow-inner">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Project Profitability</span>
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="text-3xl font-extrabold text-emerald-400">38.4%</span>
                    <span className="text-[10px] text-gray-400 font-medium">Billed: ₹2,35,000</span>
                  </div>
                  <div className="mt-3 flex justify-between items-center text-[10px] text-gray-400 font-bold uppercase">
                    <span>Expenses: ₹1,45,000</span>
                    <span className="text-emerald-400">Target: 35%</span>
                  </div>
                </div>
              </div>

              {/* Bottom mockup layout */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
                
                {/* SVG Graph block */}
                <div className="lg:col-span-8 bg-[#13243c]/30 border border-white/5 rounded-xl p-5 text-left">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Cumulative Expenses vs Budget</h4>
                    <span className="text-[11px] text-gray-400">Unit: ₹ Thousands</span>
                  </div>
                  <div className="h-44 w-full relative flex items-end">
                    {/* SVG Line Graph */}
                    <svg className="w-full h-full" viewBox="0 0 100 40" preserveAspectRatio="none">
                      {/* Budget Line */}
                      <path d="M0 32 L20 28 L40 24 L60 20 L80 16 L100 12" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="2,2" />
                      {/* Actual Expense Line */}
                      <path d="M0 35 L20 31 L40 29 L60 25 L80 20 L100 17" fill="none" stroke="url(#electric-gradient)" strokeWidth="2.5" strokeLinecap="round" />
                      {/* Gradients */}
                      <defs>
                        <linearGradient id="electric-gradient" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[9px] text-gray-500 font-bold uppercase pt-2">
                      <span>Week 1</span>
                      <span>Week 2</span>
                      <span>Week 3</span>
                      <span>Week 4</span>
                      <span>Week 5</span>
                    </div>
                  </div>
                </div>

                {/* Check-in log list */}
                <div className="lg:col-span-4 bg-[#13243c]/30 border border-white/5 rounded-xl p-5 text-left space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-extrabold text-white uppercase tracking-wider">Active Staff (4)</h4>
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                  <div className="space-y-3">
                    {[
                      { name: "Rajesh Kumar", role: "Painter", status: "Present", color: "bg-emerald-400/20 text-emerald-400 border-emerald-400/25" },
                      { name: "Amit Sharma", role: "Helper", status: "Present", color: "bg-emerald-400/20 text-emerald-400 border-emerald-400/25" },
                      { name: "Sanjay Singh", role: "Polisher", status: "Advance ₹800", color: "bg-amber-400/20 text-amber-400 border-amber-400/25" },
                    ].map((st, i) => (
                      <div key={i} className="flex justify-between items-center bg-[#0b1528]/70 border border-white/5 p-2.5 rounded-lg">
                        <div>
                          <h5 className="text-xs font-bold text-white">{st.name}</h5>
                          <span className="text-[9px] text-gray-400 uppercase tracking-wider">{st.role}</span>
                        </div>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${st.color}`}>
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
