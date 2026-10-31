import Link from "next/link";
import { ArrowRight, Crosshair, HeartPulse, Brain, BookOpen, ShieldAlert, Sparkles, CheckCircle2, Milestone, Stethoscope, Compass } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import CompactCTA from "@/components/sections/CompactCTA";
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
    <div className="bg-[#FAF9F5] text-[#12141A] pb-28">
      {/* Page Hero */}
      <PageHero
        eyebrowNumber="05"
        eyebrowLabel="SPECIALTY AMBITION & VISION"
        title={int.heading}
        subtitle="A future dedicated to surgical precision, clinical diagnostic acumen, and compassionate patient care."
        breadcrumb={[{ label: "Interests & Vision" }]}
        bgImage="/images/hero-interests.jpg"
        variant="light"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-24 space-y-20">
        {/* Featured Specialty Ambition: SURGERY */}
        <div className="rounded-3xl bg-white p-8 sm:p-12 lg:p-16 border border-[#E2DED2] shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden">
          <div className="relative max-w-3xl space-y-6 z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAF9F5] border border-[#BD903C]/40 text-xs font-mono font-bold text-[#BD903C] uppercase tracking-widest">
              <Crosshair className="w-3.5 h-3.5 text-[#BD903C]" />
              <span>PRIMARY CAREER AMBITION</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#12141A]">
              {int.featured.name}
            </h2>

            <p className="font-editorial italic text-2xl sm:text-3xl text-[#BD903C]">
              &ldquo;{int.featured.tagline}&rdquo;
            </p>

            <p className="text-base sm:text-lg text-[#2C313E] leading-relaxed font-sans">
              {int.featured.body}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-[#5A6172] font-semibold">
              <span className="px-4 py-2 rounded-xl bg-[#FAF9F5] border border-[#E2DED2]">
                Technical Precision
              </span>
              <span className="px-4 py-2 rounded-xl bg-[#FAF9F5] border border-[#E2DED2]">
                Anatomical Mastery
              </span>
              <span className="px-4 py-2 rounded-xl bg-[#FAF9F5] border border-[#E2DED2]">
                Composure Under Pressure
              </span>
            </div>
          </div>
        </div>

        {/* Four Additional Interests */}
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#E2DED2]">
            <div className="space-y-2">
              <SectionEyebrow number="I.01" label="UNDERGRADUATE FOCUS DOMAINS" variant="dark" />
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold tracking-tight text-[#12141A]">
                Foundations of Medical Curiosity
              </h2>
            </div>
            <p className="text-sm text-[#5A6172] max-w-md font-sans leading-relaxed">
              Key domains of ongoing undergraduate study supporting clinical readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {int.additional.map((item, idx) => {
              const Icon = INTEREST_ICONS[item.title] || Sparkles;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-white p-8 sm:p-9 border border-[#E2DED2] shadow-sm hover:border-[#BD903C] transition-all duration-300 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF9F5] border border-[#E2DED2] flex items-center justify-center text-[#BD903C]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-[#848A96] font-bold">0{idx + 1}</span>
                  </div>

                  <h3 className="font-editorial text-2xl font-bold text-[#12141A]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#5A6172] leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Aspirational Career Path: Step-by-Step Trajectory */}
        <div className="rounded-3xl bg-[#F5F3EB] p-8 sm:p-12 lg:p-14 space-y-10 border border-[#E2DED2] shadow-sm relative">
          <div className="space-y-3 relative z-10">
            <SectionEyebrow number="I.02" label="CAREER TRAJECTORY & VISION" variant="dark" />
            <h2 className="font-editorial text-3xl sm:text-4xl font-semibold tracking-tight text-[#12141A]">
              The Path Toward Surgical Practice
            </h2>
            <blockquote className="text-base sm:text-xl text-[#2C313E] font-editorial italic max-w-3xl leading-relaxed pt-2 border-l-2 border-[#BD903C] pl-6">
              &ldquo;{int.careerVision.statement}&rdquo;
            </blockquote>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {int.careerVision.aspirationalPath.map((step, idx) => {
              const isCurrent = step.status.includes("In Progress");

              return (
                <div
                  key={idx}
                  className={`p-7 rounded-2xl border transition-all duration-300 space-y-4 ${
                    isCurrent
                      ? "bg-white border-[#BD903C] shadow-md ring-1 ring-[#BD903C]/30"
                      : "bg-[#FAF9F5] border-[#E2DED2] hover:border-[#BD903C]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xl font-bold text-[#BD903C]">
                      {step.step}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full font-bold ${
                        isCurrent
                          ? "bg-[#FAF9F5] text-[#BD903C] border border-[#BD903C]/40"
                          : "bg-white text-[#848A96] border border-[#E2DED2]"
                      }`}
                    >
                      {step.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#12141A] font-editorial">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A6172] leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Next Route Navigation */}
        <div className="pt-10 border-t border-[#E2DED2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="font-mono text-[10px] text-[#BD903C] uppercase tracking-widest block font-bold">
              FINAL SECTION
            </span>
            <span className="text-base font-semibold text-[#12141A]">
              Contact & Professional Inquiries
            </span>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-full text-xs font-bold tracking-widest uppercase bg-[#12141A] text-white hover:bg-[#BD903C] hover:text-[#12141A] transition-all duration-300 shadow-md"
          >
            <span>CONNECT WITH EBBAD</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="pt-16">
        <CompactCTA />
      </div>
    </div>
  );
}
