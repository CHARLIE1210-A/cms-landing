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
    <section
      id="problems"
      className="relative overflow-hidden border-y border-white/10 py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,.08),transparent_40%)]" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-16 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">

        {/* LEFT SIDE */}
        <div className="space-y-8 lg:col-span-6">

          <div className="space-y-5">

            <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 backdrop-blur-xl">
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
                The Problem
              </span>
            </div>

            <h2 className="max-w-xl text-4xl font-black tracking-tight text-foreground sm:text-5xl">
              Managing painting sites on paper is quietly draining your profits.
            </h2>

            <p className="max-w-lg text-base leading-8 text-muted-foreground">
              Attendance registers, WhatsApp chats, handwritten bills and cash
              advances create disconnected information—making it nearly impossible
              to know the actual profit of every project.
            </p>

          </div>

          {/* Industry Fact */}

          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            transition={{ duration: .35 }}
            className="
          relative
          overflow-hidden
          rounded-[34px]
          border
          border-rose-500/20
          bg-white/70
          p-8
          shadow-[0_25px_70px_rgba(15,23,42,.08)]
          backdrop-blur-3xl

          dark:bg-slate-950/70
        "
          >

            {/* Glow */}

            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-rose-500/15 blur-3xl" />

            <div className="relative space-y-5">

              <div className="inline-flex rounded-full bg-rose-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-rose-500">
                Industry Fact
              </div>

              <h3 className="text-5xl font-black tracking-tight text-rose-500">
                ₹22,000+
              </h3>

              <p className="text-lg font-semibold text-foreground">
                Average monthly profit leakage
              </p>

              <p className="leading-7 text-muted-foreground">
                Painting contractors lose thousands every month because cash
                advances, labour attendance, and material consumption aren't tracked
                in one place.
              </p>

            </div>

          </motion.div>

        </div>

        {/* RIGHT SIDE */}

        <div className="space-y-6 lg:col-span-6">

          {problems.map((prob, idx) => (

            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                scale: 1.015,
              }}
              transition={{
                duration: .3,
              }}
              className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/20
            bg-white/65
            p-6
            shadow-[0_20px_60px_rgba(15,23,42,.08)]
            backdrop-blur-3xl

            dark:border-white/10
            dark:bg-slate-950/70
          "
            >

              {/* Hover Glow */}

              <div
                className="
              absolute
              inset-0
              opacity-0
              transition-opacity
              duration-500

              group-hover:opacity-100
              bg-gradient-to-r
              from-primary/5
              via-transparent
              to-primary/5
            "
              />

              <div className="relative flex flex-col gap-5 sm:flex-row">

                {/* Icon */}

                <div
                  className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center

                rounded-2xl

                border
                border-primary/15

                bg-primary/10

                text-primary

                shadow-lg
                shadow-primary/10

                transition-transform
                duration-300

                group-hover:scale-110
              "
                >
                  {prob.icon}
                </div>

                {/* Content */}

                <div className="space-y-3">

                  <div className="flex items-center gap-3">

                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-black text-primary">
                      {String(idx + 1).padStart(2, "0")}
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight text-foreground">
                      {prob.title}
                    </h3>

                  </div>

                  <p className="leading-7 text-muted-foreground">
                    {prob.description}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}
