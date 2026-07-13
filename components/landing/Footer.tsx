import Link from "next/link";
import { Paintbrush } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerGroups = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "How it Works", href: "#how-it-works" },
        { name: "Pricing Plans", href: "#pricing" },
        { name: "Estimate Tool", href: "#features" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact Support", href: "#" },
        { name: "Success Stories", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Refund Policy", href: "#" },
        { name: "Data Security", href: "#" },
      ],
    },
  ];

  return (
    <footer className="bg-[#0b192c] border-t border-[#2c476f]/30 py-16 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pb-12 border-b border-[#2c476f]/20">
          {/* Logo & Tagline */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-[#008dda] p-2 rounded-lg text-white group-hover:scale-105 transition-transform shadow-md shadow-[#008dda]/20">
                <Paintbrush className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                Paint<span className="text-[#008dda]">CMS</span>
              </span>
            </Link>
            <p className="text-sm font-semibold italic text-[#008dda] mt-2">
              "Run every site. Pay every worker. Know every rupee."
            </p>
            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              PaintCMS is India's leading digital platform built specifically for small and medium painting contractors to track progress and stop wage leaks.
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-3 gap-6 md:col-span-8">
            {footerGroups.map((group) => (
              <div key={group.title} className="space-y-4">
                <h4 className="font-heading font-extrabold text-xs text-white uppercase tracking-wider">
                  {group.title}
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="hover:text-white transition-colors duration-200">
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Socials & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} PaintCMS. All rights reserved. Made with ❤️ in India.</p>
          
          <div className="flex items-center gap-4 text-gray-400">
            {[
              {
                icon: (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
                href: "#",
              },
              {
                icon: (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
                  </svg>
                ),
                href: "#",
              },
              {
                icon: (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                ),
                href: "#",
              },
              {
                icon: (
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                ),
                href: "#",
              },
            ].map((soc, idx) => (
              <a
                key={idx}
                href={soc.href}
                className="hover:text-white transition-colors duration-200 bg-[#1a2f4c]/40 p-2 rounded-lg border border-[#2c476f]/20"
                aria-label="Social Link"
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
