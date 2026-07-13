"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

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
    <section id="pricing" className="py-24 bg-surface-base border-b border-edge-default relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="eyebrow-pill">Fair Pricing</span>
          <h2 className="headline-section text-ink-primary">
            Plans that grow with your workforce
          </h2>
          <p className="body-base text-ink-secondary">
            No hidden setup fees, no locks. Cancel or modify your active subscription instantly.
          </p>
        </div>

        {/* Dynamic Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-xs font-bold uppercase tracking-wider ${!isAnnual ? "text-ink-primary" : "text-ink-tertiary"}`}>
            Billed Monthly
          </span>
          <div className="flex items-center">
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-brand-600"
              aria-label="Toggle annual billing"
            />
          </div>
          <span className={`text-xs font-bold uppercase tracking-wider flex items-center gap-2 ${isAnnual ? "text-ink-primary" : "text-ink-tertiary"}`}>
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
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex"
              >
                <Card
                  className={`relative flex flex-col justify-between w-full rounded-3xl border transition-all duration-300 ${
                    isPro
                      ? "bg-brand-950 border-brand-500 text-white shadow-card-lg scale-103 z-10"
                      : "bg-white border-edge-default text-ink-primary shadow-card hover:shadow-card-md hover:border-brand-500/40"
                  }`}
                >
                  {/* Pro Ribbon */}
                  {isPro && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-brand-600 text-white text-[10px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-card">
                      Most Popular Plan
                    </span>
                  )}

                  <CardHeader className="pt-8 pb-6 px-6 sm:px-8 text-left">
                    <CardTitle className="font-heading font-extrabold text-2xl">
                      {tier.name}
                    </CardTitle>
                    <CardDescription className={`text-xs sm:text-sm mt-1.5 ${isPro ? "text-brand-200" : "text-ink-secondary"}`}>
                      {tier.description}
                    </CardDescription>

                    <div className="mt-6 flex items-baseline">
                      <span className="text-4xl font-extrabold tracking-tight font-mono">
                        ₹{isAnnual ? tier.price.annual.toLocaleString("en-IN") : tier.price.monthly.toLocaleString("en-IN")}
                      </span>
                      <span className={`text-xs font-bold uppercase tracking-wider ml-1.5 ${isPro ? "text-brand-300" : "text-ink-tertiary"}`}>/ month</span>
                    </div>
                    {isAnnual && tier.price.annual > 0 && (
                      <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mt-1 block">
                        Billed ₹{(tier.price.annual * 12).toLocaleString("en-IN")} / year
                      </span>
                    )}
                  </CardHeader>

                  <CardContent className="px-6 sm:px-8 pb-8 text-left flex-1">
                    <hr className={`mb-6 ${isPro ? "border-brand-900" : "border-edge-subtle"}`} />
                    <ul className="space-y-4">
                      {tier.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-3.5 text-xs sm:text-sm">
                          {feature.included ? (
                            <Check className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                          ) : (
                            <X className={`w-4.5 h-4.5 shrink-0 mt-0.5 ${isPro ? "text-white/20" : "text-neutral-300"}`} />
                          )}
                          <span className={`${
                            feature.included
                              ? isPro ? "text-brand-100 font-medium" : "text-ink-secondary font-medium"
                              : isPro ? "text-white/20 line-through" : "text-neutral-400 line-through"
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
                          ? "bg-white hover:bg-neutral-100 text-brand-950 shadow-[0_4px_20px_rgba(255,255,255,0.1)]"
                          : "btn btn-primary"
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
