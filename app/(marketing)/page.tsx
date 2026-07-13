import Hero from "@/components/landing/Hero";
import ProblemStatement from "@/components/landing/ProblemStatement";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import MetricsStrip from "@/components/landing/MetricsStrip";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";

export default function MarketingPage() {
  return (
    <>
      <main className="flex-1">
        <Hero />
        <ProblemStatement />
        <Features />
        <HowItWorks />
        <MetricsStrip />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}
