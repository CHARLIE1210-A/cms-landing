'use client';

import * as React from 'react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

type BadgeColor =
    | 'default'
    | 'primary'
    | 'emerald'
    | 'rose'
    | 'amber'
    | 'sky'
    | 'violet'
    | 'slate';

type BadgeVariant =
    | 'soft'
    | 'solid'
    | 'outline';

interface AppBadgeProps
    extends React.ComponentPropsWithoutRef<typeof Badge> {
    color?: BadgeColor;
    badgeVariant?: BadgeVariant;
}

const styles = {
    soft: {
        default: 'bg-muted text-foreground border-transparent',
        primary: 'bg-primary/10 text-primary border-primary/10',
        emerald: 'bg-emerald-500/10 text-emerald-600 border-emerald-500/15 dark:text-emerald-400',
        rose: 'bg-rose-500/10 text-rose-600 border-rose-500/15 dark:text-rose-400',
        amber: 'bg-amber-500/10 text-amber-600 border-amber-500/15 dark:text-amber-400',
        sky: 'bg-sky-500/10 text-sky-600 border-sky-500/15 dark:text-sky-400',
        violet: 'bg-violet-500/10 text-violet-600 border-violet-500/15 dark:text-violet-400',
        slate: 'bg-slate-500/10 text-slate-600 border-slate-500/15 dark:text-slate-400',
    },

    solid: {
        default: 'bg-foreground text-background',
        primary: 'bg-primary text-primary-foreground',
        emerald: 'bg-emerald-500 text-white',
        rose: 'bg-rose-500 text-white',
        amber: 'bg-amber-500 text-white',
        sky: 'bg-sky-500 text-white',
        violet: 'bg-violet-500 text-white',
        slate: 'bg-slate-700 text-white',
    },

    outline: {
        default: 'border-border text-foreground bg-transparent',
        primary: 'border-primary text-primary bg-transparent',
        emerald: 'border-emerald-500 text-emerald-500 bg-transparent',
        rose: 'border-rose-500 text-rose-500 bg-transparent',
        amber: 'border-amber-500 text-amber-500 bg-transparent',
        sky: 'border-sky-500 text-sky-500 bg-transparent',
        violet: 'border-violet-500 text-violet-500 bg-transparent',
        slate: 'border-slate-500 text-slate-500 bg-transparent',
    },
};

export function AppBadge({
    color = "default",
    badgeVariant = "soft",
    className,
    children,
    ...props
}: AppBadgeProps) {
    return (
        <Badge
            className={cn(
                `
          group
          relative
          inline-flex
          items-center
          justify-center
          overflow-hidden
          rounded-full
          border
          border-white/15
          bg-white/55
          px-3
          py-1
          text-[10px]
          font-bold
          uppercase
          tracking-[0.18em]
          backdrop-blur-2xl
          shadow-[0_4px_18px_rgba(15,23,42,0.06)]
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:scale-[1.03]
          hover:shadow-[0_10px_28px_rgba(15,23,42,0.12)]
          dark:border-white/10
          dark:bg-white/[0.04]
        `,
                styles[badgeVariant][color],
                className
            )}
            {...props}
        >
            {/* Glass shine */}
            <span
                className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
          rounded-full
        "
            >
                <span
                    className="
            absolute
            -left-10
            top-0
            h-full
            w-8
            -skew-x-12
            bg-white/35
            opacity-0
            transition-all
            duration-700
            group-hover:left-[120%]
            group-hover:opacity-100
          "
                />
            </span>

            {/* Inner highlight */}
            <span
                className="
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-white/60
          to-transparent
        "
            />

            <span className="relative z-10 flex items-center gap-1">
                {children}
            </span>
        </Badge>
    );
}