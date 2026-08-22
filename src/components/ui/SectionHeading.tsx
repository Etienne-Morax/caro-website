import React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  /** Rendered on the ink canvas rather than the paper canvas. */
  onInk?: boolean;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  onInk = false,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "flex flex-col gap-6",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      <Reveal>
        <div className="flex items-center gap-4">
          <span
            className={cn(
              "type-label tabular-nums",
              onInk ? "text-ember" : "text-ember-deep",
            )}
          >
            {index}
          </span>
          <span
            aria-hidden="true"
            className={cn("h-px w-12", onInk ? "bg-paper/25" : "bg-paper-line")}
          />
          <span
            className={cn(
              "type-label",
              onInk ? "text-paper/55" : "text-graphite-muted",
            )}
          >
            {eyebrow}
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <h2
          className={cn(
            "type-title max-w-3xl text-balance",
            onInk ? "text-paper" : "text-ink",
          )}
        >
          {title}
        </h2>
      </Reveal>

      {intro ? (
        <Reveal delay={0.12}>
          <p
            className={cn(
              "type-lead max-w-2xl text-pretty",
              onInk ? "text-paper/65" : "text-graphite",
            )}
          >
            {intro}
          </p>
        </Reveal>
      ) : null}
    </header>
  );
}
