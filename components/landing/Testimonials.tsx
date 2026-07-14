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
    <section className="relative overflow-hidden py-28">

      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[420px] w-[420px] rounded-full bg-primary/10 blur-[140px]" />
        <div className="absolute right-0 bottom-0 h-[380px] w-[380px] rounded-full bg-sky-500/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <div
            className="
          inline-flex
          items-center
          rounded-full
          border
          border-primary/20
          bg-primary/10
          px-4
          py-1.5
          text-[11px]
          font-bold
          uppercase
          tracking-[0.22em]
          text-primary
          backdrop-blur-xl
        "
          >
            Success Stories
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-foreground sm:text-5xl">
            Trusted by Painting Contractors
            <span className="block text-primary">
              Across India
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Thousands of labour entries, payments, quotations and projects managed
            every month with PaintCMS.
          </p>

        </motion.div>

        {/* Reviews */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">

          {reviews.map((rev, idx) => (

            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                duration: 0.25,
              }}
            >

              <div
                className="
              group
              relative
              flex
              h-full
              flex-col
              justify-between
              overflow-hidden
              rounded-[32px]
              border
              border-white/20
              bg-white/70
              p-8
              shadow-[0_20px_60px_rgba(15,23,42,0.08)]
              backdrop-blur-3xl
              transition-all
              duration-500

              hover:border-primary/20
              hover:shadow-[0_30px_80px_rgba(59,130,246,0.12)]

              dark:border-white/10
              dark:bg-slate-950/70
            "
              >

                {/* Decorative glow */}

                <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />

                {/* Quote icon */}

                <div
                  className="
                absolute
                right-8
                top-8
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-primary/10
                text-primary/40
              "
                >
                  <Quote className="h-6 w-6 rotate-180" />
                </div>

                <div className="relative z-10">

                  {/* Stars */}

                  <div className="mb-6 flex items-center gap-1">

                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}

                  </div>

                  {/* Quote */}

                  <blockquote className="text-[15px] leading-8 text-muted-foreground">
                    “{rev.quote}”
                  </blockquote>

                </div>

                {/* Footer */}

                <div className="relative z-10 mt-10 border-t border-white/10 pt-6">

                  <div className="flex items-center gap-4">

                    <div
                      className={`
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    font-bold
                    shadow-lg
                    backdrop-blur-xl
                    ${rev.avatarColor}
                  `}
                    >
                      {rev.initials}
                    </div>

                    <div className="min-w-0">

                      <h4 className="truncate text-base font-bold text-foreground">
                        {rev.name}
                      </h4>

                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                        {rev.business}
                      </p>

                      <p className="mt-1 text-sm text-primary">
                        {rev.location}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
