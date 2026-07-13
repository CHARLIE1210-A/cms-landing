"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { fadeUp } from "@/lib/animations";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rajesh Khanna",
      business: "Khanna & Sons Painting",
      location: "New Delhi",
      quote: "Earlier we used paper diaries. Painters would argue at Saturday payments, claiming they worked 6 days instead of 5. Now, with PaintCMS, I mark daily attendance and share the logs on WhatsApp. The wage disputes have completely stopped, saving me thousands of Rupees.",
      rating: 5,
      avatarColor: "bg-brand-50 text-brand-700 border-brand-200",
      initials: "RK",
    },
    {
      name: "Gurpreet Singh",
      business: "G.S. Decorators",
      location: "Chandigarh",
      quote: "Deducting advances was a weekly nightmare. Painters request ₹1,000 for emergencies, and we write it on scrap papers. PaintCMS records advances on the spot. On Saturday, it calculates net wage automatically. Saved me at least ₹22,000 in forgotten advances last month!",
      rating: 5,
      avatarColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      initials: "GS",
    },
    {
      name: "Mohan Lal",
      business: "Lal Paint Works",
      location: "Bengaluru",
      quote: "I manage 8 painting sites simultaneously and cannot visit all of them daily. This dashboard shows me exactly who is working where, who took advances, and what my site-by-site margin is. Best business decision I've made in years.",
      rating: 5,
      avatarColor: "bg-gold-50 text-gold-700 border-gold-200",
      initials: "ML",
    },
  ];

  return (
    <section className="py-24 bg-surface-raised border-b border-edge-default relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="eyebrow-pill">Case Studies</span>
          <h2 className="headline-section text-ink-primary">
            Trusted by the contractors painting India
          </h2>
        </div>

        {/* 3-Column Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="card-hover bg-white rounded-3xl p-8 relative transition-all duration-300 flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-8 w-8 h-8 text-neutral-200 opacity-30 rotate-180" />
              
              <div className="space-y-4 relative z-10 text-left">
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-ink-secondary text-sm leading-relaxed">
                  "{rev.quote}"
                </p>
              </div>

              {/* User Bio info */}
              <div className="mt-8 pt-6 border-t border-edge-subtle flex items-center gap-3.5 text-left">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs border ${rev.avatarColor} shrink-0`}>
                  {rev.initials}
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-ink-primary">
                    {rev.name}
                  </h4>
                  <p className="text-[10px] text-ink-tertiary font-bold uppercase tracking-wider">
                    {rev.business} • {rev.location}
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
