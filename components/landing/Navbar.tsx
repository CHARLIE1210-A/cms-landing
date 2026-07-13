"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Paintbrush, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "How it works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-55 transition-all duration-500 px-4 sm:px-6 lg:px-8 py-4">
        <motion.div
          animate={{
            y: 0,
            maxWidth: isScrolled ? "1100px" : "1280px",
            backgroundColor: isScrolled ? "rgba(11, 21, 40, 0.85)" : "rgba(11, 21, 40, 0)",
            boxShadow: isScrolled ? "0 20px 40px -15px rgba(3, 7, 18, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08)" : "none",
            borderRadius: isScrolled ? "9999px" : "0px",
            paddingLeft: isScrolled ? "24px" : "16px",
            paddingRight: isScrolled ? "24px" : "16px",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="mx-auto w-full flex items-center justify-between py-3 backdrop-blur-[2px]"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="bg-[#38bdf8] p-2 rounded-xl text-[#030712] shadow-[0_0_20px_rgba(56,189,248,0.4)] group-hover:scale-105 transition-transform duration-300">
              <Paintbrush className="w-4 h-4" />
            </div>
            <span className="font-heading font-extrabold text-lg tracking-tight text-white">
              Paint<span className="text-[#38bdf8]">CMS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              href="/login"
              className="text-xs font-semibold uppercase tracking-wider text-gray-300 hover:text-white transition-colors duration-200"
            >
              Login
            </Link>
            <Button
              render={<Link href="/signup" />}
              className="bg-white hover:bg-gray-100 text-[#030712] font-bold text-xs uppercase tracking-wider px-5 py-2.5 rounded-full border-0 transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_25px_rgba(56,189,248,0.3)] gap-1.5"
            >
              Start Free Trial <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white focus:outline-none border border-white/5 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </motion.div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-[#0b1528] border border-white/10 rounded-3xl p-6 mt-3 shadow-2xl space-y-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2.5 rounded-xl text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-white hover:bg-white/5"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-white/10 my-4" />
              <div className="flex flex-col gap-3">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center py-2.5 text-sm font-semibold uppercase tracking-wider text-gray-300 hover:text-white"
                >
                  Login
                </Link>
                <Button
                  render={<Link href="/signup" />}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-[#38bdf8] hover:bg-[#0ea5e9] text-[#030712] font-bold text-xs uppercase tracking-wider py-3.5 rounded-xl border-0 shadow-lg"
                >
                  Start Free Trial
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
