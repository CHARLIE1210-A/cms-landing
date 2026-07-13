"use client";

import { motion } from "framer-motion";
import { Notebook, Receipt, TrendingDown } from "lucide-react";

export default function ProblemStatement() {
  const problems = [
    {
      icon: <Notebook className="w-8 h-8 text-[#008dda]" />,
      headline: "Messy Attendance Registers",
      description: "Lost pages, ink spills, and arguments with painters about how many days they actually worked. One dispute can ruin your week.",
    },
    {
      icon: <Receipt className="w-8 h-8 text-[#008dda]" />,
      headline: "Advances Written on Scraps",
      description: "Writing ₹500, ₹1000 advances in random diaries or WhatsApp chats. By Saturday, no one remembers who took what.",
    },
    {
      icon: <TrendingDown className="w-8 h-8 text-[#008dda]" />,
      headline: "Zero Idea of Real Profit",
      description: "Paying for paint, labor wages, transport, and chai without knowing if a site is actually making money or losing it.",
    },
  ];

  return (
    <section className="py-20 bg-[#F5F7F8] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold text-[#008dda] uppercase tracking-wider">
            The Reality of Painting Contractors
          </h2>
          <p className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b192c] tracking-tight">
            Managing sites on diaries & WhatsApp is leaking your hard-earned profits.
          </p>
        </div>

        {/* 3-Column Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((prob, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white border border-gray-200/80 rounded-2xl p-8 hover:shadow-xl hover:border-[#008dda]/30 transition-all duration-300 flex flex-col group"
            >
              <div className="bg-[#eef8ff] w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {prob.icon}
              </div>
              <h3 className="font-heading font-extrabold text-xl text-[#0b192c] mb-3">
                {prob.headline}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {prob.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
