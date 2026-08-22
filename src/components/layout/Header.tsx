"use client";

import React, { useState, useEffect } from "react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = siteConfig.navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-200",
        isScrolled
          ? "bg-canvas/90 backdrop-blur-md border-b border-border/80 shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity */}
        <a
          href="#overview"
          className="group flex items-baseline gap-2 text-ink hover:text-accent transition-colors"
        >
          <span className="font-serif text-xl sm:text-2xl font-normal tracking-tight">
            {siteConfig.name}
          </span>
          <span className="hidden sm:inline-block font-mono text-[11px] text-ink-muted group-hover:text-accent/80 transition-colors uppercase tracking-wider">
            / Product Thinking
          </span>
        </a>

        {/* Desktop navigation */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2 bg-surface/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-border/80 shadow-paper"
          aria-label="Main Navigation"
        >
          {siteConfig.navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "px-3 py-1 rounded-full text-xs font-sans transition-all duration-150 relative",
                  isActive
                    ? "text-ink font-medium bg-canvas-subtle"
                    : "text-ink-secondary hover:text-ink hover:bg-canvas-subtle/50"
                )}
              >
                <span className="font-mono text-[10px] text-ink-muted mr-1 opacity-70">
                  {item.numberPrefix}
                </span>
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Header Right / Status & CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-sage-light text-sage border border-sage-muted text-[11px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
            <span>London · Product Pivot</span>
          </div>

          <Button
            href="#contact"
            variant="primary"
            size="sm"
            icon={<ArrowUpRight className="w-3.5 h-3.5" />}
          >
            Let&apos;s talk
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex sm:hidden items-center gap-2">
          <Button
            href="#contact"
            variant="primary"
            size="sm"
            className="text-xs px-2.5 py-1"
          >
            Contact
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-ink-secondary hover:text-ink hover:bg-canvas-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-x-0 top-[57px] bg-canvas border-b border-border shadow-paper-lg p-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-sage-light text-sage border border-sage-muted text-xs font-mono">
            <Sparkles className="w-4 h-4 shrink-0" />
            <span>London · Open to Product Opportunities</span>
          </div>

          <nav className="flex flex-col space-y-2 pt-2" aria-label="Mobile Navigation">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between p-2.5 rounded-lg text-sm text-ink-secondary hover:text-ink hover:bg-surface font-sans border border-transparent hover:border-border"
              >
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs text-accent">{item.numberPrefix}</span>
                  <span className="font-medium text-ink">{item.label}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-ink-muted" />
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
