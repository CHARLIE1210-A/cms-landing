"use client";

import { motion } from "framer-motion";
import { AlertCircle, FileText, Ban, Users, TrendingDown, ArrowRight } from "lucide-react";
import { fadeUp, scaleIn } from "@/lib/animations";

export default function ProblemStatement() {
  const problems = [
    {
      icon: <AlertCircle className="w-5 h-5 text-red-500" />,
      title: "Verbal attendance leads to arguments",
      description: "Workers claim they worked 6 days, but you remember 5. Without clear daily records, you end up paying for hours they never worked just to keep them happy.",
    },
    {
      icon: <Ban className="w-5 h-5 text-amber-500" />,
      title: "Cash advances are forgotten",
      description: "A worker takes a ₹1,000 cash advance for an emergency. You write it on a scrap of paper or a pack of cigarette card box, and it gets lost. Weekly settlements lose you money.",
    },
    {
      icon: <TrendingDown className="w-5 h-5 text-red-500" />,
      title: "Zero visibility on project profits",
      description: "You finish a major villa contract, collect the final payment, and realized you didn't make a rupee because material costs and daily wages ran completely over budget.",
    },
  ];

  return (
    <section id="problems" className="py-24 bg-surface-raised border-y border-edge-default relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading and High-Impact stat card */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <span className="eyebrow-pill">The Problem</span>
              <h2 className="headline-section">
                Managing painting sites on paper is leaking your profits
              </h2>
              <p className="body-base text-ink-secondary">
                Between supervisor attendance logs, cash advance requests, and vendor bills, it's impossible to calculate site margins accurately using diaries or WhatsApp chat history.
              </p>
            </div>

            {/* High-Impact Leak Block */}
            <motion.div
              variants={scaleIn}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-brand-950 text-white rounded-3xl p-8 relative overflow-hidden shadow-card-lg border border-brand-900"
            >
              <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
              <div className="relative z-10 space-y-4">
                <span className="text-[10px] font-extrabold text-brand-300 uppercase tracking-widest block">
                  Industry Fact
                </span>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl tracking-tight leading-tight">
                  ₹22,000+ Lost
                </h3>
                <p className="text-xs text-brand-100 leading-relaxed font-medium">
                  The average painting contractor in India loses more than ₹22,000 per month due to undocumented cash advances, duplicate worker attendance entries, and material waste.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Stacked Problem List */}
          <div className="lg:col-span-7 space-y-6">
            {problems.map((prob, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="card-feature bg-white flex flex-col sm:flex-row items-start gap-5"
              >
                <div className="p-3 bg-surface-base rounded-2xl border border-edge-subtle shrink-0">
                  {prob.icon}
                </div>
                <div className="text-left space-y-1.5">
                  <h3 className="headline-card text-ink-primary">
                    {prob.title}
                  </h3>
                  <p className="body-sm text-ink-secondary">
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
