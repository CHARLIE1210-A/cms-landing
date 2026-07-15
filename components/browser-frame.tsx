import { cn } from "@/lib/utils";
import {
    ChevronLeft,
    ChevronRight,
    RotateCw,
    Lock,
} from "lucide-react";

interface BrowserFrameProps {
    children: React.ReactNode;
    className?: string;
    url?: string;
}

export function BrowserFrame({
    children,
    className,
    url = "app.myraf.ai",
}: BrowserFrameProps) {
    return (
        <div
            className={cn(
                "overflow-hidden rounded-[28px]  bg-white shadow-xl",
                className
            )}
        >
            {/* macOS Toolbar */}
            <div className="rounded-t-[28px] border-b border-zinc-200/80 bg-white/80
backdrop-blur-xl backdrop-blur-xl">

                {/* Top Bar */}
                <div className="flex h-14 items-center px-5">

                    {/* Traffic Lights */}
                    <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                        <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                        <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                    </div>

                    {/* Navigation */}
                    <div className="ml-6 flex items-center gap-1 text-zinc-500">
                        <button className="rounded-md p-1.5 hover:bg-zinc-200/60">
                            <ChevronLeft className="h-4 w-4" />
                        </button>

                        <button className="rounded-md p-1.5 hover:bg-zinc-200/60">
                            <ChevronRight className="h-4 w-4" />
                        </button>

                        <button className="rounded-md p-1.5 hover:bg-zinc-200/60">
                            <RotateCw className="h-4 w-4" />
                        </button>
                    </div>

                    {/* Address Bar */}
                    <div className="mx-auto flex w-full max-w-lg items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 py-2 shadow-sm">
                        <Lock className="h-3.5 w-3.5 text-emerald-500" />

                        <span className="truncate text-sm font-medium text-zinc-600">
                            {url}
                        </span>
                    </div>

                    {/* Right Spacer */}
                    <div className="w-[120px]" />
                </div>
            </div>

            {/* Content */}
            <div
                className="
        relative
        w-full
        overflow-hidden
        bg-gradient-to-b
        from-slate-50
        to-white
    "
            >
                {children}
            </div>
        </div>
    );
}