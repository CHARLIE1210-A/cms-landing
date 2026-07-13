"use client";

import { motion } from "framer-motion";
import { UserCheck, Users, Coins, Calculator, Ruler, BarChart3, CheckCircle2 } from "lucide-react";

export default function Features() {
  const featureList = [
    {
      id: "attendance",
      icon: <UserCheck className="w-6 h-6 text-[#008dda]" />,
      headline: "Attendance Tracking in 3 Taps",
      bullets: [
        "Mark present, absent, or half-day for all painters in seconds.",
        "Automatic Sunday calculation and festive leave logs.",
        "Direct SMS alert sent to workers so there are no disputes at weekend settlement.",
      ],
      preview: (
        <div className="bg-[#0b192c] rounded-2xl p-6 border border-[#2c476f]/30 shadow-xl space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-[#2c476f]/20">
            <span className="text-xs font-semibold text-gray-400">Attendance Log — July 13</span>
            <span className="text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">All marked</span>
          </div>
          <div className="space-y-2">
            {[
              { name: "Rajesh Kumar", status: "Present", color: "bg-emerald-500 text-white" },
              { name: "Amit Sharma", status: "Half-Day", color: "bg-amber-500 text-white" },
              { name: "Sanjay Singh", status: "Present", color: "bg-emerald-500 text-white" },
            ].map((w, i) => (
              <div key={i} className="flex justify-between items-center bg-[#1a2f4c]/40 p-3 rounded-xl border border-[#2c476f]/20">
                <span className="text-sm font-semibold text-white">{w.name}</span>
                <span className={`text-xs px-2.5 py-1 rounded-full font-bold ${w.color}`}>{w.status}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "worker-management",
      icon: <Users className="w-6 h-6 text-[#008dda]" />,
      headline: "Central Worker Directory",
      bullets: [
        "Store contact numbers, bank details, and daily wage rates (₹500 - ₹900/day).",
        "Group workers by skills: Master Painter, Helper, Wood Polisher, Putty Specialist.",
        "Track active site assignment history to avoid double-booking workers.",
      ],
      preview: (
        <div className="bg-[#0b192c] rounded-2xl p-6 border border-[#2c476f]/30 shadow-xl space-y-4">
          <div className="bg-[#1a2f4c]/50 p-4 rounded-xl border border-[#2c476f]/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#008dda]/20 text-[#008dda] flex items-center justify-center font-bold text-sm border border-[#008dda]/30">
                RK
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Rajesh Kumar</h4>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Master Painter</span>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 text-xs">
              <div className="bg-[#0b192c] p-2.5 rounded-lg border border-[#2c476f]/20">
                <span className="text-gray-400 block mb-0.5">Daily Wage</span>
                <span className="font-bold text-white">₹800 / day</span>
              </div>
              <div className="bg-[#0b192c] p-2.5 rounded-lg border border-[#2c476f]/20">
                <span className="text-gray-400 block mb-0.5">Active Site</span>
                <span className="font-bold text-white">DLF Phase 3</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "advances-payroll",
      icon: <Coins className="w-6 h-6 text-[#008dda]" />,
      headline: "Smart Advances & Weekly Payroll",
      bullets: [
        "Record mid-week cash advances directly on site. No more lost notes.",
        "Automatic payroll calculation: (Days worked × Wage rate) − Advances taken.",
        "Generate one-click digital salary slips that can be shared directly on WhatsApp.",
      ],
      preview: (
        <div className="bg-[#0b192c] rounded-2xl p-6 border border-[#2c476f]/30 shadow-xl space-y-4">
          <div className="flex justify-between items-center text-xs font-semibold text-gray-400">
            <span>Weekly Wage Calculation</span>
            <span>Week: July 06 - July 12</span>
          </div>
          <div className="bg-[#1a2f4c]/50 p-4 rounded-xl border border-[#2c476f]/20 space-y-2.5 text-xs text-gray-300">
            <div className="flex justify-between">
              <span>Days Worked (5.5 days @ ₹800)</span>
              <span className="text-white font-bold">₹4,400</span>
            </div>
            <div className="flex justify-between text-amber-400">
              <span>Less: Cash Advances taken</span>
              <span className="font-bold">- ₹1,500</span>
            </div>
            <hr className="border-[#2c476f]/30 my-2" />
            <div className="flex justify-between text-emerald-400 font-bold text-sm">
              <span>Final Saturday Payout</span>
              <span>₹2,900</span>
            </div>
          </div>
          <div className="text-center">
            <span className="inline-block text-[10px] text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20 font-semibold">
              ✓ Sent to Rajesh on WhatsApp
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "site-finances",
      icon: <Calculator className="w-6 h-6 text-[#008dda]" />,
      headline: "Live Site Budgets & Expenses",
      bullets: [
        "Track paint buckets purchased, brush supplies, transport, and tea/lunch costs.",
        "Compare actual material expenses against your initial budget dynamically.",
        "Instantly know if a site is running profitable or crossing cost limits.",
      ],
      preview: (
        <div className="bg-[#0b192c] rounded-2xl p-6 border border-[#2c476f]/30 shadow-xl space-y-4">
          <span className="text-xs font-semibold text-gray-400 block">Delhi Villa Site Finances</span>
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-xs text-gray-300 mb-1">
                <span>Material Cost (Budget: ₹60,000)</span>
                <span className="text-white font-bold">₹54,500</span>
              </div>
              <div className="w-full bg-[#1a2f4c] h-1.5 rounded-full overflow-hidden">
                <div className="bg-[#008dda] h-full w-[90%]" />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs text-gray-300 mb-1">
                <span>Labor Wages (Budget: ₹80,000)</span>
                <span className="text-white font-bold">₹62,000</span>
              </div>
              <div className="w-full bg-[#1a2f4c] h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-500 h-full w-[77.5%]" />
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "estimate-calculator",
      icon: <Ruler className="w-6 h-6 text-[#008dda]" />,
      headline: "Quick Estimate & Quotation Tool",
      bullets: [
        "Enter carpet area (sq ft) to instantly calculate paint quantities required.",
        "Add quotes for primers, putty, emulsion coats, and labor wages in seconds.",
        "Download professional PDF quotes with your company logo to win clients.",
      ],
      preview: (
        <div className="bg-[#0b192c] rounded-2xl p-6 border border-[#2c476f]/30 shadow-xl space-y-4 text-xs">
          <span className="font-semibold text-gray-400 block">Area-Based Paint Estimator</span>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#1a2f4c]/50 p-2.5 rounded-lg border border-[#2c476f]/20">
              <span className="text-gray-400 block mb-0.5">Total Wall Area</span>
              <span className="font-bold text-white">3,200 sq ft</span>
            </div>
            <div className="bg-[#1a2f4c]/50 p-2.5 rounded-lg border border-[#2c476f]/20">
              <span className="text-gray-400 block mb-0.5">Coats Planned</span>
              <span className="font-bold text-white">2 Putty + 2 Paint</span>
            </div>
          </div>
          <div className="bg-[#1a2f4c]/30 p-3 rounded-lg border border-[#2c476f]/10 text-[11px] space-y-2">
            <div className="flex justify-between text-gray-300">
              <span>Required Putty</span>
              <span className="text-white font-bold">14 Bags (40kg)</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Required Paint</span>
              <span className="text-white font-bold">58 Liters</span>
            </div>
            <div className="flex justify-between text-emerald-400 font-semibold pt-1 border-t border-[#2c476f]/20">
              <span>Estimated Cost</span>
              <span>₹42,500</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "dashboard-analytics",
      icon: <BarChart3 className="w-6 h-6 text-[#008dda]" />,
      headline: "Owner's Executive Analytics",
      bullets: [
        "Consolidated single-view dashboard showing metrics across all active painting sites.",
        "Automatic month-on-month profit tracker to identify leaks.",
        "Top painter leaderboards showing who works most efficiently.",
      ],
      preview: (
        <div className="bg-[#0b192c] rounded-2xl p-6 border border-[#2c476f]/30 shadow-xl space-y-4">
          <span className="text-xs font-semibold text-gray-400 block">Site Profit Summary (INR)</span>
          <div className="space-y-2.5">
            {[
              { site: "DLF Villa 3", profit: "₹85,000", pct: 75, color: "bg-emerald-500" },
              { site: "Gurgaon Flat 1", profit: "₹42,000", pct: 45, color: "bg-emerald-500" },
              { site: "Noida Office 4", profit: "- ₹12,000", pct: 15, color: "bg-red-500" },
            ].map((s, i) => (
              <div key={i} className="space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span className="text-white font-semibold">{s.site}</span>
                  <span className={s.color === "bg-red-500" ? "text-red-400 font-bold" : "text-emerald-400 font-bold"}>{s.profit}</span>
                </div>
                <div className="w-full bg-[#1a2f4c] h-1.5 rounded-full overflow-hidden">
                  <div className={`h-full ${s.color} w-[${s.pct}%]`} style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="features" className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-xs font-bold text-[#008dda] uppercase tracking-wider">
            Powerful Features
          </h2>
          <p className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b192c] tracking-tight">
            Stop relying on paper diaries. Run your business like a pro.
          </p>
        </div>

        {/* Alternating Feature Layout */}
        <div className="space-y-24">
          {featureList.map((feat, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={feat.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                {/* Image/Mockup Column */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`lg:col-span-6 w-full ${!isEven ? "lg:order-last" : ""}`}
                >
                  {feat.preview}
                </motion.div>

                {/* Copy Column */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="lg:col-span-6 space-y-6 text-left"
                >
                  <div className="inline-flex items-center justify-center p-3 rounded-xl bg-[#eef8ff] text-[#008dda]">
                    {feat.icon}
                  </div>
                  <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0b192c] leading-tight">
                    {feat.headline}
                  </h3>
                  <ul className="space-y-3.5">
                    {feat.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                        <span className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
