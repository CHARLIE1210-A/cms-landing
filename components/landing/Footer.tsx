"use client";

import Link from "next/link";
import Image from "next/image";
import { BrandLogo } from "@/components/brand-asset";

export default function Footer() {
  const categories = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "How it works", href: "#how-it-works" },
        { name: "Pricing", href: "#pricing" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Contact", href: "#" },
        { name: "Careers", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Refund Policy", href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-gradient-to-b from-transparent via-white/[0.03] to-white/[0.05] backdrop-blur-3xl">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-sky-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">

          {/* ---------------------------------------------------------------- */}
          {/* Brand */}
          {/* ---------------------------------------------------------------- */}

          <div className="space-y-6 lg:col-span-4">

            <Link
              href="/"
              className="group inline-flex items-center"
            >
              <BrandLogo className="h-9 w-auto text-foreground" />
            </Link>

            <p className="max-w-md leading-7 text-sm text-muted-foreground">
              The complete operating system for Indian painting contractors —
              manage workers, attendance, quotations, finances, payroll, and
              project profitability from one beautifully designed dashboard.
            </p>

            {/* Social */}

            <div className="flex items-center gap-3">

              {[
                {
                  href: "#",
                  icon: (
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  ),
                },
                {
                  href: "#",
                  icon: (
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
                {
                  href: "#",
                  icon: (
                    <svg
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-2xl
                border
                border-white/20
                bg-white/60
                text-muted-foreground
                backdrop-blur-2xl
                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-primary/30
                hover:bg-primary/10
                hover:text-primary

                dark:border-white/10
                dark:bg-white/[0.04]
              "
                >
                  {item.icon}
                </Link>
              ))}

            </div>

          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Links */}
          {/* ---------------------------------------------------------------- */}

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:col-span-8">

            {categories.map((cat) => (

              <div key={cat.title}>

                <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-foreground">
                  {cat.title}
                </h4>

                <ul className="space-y-3">

                  {cat.links.map((link) => (

                    <li key={link.name}>

                      <Link
                        href={link.href}
                        className="
                      group
                      inline-flex
                      items-center
                      text-sm
                      text-muted-foreground
                      transition-all
                      duration-300
                      hover:text-primary
                    "
                      >
                        <span className="transition-transform group-hover:translate-x-1">
                          {link.name}
                        </span>
                      </Link>

                    </li>

                  ))}

                </ul>

              </div>

            ))}

          </div>

        </div>

        {/* Bottom */}

        <div
          className="
        mt-16
        flex
        flex-col
        gap-5
        rounded-[28px]
        border
        border-white/10
        bg-white/40
        px-8
        py-6
        backdrop-blur-3xl

        dark:border-white/10
        dark:bg-white/[0.03]

        lg:flex-row
        lg:items-center
        lg:justify-between
      "
        >

          <p className="text-xs font-medium text-muted-foreground">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-foreground">
              PaintCMS
            </span>
            . All rights reserved.
          </p>

          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>Made with</span>
            <span className="text-red-500">❤</span>
            <span>for Painting Contractors across India.</span>
          </div>

        </div>

      </div>

    </footer>
  );
}
