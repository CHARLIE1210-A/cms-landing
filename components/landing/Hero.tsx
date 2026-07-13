"use client";

import Link from "next/link";
import { Play, ShieldAlert, CheckCircle2, TrendingUp, Users, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-gradient-to-br from-[#0b192c] via-[#0f243d] to-[#122e4f]">
      {/* Background Floating Animated Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <motion.div
          animate={{
            x: [0, 40, -20, 0],
            y: [0, -50, 30, 0],
            rotate: [0, 90, 180, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-r from-[#008dda]/30 to-purple-500/10 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 40, -40, 0],
            rotate: [0, -120, 240, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-gradient-to-r from-emerald-500/20 to-[#008dda]/20 blur-3xl"
        />
        <motion.div
          animate={{
            y: [0, 20, -20, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-blue-500/10 blur-2xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading and Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 text-left space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#008dda]/10 border border-[#008dda]/30 text-xs font-semibold text-[#33a7e2] uppercase tracking-wider">
              🇮🇳 Made for Indian Painting Contractors
            </div>
            
            <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
              Run every site. <br />
              <span className="text-[#008dda]">Pay every worker.</span> <br />
              Know every rupee.
            </h1>
            
            <p className="text-lg text-gray-300 max-w-2xl leading-relaxed">
              No more <span className="text-[#33a7e2] font-semibold italic">jugaad</span> on paper or messy WhatsApp groups. The ultimate simple dashboard built specifically for painters to track attendance, handle daily wage advances, and secure site profits.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                render={<Link href="/signup" />}
                size="lg"
                className="bg-[#008dda] hover:bg-[#0077b6] text-white font-bold px-8 py-4 rounded-xl border-0 shadow-lg shadow-[#008dda]/30 text-base"
              >
                Start Free — No Credit Card
              </Button>
              <Button
                render={<a href="#how-it-works" />}
                variant="outline"
                size="lg"
                className="bg-transparent border-[#2c476f] text-white hover:bg-white/5 hover:text-white px-8 py-4 rounded-xl text-base gap-2"
              >
                <Play className="w-4 h-4 fill-white" /> Watch Demo
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Unlimited sites</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Works offline / SMS sync</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 w-full"
          >
            <div className="relative mx-auto max-w-[480px] lg:max-w-none bg-[#0b192c]/85 border border-[#2c476f]/55 rounded-2xl p-4 sm:p-6 shadow-2xl backdrop-blur-md">
              {/* Glass Header Mockup */}
              <div className="flex items-center justify-between pb-4 border-b border-[#2c476f]/30">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">PaintCMS Live Dashboard</span>
                </div>
                <span className="text-xs text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  ₹ Live Profit
                </span>
              </div>

              {/* Grid Widgets */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {/* Widget 1 */}
                <div className="bg-[#1a2f4c]/50 border border-[#2c476f]/30 p-3 sm:p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                    <Users className="w-4 h-4 text-[#008dda]" />
                    <span>Attendance Today</span>
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-bold text-white">28</span>
                    <span className="text-xs text-emerald-400 font-semibold">100% Present</span>
                  </div>
                </div>

                {/* Widget 2 */}
                <div className="bg-[#1a2f4c]/50 border border-[#2c476f]/30 p-3 sm:p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm">
                    <Wallet className="w-4 h-4 text-[#008dda]" />
                    <span>Today's Advances</span>
                  </div>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-bold text-white">₹7,200</span>
                    <span className="text-xs text-amber-400 font-semibold">Pending Approval</span>
                  </div>
                </div>
              </div>

              {/* Site Profit Widget */}
              <div className="bg-[#1a2f4c]/50 border border-[#2c476f]/30 p-4 rounded-xl mt-4">
                <div className="flex items-center justify-between text-xs sm:text-sm text-gray-300 font-semibold mb-2">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span>DLF Phase 3 Villa — Profitability</span>
                  </div>
                  <span className="text-emerald-400 font-bold">38.4% Margin</span>
                </div>
                <div className="w-full bg-[#0b192c] h-2 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[38.4%]" />
                </div>
                <div className="flex justify-between text-[11px] text-gray-400 mt-2">
                  <span>Expenses: ₹1,45,000</span>
                  <span>Received: ₹2,35,000</span>
                </div>
              </div>

              {/* Workers List / Real-time Attendance Tracker */}
              <div className="bg-[#1a2f4c]/30 border border-[#2c476f]/20 rounded-xl p-3 sm:p-4 mt-4 space-y-2.5">
                <span className="text-xs font-semibold text-gray-400 block mb-1">Recent Attendance Logs</span>
                
                {/* Worker Item 1 */}
                <div className="flex items-center justify-between bg-[#1a2f4c]/60 p-2.5 rounded-lg border border-[#2c476f]/20">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#008dda]/20 text-[#008dda] font-bold text-xs flex items-center justify-center border border-[#008dda]/30">
                      RK
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">Rajesh Kumar</h4>
                      <p className="text-[10px] text-gray-400">DLF Phase 3 Site • Painter</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    Present
                  </span>
                </div>

                {/* Worker Item 2 */}
                <div className="flex items-center justify-between bg-[#1a2f4c]/60 p-2.5 rounded-lg border border-[#2c476f]/20">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs flex items-center justify-center border border-amber-500/30">
                      AS
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">Amit Sharma</h4>
                      <p className="text-[10px] text-gray-400">Gurugram Highrise • Helper</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                    Advance ₹500
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
