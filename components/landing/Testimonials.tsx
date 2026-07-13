"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Rajesh Khanna",
      business: "Khanna & Sons Painting (Delhi NCR)",
      quote: "Earlier we used paper registers and workers used to argue at weekend payments, claiming they worked 6 days instead of 5. Now, with PaintCMS, I mark attendance and it sends them a WhatsApp log automatically. Wage disputes have completely stopped!",
      rating: 5,
    },
    {
      name: "Gurpreet Singh",
      business: "G.S. Decorators (Chandigarh)",
      quote: "Recording advances was a headache. Painters request ₹1,000 for emergencies, and we write it on random papers. PaintCMS records advances on the spot. On Saturday, it calculates net wage automatically. Saved me at least ₹22,000 last month!",
      rating: 5,
    },
    {
      name: "Mohan Lal",
      business: "Lal Paint Works (Bengaluru)",
      quote: "I run 8 painting sites simultaneously and cannot visit all of them daily. This dashboard shows me exactly who is working where, who took advances, and what my site-by-site margin is. Best business decision I've made.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-[#F5F7F8] border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-xs font-bold text-[#008dda] uppercase tracking-wider">
            Contractor Success Stories
          </h2>
          <p className="font-heading font-extrabold text-3xl sm:text-4xl text-[#0b192c] tracking-tight">
            Trusted by real contractors running real businesses
          </p>
        </div>

        {/* 3-Column Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white border border-gray-200/80 rounded-2xl p-8 shadow-md relative hover:shadow-xl hover:border-[#008dda]/30 transition-all duration-300 flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-blue-100 rotate-180" />
              
              <div className="space-y-4 relative z-10">
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-gray-600 text-sm leading-relaxed italic">
                  "{rev.quote}"
                </p>
              </div>

              {/* User Bio */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="font-heading font-extrabold text-sm text-[#0b192c]">
                  {rev.name}
                </h4>
                <p className="text-xs text-gray-500 font-medium">
                  {rev.business}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
