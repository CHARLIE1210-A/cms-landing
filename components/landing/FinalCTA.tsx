"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createClient } from "@/lib/supabase/client";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    router.push(`/signup?email=${encodeURIComponent(email)}`);
  };

  return (
    <section className="bg-surface-base py-20 border-b border-edge-default">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative bg-brand-950 rounded-[2.5rem] overflow-hidden py-20 px-8 sm:px-16 shadow-card-lg border border-brand-900">
          <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none" />
          
          {/* Radial Glowing Background */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-brand-500/20 to-gold-500/5 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-brand-300 uppercase tracking-widest">
              <Zap className="w-3.5 h-3.5 fill-brand-300" /> Join 200+ contractors saving ₹20k+/month
            </div>
            
            {/* Title */}
            <h2 className="headline-section text-white tracking-tighter leading-tight">
              Ready to stop leaking site profits? <br />
              <span className="text-brand-300">Start your free trial today.</span>
            </h2>
            
            {/* Description */}
            <p className="text-brand-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Set up your first painting site in under 30 seconds. No credit card required. No more jugaad — just results.
            </p>

            {/* Input Form */}
            {user ? (
              <div className="flex justify-center pt-2">
                <Button
                  render={<Link href="/dashboard" />}
                  className="bg-white hover:bg-neutral-100 text-brand-950 font-bold h-12 px-8 rounded-full border-0 shadow-card gap-2 transition-transform active:scale-95 text-xs uppercase tracking-wider cursor-pointer"
                >
                  Go to Dashboard <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/5 border-white/10 text-white placeholder-brand-300 focus:border-brand-500 focus:ring-brand-500/30 h-12 rounded-full px-6"
                />
                <Button
                  type="submit"
                  className="bg-white hover:bg-neutral-100 text-brand-950 font-bold h-12 px-6 rounded-full border-0 shadow-card gap-2 shrink-0 transition-transform active:scale-95 text-xs uppercase tracking-wider cursor-pointer"
                >
                  Get Started <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </form>
            )}

            {/* Security checklist */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-brand-300 pt-4 font-semibold uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-400" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-400" />
                <span>No credit card</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
