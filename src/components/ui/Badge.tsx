import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "accent" | "sage" | "highlight" | "outline" | "mono";
  className?: string;
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  className,
  size = "md",
}) => {
  const sizeStyles = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-2.5 py-1 text-xs",
  };

  const variantStyles = {
    default: "bg-canvas-subtle text-ink-secondary border border-border",
    accent: "bg-accent-light text-accent border border-accent-muted/60 font-medium",
    sage: "bg-sage-light text-sage border border-sage-muted font-medium",
    highlight: "bg-highlight text-ink font-mono border border-highlight-border text-[11px]",
    outline: "bg-transparent text-ink-secondary border border-border hover:border-ink-muted",
    mono: "bg-canvas-subtle text-ink-secondary border border-border font-mono text-[11px] uppercase tracking-wider",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md font-sans transition-colors",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
