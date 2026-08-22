import React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "ember" | "outline-ink" | "outline-paper" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  trailingIcon?: React.ReactNode;
}

const VARIANTS: Record<ButtonVariant, string> = {
  ember:
    "bg-ember text-ink shadow-ember hover:bg-ember-glow hover:-translate-y-0.5 active:translate-y-0",
  "outline-ink":
    "border border-ink/20 text-ink hover:border-ink/60 hover:-translate-y-0.5 active:translate-y-0",
  "outline-paper":
    "border border-paper/25 text-paper hover:border-ember hover:text-ember hover:-translate-y-0.5 active:translate-y-0",
  ghost: "text-graphite-muted hover:text-ember",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-[0.9375rem]",
  lg: "px-8 py-4 text-base",
};

export function Button({
  href,
  variant = "ember",
  size = "md",
  className,
  children,
  trailingIcon,
  ...rest
}: ButtonProps) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 rounded-pill font-semibold tracking-tight",
        "transition-[transform,background-color,border-color,color] duration-[var(--dur-fast)] ease-editorial",
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
      {...rest}
    >
      {children}
      {trailingIcon ? (
        <span className="transition-transform duration-[var(--dur-fast)] ease-editorial group-hover:translate-x-1">
          {trailingIcon}
        </span>
      ) : null}
    </a>
  );
}
