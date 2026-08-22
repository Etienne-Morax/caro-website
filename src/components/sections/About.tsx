import React from "react";
import { profileData } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Quote, ArrowRight, Compass, Users, CheckCircle2 } from "lucide-react";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 border-b border-border bg-canvas-subtle/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="02"
          category="Transition Narrative"
          title="From execution to product thinking"
          subtitle="Why shifting from delivery-focused talent operations to product problem-solving is an expansion of verified strengths."
          annotation="The Authentic Career Pivot"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main narrative text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-surface rounded-2xl p-6 sm:p-8 border border-border shadow-paper space-y-6">
              <p className="font-serif text-lg sm:text-xl text-ink leading-relaxed italic border-l-2 border-accent pl-4">
                &ldquo;{profileData.narrativeLead}&rdquo;
              </p>

              <div className="space-y-6 pt-2">
                {profileData.narrativeSections.map((sec, idx) => (
                  <div key={idx} className="space-y-2 border-t border-border-subtle pt-4 first:border-t-0 first:pt-0">
                    <h3 className="font-serif text-lg font-medium text-ink flex items-center gap-2">
                      <span className="font-mono text-xs text-accent font-semibold">
                        0{idx + 1}.
                      </span>
                      {sec.title}
                    </h3>
                    <p className="text-sm sm:text-base text-ink-secondary leading-relaxed font-sans font-normal">
                      {sec.content}
                    </p>
                    {sec.highlight && (
                      <div className="inline-block bg-highlight/60 border border-highlight-border/80 px-2.5 py-1 rounded text-xs font-mono text-ink mt-1">
                        ★ {sec.highlight}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side summary card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-surface rounded-2xl p-6 border border-border shadow-paper space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-border">
                <span className="font-mono text-xs uppercase tracking-wider text-ink-muted">
                  Quick Profile Scan
                </span>
                <Badge variant="sage" size="sm">
                  London Based
                </Badge>
              </div>

              <div className="space-y-3.5 text-sm font-sans">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-ink">4+ Years Real-World Operations:</span>
                    <p className="text-xs text-ink-secondary mt-0.5">
                      High-urgency hiring, compliance scoping, and cross-border team coordination.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-ink">1,000+ Deep Discovery Interviews:</span>
                    <p className="text-xs text-ink-secondary mt-0.5">
                      Expert in uncovering unstated motivations, psychological friction, and true blockers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-ink">Bilingual FR / EN:</span>
                    <p className="text-xs text-ink-secondary mt-0.5">
                      Native French, fluent English; extensive cross-cultural business stakeholder management.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-ink">Zero Vanity Jargon:</span>
                    <p className="text-xs text-ink-secondary mt-0.5">
                      Evidence-led, structured trade-offs, and respect for execution constraints.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between">
                <a
                  href="#bridge"
                  className="text-xs font-mono text-accent hover:underline flex items-center gap-1 font-semibold"
                >
                  <span>Explore the Experience-to-Product Bridge</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
