import React from "react";
import { siteConfig } from "@/data/site";
import { ArrowUpRightIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer data-tone="ink" className="border-t border-paper/10 bg-ink">
      <div className="shell flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ember font-display text-base text-ink">
            C
          </span>
          <p className="text-sm text-paper/60">{siteConfig.copyright}</p>
        </div>

        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-underline text-sm text-paper/60 transition-colors duration-[var(--dur-fast)] hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#overview"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-paper/60 transition-colors duration-[var(--dur-fast)] hover:text-ember"
        >
          Back to top
          <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform duration-[var(--dur-fast)] ease-editorial group-hover:-translate-y-0.5" />
        </a>
      </div>
    </footer>
  );
}
