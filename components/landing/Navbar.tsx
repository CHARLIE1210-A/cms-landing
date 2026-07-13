"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Paintbrush, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

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
            ? "bg-[#0b192c]/90 backdrop-blur-md border-b border-[#2c476f]/30 shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-[#008dda] p-2 rounded-lg text-white shadow-[0_0_15px_rgba(0,141,218,0.4)] group-hover:scale-105 transition-transform">
                <Paintbrush className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                Paint<span className="text-[#008dda]">CMS</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">
                Login
              </Link>
              <Button
                render={<Link href="/signup" />}
                className="bg-[#008dda] hover:bg-[#0077b6] text-white font-semibold px-5 py-2.5 rounded-lg border-0 transition-colors shadow-lg hover:shadow-[#008dda]/30"
              >
                Start Free Trial
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-[#0b192c] border-b border-[#2c476f]/30 px-4 pt-2 pb-6 space-y-3"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-[#1a2f4c]"
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-[#2c476f]/30 my-4" />
              <div className="flex flex-col gap-3 px-3">
                <Link
                  href="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-center py-2 text-base font-medium text-gray-300 hover:text-white"
                >
                  Login
                </Link>
                <Button
                  render={<Link href="/signup" />}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-[#008dda] hover:bg-[#0077b6] text-white font-semibold py-3 rounded-lg border-0"
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
