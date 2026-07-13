"use client";

import { motion } from "framer-motion";
import { Notebook, Receipt, TrendingDown, ShieldAlert } from "lucide-react";

export default function ProblemStatement() {
  const problems = [
    {
      icon: <Notebook className="w-5 h-5 text-[#38bdf8]" />,
      headline: "Messy Attendance Registers",
      description: "Lost pages, split paint inks, and disputes with painters about working days at the end of the month. One argument can ruin worker relationships and slow down a site.",
    },
    {
      icon: <Receipt className="w-5 h-5 text-[#38bdf8]" />,
      headline: "Cash Advances Written on Scrap Paper",
      description: "Writing ₹500, ₹1000 advances in random diaries or WhatsApp chats. By Saturday pay settlement, nobody remembers who took what, leading to direct cash leaks.",
    },
    {
      icon: <TrendingDown className="w-5 h-5 text-[#38bdf8]" />,
      headline: "No Idea of Real Site Profits",
      description: "Paying for paint buckets, painter daily wages, transport, and tea without tracking cumulative margins. Many contractors finish a job only to realize they barely broke even.",
    },
  ];

  return (
    <section className="py-24 bg-[#faf9f6] border-y border-[#e5e4da] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Highlight Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#38bdf8]">
              The Diary Leakage
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0b1528] tracking-tighter leading-tight">
              Paper registers and WhatsApp groups are costing you money.
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Running a painting business is hard work. Managing materials, supervising quality, and handling clients is exhausting. But the real leak happens in the details of worker advances, attendance, and expense tracking.
            </p>
            
            {/* Highlight Box */}
            <div className="bg-[#0b1528] text-white p-6 rounded-2xl border border-white/5 shadow-premium flex gap-4">
              <ShieldAlert className="w-6 h-6 text-[#38bdf8] shrink-0 mt-1" />
              <div>
                <h4 className="font-heading font-extrabold text-sm text-white">Did you know?</h4>
                <p className="text-gray-400 text-xs mt-1 leading-relaxed">
                  Average painting contractors in India lose between **₹15,000 to ₹25,000 per month** due to math errors in salary settlements and forgotten advance records.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stacked Cards */}
          <div className="lg:col-span-7 space-y-6">
            {problems.map((prob, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-white border border-[#e5e4da]/70 rounded-2xl p-6 sm:p-8 flex gap-5 sm:gap-6 hover:shadow-premium hover:border-[#38bdf8]/40 transition-all duration-300 group"
              >
                <div className="bg-[#f0f9ff] w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-[#38bdf8]/15 group-hover:scale-105 transition-transform duration-300">
                  {prob.icon}
                </div>
                <div className="text-left space-y-1.5">
                  <h3 className="font-heading font-extrabold text-lg text-[#0b1528]">
                    {prob.headline}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {prob.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
