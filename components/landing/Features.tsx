"use client";

import { motion } from "framer-motion";
import { UserCheck, Users, Coins, Calculator, Ruler, BarChart3, CheckCircle2 } from "lucide-react";

export default function Features() {
  const features = [
    {
      id: "attendance",
      icon: <UserCheck className="w-5 h-5 text-[#38bdf8]" />,
      headline: "Attendance Logs in 3 Taps",
      description: "Mark present, absent, or half-day for painters in seconds. Automatic leave logging with direct SMS updates sent to workers to prevent end-of-month disputes.",
      gridClass: "lg:col-span-8",
      preview: (
        <div className="bg-[#0b1528] rounded-xl p-5 border border-white/5 shadow-premium space-y-3">
          <div className="flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-widest pb-2 border-b border-white/5">
            <span>Attendance Logs — Today</span>
            <span className="text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full">All Mark Complete</span>
          </div>
          <div className="space-y-2">
            {[
              { name: "Rajesh Kumar", role: "Master Painter", status: "Present", color: "bg-emerald-500 text-white" },
              { name: "Amit Sharma", role: "Helper", status: "Half-Day", color: "bg-amber-500 text-[#030712]" },
              { name: "Sanjay Singh", role: "Polisher", status: "Present", color: "bg-emerald-500 text-white" },
            ].map((w, i) => (
              <div key={i} className="flex justify-between items-center bg-[#13243c]/50 p-2.5 rounded-lg border border-white/5">
                <div>
                  <h5 className="text-xs font-bold text-white">{w.name}</h5>
                  <span className="text-[9px] text-gray-400 uppercase tracking-wider">{w.role}</span>
                </div>
                <span className={`text-[10px] px-2.5 py-0.5 rounded-full font-bold ${w.color}`}>{w.status}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "payroll",
      icon: <Coins className="w-5 h-5 text-[#38bdf8]" />,
      headline: "Loose Cash Advance logs",
      description: "Record mid-week advances on site. Saturday wages are calculated automatically: (Days Worked × Rate) − Advances.",
      gridClass: "lg:col-span-4",
      preview: (
        <div className="bg-[#0b1528] rounded-xl p-5 border border-white/5 shadow-premium space-y-4">
          <div className="flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-widest border-b border-white/5 pb-2">
            <span>Rajesh • Week Settlement</span>
            <span className="text-emerald-400 font-bold">Calculated</span>
          </div>
          <div className="space-y-2 text-[11px] text-gray-300">
            <div className="flex justify-between">
              <span>Days Worked (5.5 @ ₹800)</span>
              <span className="text-white font-bold">₹4,400</span>
            </div>
            <div className="flex justify-between text-amber-400 font-medium">
              <span>Less: Cash Advances</span>
              <span className="font-bold">- ₹1,500</span>
            </div>
            <hr className="border-white/5 my-2" />
            <div className="flex justify-between text-emerald-400 font-bold text-xs">
              <span>Net Saturday Payout</span>
              <span>₹2,900</span>
            </div>
          </div>
          <span className="block text-[9px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 text-center py-1 rounded-md font-bold uppercase tracking-wider">
            ✓ Shared on WhatsApp
          </span>
        </div>
      ),
    },
    {
      id: "finances",
      icon: <Calculator className="w-5 h-5 text-[#38bdf8]" />,
      headline: "Live Expenses",
      description: "Log paint cans purchased, brush supplies, transport, and chai/snacks on the spot. Match costs against budget.",
      gridClass: "lg:col-span-4",
      preview: (
        <div className="bg-[#0b1528] rounded-xl p-5 border border-white/5 shadow-premium space-y-4">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block pb-2 border-b border-white/5">Noida Office — Budget Status</span>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-[11px] text-gray-300 mb-1 font-semibold">
                <span>Material Cost (Max ₹60k)</span>
                <span className="text-white font-bold">₹54,500</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#38bdf8] h-full w-[90.8%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-[11px] text-gray-300 mb-1 font-semibold">
                <span>Wages Paid (Max ₹80k)</span>
                <span className="text-white font-bold">₹62,000</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full w-[77.5%]" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "calculator",
      icon: <Ruler className="w-5 h-5 text-[#38bdf8]" />,
      headline: "Paint Estimate & Quotation Builder",
      description: "Input wall measurements to instantly calculate required paint volumes. Generate detailed client quotations with primers, putty layers, and labor wages to win deals quickly.",
      gridClass: "lg:col-span-8",
      preview: (
        <div className="bg-[#0b1528] rounded-xl p-5 border border-white/5 shadow-premium space-y-4 text-left">
          <div className="flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-widest pb-2 border-b border-white/5">
            <span>Wall Calculator</span>
            <span className="text-[#38bdf8]">Automatic Estimate</span>
          </div>
          <div className="grid grid-cols-2 gap-4 text-[11px]">
            <div className="bg-[#13243c]/50 p-2.5 rounded-lg border border-white/5">
              <span className="text-gray-400 block mb-0.5 font-semibold">Total Area</span>
              <span className="font-extrabold text-white text-sm">3,200 sq ft</span>
            </div>
            <div className="bg-[#13243c]/50 p-2.5 rounded-lg border border-white/5">
              <span className="text-gray-400 block mb-0.5 font-semibold">Coat Setup</span>
              <span className="font-extrabold text-white text-sm">2 Putty + 2 Paint</span>
            </div>
          </div>
          <div className="bg-[#13243c]/20 p-3 rounded-lg border border-white/5 text-[10px] space-y-2 font-semibold">
            <div className="flex justify-between text-gray-300">
              <span>Estimated Putty</span>
              <span className="text-white">14 Bags (40kg)</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Estimated Emulsion</span>
              <span className="text-white">58 Liters</span>
            </div>
            <div className="flex justify-between text-[#38bdf8] pt-1.5 border-t border-white/5 font-extrabold text-xs">
              <span>Total Material Estimate</span>
              <span>₹42,500</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "directory",
      icon: <Users className="w-5 h-5 text-[#38bdf8]" />,
      headline: "Skills & Wage Directory",
      description: "Register worker details and daily wage rates. Avoid double-booking painters across sites.",
      gridClass: "lg:col-span-4",
      preview: (
        <div className="bg-[#0b1528] rounded-xl p-5 border border-white/5 shadow-premium space-y-3 text-left">
          <div className="flex items-center gap-3 bg-[#13243c]/40 p-3 rounded-xl border border-white/5">
            <div className="w-9 h-9 rounded-full bg-[#38bdf8]/10 text-[#38bdf8] flex items-center justify-center font-bold text-xs border border-[#38bdf8]/20">
              AS
            </div>
            <div>
              <h5 className="text-xs font-bold text-white">Amit Sharma</h5>
              <span className="text-[9px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Helper</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-[10px]">
            <div className="bg-[#030712] p-2 rounded-lg border border-white/5">
              <span className="text-gray-500 block mb-0.5 font-bold uppercase tracking-wider">Rate</span>
              <span className="font-extrabold text-white">₹600/day</span>
            </div>
            <div className="bg-[#030712] p-2 rounded-lg border border-white/5">
              <span className="text-gray-500 block mb-0.5 font-bold uppercase tracking-wider">Active</span>
              <span className="font-extrabold text-white">Gurugram</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "analytics",
      icon: <BarChart3 className="w-5 h-5 text-[#38bdf8]" />,
      headline: "Consolidated Site Profits",
      description: "A centralized dashboard summarizing expenses, material payouts, and margins across all active projects.",
      gridClass: "lg:col-span-4",
      preview: (
        <div className="bg-[#0b1528] rounded-xl p-5 border border-white/5 shadow-premium space-y-3 text-left">
          <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block pb-2 border-b border-white/5">Site Margin Leaderboard</span>
          <div className="space-y-2">
            {[
              { site: "DLF Phase 3", margin: "38%", color: "bg-emerald-400" },
              { site: "Nirvana Flat", margin: "24%", color: "bg-emerald-400" },
              { site: "Omaxe Flat", margin: "-12%", color: "bg-red-400" },
            ].map((s, i) => (
              <div key={i} className="flex justify-between items-center text-[11px] bg-[#13243c]/20 p-2 rounded-lg">
                <span className="text-gray-300 font-semibold">{s.site}</span>
                <span className={s.color === "bg-red-400" ? "text-red-400 font-extrabold" : "text-emerald-400 font-extrabold"}>{s.margin} Margin</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="py-24 bg-white border-b border-[#e5e4da] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-extrabold text-[#38bdf8] uppercase tracking-widest">
            Executive Controls
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0b1528] tracking-tighter leading-tight">
            Stop guessing your cashflow. Run your business like a corporate firm.
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`bg-[#faf9f6]/60 border border-[#e5e4da]/75 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-premium hover:border-[#38bdf8]/40 transition-all duration-300 group ${feat.gridClass}`}
            >
              <div className="space-y-4 text-left">
                <div className="inline-flex items-center justify-center p-3 rounded-xl bg-white border border-[#e5e4da]/60 text-[#38bdf8] shadow-sm group-hover:scale-105 transition-transform duration-300">
                  {feat.icon}
                </div>
                <h3 className="font-heading font-extrabold text-xl text-[#0b1528] leading-tight">
                  {feat.headline}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                  {feat.description}
                </p>
              </div>

              {/* Graphic Preview */}
              <div className="mt-8 pt-4 w-full">
                {feat.preview}
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
