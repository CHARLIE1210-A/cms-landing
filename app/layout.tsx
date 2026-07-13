import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geist = Geist({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CMS for Painters | India's #1 Contractor Management System",
  description: "Run every site. Pay every worker. Know every rupee. Track attendance, advances, wages, expenses, and project profitability from one simple dashboard. No more jugaad — just results.",
  openGraph: {
    title: "CMS for Painters | Contractor Management System",
    description: "Run every site. Pay every worker. Know every rupee. Track attendance, advances, wages, expenses, and project profitability.",
    type: "website",
    locale: "en_IN",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geist.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F9F9FA] text-[#0B192C]">
        {children}
      </body>
    </html>
  );
}
