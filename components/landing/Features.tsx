"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, DollarSign, Wallet, Hammer, HelpCircle, PhoneCall, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fadeUp } from "@/lib/animations";

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
    <section id="features" className="py-24 bg-surface-base border-b border-edge-default relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="eyebrow-pill">Features</span>
          <h2 className="headline-section text-ink-primary">
            Designed for painting workflows, not boardrooms
          </h2>
          <p className="body-base text-ink-secondary">
            Every feature is built to solve site friction directly. Zero training needed. Try the interactive tools below.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: 3-Click Attendance Log (Grid Span 7) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-7 card-feature bg-white flex flex-col justify-between"
          >
            <div className="text-left space-y-3">
              <div className="p-3 bg-brand-50 text-brand-600 rounded-2xl border border-brand-100 w-11 h-11 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="headline-card text-ink-primary">
                3-Click Worker Attendance
              </h3>
              <p className="body-sm text-ink-secondary max-w-md">
                Supervisor logs attendance directly on their mobile browser. Tap green for present, orange for absent. Saves wages on ghost workers instantly.
              </p>
            </div>

            {/* Interactive Widget: Live Attendance Log */}
            <div className="mt-8 bg-surface-raised border border-edge-subtle rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between text-[10px] font-bold text-ink-tertiary uppercase tracking-widest pb-2 border-b border-edge-subtle">
                <span>Site: DLF Villa 42</span>
                <span className="text-brand-600">Mark Attendance</span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {attendance.map((worker, idx) => (
                  <button
                    key={idx}
                    onClick={() => toggleAttendance(idx)}
                    className={`flex flex-col items-center justify-center p-3.5 rounded-xl border text-center transition-all ${
                      worker.present
                        ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-700"
                        : "bg-amber-500/5 border-amber-500/20 text-amber-600"
                    }`}
                  >
                    <div className={`w-2.5 h-2.5 rounded-full mb-2 ${worker.present ? "bg-emerald-500" : "bg-amber-500"}`} />
                    <span className="text-xs font-bold block truncate max-w-full text-ink-primary">{worker.name.split(" ")[0]}</span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-ink-secondary mt-0.5">
                      {worker.present ? "Present" : "Absent"}
                    </span>
                  </button>
                ))}
              </div>
              <p className="text-[10px] text-ink-tertiary leading-normal text-left">
                * Click a card to toggle presence. Worker receives automatic check-in SMS.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Interactive Profit Margin Calculator (Grid Span 5) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-5 card-feature bg-white flex flex-col justify-between"
          >
            <div className="text-left space-y-3">
              <div className="p-3 bg-gold-50 text-gold-600 rounded-2xl border border-gold-100 w-11 h-11 flex items-center justify-center">
                <DollarSign className="w-5 h-5" />
              </div>
              <h3 className="headline-card text-ink-primary">
                Smart Wall Quotations
              </h3>
              <p className="body-sm text-ink-secondary">
                Generate estimates instantly. Input wall area and rates to calculate client quotations, painting budgets, and check margins.
              </p>
            </div>

            {/* Interactive Widget: Live Estimator */}
            <div className="mt-8 bg-surface-raised border border-edge-subtle rounded-2xl p-5 space-y-4">
              <div className="flex items-center justify-between text-[10px] font-bold text-ink-tertiary uppercase tracking-widest pb-2 border-b border-edge-subtle">
                <span>Wall Cost Estimator</span>
                <span className="text-emerald-600 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">Calculated</span>
              </div>
              
              <div className="space-y-3 text-left">
                <div>
                  <label className="text-[10px] font-bold text-ink-secondary uppercase tracking-wider block mb-1">
                    Wall Area (Sq.Ft): <span className="font-mono text-xs text-ink-primary font-bold">{wallArea}</span>
                  </label>
                  <input
                    type="range"
                    min="500"
                    max="10000"
                    step="500"
                    value={wallArea}
                    onChange={(e) => setWallArea(Number(e.target.value))}
                    className="w-full h-1.5 bg-edge-subtle rounded-full appearance-none cursor-pointer accent-brand-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-bold text-ink-secondary uppercase tracking-wider block mb-1">
                      Material (₹/Sq.Ft)
                    </label>
                    <Input
                      type="number"
                      value={materialRate}
                      onChange={(e) => setMaterialRate(Number(e.target.value))}
                      className="h-9 text-xs bg-white"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-ink-secondary uppercase tracking-wider block mb-1">
                      Labor (₹/Sq.Ft)
                    </label>
                    <Input
                      type="number"
                      value={laborRate}
                      onChange={(e) => setLaborRate(Number(e.target.value))}
                      className="h-9 text-xs bg-white"
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center bg-brand-50 border border-brand-100 p-3 rounded-xl mt-2">
                  <span className="text-xs font-bold text-brand-700">Estimated Cost:</span>
                  <span className="text-sm font-extrabold text-brand-950 font-mono">₹{calculatedCost.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Saturday Payroll Settlements (Grid Span 6) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-6 card-feature bg-white flex flex-col justify-between"
          >
            <div className="text-left space-y-3">
              <div className="p-3 bg-brand-50 text-brand-600 rounded-2xl border border-brand-100 w-11 h-11 flex items-center justify-center">
                <Wallet className="w-5 h-5" />
              </div>
              <h3 className="headline-card text-ink-primary">
                WhatsApp Payroll Slips
              </h3>
              <p className="body-sm text-ink-secondary">
                At weekend settlements, share wages breakdowns (Wages − Advances) directly to workers on WhatsApp. Build trust with clear transparency.
              </p>
            </div>

            {/* Custom SVG wage mock */}
            <div className="mt-8 bg-surface-raised border border-edge-subtle rounded-2xl p-5 text-left space-y-3">
              <div className="flex items-center justify-between text-[10px] font-bold text-ink-tertiary uppercase tracking-widest pb-2 border-b border-edge-subtle">
                <span>WhatsApp Slip Generator</span>
                <span className="text-emerald-500 font-bold bg-emerald-500/10 px-2 py-0.5 rounded">Ready</span>
              </div>
              <div className="bg-emerald-500/5 border border-emerald-500/10 p-3.5 rounded-xl space-y-2 text-xs">
                <p className="font-bold text-emerald-800">✅ Slip for Sanjay Singh</p>
                <div className="space-y-1 text-emerald-700 text-[10px] font-medium leading-relaxed font-mono">
                  <p>• Total Present Days: 6 days</p>
                  <p>• Wage Rate: ₹750/day</p>
                  <p>• Total Wages Earned: ₹4,500</p>
                  <p>• Less Advances Taken: -₹800</p>
                  <p className="font-bold border-t border-emerald-200/50 pt-1 mt-1 text-xs">
                    • Net Payable Amount: ₹3,700
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Site Supervisor Mode (Grid Span 6) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="md:col-span-6 card-feature bg-white flex flex-col justify-between"
          >
            <div className="text-left space-y-3">
              <div className="p-3 bg-gold-50 text-gold-600 rounded-2xl border border-gold-100 w-11 h-11 flex items-center justify-center">
                <Hammer className="w-5 h-5" />
              </div>
              <h3 className="headline-card text-ink-primary">
                Site Material Logs
              </h3>
              <p className="body-sm text-ink-secondary">
                Track primer, putty, paint buckets, and brushes consumed per site. Stop supervisors from stealing materials or leaking stock.
              </p>
            </div>

            {/* Stock ledger widget */}
            <div className="mt-8 bg-surface-raised border border-edge-subtle rounded-2xl p-5 text-left space-y-3">
              <div className="flex items-center justify-between text-[10px] font-bold text-ink-tertiary uppercase tracking-widest pb-2 border-b border-edge-subtle">
                <span>Material Log Ledger</span>
                <span className="text-brand-600">DLF Villa</span>
              </div>
              <div className="space-y-2 text-xs">
                {[
                  { name: "Royal Luxury Emulsion", qty: "4 Buckets", status: "Stocked" },
                  { name: "Wall Putty (Ultra)", qty: "12 Bags", status: "Consumed" },
                  { name: "Paint Rollers & Brushes", qty: "8 Units", status: "Stocked" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center bg-white border border-edge-subtle p-2.5 rounded-xl">
                    <div>
                      <h5 className="font-bold text-ink-primary">{item.name}</h5>
                      <span className="text-[9px] text-ink-tertiary font-bold uppercase tracking-wider">{item.qty}</span>
                    </div>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${
                      item.status === "Consumed" ? "bg-red-50 text-red-600 border border-red-100" : "bg-emerald-50 text-emerald-600 border border-emerald-100"
                    }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
