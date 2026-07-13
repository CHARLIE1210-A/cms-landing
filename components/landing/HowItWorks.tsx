"use client";

import { motion } from "framer-motion";
import { PlusCircle, UserCheck, BarChart4 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <PlusCircle className="w-6 h-6 text-white" />,
      title: "Create a Site",
      description: "Enter client name, location, paint coats, and overall budget in under 30 seconds.",
    },
    {
      num: "02",
      icon: <UserCheck className="w-6 h-6 text-white" />,
      title: "Assign & Log Daily",
      description: "Add painters, set their daily wage rate, and tap to mark attendance or record cash advances.",
    },
    {
      num: "03",
      icon: <BarChart4 className="w-6 h-6 text-white" />,
      title: "Settle & Track Profit",
      description: "Review weekly totals, subtract advances, share slip on WhatsApp, and view site margin.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-[#F5F7F8] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-xs font-bold text-[#008dda] uppercase tracking-wider">
            Simple to Use
          </h2>
          <p className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b192c] tracking-tight">
            How PaintCMS works in 3 simple steps
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Connecting Line - Desktop Only */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gray-200 -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                {/* Step Circle with Icon */}
                <div className="relative mb-6">
                  {/* Number Badge */}
                  <span className="absolute -top-3 -right-3 w-7 h-7 bg-white text-[#0b192c] border border-gray-200 rounded-full flex items-center justify-center font-bold text-xs shadow-sm">
                    {step.num}
                  </span>
                  
                  {/* Outer glow */}
                  <div className="w-16 h-16 rounded-full bg-[#008dda] flex items-center justify-center shadow-lg shadow-[#008dda]/30 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="font-heading font-extrabold text-xl text-[#0b192c] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm max-w-xs leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
