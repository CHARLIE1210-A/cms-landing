import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
  coverImage?: string;
  className?: string;
  hideCover?: boolean;
}

export function AuthLayout({
  children,
  title,
  description,
  coverImage = "/images/auth/signup-cover.webp",
  className,
  hideCover = false,
}: AuthLayoutProps) {
  return (
    <div className={cn("flex flex-col gap-6 w-full max-w-4xl mx-auto", className)}>
      <Card className="overflow-hidden rounded-[32px] border-white/20 bg-white/60 shadow-2xl backdrop-blur-xl p-0">
        <div className={cn("grid", hideCover ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2")}>
          {/* Form Content Side */}
          <div className="flex flex-col px-6 py-2 sm:p-8 text-left justify-center">

            {/* Reusable Logo / Home Header */}
            <div className="flex flex-col items-center gap-2 text-center mb-4">
              <Link href="/" className="flex items-center gap-3">
                <div className="relative w-10 h-10 shadow-lg">
                  <Image
                    src="/logo/product-logo.svg"
                    alt="PaintCMS Logo"
                    fill
                    className="object-contain animate-float"
                  />
                </div>
                <div className="text-left">
                  <p className="font-heading text-lg font-bold">
                    Paint
                    <span className="text-brand-600">CMS</span>
                  </p>
                </div>
              </Link>
              <div className="mt-1">
                <h1 className="font-heading font-extrabold text-2xl text-ink-primary">
                  {title}
                </h1>
                <p className="text-xs text-ink-secondary">
                  {description}
                </p>
              </div>
            </div>

            {/* Form Fields / Content */}
            {children}
          </div>

          {/* Cover Image decoration side */}
          {!hideCover && (
            <div className="relative hidden md:flex flex-col justify-between bg-brand-950 p-10 text-white min-h-[500px] overflow-hidden">
              <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none" />
              <div className="absolute -top-1/4 -right-1/4 w-80 h-80 rounded-full bg-brand-600/30 blur-3xl" />
              <div className="absolute -bottom-1/4 -left-1/4 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl" />

              {/* Branded Title Overlay */}
              <div className="relative z-10 space-y-2">
                <span className="text-[10px] font-extrabold text-brand-300 uppercase tracking-widest block">
                  Paint CMS for Contractors
                </span>
                <h2 className="font-heading font-extrabold text-2xl text-white">
                  Run every site. <br />
                  Pay every worker. <br />
                  Know every rupee.
                </h2>
              </div>

              {/* Centered SVG Illustration */}
              <div className="relative z-10 w-full h-48 my-6 flex items-center justify-center">
                <div className="relative w-full h-full p-2">
                  <Image
                    src={coverImage}
                    alt="Authentication illustration"
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Testimonial Overlay */}
              <div className="relative z-10 space-y-4">
                <blockquote className="text-xs text-brand-200 leading-relaxed font-medium italic">
                  "No more jugaad on paper registers or WhatsApp. Manage attendance and advances cleanly."
                </blockquote>
                <div className="text-[10px] text-brand-300 font-bold uppercase tracking-wider">
                  Trusted by 200+ Indian Contractors
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
