import { cn } from "@/lib/utils";

interface MacbookScreenProps {
    children: React.ReactNode;
    className?: string;
}

export function MacbookScreen({
    children,
    className,
}: MacbookScreenProps) {
    return (
        <div
            className={cn(
                "relative mx-auto w-full max-w-6xl",
                className
            )}
        >
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/15 blur-[140px]" />
                <div className="absolute right-20 top-10 h-56 w-56 rounded-full bg-sky-400/10 blur-[120px]" />
            </div>

            {/* Screen Frame */}
            <div
                className="
          relative
          overflow-hidden
          rounded-[34px]
          border
          border-zinc-700/70
          bg-[#0b0b0d]
          p-[12px]
          shadow-[0_40px_120px_rgba(15,23,42,.28)]
        "
            >
                {/* Top Bezel */}
                <div className="absolute inset-x-0 top-0 h-10 bg-[#0b0b0d]" />

                {/* Camera Notch */}
                <div
                    className="
            absolute
            left-1/2
            top-0
            z-20
            h-7
            w-44
            -translate-x-1/2
            rounded-b-2xl
            bg-black
            shadow-inner
          "
                >
                    {/* Camera */}
                    <div className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-zinc-700">
                        <div className="absolute inset-[2px] rounded-full bg-zinc-500" />
                    </div>
                </div>

                {/* Display */}
                <div className="overflow-hidden rounded-[24px] bg-black">
                    {children}
                </div>


                {/* Static Reflection */}
                <div
                    className="
    pointer-events-none
    absolute
    inset-0
    rounded-[34px]
    bg-gradient-to-br
    from-white/8
    via-transparent
    via-40%
    to-white/[0.03]
  "
                />

                {/* Edge Highlight */}
                <div
                    className="
            pointer-events-none
            absolute
            inset-[1px]
            rounded-[33px]
            ring-1
            ring-white/5
          "
                />
            </div>
        </div >
    );
}