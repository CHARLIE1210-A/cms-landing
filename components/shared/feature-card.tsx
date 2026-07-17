"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { fadeUp } from "@/lib/animations";
import { AppBadge } from "@/components/shared/app-badge";

export interface FeatureCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "primary" | "amber" | "emerald" | "rose";
  glowPosition?: "top-right" | "bottom-left" | "bottom-right" | "top-left";
}

export function FeatureCard({
  children,
  className,
  glowColor = "primary",
  glowPosition = "top-right",
}: FeatureCardProps) {
  const glowColorClasses = {
    primary: "bg-primary/10",
    amber: "bg-amber-500/10",
    emerald: "bg-emerald-500/10",
    rose: "bg-rose-500/10",
  };

  const glowPositionClasses = {
    "top-right": "-right-24 -top-24",
    "bottom-left": "-left-24 -bottom-24",
    "bottom-right": "-right-24 -bottom-24",
    "top-left": "-left-24 -top-24",
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.35 }}
      className={className}
    >
      <Card
        className="
          group
          relative
          overflow-hidden
          h-full
          rounded-[34px]
          border
          border-white/20
          bg-white/70
          p-8
          shadow-[0_30px_80px_rgba(15,23,42,.08)]
          backdrop-blur-3xl
          dark:border-white/10
          dark:bg-slate-950/70
          flex flex-col gap-0
          ring-0
          ring-transparent
        "
      >
        {/* Glow */}
        <div
          className={cn(
            "absolute h-60 w-60 rounded-full blur-3xl transition-all duration-500 group-hover:scale-125",
            glowColorClasses[glowColor],
            glowPositionClasses[glowPosition]
          )}
        />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {children}
        </div>
      </Card>
    </motion.div>
  );
}

export interface FeatureCardHeaderProps {
  icon: React.ReactNode;
  badge: string;
  title: string;
  description: string;
  color?: "primary" | "amber" | "emerald" | "rose";
  layout?: "horizontal" | "vertical";
}

export function FeatureCardHeader({
  icon,
  badge,
  title,
  description,
  color = "primary",
  layout = "horizontal",
}: FeatureCardHeaderProps) {
  const iconColorClasses = {
    primary: "border-primary/20 bg-primary/10 text-primary shadow-primary/10",
    amber: "border-amber-500/20 bg-amber-500/10 text-amber-500 shadow-amber-500/10",
    emerald: "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 shadow-emerald-500/10",
    rose: "border-rose-500/20 bg-rose-500/10 text-rose-500 shadow-rose-500/10",
  };

  const iconElement = (
    <div
      className={cn(
        "flex h-16 w-16 items-center justify-center rounded-3xl border shadow-lg transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110",
        iconColorClasses[color]
      )}
    >
      {icon}
    </div>
  );

  const textContentElement = (
    <>
      <AppBadge color={color} className={cn(layout === "vertical" && "mt-6")}>
        {badge}
      </AppBadge>
      <h3 className="mt-4 text-3xl font-black tracking-tight text-foreground">
        {title}
      </h3>
      <p className="mt-3 max-w-xl leading-7 text-muted-foreground">
        {description}
      </p>
    </>
  );

  if (layout === "horizontal") {
    return (
      <div className="relative flex items-start gap-5">
        {iconElement}
        <div className="flex-1">
          {textContentElement}
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col items-start">
      {iconElement}
      {textContentElement}
    </div>
  );
}

export interface FeatureCardDemoProps {
  children: React.ReactNode;
  className?: string;
}

export function FeatureCardDemo({ children, className }: FeatureCardDemoProps) {
  return (
    <div
      className={cn(
        "relative mt-10 overflow-hidden rounded-[28px] border border-white/20 bg-white/60 p-6 backdrop-blur-2xl dark:border-white/10 dark:bg-slate-900/60",
        className
      )}
    >
      {children}
    </div>
  );
}

export interface FeatureCardDemoHeaderProps {
  label: string;
  title: string;
  badgeText: string;
  badgeColor?: "primary" | "emerald" | "rose" | "amber";
}

export function FeatureCardDemoHeader({
  label,
  title,
  badgeText,
  badgeColor = "emerald",
}: FeatureCardDemoHeaderProps) {
  return (
    <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          {label}
        </p>
        <h4 className="mt-1 text-lg font-bold text-foreground">
          {title}
        </h4>
      </div>
      <AppBadge color={badgeColor} className="normal-case">
        {badgeText}
      </AppBadge>
    </div>
  );
}
