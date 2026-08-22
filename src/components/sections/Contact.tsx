"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { LinkedInIcon } from "@/components/ui/Icons";
import {
  Mail,
  Copy,
  Check,
  Sparkles,
  FileDown,
} from "lucide-react";

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-canvas relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          number="06"
          category="Conversation & Opportunities"
          title="Have a problem worth exploring?"
          subtitle="Whether you're hiring for a junior/associate product role, looking for a product-minded operator with serious stakeholder rigor, or want to discuss a case study, my inbox is open."
          annotation="Direct Connection"
        />

        <div className="rounded-3xl bg-surface border border-border p-8 sm:p-12 shadow-paper-lg max-w-4xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none hidden sm:block">
            <Sparkles className="w-32 h-32 text-accent" />
          </div>

          <div className="space-y-8 relative">
            <div>
              <Badge variant="sage" size="md" className="mb-4">
                London · Open to Opportunities
              </Badge>
              <h3 className="font-serif text-3xl sm:text-4xl text-ink font-normal tracking-tight">
                Let&apos;s talk about product thinking.
              </h3>
              <p className="text-sm sm:text-base text-ink-secondary mt-3 font-sans max-w-xl leading-relaxed">
                I am currently interviewing for Product roles in London and remotely, bringing 4+ years of cross-functional discovery, risk scoping, and operational execution.
              </p>
            </div>

            {/* Direct Contact Actions */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <Button
                href={`mailto:${siteConfig.email}?subject=Product%20Opportunity%20-%20Caroline%20Portfolio`}
                variant="editorial"
                size="lg"
                icon={<Mail className="w-4 h-4" />}
              >
                Send Email Directly
              </Button>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-canvas-subtle hover:bg-canvas text-xs sm:text-sm font-mono text-ink transition-all active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-accent cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-sage" />
                    <span>Email copied to clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-ink-muted" />
                    <span>Copy email address</span>
                  </>
                )}
              </button>

              <Button
                href={siteConfig.linkedin}
                target="_blank"
                variant="secondary"
                size="lg"
                icon={<LinkedInIcon className="w-4 h-4 text-[#0077B5]" />}
              >
                Connect on LinkedIn
              </Button>
            </div>

            {/* Note on CV Request */}
            <div className="pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-sans text-ink-secondary">
              <div className="flex items-center gap-2">
                <FileDown className="w-4 h-4 text-accent shrink-0" />
                <span>
                  Complete verified CV in PDF format available directly upon email request.
                </span>
              </div>

              <span className="font-mono text-[11px] text-ink-faint">
                Response time: &lt; 24 hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
