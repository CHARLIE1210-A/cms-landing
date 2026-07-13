import Navbar from "@/components/landing/Navbar";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-br from-[#0b192c] via-[#0f243d] to-[#122e4f] overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#008dda]/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#008dda]/20 blur-3xl" />
      </div>

      <Navbar />
      
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
