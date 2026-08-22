"use client";

import React, { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import { ArrowUpRightIcon } from "@/components/ui/Icons";

const SECTION_IDS = siteConfig.navItems.map((item) => item.href.replace("#", ""));

/** Vertical point the header's tone is sampled at. */
const HEADER_PROBE_Y = 44;

export function Header() {
  const [isOnDark, setIsOnDark] = useState(true);
  const [activeSection, setActiveSection] = useState(SECTION_IDS[0]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  /** Tone switch + reading progress, both driven by one passive scroll listener. */
  useEffect(() => {
    const darkSections = Array.from(document.querySelectorAll<HTMLElement>('[data-tone="ink"]'));

    const onScroll = () => {
      setIsOnDark(
        darkSections.some((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= HEADER_PROBE_Y && rect.bottom >= HEADER_PROBE_Y;
        }),
      );

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${ratio})`;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <div
        ref={progressRef}
        aria-hidden="true"
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left scale-x-0 bg-ember"
      />

      <header className="fixed inset-x-0 top-0 z-50 pt-4 md:pt-6">
        <div className="shell flex items-center justify-between gap-4">
          {/* Wordmark */}
          <a
            href="#overview"
            className={cn(
              "group flex items-center gap-3 rounded-pill px-1 py-1 transition-colors duration-[var(--dur-base)]",
              isOnDark ? "text-paper" : "text-ink",
            )}
          >
            <span className="relative flex h-9 w-9 items-center justify-center">
              <span className="absolute inset-0 rounded-full bg-ember opacity-90 transition-transform duration-[var(--dur-base)] ease-editorial group-hover:scale-110" />
              <span className="relative font-display text-lg leading-none text-ink">C</span>
            </span>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">
              {siteConfig.name}
              <span
                className={cn(
                  "ml-2 font-normal",
                  isOnDark ? "text-paper/50" : "text-graphite-muted",
                )}
              >
                / Product
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav
            aria-label="Section navigation"
            className={cn(
              "hidden items-center gap-1 rounded-pill border p-1.5 transition-colors duration-[var(--dur-base)] lg:flex",
              isOnDark ? "glass-ink border-paper/15" : "glass-paper border-paper-line",
            )}
          >
            {siteConfig.navItems.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "rounded-pill px-3.5 py-1.5 text-[0.8125rem] font-medium tracking-tight transition-colors duration-[var(--dur-fast)]",
                    isActive
                      ? "bg-ember text-ink"
                      : isOnDark
                        ? "text-paper/60 hover:text-paper"
                        : "text-graphite-muted hover:text-ink",
                  )}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className={cn(
                "group hidden items-center gap-2 rounded-pill border px-4 py-2 text-[0.8125rem] font-semibold tracking-tight transition-colors duration-[var(--dur-fast)] sm:inline-flex",
                isOnDark
                  ? "border-paper/25 text-paper hover:border-ember hover:text-ember"
                  : "border-ink/20 text-ink hover:border-ink/60",
              )}
            >
              Get in touch
              <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-[var(--dur-fast)] ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              className={cn(
                "flex h-10 w-10 items-center justify-center rounded-pill border transition-colors duration-[var(--dur-fast)] lg:hidden",
                isMenuOpen || isOnDark
                  ? "border-paper/20 text-paper"
                  : "border-ink/15 text-ink",
              )}
            >
              <span className="sr-only">{isMenuOpen ? "Close menu" : "Open menu"}</span>
              <span className="flex w-4 flex-col gap-[5px]">
                <span
                  className={cn(
                    "h-px w-full bg-current transition-transform duration-[var(--dur-fast)] ease-editorial",
                    isMenuOpen && "translate-y-[3px] rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "h-px w-full bg-current transition-transform duration-[var(--dur-fast)] ease-editorial",
                    isMenuOpen && "-translate-y-[3px] -rotate-45",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div id="mobile-menu" hidden={!isMenuOpen} className="fixed inset-0 z-40 bg-ink lg:hidden">
        <div className="grain aurora absolute inset-0" aria-hidden="true" />
        <nav
          aria-label="Section navigation"
          className="shell relative flex h-full flex-col justify-center gap-2"
        >
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="group flex items-baseline gap-5 border-b border-paper/10 py-4 text-paper"
            >
              <span className="type-label text-ember">{item.numberPrefix}</span>
              <span className="type-heading transition-transform duration-[var(--dur-fast)] ease-editorial group-hover:translate-x-2">
                {item.label}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
