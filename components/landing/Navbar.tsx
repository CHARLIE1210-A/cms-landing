"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, X, ArrowRight, LogOut, Settings, LayoutDashboard, User } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { staggerNav } from "@/lib/animations";
import { createClient } from "@/lib/supabase/client";
import { BrandLogo } from "@/components/brand-asset";
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
        className={`
    fixed inset-x-0 top-0 z-50
    transition-all duration-500
    ${isScrolled
            ? "py-3"
            : "py-5"
          }
  `}
      >
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div
            className={`
        relative
        flex
        items-center
        justify-between
        rounded-[26px]
        border
        px-6
        transition-all
        duration-500

        ${isScrolled
                ? `
              border-white/20
              bg-white/70
              py-3
              rounded-3xl
              shadow-[0_20px_60px_rgba(15,23,42,0.12)]
              backdrop-blur-3xl
              dark:border-white/10
              dark:bg-slate-950/70
            `
                : `
              border-transparent
              bg-transparent
              py-2
            `
              }
      `}
          >
            {/* Glow */}

            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[26px]">

              <div className="absolute -left-32 top-0 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />

              <div className="absolute right-0 top-0 h-36 w-36 rounded-full bg-violet-500/10 blur-3xl" />

            </div>

            {/* Logo */}

            <Link
              href="/"
              className="group relative z-10 flex items-center"
            >
              <BrandLogo className="h-8 w-auto text-foreground" />
            </Link>

            {/* Desktop Navigation */}

            <nav className="relative z-10 hidden items-center gap-2 rounded-full border border-white/15 bg-white/40 px-2 py-2 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03] md:flex">

              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <Link
                    href={link.href}
                    className="
                relative
                flex
                items-center
                rounded-full
                px-5
                py-2.5
                text-sm
                font-semibold
                text-muted-foreground
                transition-all
                duration-300

                hover:bg-white/70
                hover:text-foreground
                hover:shadow-md

                dark:hover:bg-white/10
              "
                  >
                    {link.name}

                    <span
                      className="
                  absolute
                  bottom-1
                  left-1/2
                  h-1
                  w-1
                  -translate-x-1/2
                  rounded-full
                  bg-primary
                  opacity-0
                  transition-all
                  duration-300

                  group-hover:opacity-100
                "
                    />
                  </Link>
                </motion.div>
              ))}

            </nav>

            {/* Desktop CTA */}
            {/* Desktop CTA */}

            <div className="relative z-10 hidden md:flex items-center gap-3">

              {user ? (
                <div className="flex items-center gap-3">

                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      render={<Link href="/dashboard" />}
                      nativeButton={false}
                      className="
            group
            h-11
            rounded-2xl
            bg-primary
            px-6
            font-semibold
            text-white
            shadow-xl
            shadow-primary/20
            transition-all
            duration-300
            hover:bg-primary/90
            hover:shadow-primary/35
          "
                    >
                      Dashboard

                      <ArrowRight
                        className="
              ml-2
              h-4
              w-4
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
                      />
                    </Button>
                  </motion.div>

                  <DropdownMenu>

                    <DropdownMenuTrigger
                      render={
                        <motion.button
                          whileHover={{
                            scale: 1.05,
                            rotate: -3,
                          }}
                          whileTap={{
                            scale: 0.96,
                          }}
                          className="
                relative
                flex
                h-11
                w-11
                items-center
                justify-center
                overflow-hidden
                rounded-2xl
                border
                border-white/20
                bg-white/55
                font-bold
                text-sm
                text-primary
                shadow-lg
                backdrop-blur-2xl
                transition-all
                duration-300

                hover:border-primary/25
                hover:shadow-xl

                dark:border-white/10
                dark:bg-white/[0.05]
              "
                        >

                          <span
                            className="
                  absolute
                  inset-0
                  bg-gradient-to-br
                  from-primary/15
                  to-violet-500/15
                "
                          />

                          <span className="relative">
                            {getInitials(user.email)}
                          </span>

                        </motion.button>
                      }
                    />

                    <DropdownMenuContent
                      align="end"
                      className="
            mt-3
            w-72
            rounded-[24px]
            border
            border-white/20
            bg-white/75
            p-2
            shadow-2xl
            backdrop-blur-3xl

            dark:border-white/10
            dark:bg-slate-950/80
          "
                    >

                      {/* User */}

                      <div className="mb-2 rounded-2xl border border-white/10 bg-primary/5 p-4">

                        <div className="flex items-center gap-3">

                          <div
                            className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-2xl
                  bg-primary/10
                  font-bold
                  text-primary
                "
                          >
                            {getInitials(user.email)}
                          </div>

                          <div className="min-w-0">

                            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                              Logged In
                            </p>

                            <p className="truncate text-sm font-semibold">
                              {user.email}
                            </p>

                          </div>

                        </div>

                      </div>

                      <DropdownMenuItem
                        render={
                          <Link
                            href="/dashboard"
                            className="flex items-center gap-3 w-full"
                          />
                        }
                        className="
              rounded-xl
              py-3
              cursor-pointer
              transition-all
              hover:bg-primary/8
            "
                      >
                        <div className="rounded-xl bg-primary/10 p-2">
                          <LayoutDashboard className="h-4 w-4 text-primary" />
                        </div>

                        <div>
                          <p className="font-semibold">
                            Dashboard
                          </p>

                          <p className="text-xs text-muted-foreground">
                            Open workspace
                          </p>
                        </div>
                      </DropdownMenuItem>

                      <DropdownMenuItem
                        render={
                          <Link
                            href="/dashboard/settings"
                            className="flex items-center gap-3 w-full"
                          />
                        }
                        className="
              mt-1
              rounded-xl
              py-3
              cursor-pointer
              transition-all
              hover:bg-primary/8
            "
                      >
                        <div className="rounded-xl bg-primary/10 p-2">
                          <Settings className="h-4 w-4 text-primary" />
                        </div>

                        <div>
                          <p className="font-semibold">
                            Settings
                          </p>

                          <p className="text-xs text-muted-foreground">
                            Preferences & account
                          </p>
                        </div>
                      </DropdownMenuItem>

                      <DropdownMenuSeparator className="my-2" />

                      <DropdownMenuItem
                        onClick={handleSignOut}
                        className="
              rounded-xl
              py-3
              cursor-pointer
              text-red-500
              transition-all
              hover:bg-red-500/10
              focus:bg-red-500/10
            "
                      >
                        <LogOut className="mr-3 h-4 w-4" />

                        <span className="font-semibold">
                          Sign Out
                        </span>

                      </DropdownMenuItem>

                    </DropdownMenuContent>

                  </DropdownMenu>

                </div>
              ) : (
                <div className="flex items-center gap-3">

                  <Link
                    href="/login"
                    className="
          rounded-2xl
          px-5
          py-2.5
          text-sm
          font-semibold
          text-muted-foreground
          transition-all
          hover:bg-white/60
          hover:text-foreground

          dark:hover:bg-white/5
        "
                  >
                    Login
                  </Link>

                  <motion.div
                    whileHover={{
                      y: -2,
                    }}
                    whileTap={{
                      scale: 0.97,
                    }}
                  >
                    <Button
                      render={<Link href="/signup" />}
                      nativeButton={false}
                      className="
            group
            h-11
            rounded-2xl
            bg-primary
            px-6
            font-semibold
            shadow-xl
            shadow-primary/25
          "
                    >
                      Start Free

                      <ArrowRight
                        className="
              ml-2
              h-4
              w-4
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
                      />
                    </Button>
                  </motion.div>

                </div>
              )}

            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.92 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="
    relative
    z-10
    flex
    h-11
    w-11
    items-center
    justify-center
    rounded-2xl
    border
    border-white/20
    bg-white/60
    shadow-lg
    backdrop-blur-2xl
    transition-all
    duration-300

    hover:border-primary/20
    hover:bg-white/80

    dark:border-white/10
    dark:bg-white/[0.05]

    md:hidden
  "
              aria-label="Toggle Menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </motion.div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>

          {isMobileMenuOpen && (
            <>

              {/* Overlay */}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 z-40 bg-black/35 backdrop-blur-sm md:hidden"
              />

              {/* Drawer */}

              <motion.div
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                  damping: 22,
                }}
                className="
          absolute
          left-4
          right-4
          top-[82px]
          z-50

          rounded-[30px]
          border
          border-white/20
          bg-white/75
          p-5
          shadow-[0_30px_80px_rgba(15,23,42,0.18)]
          backdrop-blur-3xl

          dark:border-white/10
          dark:bg-slate-950/80

          md:hidden
        "
              >

                {/* User */}

                {user && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 }}
                    className="
              mb-5
              flex
              items-center
              gap-4
              rounded-3xl
              border
              border-white/10
              bg-primary/5
              p-4
            "
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 font-bold text-primary">
                      {getInitials(user.email)}
                    </div>

                    <div className="min-w-0">

                      <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        Logged In
                      </p>

                      <p className="truncate text-sm font-semibold">
                        {user.email}
                      </p>

                    </div>

                  </motion.div>
                )}

                {/* Navigation */}

                <div className="space-y-2">

                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: index * 0.06,
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  px-4
                  py-4
                  font-semibold
                  transition-all
                  hover:bg-primary/8
                "
                      >
                        <span>{link.name}</span>

                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                      </Link>
                    </motion.div>
                  ))}

                </div>

                <div className="my-5 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

                {/* CTA */}

                {user ? (
                  <div className="space-y-3">

                    <Button
                      render={<Link href="/dashboard" />}
                      nativeButton={false}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="
                h-12
                w-full
                rounded-2xl
                bg-primary
                text-white
                shadow-lg
                shadow-primary/20
              "
                    >
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      Dashboard
                    </Button>

                    <Button
                      render={<Link href="/dashboard/settings" />}
                      nativeButton={false}
                      variant="outline"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="
                h-12
                w-full
                rounded-2xl
                border-white/20
                bg-white/50
                backdrop-blur-xl

                dark:border-white/10
                dark:bg-white/[0.04]
              "
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Button>

                    <Button
                      variant="ghost"
                      onClick={handleSignOut}
                      className="
                h-12
                w-full
                rounded-2xl
                text-red-500
                hover:bg-red-500/10
              "
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </Button>

                  </div>
                ) : (
                  <div className="space-y-3">

                    <Button
                      render={<Link href="/signup" />}
                      nativeButton={false}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="
                h-12
                w-full
                rounded-2xl
                bg-primary
                shadow-xl
                shadow-primary/20
              "
                    >
                      Start Free Trial
                    </Button>

                    <Button
                      render={<Link href="/login" />}
                      nativeButton={false}
                      variant="outline"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="
                h-12
                w-full
                rounded-2xl
                border-white/20
                bg-white/50
                backdrop-blur-xl

                dark:border-white/10
                dark:bg-white/[0.04]
              "
                    >
                      Login
                    </Button>

                  </div>
                )}

              </motion.div>

            </>
          )}

        </AnimatePresence>
      </header>
    </>
  );
}
