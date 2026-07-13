"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const faqs = [
    {
      q: "How long is the free trial, and do I need a credit card?",
      a: "The free trial lasts for 14 days. You can access all Professional features without entering any credit card or debit card details.",
    },
    {
      q: "Do my workers need to download this app?",
      a: "No! Only the contractor or site supervisor needs the app to log attendance, advances, and expenses. Your workers will receive SMS updates and WhatsApp salary slips directly, without needing to install anything.",
    },
    {
      q: "Does PaintCMS work offline at remote sites?",
      a: "Yes! You can mark attendance, add new sites, and log expenses even when you have zero mobile network. All data is saved on your device and will automatically sync once you are back online.",
    },
    {
      q: "How does the WhatsApp payroll slip integration work?",
      a: "PaintCMS automatically calculates each worker's weekly wage (Days × Rate − Advances). It then creates a neat text summary with a breakdown and opens WhatsApp with the message pre-filled. You just have to tap 'Send'.",
    },
    {
      q: "Is my business data safe?",
      a: "Absolutely. Your data is encrypted and saved securely in cloud servers. We do not share your details or worker databases with any third-party marketing companies.",
    },
    {
      q: "What are the limits on sites and workers?",
      a: "Our Starter plan is free forever and allows 2 active sites and 5 workers. The Professional plan increases this to 10 active sites and 25 workers. The Business plan has absolutely no limits.",
    },
    {
      q: "Can I cancel my subscription anytime?",
      a: "Yes, there is no lock-in period. You can cancel, upgrade, or downgrade your plan instantly from your dashboard settings.",
    },
  ];

  return (
    <section className="py-24 bg-surface-base border-b border-edge-default relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="eyebrow-pill">F.A.Q.</span>
          <h2 className="headline-section text-ink-primary">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Minimal Accordion List */}
        <div className="w-full border-t border-edge-default">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border-b border-edge-default bg-surface-base transition-all duration-300"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="flex items-center justify-between w-full font-heading font-bold text-left text-sm sm:text-base text-ink-primary py-6 focus:outline-none hover:text-brand-600 transition-colors"
                >
                  <span>{faq.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-ink-tertiary shrink-0"
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="text-ink-secondary text-xs sm:text-sm leading-relaxed pb-6 pt-1 text-left">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
