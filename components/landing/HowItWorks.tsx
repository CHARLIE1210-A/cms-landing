"use client";

import { PlusCircle, UserCheck, BarChart4, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <PlusCircle className="w-5 h-5 text-white" />,
      title: "Set up a site in 30 seconds",
      description: "Enter the site address (e.g. DLF Villa Phase 3), specify client name, set the paint/labor budgets, and choose the start date. That's it — your site ledger is active.",
      preview: (
        <div className="bg-[#0b1528] rounded-xl p-5 border border-white/5 shadow-premium text-left space-y-3">
          <div className="flex items-center justify-between text-[10px] font-bold text-gray-500 uppercase tracking-widest pb-2 border-b border-white/5">
            <span>New Site Setup</span>
            <span className="text-[#38bdf8]">Active</span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="bg-[#13243c]/50 p-2.5 rounded-lg border border-white/5">
              <span className="text-gray-400 block mb-0.5 font-semibold">Site Address</span>
              <span className="font-bold text-white">Nirvana Country Villa 42</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-[#13243c]/50 p-2.5 rounded-lg border border-white/5">
                <span className="text-gray-400 block mb-0.5 font-semibold">Labor Budget</span>
                <span className="font-bold text-white">₹1,20,000</span>
              </div>
              <div className="bg-[#13243c]/50 p-2.5 rounded-lg border border-white/5">
                <span className="text-gray-400 block mb-0.5 font-semibold">Material Budget</span>
                <span className="font-bold text-white">₹95,000</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: "02",
      icon: <UserCheck className="w-5 h-5 text-white" />,
      title: "Assign workers & log daily",
      description: "Assign painters to their active site, specify their daily wage rates, and log attendance in 3 clicks. Take loose cash advances on site and record them instantly before they are forgotten.",
      preview: (
        <div className="bg-[#0b1528] rounded-xl p-5 border border-white/5 shadow-premium text-left space-y-3">
          <div className="flex items-center justify-between text-[10px] font-bold text-gray-500 uppercase tracking-widest pb-2 border-b border-white/5">
            <span>Log Cash Advance</span>
            <span className="text-[#38bdf8]">July 13</span>
          </div>
          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between items-center bg-[#13243c]/50 p-3 rounded-lg border border-white/5">
              <div>
                <h5 className="font-bold text-white">Sanjay Singh</h5>
                <span className="text-[9px] text-gray-400">Polisher • Rate ₹750/day</span>
              </div>
              <span className="text-amber-400 font-extrabold text-sm">₹800 Advance</span>
            </div>
            <p className="text-[10px] text-gray-400 leading-normal">
              * Automatically recorded and ready to be deducted during Saturday payroll settlement.
            </p>
          </div>
        </div>
      ),
    },
    {
      num: "03",
      icon: <BarChart4 className="w-5 h-5 text-white" />,
      title: "Settle wages & verify profitability",
      description: "At the end of the week, check the calculated net payouts (Wages − Advances). Share automated payout details with workers on WhatsApp in one click, and check your live project profit margin.",
      preview: (
        <div className="bg-[#0b1528] rounded-xl p-5 border border-white/5 shadow-premium text-left space-y-4">
          <div className="flex items-center justify-between text-[10px] font-bold text-gray-500 uppercase tracking-widest pb-2 border-b border-white/5">
            <span>Site Profit Statement</span>
            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">Calculated</span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between font-semibold text-gray-300">
              <span>Client Receipts</span>
              <span className="text-white font-extrabold">₹2,80,000</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-300">
              <span>Total Material Costs</span>
              <span className="text-white font-extrabold">₹82,400</span>
            </div>
            <div className="flex justify-between font-semibold text-gray-300">
              <span>Total Wages + Advances</span>
              <span className="text-white font-extrabold">₹1,12,000</span>
            </div>
            <hr className="border-white/5 my-1" />
            <div className="flex justify-between text-emerald-400 font-extrabold text-sm pt-1">
              <span>Net Profit (30.5%)</span>
              <span>₹85,600</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#faf9f6] border-b border-[#e5e4da] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-24 space-y-4">
          <span className="text-xs font-extrabold text-[#38bdf8] uppercase tracking-widest">
            The Workflow
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0b1528] tracking-tighter leading-tight">
            How PaintCMS digitizes your sites in 3 steps
          </h2>
        </div>

        {/* Vertical Timeline Stepper */}
        <div className="relative space-y-24 max-w-5xl mx-auto">
          {/* Vertical Connecting Line */}
          <div className="absolute left-[31px] lg:left-1/2 top-4 bottom-4 w-0.5 bg-gray-200/80 -translate-x-1/2 z-0" />

          {steps.map((step, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center z-10 text-left"
              >
                {/* Visual Preview Column */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className={`lg:col-span-5 ${!isEven ? "lg:order-last" : ""} pl-16 lg:pl-0`}
                >
                  {step.preview}
                </motion.div>

                {/* Vertical Node Indicator */}
                <div className="absolute left-0 lg:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                  <div className="w-16 h-16 rounded-full bg-[#0b1528] border-4 border-white flex items-center justify-center shadow-lg shadow-[#0b1528]/10 group-hover:scale-105 transition-transform duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Text Content Column */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`lg:col-span-5 ${!isEven ? "" : "lg:text-right"} pl-16 lg:pl-0 ${isEven ? "lg:col-start-7" : "lg:col-start-1"}`}
                >
                  <div className="space-y-4">
                    <span className="text-xs font-bold text-[#38bdf8] uppercase tracking-widest block">
                      Step {step.num}
                    </span>
                    <h3 className="font-heading font-extrabold text-2xl text-[#0b1528] tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-md lg:ml-auto lg:mr-0">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
