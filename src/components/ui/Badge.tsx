import React from "react";
import { cn } from "@/lib/utils";

type BadgeTone = "paper" | "ink" | "ember" | "ember-on-ink" | "sage";

interface BadgeProps {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
}

const TONES: Record<BadgeTone, string> = {
  paper: "border-paper-line bg-paper-card text-graphite",
  ink: "border-paper/15 bg-paper/[0.06] text-paper/70",
  ember: "border-ember/35 bg-ember/10 text-ember-deep",
  "ember-on-ink": "border-ember/40 bg-ember/15 text-ember",
  sage: "border-sage/25 bg-sage-light text-sage",
};

export function Badge({ children, tone = "paper", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-pill border px-3 py-1 text-xs font-medium tracking-tight",
        TONES[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
