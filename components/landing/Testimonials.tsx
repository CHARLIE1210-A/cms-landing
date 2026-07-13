"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rajesh Khanna",
      business: "Khanna & Sons Painting",
      location: "New Delhi",
      quote: "Earlier we used paper diaries. Painters would argue at Saturday payments, claiming they worked 6 days instead of 5. Now, with PaintCMS, I mark daily attendance and share the logs on WhatsApp. The wage disputes have completely stopped, saving me thousands of Rupees.",
      rating: 5,
      avatarColor: "bg-[#38bdf8]/10 text-[#38bdf8] border-[#38bdf8]/20",
      initials: "RK",
    },
    {
      name: "Gurpreet Singh",
      business: "G.S. Decorators",
      location: "Chandigarh",
      quote: "Deducting advances was a weekly nightmare. Painters request ₹1,000 for emergencies, and we write it on scrap papers. PaintCMS records advances on the spot. On Saturday, it calculates net wage automatically. Saved me at least ₹22,000 in forgotten advances last month!",
      rating: 5,
      avatarColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      initials: "GS",
    },
    {
      name: "Mohan Lal",
      business: "Lal Paint Works",
      location: "Bengaluru",
      quote: "I manage 8 painting sites simultaneously and cannot visit all of them daily. This dashboard shows me exactly who is working where, who took advances, and what my site-by-site margin is. Best business decision I've made in years.",
      rating: 5,
      avatarColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      initials: "ML",
    },
  ];

  return (
    <section className="py-24 bg-[#faf9f6] border-b border-[#e5e4da] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-extrabold text-[#38bdf8] uppercase tracking-widest">
            Case Studies
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0b1528] tracking-tighter leading-tight">
            Trusted by the contractors painting India
          </h2>
        </div>

        {/* 3-Column Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white border border-[#e5e4da]/70 rounded-3xl p-8 relative shadow-premium hover:shadow-premium-hover hover:border-[#38bdf8]/35 transition-all duration-300 flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-8 w-8 h-8 text-[#e5e4da]/30 rotate-180" />
              
              <div className="space-y-4 relative z-10 text-left">
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  "{rev.quote}"
                </p>
              </div>

              {/* User Bio info */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex items-center gap-3.5 text-left">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs border ${rev.avatarColor} shrink-0`}>
                  {rev.initials}
                </div>
                <div>
                  <h4 className="font-heading font-extrabold text-sm text-[#0b1528]">
                    {rev.name}
                  </h4>
                  <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">
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
