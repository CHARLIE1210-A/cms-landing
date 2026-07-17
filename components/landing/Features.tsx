"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, DollarSign, Wallet, Hammer, HelpCircle, PhoneCall, ChevronRight, Check, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fadeUp } from "@/lib/animations";
import { Badge } from "../ui/badge";
import {
  FeatureCard,
  FeatureCardHeader,
  FeatureCardDemo,
  FeatureCardDemoHeader,
} from "@/components/shared/feature-card";

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

          <FeatureCard
            className="md:col-span-7"
            glowColor="primary"
            glowPosition="top-right"
          >
            <FeatureCardHeader
              icon={<Users className="h-7 w-7" />}
              badge="Attendance"
              title="3-Click Worker Attendance"
              description="Supervisors simply tap Present or Absent for every worker. Attendance, payroll and wage calculations update automatically without paper registers."
              color="primary"
              layout="horizontal"
            />

            <FeatureCardDemo>
              <FeatureCardDemoHeader
                label="Today's Attendance"
                title="DLF Villa 42"
                badgeText="Live Sync"
                badgeColor="emerald"
              />

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

            </FeatureCardDemo>

          </FeatureCard>

          {/* Card 2: Interactive Profit Margin Calculator (Grid Span 5) */}

          <FeatureCard
            className="md:col-span-5"
            glowColor="amber"
            glowPosition="bottom-left"
          >
            <FeatureCardHeader
              icon={<DollarSign className="h-7 w-7" />}
              badge="Live Estimation"
              title="Smart Wall Quotations"
              description="Instantly calculate painting quotations while discussing the project with your client. Change area or rates and see live pricing."
              color="amber"
              layout="horizontal"
            />

            <FeatureCardDemo>
              <FeatureCardDemoHeader
                label="Live Calculator"
                title="Wall Cost Estimator"
                badgeText="Auto Calculate"
                badgeColor="emerald"
              />

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

            </FeatureCardDemo>

          </FeatureCard>

          {/* Card 3: Saturday Payroll Settlements (Grid Span 6) */}
          {/* Card 4: Site Supervisor Mode (Grid Span 6) */}

          {/* ========================================================= */}

          {/* WhatsApp Payroll */}

          {/* ========================================================= */}

          <FeatureCard
            className="md:col-span-6"
            glowColor="emerald"
            glowPosition="bottom-right"
          >
            <FeatureCardHeader
              icon={<Wallet className="h-7 w-7" />}
              badge="Payroll"
              title="WhatsApp Payroll Slips"
              description="Generate professional wage slips automatically and share them with workers through WhatsApp in one tap."
              color="emerald"
              layout="horizontal"
            />

            <FeatureCardDemo>
              <FeatureCardDemoHeader
                label="Payroll Preview"
                title="Weekly Settlement"
                badgeText="Ready"
                badgeColor="emerald"
              />

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

            </FeatureCardDemo>

          </FeatureCard>

          {/* ========================================================= */}

          {/* Material Logs */}

          {/* ========================================================= */}

          <FeatureCard
            className="md:col-span-6"
            glowColor="primary"
            glowPosition="top-left"
          >
            <FeatureCardHeader
              icon={<Hammer className="h-7 w-7" />}
              badge="Inventory"
              title="Site Material Logs"
              description="Track every bucket, brush and bag of putty with live inventory updates directly from the construction site."
              color="primary"
              layout="horizontal"
            />

            <FeatureCardDemo>
              <FeatureCardDemoHeader
                label="Material Ledger"
                title="DLF Villa"
                badgeText="Live"
                badgeColor="primary"
              />

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

            </FeatureCardDemo>

          </FeatureCard>

        </div>
      </div>
    </section>
  );
}
