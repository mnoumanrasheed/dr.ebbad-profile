import Link from "next/link";
import { ArrowRight, Crosshair, HeartPulse, Brain, BookOpen, ShieldAlert, Sparkles, CheckCircle2, Milestone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { PROFILE } from "@/content/profile";

export const metadata = {
  title: "Medical Interests & Vision | Ebbad Nazir — Surgical Ambition",
  description:
    "Discover Ebbad Nazir's primary specialty interest in surgery, his foundational interests in clinical medicine and anatomy, and his long-term career ambition.",
};

const INTEREST_ICONS = {
  "Clinical Medicine": HeartPulse,
  "Human Anatomy & Physiology": Brain,
  "Preventive Medicine": ShieldAlert,
  "Continuous Medical Learning": BookOpen,
};

export default function InterestsPage() {
  const int = PROFILE.interests;

  return (
    <div className="bg-background text-foreground pb-24">
      {/* Page Hero */}
      <PageHero
        eyebrowNumber="05"
        eyebrowLabel="SPECIALTY AMBITION & VISION"
        title={int.heading}
        subtitle="A future dedicated to surgical precision, clinical diagnostic acumen, and compassionate patient care."
        breadcrumb={[{ label: "Interests & Vision" }]}
        bgImage="/images/hero-interests.jpg"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-24 space-y-20">
        {/* Featured Specialty Ambition: SURGERY */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-surface border border-white/20 shadow-2xl relative overflow-hidden">
          {/* Ambient lighting highlight */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-white/[0.05] via-transparent to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono text-foreground uppercase tracking-widest">
              <Crosshair className="w-3.5 h-3.5 text-metallic animate-spin" />
              <span>PRIMARY CAREER AMBITION</span>
            </div>

            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground">
              {int.featured.name}
            </h2>

            <p className="font-editorial italic text-xl sm:text-2xl text-metallic">
              &ldquo;{int.featured.tagline}&rdquo;
            </p>

            <p className="text-base sm:text-lg text-muted/95 leading-relaxed font-normal">
              {int.featured.body}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-metallic/80">
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">
                Technical Precision
              </span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">
                Anatomical Mastery
              </span>
              <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10">
                Teamwork Under Pressure
              </span>
            </div>
          </div>
        </div>

        {/* Four Additional Interests (Demarcated as Learning Interests, not Specializations) */}
        <div className="space-y-6">
          <div className="space-y-1">
            <SectionEyebrow number="I.01" label="UNDERGRADUATE FOCUS AREAS" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Foundations of Medical Curiosity
            </h2>
            <p className="text-sm text-muted max-w-2xl">
              Key domains of ongoing undergraduate study supporting clinical readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {int.additional.map((item, idx) => {
              const Icon = INTEREST_ICONS[item.title] || Sparkles;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-surface/60 border border-white/10 hover:border-metallic/40 hover:bg-surface transition-all duration-300 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-metallic">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-metallic/50">0{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Aspirational Career Path: Step-by-Step Trajectory */}
        <div className="p-8 sm:p-12 rounded-3xl bg-surface/40 border border-white/10 space-y-10">
          <div className="space-y-2">
            <SectionEyebrow number="I.02" label="CAREER TRAJECTORY & VISION" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              The Path Toward Surgical Practice
            </h2>
            <blockquote className="text-base sm:text-lg text-foreground/90 font-editorial italic max-w-3xl leading-relaxed pt-2">
              &ldquo;{int.careerVision.statement}&rdquo;
            </blockquote>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {int.careerVision.aspirationalPath.map((step, idx) => {
              const isCurrent = step.status.includes("In Progress");

              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl border transition-all ${
                    isCurrent
                      ? "bg-surface border-white/25 shadow-xl shadow-black/40 ring-1 ring-white/10"
                      : "bg-surface/30 border-white/10 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xl font-bold text-metallic">
                      {step.step}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded-full ${
                        isCurrent
                          ? "bg-emerald-400/10 text-emerald-300 border border-emerald-400/20"
                          : "bg-white/5 text-muted border border-white/10"
                      }`}
                    >
                      {step.status}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Next Route Navigation */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-muted uppercase tracking-widest block">
              FINAL SECTION
            </span>
            <span className="text-base font-semibold text-foreground">
              Contact & Professional Inquiries
            </span>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider bg-foreground text-background hover:bg-white transition-all duration-300"
          >
            <span>CONNECT WITH EBBAD</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
