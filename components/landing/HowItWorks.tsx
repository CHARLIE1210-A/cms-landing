"use client";

import { motion } from "framer-motion";
import { PlusCircle, UserCheck, BarChart4 } from "lucide-react";
import { fadeUp, slideInRight, slideInLeft } from "@/lib/animations";
import { AppBadge } from "../shared/app-badge";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <PlusCircle className="w-5 h-5" />,
      title: "Set up a site in 30 seconds",
      description: "Enter the site address (e.g. DLF Villa Phase 3), specify client name, set the paint/labor budgets, and choose the start date. That's it — your site ledger is active.",
      preview: (
        <div className="bg-brand-950 text-white rounded-2xl p-5 border border-brand-900 shadow-card text-left space-y-3">
          <div className="flex items-center justify-between text-[10px] font-bold text-brand-300 uppercase tracking-widest pb-2 border-b border-brand-900/60">
            <span>New Site Setup</span>
            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">Active</span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="bg-brand-900/40 p-2.5 rounded-lg border border-brand-800">
              <span className="text-brand-300 block mb-0.5 font-semibold">Site Address</span>
              <span className="font-bold text-white">Nirvana Country Villa 42</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-brand-900/40 p-2.5 rounded-lg border border-brand-800">
                <span className="text-brand-300 block mb-0.5 font-semibold">Labor Budget</span>
                <span className="font-bold text-white">₹1,20,000</span>
              </div>
              <div className="bg-brand-900/40 p-2.5 rounded-lg border border-brand-800">
                <span className="text-brand-300 block mb-0.5 font-semibold">Material Budget</span>
                <span className="font-bold text-white">₹95,000</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      num: "02",
      icon: <UserCheck className="w-5 h-5" />,
      title: "Assign workers & log daily",
      description: "Assign painters to their active site, specify their daily wage rates, and log attendance in 3 clicks. Take loose cash advances on site and record them instantly before they are forgotten.",
      preview: (
        <div className="bg-brand-950 text-white rounded-2xl p-5 border border-brand-900 shadow-card text-left space-y-3">
          <div className="flex items-center justify-between text-[10px] font-bold text-brand-300 uppercase tracking-widest pb-2 border-b border-brand-900/60">
            <span>Log Cash Advance</span>
            <span className="text-gold-400">July 13</span>
          </div>
          <div className="space-y-2.5 text-xs">
            <div className="flex justify-between items-center bg-brand-900/40 p-3 rounded-lg border border-brand-800">
              <div>
                <h5 className="font-bold text-white">Sanjay Singh</h5>
                <span className="text-[9px] text-brand-300">Polisher • Rate ₹750/day</span>
              </div>
              <span className="text-gold-400 font-extrabold text-sm">₹800 Advance</span>
            </div>
            <p className="text-[10px] text-brand-300 leading-normal font-medium">
              * Automatically recorded and ready to be deducted during Saturday payroll settlement.
            </p>
          </div>
        </div>
      ),
    },
    {
      num: "03",
      icon: <BarChart4 className="w-5 h-5" />,
      title: "Settle wages & verify profitability",
      description: "At the end of the week, check the calculated net payouts (Wages − Advances). Share automated payout details with workers on WhatsApp in one click, and check your live project profit margin.",
      preview: (
        <div className="bg-brand-950 text-white rounded-2xl p-5 border border-brand-900 shadow-card text-left space-y-4">
          <div className="flex items-center justify-between text-[10px] font-bold text-brand-300 uppercase tracking-widest pb-2 border-b border-brand-900/60">
            <span>Site Profit Statement</span>
            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">Calculated</span>
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between font-semibold text-brand-200">
              <span>Client Receipts</span>
              <span className="text-white font-extrabold font-mono">₹2,80,000</span>
            </div>
            <div className="flex justify-between font-semibold text-brand-200">
              <span>Total Material Costs</span>
              <span className="text-white font-extrabold font-mono">₹82,400</span>
            </div>
            <div className="flex justify-between font-semibold text-brand-200">
              <span>Total Wages + Advances</span>
              <span className="text-white font-extrabold font-mono">₹1,12,000</span>
            </div>
            <hr className="border-brand-900 my-1" />
            <div className="flex justify-between text-emerald-400 font-extrabold text-sm pt-1">
              <span>Net Profit (30.5%)</span>
              <span className="font-mono">₹85,600</span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-28"
    >

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[380px] w-[380px] rounded-full bg-sky-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mb-24 max-w-3xl text-center"
        >
          <AppBadge color="violet" className="py-4 px-8 mb-6">
            The Workflow
          </AppBadge>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Digitize Your Painting Business{" "}
            <span className="block text-primary">
              In Three Simple Steps
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            From quotations to payroll, PaintCMS streamlines your complete
            contractor workflow.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto mt-24 max-w-6xl">

          {/* Vertical Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 top-12 bottom-12 w-[2px] -translate-x-1/2 bg-gradient-to-b from-brand-600/20 via-brand-600/70 to-brand-600/20 z-10" />

          {/* Glow Behind Line */}
          <div className="absolute left-8 lg:left-1/2 top-12 bottom-12 w-[6px] -translate-x-1/2 bg-brand-600/10 blur-sm hidden lg:block z-0" />

          <div className="space-y-32">

            {steps.map((step, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className="relative grid items-center gap-16 lg:grid-cols-12"
                >

                  {/* Content (Text explanation) */}
                  <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className={`pl-20 lg:pl-0 lg:col-span-5 lg:row-start-1 ${isEven ? "lg:col-start-8 lg:text-left" : "lg:col-start-1 lg:text-right"}`}
                  >
                    <div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-white/65 p-8 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur-3xl dark:border-white/10 dark:bg-slate-950/70">
                      {/* Glow decorator */}
                      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-600/10 blur-3xl" />

                      <div className="relative">
                        <div className="inline-flex rounded-full border border-brand-600/20 bg-brand-600/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-brand-600">
                          Step {step.num}
                        </div>

                        <h3 className="mt-5 text-2xl lg:text-3xl font-black tracking-tight text-foreground font-heading">
                          {step.title}
                        </h3>

                        <p className="mt-4 text-sm lg:text-base leading-relaxed text-muted-foreground">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>

                  {/* Timeline Node */}
                  <div className="absolute left-8 lg:left-1/2 top-12 lg:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <motion.div
                      whileHover={{
                        scale: 1.08,
                        rotate: 8,
                      }}
                      className="relative flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-full border border-brand-600/20 bg-white dark:bg-slate-950 shadow-[0_25px_80px_rgba(59,130,246,.18)]"
                    >
                      {/* Glow inside */}
                      <div className="absolute inset-1.5 rounded-full bg-brand-600/10" />

                      {/* Step Number Badge */}
                      <div className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-600 text-[10px] font-black text-white">
                        {step.num}
                      </div>

                      <div className="relative text-brand-600 scale-90 lg:scale-100">
                        {step.icon}
                      </div>
                    </motion.div>
                  </div>

                  {/* Preview (Visual mockups) */}
                  <motion.div
                    variants={isEven ? slideInLeft : slideInRight}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className={`pl-20 lg:pl-0 lg:col-span-5 lg:row-start-1 ${isEven ? "lg:col-start-1" : "lg:col-start-8"}`}
                  >
                    <div className="overflow-hidden rounded-[32px] border border-white/20 bg-white/70 p-5 shadow-[0_25px_70px_rgba(15,23,42,0.08)] backdrop-blur-3xl dark:border-white/10 dark:bg-slate-950/70">
                      {step.preview}
                    </div>
                  </motion.div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}
