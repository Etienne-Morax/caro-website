import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  number: string;
  category: string;
  title: string;
  subtitle?: string;
  annotation?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  category,
  title,
  subtitle,
  annotation,
  align = "left",
  className,
}) => {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-3xl",
        className
      )}
    >
      <div className="flex items-center gap-2.5 mb-3 font-mono text-xs text-ink-muted">
        <span className="text-accent font-semibold">{number}</span>
        <span className="text-border-strong">/</span>
        <span className="uppercase tracking-widest text-[11px] font-medium">{category}</span>
        {annotation && (
          <>
            <span className="hidden sm:inline text-border-strong">·</span>
            <span className="hidden sm:inline text-ink-faint italic font-serif">
              [{annotation}]
            </span>
          </>
        )}
      </div>

      <h2 className="font-serif text-3xl sm:text-4xl md:text-[42px] font-normal tracking-tight text-ink leading-[1.18]">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-ink-secondary leading-relaxed font-sans font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
};
