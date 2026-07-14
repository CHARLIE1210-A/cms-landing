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
import { AppBadge } from "../shared/app-badge";

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
          <AppBadge color="violet" className="py-4 px-8">
            Fair Pricing
          </AppBadge>
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
            <AppBadge color="emerald">
              Save 20%
            </AppBadge>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        {/* Pricing Cards */}
        <div className="grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3 items-stretch mx-auto">
          {tiers.map((tier) => {
            const isPro = tier.popular;

            return (
              <motion.div
                key={tier.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  type: "spring",
                  stiffness: 250,
                  damping: 20,
                }}
                className="flex perspective-[1200px]"
              >
                <motion.div
                  whileHover={{
                    rotateX: 3,
                    rotateY: isPro ? -4 : 4,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 18,
                  }}
                  className="w-full"
                >
                  <Card
                    className={`
              group
              relative
              overflow-hidden
              rounded-[34px]
              border
              backdrop-blur-3xl
              transition-all
              duration-500
              flex
              flex-col
              h-full

              ${isPro
                        ? `
                    border-primary/30
                    bg-gradient-to-br
                    from-primary/15
                    via-background/90
                    to-violet-500/10
                    shadow-[0_25px_80px_rgba(79,70,229,0.25)]
                  `
                        : `
                    border-white/20
                    bg-white/65
                    dark:bg-slate-950/55
                    shadow-[0_15px_60px_rgba(15,23,42,0.08)]
                    hover:border-primary/30
                  `
                      }
            `}
                  >
                    {/* Background Glow */}

                    <div
                      className={`
                absolute
                inset-0
                opacity-0
                transition-opacity
                duration-500
                group-hover:opacity-100

                ${isPro
                          ? "bg-[radial-gradient(circle_at_top,rgba(99,102,241,.20),transparent_65%)]"
                          : "bg-[radial-gradient(circle_at_top,rgba(99,102,241,.08),transparent_70%)]"
                        }
              `}
                    />

                    {/* Animated Border */}

                    {isPro && (
                      <motion.div
                        animate={{
                          opacity: [0.35, 1, 0.35],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                        }}
                        className="absolute inset-0 rounded-[34px] border border-primary/40"
                      />
                    )}

                    {/* Ribbon */}

                    {isPro && (
                      <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{
                          scale: [1, 1.08, 1],
                        }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                        }}
                        className="absolute left-1/2 top-5 -translate-x-1/2 z-20"
                      >
                        <div className="rounded-full bg-primary px-5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-black shadow-xl">
                          Most Popular
                        </div>
                      </motion.div>
                    )}

                    <CardHeader className="relative pt-14 pb-8 px-8">

                      <CardTitle className="font-heading font-extrabold text-3xl">
                        {tier.name}
                      </CardTitle>

                      <CardDescription className="mt-3 text-sm leading-6 text-muted-foreground">
                        {tier.description}
                      </CardDescription>

                      <div className="mt-8">

                        <div className="flex items-end gap-2">

                          <span className="text-5xl font-black tracking-tight">
                            ₹
                            {isAnnual
                              ? tier.price.annual.toLocaleString("en-IN")
                              : tier.price.monthly.toLocaleString("en-IN")}
                          </span>

                          <span className="pb-2 text-sm font-semibold text-muted-foreground">
                            / month
                          </span>

                        </div>

                        {isAnnual && tier.price.annual > 0 && (
                          <p className="mt-2 text-xs font-semibold text-emerald-500">
                            ₹
                            {(tier.price.annual * 12).toLocaleString("en-IN")}
                            {" "}
                            billed yearly
                          </p>
                        )}

                      </div>

                    </CardHeader>

                    <CardContent className="relative flex-1 px-8">

                      <div className="mb-7 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                      <ul className="space-y-4">

                        {tier.features.map((feature, index) => (
                          <motion.li
                            key={feature.name}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{
                              opacity: 1,
                              x: 0,
                            }}
                            transition={{
                              delay: index * 0.05,
                            }}
                            className="flex items-start gap-3"
                          >
                            {feature.included ? (
                              <motion.div
                                whileHover={{
                                  rotate: 12,
                                  scale: 1.15,
                                }}
                              >
                                <Check className="mt-0.5 h-5 w-5 text-emerald-500" />
                              </motion.div>
                            ) : (
                              <X className="mt-0.5 h-5 w-5 text-muted-foreground/30" />
                            )}

                            <span
                              className={`text-sm leading-6 ${feature.included
                                ? "font-medium text-foreground"
                                : "line-through text-muted-foreground/40"
                                }`}
                            >
                              {feature.name}
                            </span>
                          </motion.li>
                        ))}

                      </ul>

                    </CardContent>

                    <CardFooter className="relative px-8 pb-8 pt-8">

                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full"
                      >
                        <Button
                          render={<Link href={tier.href} />}
                          nativeButton={false}
                          className={`
                    relative
                    overflow-hidden
                    h-14
                    w-full
                    rounded-2xl
                    text-sm
                    font-bold
                    tracking-wide

                    ${isPro
                              ? `
                          bg-primary
                          text-black
                          shadow-xl
                          shadow-primary/30
                          hover:bg-primary/90
                        `
                              : `
                          border
                          border-white/20
                          bg-white/70
                          text-foreground
                          backdrop-blur-xl
                          hover:bg-white
                          dark:bg-white/5
                        `
                            }
                  `}
                        >
                          {/* Shine */}

                          <span className="absolute inset-0 overflow-hidden rounded-2xl">

                            <span className="absolute -left-20 top-0 h-full w-20 -skew-x-12 bg-white/40 transition-all duration-700 group-hover:left-[120%]" />

                          </span>

                          <span className="relative flex items-center justify-center">
                            {tier.cta}

                            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                          </span>

                        </Button>
                      </motion.div>

                    </CardFooter>

                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
