"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    router.push(`/signup?email=${encodeURIComponent(email)}`);
  };

  return (
    <section className="bg-[#F5F7F8] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#0b192c] rounded-3xl overflow-hidden py-16 px-8 sm:px-16 shadow-2xl border border-[#2c476f]/30">
          {/* Background decoration */}
          <div className="absolute inset-0 z-0 overflow-hidden opacity-30">
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-gradient-to-br from-[#008dda] to-emerald-500 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#008dda] blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400">
              <Zap className="w-3.5 h-3.5 fill-emerald-400" /> Join 200+ contractors saving ₹20k+/month
            </div>
            
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              Ready to stop leaking site profits? <br />
              <span className="text-[#008dda]">Start your free trial today.</span>
            </h2>
            
            <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              No credit card required. Setting up your first site takes less than 30 seconds. No more jugaad — just results.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
              <Input
                type="email"
                placeholder="Enter your email address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#1a2f4c]/60 border-[#2c476f]/55 text-white placeholder-gray-400 focus:border-[#008dda] focus:ring-[#008dda]/45 h-12 rounded-xl"
              />
              <Button
                type="submit"
                className="bg-[#008dda] hover:bg-[#0077b6] text-white font-bold h-12 px-6 rounded-xl border-0 shadow-lg shadow-[#008dda]/25 gap-2 shrink-0 transition-transform active:scale-95"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Button>
            </form>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-400 pt-4">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Cancel online anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
