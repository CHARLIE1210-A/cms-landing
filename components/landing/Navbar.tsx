"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, ArrowRight, LogOut, Settings, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { createClient } from "@/lib/supabase/client";
import { BrandLogo } from "@/components/brand-asset";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
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
        className={cn(
          "fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] transition-all duration-300",
          isScrolled ? "max-w-4xl" : "max-w-5xl"
        )}
      >
        <div className="relative">
          {/* Main Glass Pill */}
          <div
            className={cn(
              "flex items-center justify-between border rounded-full backdrop-blur-xl transition-all duration-300 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.4)]",
              isScrolled
                ? "border-white/20 bg-white/70 py-2 px-5 dark:border-white/10 dark:bg-slate-950/70"
                : "border-white/15 bg-white/50 py-3 px-6 dark:border-white/5 dark:bg-slate-950/50"
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <BrandLogo className="h-6 w-auto text-foreground" />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative rounded-full px-4 py-1.5 text-sm font-semibold text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              {user ? (
                <div className="flex items-center gap-3">
                  <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      render={<Link href="/dashboard" />}
                      nativeButton={false}
                      className="h-9 rounded-full bg-gradient-to-r from-primary to-indigo-500 hover:from-primary/95 hover:to-indigo-500/95 text-white font-semibold px-5 text-xs shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/15"
                    >
                      Go to Dashboard
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Button>
                  </motion.div>

                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.96 }}
                          className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/60 font-bold text-xs text-primary shadow-sm backdrop-blur-2xl transition-all duration-300 hover:border-primary/25 dark:border-white/10 dark:bg-white/[0.05]"
                        >
                          <span className="absolute inset-0 bg-gradient-to-br from-primary/10 to-violet-500/10" />
                          <span className="relative z-10">{getInitials(user.email)}</span>
                        </motion.button>
                      }
                    />

                    <DropdownMenuContent
                      align="end"
                      className="mt-2 w-60 rounded-2xl border border-white/15 bg-white/80 p-1.5 shadow-xl backdrop-blur-3xl dark:border-white/10 dark:bg-slate-950/90"
                    >
                      <div className="mb-1.5 rounded-xl border border-white/10 bg-primary/5 p-3">
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 font-bold text-xs text-primary">
                            {getInitials(user.email)}
                          </div>
                          <div className="min-w-0">
                            <p className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                              Logged In
                            </p>
                            <p className="truncate text-xs font-semibold">
                              {user.email}
                            </p>
                          </div>
                        </div>
                      </div>

                      <DropdownMenuItem
                        render={<Link href="/dashboard" className="flex items-center gap-2.5 w-full" />}
                        className="rounded-lg py-2 cursor-pointer transition-all hover:bg-primary/5 focus:bg-primary/5"
                      >
                        <div className="rounded-lg bg-primary/10 p-1.5">
                          <LayoutDashboard className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold">Dashboard</p>
                          <p className="text-[10px] text-muted-foreground">Open workspace</p>
                        </div>
                      </DropdownMenuItem>

                      <DropdownMenuItem
                        render={<Link href="/dashboard/settings" className="flex items-center gap-2.5 w-full" />}
                        className="rounded-lg py-2 cursor-pointer transition-all hover:bg-primary/5 focus:bg-primary/5 mt-0.5"
                      >
                        <div className="rounded-lg bg-primary/10 p-1.5">
                          <Settings className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold">Settings</p>
                          <p className="text-[10px] text-muted-foreground">Preferences</p>
                        </div>
                      </DropdownMenuItem>

                      <DropdownMenuSeparator className="my-1.5" />

                      <DropdownMenuItem
                        onClick={handleSignOut}
                        className="rounded-lg py-2 cursor-pointer text-red-500 transition-all hover:bg-red-500/10 focus:bg-red-500/10"
                      >
                        <LogOut className="mr-2 h-3.5 w-3.5" />
                        <span className="text-xs font-semibold">Sign Out</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <Link
                    href="/login"
                    className="rounded-full px-4 py-2 text-sm font-semibold text-muted-foreground transition-all hover:text-foreground hover:bg-black/5 dark:hover:bg-white/5"
                  >
                    Login
                  </Link>

                  <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
                    <Button
                      render={<Link href="/signup" />}
                      nativeButton={false}
                      className="h-9 rounded-full bg-gradient-to-r from-primary to-indigo-500 hover:from-primary/95 hover:to-indigo-500/95 text-white font-semibold px-5 text-xs shadow-md transition-all duration-300 hover:shadow-lg hover:shadow-primary/15"
                    >
                      Start Free
                      <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </Button>
                  </motion.div>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/60 shadow-sm backdrop-blur-2xl transition-all duration-300 hover:border-primary/20 hover:bg-white/80 dark:border-white/10 dark:bg-white/[0.05] md:hidden"
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="h-4 w-4" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="h-4 w-4" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Integrated Mobile Dropdown Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <>
                {/* Backdrop Blur Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="fixed inset-0 -z-10 h-screen w-screen bg-black/25 backdrop-blur-sm md:hidden"
                />

                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-[68px] left-0 right-0 z-40 rounded-[28px] border border-white/20 bg-white/90 p-5 shadow-2xl backdrop-blur-3xl dark:border-white/10 dark:bg-slate-950/90 flex flex-col gap-4 md:hidden"
                >
                  {/* User Profile Info */}
                  {user && (
                    <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-primary/5 p-3.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 font-bold text-sm text-primary">
                        {getInitials(user.email)}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[9px] uppercase tracking-wider text-muted-foreground">
                          Logged In
                        </p>
                        <p className="truncate text-xs font-semibold">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Nav Links */}
                  <div className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-muted-foreground transition-all hover:bg-black/5 hover:text-foreground dark:hover:bg-white/5"
                      >
                        <span>{link.name}</span>
                        <ArrowRight className="h-4 w-4 text-muted-foreground opacity-50" />
                      </Link>
                    ))}
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                  {/* Actions / CTA */}
                  {user ? (
                    <div className="flex flex-col gap-2">
                      <Button
                        render={<Link href="/dashboard" />}
                        nativeButton={false}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="h-11 w-full rounded-xl bg-primary text-xs font-bold text-white shadow-md hover:bg-primary/95"
                      >
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        Dashboard
                      </Button>

                      <Button
                        render={<Link href="/dashboard/settings" />}
                        nativeButton={false}
                        variant="outline"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="h-11 w-full rounded-xl border-white/20 bg-white/50 text-xs font-bold backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]"
                      >
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </Button>

                      <Button
                        variant="ghost"
                        onClick={handleSignOut}
                        className="h-11 w-full rounded-xl text-xs font-bold text-red-500 hover:bg-red-500/10"
                      >
                        <LogOut className="mr-2 h-4 w-4" />
                        Sign Out
                      </Button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2">
                      <Button
                        render={<Link href="/signup" />}
                        nativeButton={false}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="h-11 w-full rounded-xl bg-primary text-xs font-bold text-white shadow-md hover:bg-primary/95"
                      >
                        Start Free Trial
                      </Button>

                      <Button
                        render={<Link href="/login" />}
                        nativeButton={false}
                        variant="outline"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="h-11 w-full rounded-xl border-white/20 bg-white/50 text-xs font-bold backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04]"
                      >
                        Login
                      </Button>
                    </div>
                  )}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
}
