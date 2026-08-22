import React from "react";
import { siteConfig } from "@/data/site";
import { ArrowUp, Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/Icons";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border bg-canvas-subtle/70 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-serif text-lg font-normal text-ink">{siteConfig.name}</span>
            <span className="font-mono text-xs text-ink-muted">/ Portfolio & Thinking</span>
          </div>
          <p className="text-xs text-ink-muted font-sans max-w-md">
            Translating operational rigor and deep stakeholder discovery into high-impact product execution.
          </p>
        </div>

        {/* Social and Navigation */}
        <div className="flex items-center gap-6 text-xs font-sans text-ink-secondary">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <LinkedInIcon className="w-3.5 h-3.5" />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-1.5 hover:text-accent transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <a
            href="#overview"
            className="flex items-center gap-1 hover:text-accent transition-colors border border-border bg-surface px-2.5 py-1 rounded-md"
          >
            <ArrowUp className="w-3 h-3" />
            <span>Back to top</span>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-mono text-ink-faint">
        <div>{siteConfig.copyright}</div>
        <div className="flex items-center gap-3">
          <span>London & Paris background</span>
          <span>·</span>
          <span>Bilingual FR/EN</span>
        </div>
      </div>
    </footer>
  );
};
