"use client";

import React, { useEffect, useState } from "react";
import { mentalModelSteps, profileData } from "@/data/profile";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 5200;

/**
 * Signature device: the four-beat reasoning loop Caroline runs on ambiguity.
 * Auto-advances until the visitor takes over, then holds their selection.
 */
export function InteractiveProductLoop() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isUserDriven, setIsUserDriven] = useState(false);

  useEffect(() => {
    if (isUserDriven) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(
      () => setActiveIndex((index) => (index + 1) % mentalModelSteps.length),
      AUTOPLAY_MS,
    );
    return () => window.clearInterval(timer);
  }, [isUserDriven]);

  const active = mentalModelSteps[activeIndex];

  const select = (index: number) => {
    setIsUserDriven(true);
    setActiveIndex(index);
  };

  return (
    <div className="relative rounded-card border border-paper/15 bg-paper/[0.035] p-5 backdrop-blur-md sm:p-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-card bg-gradient-to-b from-paper/10 to-transparent opacity-40"
      />

      <div className="relative flex items-center justify-between gap-4">
        <p className="type-label text-paper/50">{profileData.heroInteractivePill}</p>
        <span className="type-label tabular-nums text-ember">
          {active.step} / 0{mentalModelSteps.length}
        </span>
      </div>

      {/* Step selector */}
      <div role="tablist" aria-label="Product reasoning loop" className="relative mt-6 flex gap-1.5">
        {mentalModelSteps.map((step, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={step.step}
              type="button"
              role="tab"
              id={`loop-tab-${step.step}`}
              aria-selected={isActive}
              aria-controls={`loop-panel-${step.step}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => select(index)}
              onFocus={() => select(index)}
              onMouseEnter={() => select(index)}
              className={cn(
                "group relative flex-1 rounded-lg px-2 py-3 text-left transition-colors duration-[var(--dur-fast)]",
                isActive ? "bg-paper/[0.07]" : "hover:bg-paper/[0.04]",
              )}
            >
              <span
                className={cn(
                  "block text-[0.625rem] font-semibold tracking-label transition-colors",
                  isActive ? "text-ember" : "text-paper/55",
                )}
              >
                {step.step}
              </span>
              <span
                className={cn(
                  "mt-1 block font-display text-base leading-none transition-colors sm:text-lg",
                  isActive ? "text-paper" : "text-paper/60 group-hover:text-paper/75",
                )}
              >
                {step.title}
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  "mt-3 block h-px w-full transition-colors duration-[var(--dur-base)]",
                  isActive ? "bg-ember" : "bg-paper/15",
                )}
              />
            </button>
          );
        })}
      </div>

      {/* Panel — one persistent node, content swapped in place. */}
      <div
        role="tabpanel"
        id={`loop-panel-${active.step}`}
        aria-labelledby={`loop-tab-${active.step}`}
        className="relative mt-6 flex min-h-[15rem] flex-col gap-5"
      >
        <p className="font-display text-xl italic leading-snug text-paper sm:text-2xl">
          “{active.questionPrompt}”
        </p>

        <p className="text-[0.9375rem] leading-relaxed text-paper/55">{active.shortDescription}</p>

        <div className="grid gap-3 rounded-lg border border-paper/10 bg-ink/40 p-4">
          <div>
            <p className="type-label text-paper/55">In practice</p>
            <p className="mt-1.5 text-sm leading-relaxed text-paper/70">
              {active.recruitmentParallel}
            </p>
          </div>
          <div className="h-px bg-paper/10" aria-hidden="true" />
          <div>
            <p className="type-label text-paper/55">Product competency</p>
            <p className="mt-1.5 text-sm font-medium text-ember">{active.productCompetency}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
