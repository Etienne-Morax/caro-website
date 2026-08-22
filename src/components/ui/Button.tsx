import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "editorial";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  target,
  rel,
  children,
  icon,
  className,
  ...props
}) => {
  const sizeStyles = {
    sm: "px-3 py-1.5 text-xs font-medium gap-1.5",
    md: "px-4 py-2 text-sm font-medium gap-2",
    lg: "px-5 py-2.5 text-base font-medium gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-ink text-canvas hover:bg-ink-secondary active:scale-[0.99] border border-ink shadow-sm",
    secondary:
      "bg-surface text-ink hover:bg-canvas-subtle active:scale-[0.99] border border-border shadow-paper hover:shadow-paper-hover",
    editorial:
      "bg-accent text-white hover:bg-accent-hover active:scale-[0.99] border border-accent shadow-sm",
    outline:
      "bg-transparent text-ink hover:bg-canvas-subtle border border-border active:scale-[0.99]",
    ghost:
      "bg-transparent text-ink-secondary hover:text-ink hover:bg-canvas-subtle border-transparent",
  };

  const baseStyles =
    "inline-flex items-center justify-center rounded-lg transition-all duration-150 focus-visible:ring-2 focus-visible:ring-accent focus-visible:outline-none select-none cursor-pointer";

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel || (target === "_blank" ? "noopener noreferrer" : undefined)}
        className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {children}
        {icon && <span className="shrink-0">{icon}</span>}
      </a>
    );
  }

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
      {icon && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
