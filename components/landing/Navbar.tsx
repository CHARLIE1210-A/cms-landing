"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Paintbrush, Menu, X, ArrowRight, LogOut, Settings, LayoutDashboard, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { staggerNav } from "@/lib/animations";
import { createClient } from "@/lib/supabase/client";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const supabase = createClient();
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    setUser(null);
    router.push("/");
    router.refresh();
  };

  const getInitials = (email: string) => {
    if (!email) return "U";
    return email.split("@")[0].substring(0, 2).toUpperCase();
  };

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
              {user ? (
                <div className="flex items-center gap-3">
                  <Button
                    render={<Link href="/dashboard" />}
                    className="btn btn-primary btn-sm rounded-full"
                  >
                    Go to Dashboard <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-tr from-brand-600 to-brand-500 text-white font-bold text-xs ring-2 ring-brand-100 hover:ring-brand-200 transition-all cursor-pointer outline-none">
                        {getInitials(user.email)}
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 bg-white border border-edge-default rounded-xl p-1 shadow-md">
                      <DropdownMenuLabel className="px-2.5 py-2 text-xs font-bold text-ink-primary block">
                        <span className="block font-semibold truncate text-[10px] text-ink-secondary uppercase tracking-wider">Account</span>
                        <span className="block truncate text-xs text-ink-primary">{user.email}</span>
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator className="bg-edge-default my-1 h-px" />
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard" className="flex items-center gap-2 px-2.5 py-2 text-xs font-medium text-ink-secondary hover:text-ink-primary hover:bg-muted/40 rounded-lg cursor-pointer transition-colors outline-none">
                          <LayoutDashboard className="w-3.5 h-3.5 text-brand-600" />
                          Dashboard
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/dashboard/settings" className="flex items-center gap-2 px-2.5 py-2 text-xs font-medium text-ink-secondary hover:text-ink-primary hover:bg-muted/40 rounded-lg cursor-pointer transition-colors outline-none">
                          <Settings className="w-3.5 h-3.5 text-brand-600" />
                          Settings
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator className="bg-edge-default my-1 h-px" />
                      <DropdownMenuItem onClick={handleSignOut} className="flex items-center gap-2 px-2.5 py-2 text-xs font-semibold text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg cursor-pointer transition-colors outline-none">
                        <LogOut className="w-3.5 h-3.5" />
                        Log Out
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ) : (
                <>
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
                </>
              )}
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
                {user ? (
                  <>
                    <div className="flex items-center gap-2.5 px-3 py-2 bg-muted/30 rounded-xl border border-edge-default">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-brand-600 to-brand-500 text-white flex items-center justify-center font-bold text-xs">
                        {getInitials(user.email)}
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-xs font-bold text-ink-primary truncate max-w-[180px]">{user.email}</span>
                        <span className="text-[10px] text-ink-tertiary">Logged In</span>
                      </div>
                    </div>
                    <Button
                      render={<Link href="/dashboard" />}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-full btn btn-primary btn-md rounded-xl flex items-center justify-center gap-2"
                    >
                      <LayoutDashboard className="w-4 h-4" /> Go to Dashboard
                    </Button>
                    <button
                      onClick={handleSignOut}
                      className="w-full text-center py-2 text-xs font-semibold uppercase tracking-wider text-red-600 hover:text-red-700 cursor-pointer flex items-center justify-center gap-2"
                    >
                      <LogOut className="w-4 h-4" /> Log Out
                    </button>
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
