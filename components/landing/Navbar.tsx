"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Paintbrush, Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { staggerNav } from "@/lib/animations";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
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
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "navbar-glass py-3 shadow-card-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-brand-600 p-2 rounded-xl text-white shadow-card transition-transform group-hover:scale-105 duration-250">
                <Paintbrush className="w-4 h-4" />
              </div>
              <span className="font-heading font-bold text-lg tracking-tight text-ink-primary">
                Paint<span className="text-brand-600">CMS</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs font-semibold uppercase tracking-wider text-ink-secondary hover:text-ink-primary transition-colors duration-150"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/login"
                className="text-xs font-semibold uppercase tracking-wider text-ink-secondary hover:text-ink-primary transition-colors duration-150"
              >
                Login
              </Link>
              <Button
                render={<Link href="/signup" />}
                className="btn btn-primary btn-sm rounded-full"
              >
                Start Free Trial <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-surface-overlay text-ink-secondary hover:text-ink-primary focus:outline-none border border-edge-subtle"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4" />
              ) : (
                <Menu className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-surface-base border-b border-edge-default px-6 py-6 space-y-4 shadow-card-lg"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 rounded-xl text-sm font-semibold uppercase tracking-wider text-ink-secondary hover:text-ink-primary hover:bg-surface-overlay px-3"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-edge-subtle my-2" />
              <div className="flex flex-col gap-3">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center py-2 text-sm font-semibold uppercase tracking-wider text-ink-secondary hover:text-ink-primary"
                >
                  Login
                </Link>
                <Button
                  render={<Link href="/signup" />}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full btn btn-primary btn-md rounded-xl"
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
