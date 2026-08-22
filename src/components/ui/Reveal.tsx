"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "left" | "right" | "none";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Stagger offset in seconds. */
  delay?: number;
  direction?: RevealDirection;
  as?: "div" | "li" | "section" | "article";
}

const OFFSETS: Record<RevealDirection, React.CSSProperties> = {
  up: { "--rx": "0px", "--ry": "1.6rem" } as React.CSSProperties,
  left: { "--rx": "-1.5rem", "--ry": "0px" } as React.CSSProperties,
  right: { "--rx": "1.5rem", "--ry": "0px" } as React.CSSProperties,
  none: { "--rx": "0px", "--ry": "0px" } as React.CSSProperties,
};

/**
 * Scroll-triggered entrance driven by a CSS transition rather than a JS
 * animation loop: the end state is applied by a class toggle, so content is
 * never left mid-flight. Animates transform + opacity only.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsIn(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsIn(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={cn("reveal", isIn && "is-in", className)}
      style={{ ...OFFSETS[direction], transitionDelay: `${delay}s` }}
    >
      {children}
    </Tag>
  );
}
