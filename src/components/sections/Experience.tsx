import React from "react";
import { experienceData, educationData } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { MapPin, Calendar, Briefcase, Sparkles, GraduationCap } from "lucide-react";

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 border-b border-border bg-canvas">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          number="03"
          category="Verified Background"
          title="Professional experience & product lens"
          subtitle="A structured overview of 4+ years in specialist talent consultancy, risk hiring, and HR operations, analyzed through a transferable product competency lens."
          annotation="Verified Source of Truth"
        />

        {/* Roles List */}
        <div className="space-y-8">
          {experienceData.map((role) => (
            <div
              key={role.id}
              className="rounded-2xl bg-surface border border-border p-6 sm:p-8 shadow-paper hover:shadow-paper-hover transition-all duration-200"
            >
              {/* Role Header */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-5 border-b border-border gap-3">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <h3 className="font-serif text-2xl font-normal text-ink">
                      {role.company}
                    </h3>
                    {role.isCurrent && (
                      <Badge variant="sage" size="sm">
                        Current Role
                      </Badge>
                    )}
                    <Badge variant="default" size="sm">
                      {role.domain}
                    </Badge>
                  </div>
                  <div className="text-base font-medium text-ink-secondary font-sans">
                    {role.role}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-ink-muted">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-ink-faint" />
                    {role.period}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-ink-faint" />
                    {role.location}
                  </span>
                </div>
              </div>

              {/* Context and Responsibilities Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
                <div className="lg:col-span-7 space-y-4">
                  <p className="text-xs font-mono text-ink-muted uppercase tracking-wider">
                    Context & Verified Deliverables
                  </p>
                  <p className="text-xs sm:text-sm text-ink-secondary italic font-serif">
                    {role.companyContext}
                  </p>
                  <ul className="space-y-2.5 text-xs sm:text-sm font-sans text-ink-secondary">
                    {role.coreResponsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/80 shrink-0 mt-2" />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Product Lens Annotation Card */}
                <div className="lg:col-span-5 bg-canvas-subtle/80 rounded-xl p-4 sm:p-5 border border-border flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-accent font-semibold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Product Lens Annotation</span>
                    </div>

                    <div className="font-serif text-base font-medium text-ink leading-snug">
                      {role.productLens.headline}
                    </div>

                    <p className="text-xs font-sans text-ink-secondary leading-relaxed">
                      {role.productLens.explanation}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-border-subtle flex items-center justify-between">
                    <span className="text-[11px] font-mono text-ink-muted">Transferable Core:</span>
                    <Badge variant="accent" size="sm">
                      {role.productLens.competency}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Compact Education & Languages Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="w-4 h-4 text-accent" />
            <h3 className="font-mono text-xs uppercase tracking-wider text-ink-muted font-semibold">
              Education & Language Proficiencies
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {educationData.map((edu, idx) => (
              <div
                key={idx}
                className="bg-surface rounded-xl p-4 border border-border shadow-sm flex items-start justify-between gap-4"
              >
                <div>
                  <div className="font-serif text-base text-ink font-medium">
                    {edu.degree}
                  </div>
                  <div className="text-xs font-mono text-ink-muted mt-0.5">
                    {edu.institution} · {edu.location}
                  </div>
                  {edu.details && (
                    <div className="text-xs text-ink-secondary font-sans mt-2">
                      {edu.details}
                    </div>
                  )}
                </div>
                <Badge variant="mono" size="sm">
                  {edu.period}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
