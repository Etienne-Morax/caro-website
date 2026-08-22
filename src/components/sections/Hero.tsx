"use client";

import React, { useEffect, useRef, useState } from "react";
import { profileData } from "@/data/profile";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { ArrowDownIcon, ArrowUpRightIcon, LinkedInIcon } from "@/components/ui/Icons";
import { InteractiveProductLoop } from "./InteractiveProductLoop";
import { cn } from "@/lib/utils";

const HEADLINE_ACCENT = "clear product decisions.";
const WORD_STAGGER_S = 0.06;

const SIGNALS = [
  { value: "4+", label: "Years in stakeholder-heavy delivery" },
  { value: "1,000+", label: "Discovery interviews run" },
  { value: "15", label: "Concurrent mandates prioritised" },
  { value: "2", label: "Languages, London & Paris" },
];

export function Hero() {
  const spotlightRef = useRef<HTMLElement>(null);
  const [isLit, setIsLit] = useState(false);

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => setIsLit(true));
    return () => window.cancelAnimationFrame(raf);
  }, []);

  /** Cursor-tracked ember spotlight; pointer-driven, transform-free. */
  useEffect(() => {
    const node = spotlightRef.current;
    if (!node) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onMove = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      node.style.setProperty("--px", `${event.clientX - rect.left}px`);
      node.style.setProperty("--py", `${event.clientY - rect.top}px`);
    };

    node.addEventListener("pointermove", onMove, { passive: true });
    return () => node.removeEventListener("pointermove", onMove);
  }, []);

  const words = profileData.heroHeadline.replace(HEADLINE_ACCENT, "").trim().split(" ");

  return (
    <section
      id="overview"
      ref={spotlightRef}
      data-tone="ink"
      className={cn(
        "grain relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-ink pb-16 pt-28 md:pt-32",
        isLit && "hero-lit",
      )}
    >
      <div className="aurora" aria-hidden="true" />
      <div className="absolute inset-0 hairline-grid opacity-70" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(26rem_26rem_at_var(--px,70%)_var(--py,30%),oklch(0.685_0.175_45/0.14),transparent_70%)]"
      />

      <div className="shell relative grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Left — statement */}
        <div className="lg:col-span-7">
          <p className="hero-rise inline-flex items-center gap-3 rounded-pill border border-paper/15 bg-paper/[0.04] py-1.5 pl-2 pr-4 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ember" />
            </span>
            <span className="type-label text-paper/70">{siteConfig.statusLabel}</span>
          </p>

          <h1 className="type-display mt-7 max-w-[14ch] text-paper">
            {words.map((word, index) => (
              <React.Fragment key={`${word}-${index}`}>
                <span
                  className="hero-rise inline-block"
                  style={{ transitionDelay: `${0.1 + index * WORD_STAGGER_S}s` }}
                >
                  {word}
                </span>{" "}
              </React.Fragment>
            ))}
            <span
              className="hero-rise inline-block italic text-ember"
              style={{ transitionDelay: `${0.1 + words.length * WORD_STAGGER_S}s` }}
            >
              {HEADLINE_ACCENT}
            </span>
          </h1>

          <p
            className="hero-rise type-lead mt-8 max-w-xl text-pretty text-paper/60"
            style={{ transitionDelay: "0.42s" }}
          >
            {profileData.heroSubheadline}
          </p>

          <div
            className="hero-rise mt-10 flex flex-wrap items-center gap-3"
            style={{ transitionDelay: "0.52s" }}
          >
            <Button
              href="#artefacts"
              variant="ember"
              size="lg"
              trailingIcon={<ArrowUpRightIcon className="h-4 w-4" />}
            >
              Read the case studies
            </Button>
            <Button href="#bridge" variant="outline-paper" size="lg">
              See how the skills transfer
            </Button>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="flex h-12 w-12 items-center justify-center rounded-pill border border-paper/20 text-paper/70 transition-colors duration-[var(--dur-fast)] hover:border-ember hover:text-ember"
            >
              <span className="sr-only">LinkedIn profile</span>
              <LinkedInIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right — signature interactive device */}
        <div className="hero-rise lg:col-span-5" style={{ transitionDelay: "0.3s" }}>
          <InteractiveProductLoop />
        </div>
      </div>

      {/* Signal strip */}
      <div className="shell relative mt-14 lg:mt-20">
        <dl
          className="hero-rise grid grid-cols-2 gap-px overflow-hidden rounded-card border border-paper/10 bg-paper/10 md:grid-cols-4"
          style={{ transitionDelay: "0.62s" }}
        >
          {SIGNALS.map((signal) => (
            <div key={signal.label} className="bg-ink px-5 py-6">
              <dt className="sr-only">{signal.label}</dt>
              <dd>
                <span className="font-display text-3xl text-paper md:text-4xl">{signal.value}</span>
                <span className="mt-2 block text-[0.8125rem] leading-snug text-paper/60">
                  {signal.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <a
          href="#mindset"
          className="hero-rise mt-10 inline-flex items-center gap-3 text-paper/55 transition-colors duration-[var(--dur-fast)] hover:text-ember"
          style={{ transitionDelay: "0.72s" }}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-pill border border-current">
            <ArrowDownIcon className="h-4 w-4" />
          </span>
          <span className="type-label">Scroll — the operating principles</span>
        </a>
      </div>
    </section>
  );
}
