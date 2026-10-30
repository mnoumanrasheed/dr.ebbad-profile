import Link from "next/link";
import { ArrowRight, GraduationCap, CheckCircle2, Clock, Award, BookCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { PROFILE } from "@/content/profile";

export const metadata = {
  title: "Education | Ebbad Nazir — Academic Foundation",
  description:
    "Explore the verified academic trajectory of Ebbad Nazir: Matriculation 88%, F.Sc. Pre-Medical 94%, and MBBS at Rai Medical College Sargodha (Session 2022–2027) with 83% medical admission aggregate.",
};

export default function EducationPage() {
  return (
    <div className="bg-background text-foreground pb-24">
      {/* Page Hero */}
      <PageHero
        eyebrowNumber="02"
        eyebrowLabel="ACADEMIC FOUNDATION"
        title={PROFILE.education.heading}
        subtitle={PROFILE.education.subheading}
        breadcrumb={[{ label: "Education" }]}
        bgImage="/images/hero-education.jpg"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-24 space-y-20">
        {/* Verified Academic Aggregate Notice Banner */}
        <div className="p-6 rounded-2xl bg-surface/80 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-mono text-[11px] tracking-widest text-metallic uppercase flex items-center gap-2">
              <Award className="w-3.5 h-3.5" />
              VERIFIED RECORD DISCLOSURE
            </span>
            <h2 className="text-lg font-bold text-foreground">
              Admission Aggregate & Formal Academic Metrics
            </h2>
            <p className="text-sm text-muted max-w-2xl leading-relaxed">
              Academic metrics below represent authenticated board exam results and the official medical college admission aggregate (83%). MBBS marks are not represented as completed degree GPAs because the degree is actively in progress (fourth year, Session 2022–2027).
            </p>
          </div>
          <div className="flex-shrink-0 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-center font-mono">
            <span className="block text-2xl font-bold text-foreground">83%</span>
            <span className="text-[10px] text-muted uppercase">MBBS Admission Aggregate</span>
          </div>
        </div>

        {/* Chronological Timeline Section */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <SectionEyebrow number="T.01" label="CHRONOLOGICAL MILESTONES" />
              <h2 className="text-3xl font-bold tracking-tight text-foreground mt-2">
                Three Pillars of Study
              </h2>
            </div>
            <span className="hidden sm:inline-block font-mono text-xs text-muted">
              CHRONOLOGY 2018 &mdash; 2027
            </span>
          </div>

          {/* Interactive Timeline Track */}
          <div className="relative border-l-2 border-white/15 ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-12">
            {PROFILE.education.timeline.map((entry, idx) => {
              const isCurrent = entry.period.includes("2022–2027");

              return (
                <div key={idx} className="relative group">
                  {/* Timeline Node Indicator */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[55px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      isCurrent
                        ? "bg-foreground border-white ring-4 ring-white/20 animate-pulse"
                        : "bg-surface border-metallic group-hover:bg-metallic group-hover:border-foreground"
                    }`}
                  />

                  {/* Card Container */}
                  <div
                    className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                      isCurrent
                        ? "bg-surface border-white/20 shadow-2xl shadow-black/60"
                        : "bg-surface/50 border-white/10 hover:border-metallic/40 hover:bg-surface/80"
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-3">
                          <span
                            className={`font-mono text-xs px-2.5 py-0.5 rounded-full uppercase tracking-wider ${
                              isCurrent
                                ? "bg-white/15 text-foreground border border-white/20 font-semibold"
                                : "bg-white/5 text-muted border border-white/10"
                            }`}
                          >
                            {entry.badge}
                          </span>
                          <span className="font-mono text-xs text-metallic">
                            {entry.period}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                          {entry.degree}
                        </h3>
                        <p className="text-sm font-medium text-muted flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-metallic flex-shrink-0" />
                          <span>{entry.institution}</span>
                        </p>
                      </div>

                      {/* Score Highlight Box */}
                      <div className="flex-shrink-0 flex items-center gap-4 p-4 rounded-xl bg-background/80 border border-white/10">
                        <div className="text-right">
                          <span className="block text-3xl font-black text-foreground tracking-tight">
                            {entry.score}
                          </span>
                          <span className="block font-mono text-[10px] text-metallic uppercase tracking-wider">
                            {entry.scoreLabel}
                          </span>
                        </div>
                        <div className="p-2 rounded-lg bg-white/5 text-metallic">
                          {isCurrent ? (
                            <Clock className="w-5 h-5 animate-pulse" />
                          ) : (
                            <CheckCircle2 className="w-5 h-5" />
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 text-sm sm:text-base text-muted/90 leading-relaxed max-w-3xl">
                      {entry.details}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Editorial Paper Moment: Academic Discipline & Study Philosophy */}
        <div className="editorial-paper rounded-3xl p-8 sm:p-12 lg:p-16 space-y-6 shadow-2xl">
          <SectionEyebrow number="E.02" label="PHILOSOPHY OF LEARNING" variant="dark" />
          <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-ink">
            Precision, Rigor, and Scientific Depth
          </h2>
          <p className="text-base sm:text-lg text-ink/85 leading-relaxed max-w-3xl">
            Undergraduate medical training requires not only retention of vast anatomical and physiological taxonomies, but also the cultivation of analytical reasoning under pressure. From Taleem-ul-Islam School and Punjab College to Rai Medical College, this trajectory reflects an unbroken commitment to scientific excellence and personal integrity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t paper-border">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-wider text-ink/60">
                Foundational Science
              </span>
              <p className="font-semibold text-ink text-sm">
                Biology, Chemistry, Physics
              </p>
              <p className="text-xs text-ink/70">
                Graduated with 88% matriculation board standing.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-wider text-ink/60">
                Pre-Medical Rigor
              </span>
              <p className="font-semibold text-ink text-sm">
                Punjab College Pre-Med
              </p>
              <p className="text-xs text-ink/70">
                Completed with 94% higher secondary distinction.
              </p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-wider text-ink/60">
                Clinical Transition
              </span>
              <p className="font-semibold text-ink text-sm">
                Rai Medical College
              </p>
              <p className="text-xs text-ink/70">
                83% admission aggregate, now actively in 4th year rotations.
              </p>
            </div>
          </div>
        </div>

        {/* Next Route Navigation */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-muted uppercase tracking-widest block">
              NEXT SECTION
            </span>
            <span className="text-base font-semibold text-foreground">
              Clinical Experience: FGPC Hospital Surgical Internship
            </span>
          </div>
          <Link
            href="/clinical-experience"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider bg-foreground text-background hover:bg-white transition-all duration-300"
          >
            <span>VIEW CLINICAL EXPERIENCE</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
