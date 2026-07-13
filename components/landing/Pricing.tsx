"use client";

import { useState } from "react";
import Link from "next/link";
import { Check, X } from "lucide-react";
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
    <section id="pricing" className="py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <h2 className="text-xs font-bold text-[#008dda] uppercase tracking-wider">
            Simple Pricing
          </h2>
          <p className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b192c] tracking-tight">
            Plans that grow with your business
          </p>
          <p className="text-gray-500 text-sm sm:text-base">
            No hidden charges. Upgrade or downgrade anytime you want.
          </p>
        </div>

        {/* Toggle Option */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <span className={`text-sm font-semibold ${!isAnnual ? "text-[#0b192c]" : "text-gray-400"}`}>
            Billed Monthly
          </span>
          <div className="flex items-center">
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-[#008dda]"
              aria-label="Toggle annual billing"
            />
          </div>
          <span className={`text-sm font-semibold flex items-center gap-1.5 ${isAnnual ? "text-[#0b192c]" : "text-gray-400"}`}>
            Billed Annually
            <Badge variant="secondary" className="bg-emerald-100 hover:bg-emerald-100 text-emerald-700 font-bold border-0 text-[10px] py-0.5 px-2">
              Save 20%
            </Badge>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="flex"
            >
              <Card
                className={`relative flex flex-col justify-between w-full rounded-2xl border ${
                  tier.popular
                    ? "border-[#008dda] shadow-xl ring-2 ring-[#008dda]/10 scale-102 bg-[#fcfcfc]"
                    : "border-gray-200/80 shadow-md bg-white hover:shadow-xl transition-shadow"
                }`}
              >
                {/* Popular Ribbon */}
                {tier.popular && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#008dda] text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow">
                    Most Popular
                  </span>
                )}

                <CardHeader className="pt-8 pb-6 px-6 sm:px-8">
                  <CardTitle className="font-heading font-extrabold text-2xl text-[#0b192c]">
                    {tier.name}
                  </CardTitle>
                  <CardDescription className="text-gray-500 text-xs sm:text-sm mt-1">
                    {tier.description}
                  </CardDescription>

                  <div className="mt-6 flex items-baseline text-[#0b192c]">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                      ₹{isAnnual ? tier.price.annual.toLocaleString("en-IN") : tier.price.monthly.toLocaleString("en-IN")}
                    </span>
                    <span className="text-sm font-semibold text-gray-500 ml-1">/month</span>
                  </div>
                  {isAnnual && tier.price.annual > 0 && (
                    <span className="text-[11px] font-medium text-emerald-600 mt-1 block">
                      Billed ₹{(tier.price.annual * 12).toLocaleString("en-IN")}/year
                    </span>
                  )}
                </CardHeader>

                <CardContent className="px-6 sm:px-8 pb-8">
                  <hr className="border-gray-200/80 mb-6" />
                  <ul className="space-y-4">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-600">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? "text-gray-700 font-medium" : "text-gray-400 line-through"}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="px-6 sm:px-8 pb-8">
                  <Button
                    render={<Link href={tier.href} />}
                    className={`w-full font-bold py-6 rounded-xl border-0 shadow ${
                      tier.popular
                        ? "bg-[#008dda] hover:bg-[#0077b6] text-white"
                        : "bg-[#0b192c] hover:bg-[#1a2f4c] text-white"
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
