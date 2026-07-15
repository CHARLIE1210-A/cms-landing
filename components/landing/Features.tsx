"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, DollarSign, Wallet, Hammer, HelpCircle, PhoneCall, ChevronRight, Check, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fadeUp } from "@/lib/animations";
import { Badge } from "../ui/badge";

export default function Features() {
  // Calculator State
  const [wallArea, setWallArea] = useState(2500);
  const [materialRate, setMaterialRate] = useState(12);
  const [laborRate, setLaborRate] = useState(15);

  // Attendance Log State
  const [attendance, setAttendance] = useState([
    { name: "Sanjay Singh", present: true },
    { name: "Amit Sharma", present: true },
    { name: "Rajesh Kumar", present: false },
    { name: "Vijay Yadav", present: true },
  ]);

  const toggleAttendance = (index: number) => {
    const nextAtt = [...attendance];
    nextAtt[index].present = !nextAtt[index].present;
    setAttendance(nextAtt);
  };

  const calculatedCost = wallArea * (materialRate + laborRate);

  return (
    <section
      id="features"
      className="relative overflow-hidden border-b border-white/10 py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,.08),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(99,102,241,.08),transparent_40%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ---------- Header ---------- */}

        <div className="mx-auto mb-24 max-w-3xl text-center">

          <div className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 backdrop-blur-xl">
            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-primary">
              Features
            </span>
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Designed for painting workflows,
            <br />
            not boardrooms.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Every workflow is optimized for contractors, supervisors and workers.
            No complex ERP. No lengthy training. Just simple tools that save money
            from day one.
          </p>

        </div>

        {/* ---------- Bento Grid ---------- */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">

          {/* ========================================================= */}

          {/* Attendance Card */}

          {/* ========================================================= */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{
              y: -8,
            }}
            transition={{ duration: .35 }}
            className="md:col-span-7"
          >

            <div
              className="
            group
            relative
            overflow-hidden

            rounded-[34px]

            border
            border-white/20

            bg-white/70

            p-8

            shadow-[0_30px_80px_rgba(15,23,42,.08)]

            backdrop-blur-3xl

            dark:border-white/10
            dark:bg-slate-950/70
          "
            >

              {/* Glow */}

              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

              {/* Header */}

              <div className="relative flex items-start gap-5">

                <div
                  className="
                flex
                h-16
                w-16
                items-center
                justify-center

                rounded-3xl

                border
                border-primary/20

                bg-primary/10

                text-primary

                shadow-lg
                shadow-primary/10

                transition-transform
                duration-300

                group-hover:rotate-6
                group-hover:scale-110
              "
                >
                  <Users className="h-7 w-7" />
                </div>

                <div className="flex-1">

                  <div className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                    Attendance
                  </div>

                  <h3 className="mt-4 text-3xl font-black tracking-tight text-foreground">
                    3-Click Worker Attendance
                  </h3>

                  <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
                    Supervisors simply tap Present or Absent for every worker.
                    Attendance, payroll and wage calculations update automatically
                    without paper registers.
                  </p>

                </div>

              </div>

              {/* Demo */}

              <div
                className="
              relative
              mt-10

              overflow-hidden

              rounded-[28px]

              border
              border-white/20

              bg-white/60

              p-6

              backdrop-blur-2xl

              dark:bg-slate-900/60
            "
              >

                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      Today's Attendance
                    </p>

                    <h4 className="mt-1 text-lg font-bold text-foreground">
                      DLF Villa 42
                    </h4>

                  </div>

                  <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-600">
                    Live Sync
                  </div>

                </div>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">

                  {attendance.map((worker, idx) => (

                    <motion.button
                      key={idx}
                      whileTap={{ scale: .96 }}
                      whileHover={{
                        y: -3,
                      }}
                      onClick={() => toggleAttendance(idx)}
                      className={`
                    rounded-2xl
                    border
                    p-4

                    backdrop-blur-xl

                    transition-all
                    duration-300

                    ${worker.present
                          ? `
                          border-emerald-500/20
                          bg-emerald-500/10
                          shadow-lg
                          shadow-emerald-500/10
                        `
                          : `
                          border-amber-500/20
                          bg-amber-500/10
                        `
                        }
                  `}
                    >

                      <div
                        className={`
                      mx-auto
                      mb-3
                      h-3
                      w-3
                      rounded-full

                      ${worker.present
                            ? "bg-emerald-500"
                            : "bg-amber-500"
                          }
                    `}
                      />

                      <p className="truncate text-sm font-bold text-foreground">
                        {worker.name.split(" ")[0]}
                      </p>

                      <p
                        className={`
                      mt-2

                      text-[10px]
                      font-bold
                      uppercase
                      tracking-[0.16em]

                      ${worker.present
                            ? "text-emerald-600"
                            : "text-amber-600"
                          }
                    `}
                      >
                        {worker.present ? "Present" : "Absent"}
                      </p>

                    </motion.button>

                  ))}

                </div>

                <div className="mt-6 rounded-2xl border border-primary/10 bg-primary/5 p-4">

                  <p className="text-xs leading-6 text-muted-foreground">
                    Tap any worker to instantly change attendance. Payroll, labour
                    cost and daily site reports update automatically.
                  </p>

                </div>

              </div>

            </div>

          </motion.div>

          {/* Card 2: Interactive Profit Margin Calculator (Grid Span 5) */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.35 }}
            className="md:col-span-5"
          >
            <div
              className="
            group
            relative
            overflow-hidden

            rounded-[34px]

            border
            border-white/20

            bg-white/70

            p-8

            shadow-[0_30px_80px_rgba(15,23,42,.08)]

            backdrop-blur-3xl

            dark:border-white/10
            dark:bg-slate-950/70
          "
            >
              {/* Glow */}
              <div className="absolute -left-24 -bottom-24 h-60 w-60 rounded-full bg-amber-500/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

              {/* Header */}

              <div className="relative">

                <div
                  className="
                flex
                h-16
                w-16
                items-center
                justify-center

                rounded-3xl

                border
                border-amber-500/20

                bg-amber-500/10

                text-amber-500

                shadow-lg
                shadow-amber-500/10

                transition-transform
                duration-300

                group-hover:rotate-6
                group-hover:scale-110
              "
                >
                  <DollarSign className="h-7 w-7" />
                </div>

                <div className="mt-6 inline-flex rounded-full bg-amber-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-amber-600">
                  Live Estimation
                </div>

                <h3 className="mt-4 text-3xl font-black tracking-tight text-foreground">
                  Smart Wall Quotations
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  Instantly calculate painting quotations while discussing the
                  project with your client. Change area or rates and see live
                  pricing.
                </p>

              </div>

              {/* Calculator */}

              <div
                className="
              relative
              mt-10

              overflow-hidden

              rounded-[28px]

              border
              border-white/20

              bg-white/60

              p-6

              backdrop-blur-2xl

              dark:bg-slate-900/60
            "
              >
                {/* Header */}

                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      Live Calculator
                    </p>

                    <h4 className="mt-1 text-lg font-bold text-foreground">
                      Wall Cost Estimator
                    </h4>

                  </div>

                  <div className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-600">
                    Auto Calculate
                  </div>

                </div>

                {/* Area */}

                <div className="space-y-3">

                  <div className="flex items-center justify-between">

                    <span className="text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      Wall Area
                    </span>

                    <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-black text-primary">
                      {wallArea.toLocaleString()} sq.ft
                    </span>

                  </div>

                  <input
                    type="range"
                    min="500"
                    max="10000"
                    step="500"
                    value={wallArea}
                    onChange={(e) => setWallArea(Number(e.target.value))}
                    className="w-full accent-primary"
                  />

                </div>

                {/* Rates */}

                <div className="mt-6 grid grid-cols-2 gap-4">

                  <div className="space-y-2">

                    <label className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      Material
                    </label>

                    <Input
                      type="number"
                      value={materialRate}
                      onChange={(e) =>
                        setMaterialRate(Number(e.target.value))
                      }
                      className="
                    h-11
                    rounded-2xl
                    border-white/20
                    bg-white/60
                    backdrop-blur-xl

                    dark:bg-slate-900/60
                  "
                    />

                  </div>

                  <div className="space-y-2">

                    <label className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      Labour
                    </label>

                    <Input
                      type="number"
                      value={laborRate}
                      onChange={(e) =>
                        setLaborRate(Number(e.target.value))
                      }
                      className="
                    h-11
                    rounded-2xl
                    border-white/20
                    bg-white/60
                    backdrop-blur-xl

                    dark:bg-slate-900/60
                  "
                    />

                  </div>

                </div>

                {/* Result */}

                <motion.div
                  layout
                  className="
                mt-8

                rounded-3xl

                border
                border-primary/20

                bg-gradient-to-r
                from-primary/10
                via-primary/5
                to-primary/10

                p-5
              "
                >

                  <div className="flex items-center justify-between">

                    <div>

                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                        Estimated Cost
                      </p>

                      <p className="mt-2 text-4xl font-black tracking-tight text-primary">
                        ₹{calculatedCost.toLocaleString("en-IN")}
                      </p>

                    </div>

                    <div
                      className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center

                    rounded-2xl

                    bg-primary/10
                    text-primary
                  "
                    >
                      <Calculator className="h-7 w-7" />
                    </div>

                  </div>

                </motion.div>

              </div>

            </div>

          </motion.div>

          {/* Card 3: Saturday Payroll Settlements (Grid Span 6) */}
          {/* Card 4: Site Supervisor Mode (Grid Span 6) */}

          {/* ========================================================= */}

          {/* WhatsApp Payroll */}

          {/* ========================================================= */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.35 }}
            className="md:col-span-6"
          >
            <div
              className="
            group
            relative
            overflow-hidden

            rounded-[34px]

            border
            border-white/20

            bg-white/70

            p-8

            shadow-[0_30px_80px_rgba(15,23,42,.08)]

            backdrop-blur-3xl

            dark:border-white/10
            dark:bg-slate-950/70
          "
            >
              <div className="absolute -right-24 -bottom-24 h-60 w-60 rounded-full bg-emerald-500/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

              <div className="relative">

                <div
                  className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-3xl
                border
                border-emerald-500/20
                bg-emerald-500/10
                text-emerald-600
                shadow-lg
                shadow-emerald-500/10
              "
                >
                  <Wallet className="h-7 w-7" />
                </div>

                <div className="mt-6 inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-600">
                  Payroll
                </div>

                <h3 className="mt-4 text-3xl font-black tracking-tight text-foreground">
                  WhatsApp Payroll Slips
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  Generate professional wage slips automatically and share them
                  with workers through WhatsApp in one tap.
                </p>

              </div>

              <div
                className="
              mt-10
              rounded-[28px]
              border
              border-white/20
              bg-white/60
              p-6
              backdrop-blur-2xl

              dark:bg-slate-900/60
            "
              >

                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      Payroll Preview
                    </p>

                    <h4 className="mt-1 text-lg font-bold text-foreground">
                      Weekly Settlement
                    </h4>

                  </div>

                  <div className="rounded-full bg-emerald-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-600">
                    Ready
                  </div>

                </div>

                <div className="space-y-3 rounded-3xl border border-emerald-500/15 bg-emerald-500/5 p-5">

                  <div className="flex items-center justify-between">

                    <span className="font-bold text-foreground">
                      Sanjay Singh
                    </span>

                    <Badge className="rounded-full bg-emerald-500 text-white">
                      Paid
                    </Badge>

                  </div>

                  <div className="space-y-2 text-sm">

                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Days Worked
                      </span>
                      <span className="font-bold">6 Days</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Daily Wage
                      </span>
                      <span className="font-bold">₹750</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-muted-foreground">
                        Total Wages
                      </span>
                      <span className="font-bold">
                        ₹4,500
                      </span>
                    </div>

                    <div className="flex justify-between text-rose-500">
                      <span>Advance</span>
                      <span>-₹800</span>
                    </div>

                  </div>

                  <div className="flex items-center justify-between rounded-2xl bg-primary/10 p-4">

                    <span className="font-bold text-primary">
                      Net Payable
                    </span>

                    <span className="text-2xl font-black text-primary">
                      ₹3,700
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

          {/* ========================================================= */}

          {/* Material Logs */}

          {/* ========================================================= */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.35 }}
            className="md:col-span-6"
          >
            <div
              className="
            group
            relative
            overflow-hidden

            rounded-[34px]

            border
            border-white/20

            bg-white/70

            p-8

            shadow-[0_30px_80px_rgba(15,23,42,.08)]

            backdrop-blur-3xl

            dark:border-white/10
            dark:bg-slate-950/70
          "
            >
              <div className="absolute -left-24 -top-24 h-60 w-60 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:scale-125" />

              <div className="relative">

                <div
                  className="
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-3xl
                border
                border-primary/20
                bg-primary/10
                text-primary
                shadow-lg
                shadow-primary/10
              "
                >
                  <Hammer className="h-7 w-7" />
                </div>

                <div className="mt-6 inline-flex rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-primary">
                  Inventory
                </div>

                <h3 className="mt-4 text-3xl font-black tracking-tight text-foreground">
                  Site Material Logs
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  Track every bucket, brush and bag of putty with live inventory
                  updates directly from the construction site.
                </p>

              </div>

              <div
                className="
              mt-10
              rounded-[28px]
              border
              border-white/20
              bg-white/60
              p-6
              backdrop-blur-2xl

              dark:bg-slate-900/60
            "
              >

                <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">

                  <div>

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                      Material Ledger
                    </p>

                    <h4 className="mt-1 text-lg font-bold text-foreground">
                      DLF Villa
                    </h4>

                  </div>

                  <Badge className="rounded-full bg-primary/10 text-primary border-primary/20">
                    Live
                  </Badge>

                </div>

                <div className="space-y-4">

                  {[
                    {
                      name: "Royal Luxury Emulsion",
                      qty: "4 Buckets",
                      status: "Available",
                    },
                    {
                      name: "Wall Putty",
                      qty: "12 Bags",
                      status: "Consumed",
                    },
                    {
                      name: "Rollers & Brushes",
                      qty: "8 Units",
                      status: "Available",
                    },
                  ].map((item) => (

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      key={item.name}
                      className="
                    flex
                    items-center
                    justify-between

                    rounded-2xl

                    border
                    border-white/20

                    bg-white/70

                    p-4

                    dark:bg-slate-900/70
                  "
                    >

                      <div>

                        <p className="font-bold text-foreground">
                          {item.name}
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">
                          {item.qty}
                        </p>

                      </div>

                      <Badge
                        className={
                          item.status === "Consumed"
                            ? "rounded-full bg-rose-500/10 text-rose-500 border-rose-500/20"
                            : "rounded-full bg-emerald-500/10 text-emerald-600 border-emerald-500/20"
                        }
                      >
                        {item.status}
                      </Badge>

                    </motion.div>

                  ))}

                </div>

              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
