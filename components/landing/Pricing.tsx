"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const tiers = [
    {
      name: "Starter",
      description: "Perfect for single-site contractors starting out.",
      price: { monthly: 0, annual: 0 },
      features: [
        { name: "Up to 2 active sites", included: true },
        { name: "Up to 5 workers tracked", included: true },
        { name: "Daily attendance marking", included: true },
        { name: "Manual cash advance logging", included: true },
        { name: "Automated SMS to workers", included: false },
        { name: "WhatsApp payroll slips", included: false },
        { name: "Detailed profit analytics", included: false },
        { name: "PDF Quotation Builder", included: false },
      ],
      cta: "Get Started Free",
      popular: false,
      href: "/signup?plan=starter",
    },
    {
      name: "Professional",
      description: "Best for active contractors running multiple sites.",
      price: { monthly: 999, annual: 799 },
      features: [
        { name: "Up to 10 active sites", included: true },
        { name: "Up to 25 workers tracked", included: true },
        { name: "Daily attendance marking", included: true },
        { name: "Manual cash advance logging", included: true },
        { name: "Automated SMS to workers", included: true },
        { name: "WhatsApp payroll slips", included: true },
        { name: "Detailed profit analytics", included: true },
        { name: "PDF Quotation Builder", included: false },
      ],
      cta: "Start 14-Day Free Trial",
      popular: true,
      href: "/signup?plan=pro",
    },
    {
      name: "Business",
      description: "For established painting firms with massive crews.",
      price: { monthly: 2499, annual: 1999 },
      features: [
        { name: "Unlimited active sites", included: true },
        { name: "Unlimited workers tracked", included: true },
        { name: "Daily attendance marking", included: true },
        { name: "Manual cash advance logging", included: true },
        { name: "Automated SMS to workers", included: true },
        { name: "WhatsApp payroll slips", included: true },
        { name: "Detailed profit analytics", included: true },
        { name: "PDF Quotation Builder", included: true },
      ],
      cta: "Start 14-Day Free Trial",
      popular: false,
      href: "/signup?plan=business",
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white border-b border-[#e5e4da] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-extrabold text-[#38bdf8] uppercase tracking-widest">
            Fair Pricing
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0b1528] tracking-tighter leading-tight">
            Plans that grow with your workforce
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            No hidden setup fees, no locks. Cancel or modify your active subscription instantly.
          </p>
        </div>

        {/* Dynamic Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-xs font-bold uppercase tracking-wider ${!isAnnual ? "text-[#0b1528]" : "text-gray-400"}`}>
            Billed Monthly
          </span>
          <div className="flex items-center">
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-[#38bdf8]"
              aria-label="Toggle annual billing"
            />
          </div>
          <span className={`text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${isAnnual ? "text-[#0b1528]" : "text-gray-400"}`}>
            Billed Annually
            <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-600 font-bold border-0 text-[10px] py-0.5 px-2.5 rounded-full uppercase tracking-wider">
              Save 20%
            </Badge>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {tiers.map((tier, idx) => {
            const isPro = tier.popular;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="flex"
              >
                <Card
                  className={`relative flex flex-col justify-between w-full rounded-3xl border transition-all duration-300 ${
                    isPro
                      ? "bg-[#0b1528] border-[#38bdf8] text-white shadow-[0_40px_80px_-15px_rgba(3,7,18,0.3)] scale-103"
                      : "bg-[#faf9f6]/40 border-[#e5e4da]/80 text-[#0b1528] shadow-premium hover:shadow-premium-hover hover:border-[#38bdf8]/35"
                  }`}
                >
                  {/* Pro Ribbon */}
                  {isPro && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#38bdf8] text-[#030712] text-[10px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md">
                      Most Popular Plan
                    </span>
                  )}

                  <CardHeader className="pt-8 pb-6 px-6 sm:px-8 text-left">
                    <CardTitle className="font-heading font-extrabold text-2xl">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className={`text-xs sm:text-sm mt-1.5 ${isPro ? "text-gray-400" : "text-gray-500"}`}>
                      {tier.description}
                    </CardDescription>

                    <div className="mt-6 flex items-baseline">
                      <span className="text-4xl font-extrabold tracking-tight">
                        ₹{isAnnual ? tier.price.annual.toLocaleString("en-IN") : tier.price.monthly.toLocaleString("en-IN")}
                      </span>
                      <span className={`text-xs font-bold uppercase tracking-wider ml-1.5 ${isPro ? "text-gray-400" : "text-gray-500"}`}>/ month</span>
                    </div>
                    {isAnnual && tier.price.annual > 0 && (
                      <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider mt-1 block">
                        Billed ₹{(tier.price.annual * 12).toLocaleString("en-IN")} / year
                      </span>
                    )}
                  </CardHeader>

                  <CardContent className="px-6 sm:px-8 pb-8 text-left flex-1">
                    <hr className={`mb-6 ${isPro ? "border-white/5" : "border-[#e5e4da]/60"}`} />
                    <ul className="space-y-4">
                      {tier.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3.5 text-xs sm:text-sm">
                          {feature.included ? (
                            <Check className="w-4.5 h-4.5 text-emerald-400 shrink-0 mt-0.5" />
                          ) : (
                            <X className={`w-4.5 h-4.5 shrink-0 mt-0.5 ${isPro ? "text-white/20" : "text-gray-300"}`} />
                          )}
                          <span className={`${
                            feature.included
                              ? isPro ? "text-gray-200 font-medium" : "text-gray-700 font-medium"
                              : isPro ? "text-white/20 line-through" : "text-gray-400 line-through"
                          }`}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="px-6 sm:px-8 pb-8 pt-0">
                    <Button
                      render={<Link href={tier.href} />}
                      className={`w-full font-bold text-xs uppercase tracking-wider py-6 rounded-2xl border-0 shadow transition-all duration-300 ${
                        isPro
                          ? "bg-white hover:bg-gray-100 text-[#030712] shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
                          : "bg-[#0b1528] hover:bg-[#13243c] text-white"
                      }`}
                    >
                      {tier.cta} <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
