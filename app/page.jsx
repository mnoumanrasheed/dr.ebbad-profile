import Link from "next/link";
import { ArrowRight, ArrowUpRight, Award, BookOpen, Building2, Calendar, Compass, HeartPulse, Landmark, MapPin, ShieldCheck, Sparkles, Stethoscope, Users, CheckCircle2 } from "lucide-react";
import HomeHero from "@/components/sections/HomeHero";
import AcademicMilestones from "@/components/sections/AcademicMilestones";
import CompactCTA from "@/components/sections/CompactCTA";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import { PROFILE } from "@/content/profile";

export const metadata = {
  title: "Ebbad Nazir | MBBS Student & Aspiring Surgeon — Medical Portfolio",
  description:
    "Explore the professional medical portfolio of Ebbad Nazir, fourth-year MBBS student at Rai Medical College, Sargodha (2022–2027), with surgical internship experience at FGPC Islamabad.",
};

export default function HomePage() {
  return (
    <div className="bg-[#FAF9F5] text-[#12141A]">
      {/* 1. Reference Hero (Untouched) */}
      <HomeHero />

      {/* 2. Academic Distinction & Verified Standing (Redesigned with Live Animations) */}
      <AcademicMilestones />

      {/* 3. The Surgeon's Calling: Editorial Spread (Clean Warm Ivory) */}
      <section className="relative bg-[#FAF9F5] py-24 lg:py-32 border-b border-[#E2DED2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Editorial Statement */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <SectionEyebrow number="02" label="CLINICAL PHILOSOPHY" variant="dark" />
                <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-[#12141A] leading-[1.08]">
                  Precision in Knowledge.<br />
                  <span className="italic font-normal text-[#BD903C]">Compassion in Care.</span>
                </h2>
              </div>

              <div className="space-y-5 text-base sm:text-lg text-[#2C313E] font-sans leading-relaxed border-l-2 border-[#BD903C] pl-6">
                <p>
                  As a fourth-year MBBS student at Rai Medical College, medical learning is an active pursuit of scientific excellence, diagnostic reasoning, and patient dignity.
                </p>
                <p>
                  Surgery demands the ultimate harmony of anatomic knowledge, manual composure, and humble collaboration. Every clinical posting and case study reinforces this lifelong dedication.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 px-7 py-4 rounded-full text-xs font-bold tracking-widest uppercase bg-[#12141A] text-white hover:bg-[#BD903C] hover:text-[#12141A] transition-all duration-300 shadow-md"
                >
                  <span>Read Personal Journey & Values</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right: Four Medical Tenets Cards */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  {
                    num: "01",
                    title: "Compassion",
                    detail: "Honoring patient dignity, active listening, and clinical empathy as the heartbeat of healthcare.",
                    icon: HeartPulse,
                  },
                  {
                    num: "02",
                    title: "Integrity",
                    detail: "Upholding uncompromising ethical standards, truthfulness, and professional responsibility in every setting.",
                    icon: ShieldCheck,
                  },
                  {
                    num: "03",
                    title: "Discipline",
                    detail: "Cultivating meticulous study habits, surgical precision, and unwavering attention to clinical protocols.",
                    icon: Compass,
                  },
                  {
                    num: "04",
                    title: "Continuous Learning",
                    detail: "Treating medicine as an evolving science through relentless curiosity and evidence-based study.",
                    icon: BookOpen,
                  },
                ].map((tenet, idx) => {
                  const Icon = tenet.icon;
                  return (
                    <div
                      key={idx}
                      className="p-7 rounded-3xl bg-white border border-[#E2DED2] shadow-[0_4px_16px_rgba(0,0,0,0.02)] hover:border-[#BD903C] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] text-[#BD903C] border border-[#E2DED2] flex items-center justify-center">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-xs font-bold text-[#848A96]">0{idx + 1}</span>
                      </div>
                      <h3 className="font-editorial text-2xl font-bold text-[#12141A]">
                        {tenet.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5A6172] leading-relaxed font-sans">
                        {tenet.detail}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Institution Seal Badge */}
              <div className="p-6 rounded-3xl bg-[#F5F3EB] border border-[#E2DED2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-white border border-[#E2DED2] flex items-center justify-center text-[#BD903C] shadow-sm">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[#12141A] block font-sans font-bold text-sm">
                      {PROFILE.college}
                    </span>
                    <span className="text-xs text-[#5A6172] font-mono">
                      Sargodha, Pakistan &bull; Session {PROFILE.session}
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs uppercase px-3.5 py-1.5 rounded-full bg-white text-[#BD903C] border border-[#E2DED2] font-bold self-start sm:self-auto shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#BD903C] animate-pulse" />
                  Fourth Year (MBBS)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Surgical Clinical Dossier: FGPC Islamabad (Clean Focus, Public Health Removed) */}
      <section className="relative bg-[#F5F3EB] py-24 lg:py-32 border-b border-[#E2DED2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E2DED2]">
            <div className="space-y-3">
              <SectionEyebrow number="03" label="CLINICAL ROTATION RECORD" variant="dark" />
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#12141A]">
                Surgical Internship & Clinical Exposure
              </h2>
            </div>
            <p className="text-sm text-[#5A6172] max-w-md font-sans leading-relaxed">
              Hands-on observational learning in a premier tertiary care hospital in Islamabad, Pakistan.
            </p>
          </div>

          {/* Expanded Luxury Surgical Feature Card */}
          <div className="rounded-3xl bg-white p-8 sm:p-12 lg:p-14 border border-[#E2DED2] shadow-[0_8px_30px_rgba(0,0,0,0.04)] space-y-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="font-mono text-xs font-bold tracking-wider text-[#BD903C] uppercase px-3.5 py-1 rounded-full bg-[#FAF9F5] border border-[#E2DED2]">
                    SURGICAL INTERNSHIP
                  </span>
                  <span className="font-mono text-xs text-[#848A96] font-semibold">
                    14 June – 15 July &bull; FGPC Islamabad
                  </span>
                </div>

                <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#12141A] leading-tight">
                  Federal Government Polyclinic Hospital (FGPC)
                </h3>

                <p className="text-xs sm:text-sm font-mono text-[#5A6172] flex items-center gap-2">
                  <Stethoscope className="w-4 h-4 text-[#BD903C]" />
                  <span>Surgery Department Intern &bull; Tertiary Hospital Environment</span>
                </p>

                <blockquote className="text-base sm:text-lg text-[#2C313E] leading-relaxed font-sans italic border-l-2 border-[#BD903C] pl-5 pt-1">
                  &ldquo;{PROFILE.clinicalExperience.approvedDescription}&rdquo;
                </blockquote>
              </div>

              {/* Institution Quick Stats */}
              <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-[#FAF9F5] border border-[#E2DED2] space-y-4">
                <span className="font-mono text-xs tracking-widest text-[#BD903C] uppercase font-bold block">
                  ROTATION HIGHLIGHTS
                </span>
                <div className="space-y-3 text-xs font-sans text-[#2C313E]">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#BD903C] flex-shrink-0" />
                    <span>Operating Theatre Protocol Observation</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#BD903C] flex-shrink-0" />
                    <span>In-Patient Ward Rounds & Documentation</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#BD903C] flex-shrink-0" />
                    <span>Multidisciplinary Surgical Team Coordination</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#BD903C] flex-shrink-0" />
                    <span>Surgical Patient Consultation Protocols</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#E2DED2] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-mono text-[#848A96] uppercase tracking-wider font-semibold">
                TERTIARY SURGICAL RECORD &bull; ISLAMABAD, PAKISTAN
              </span>
              <Link
                href="/clinical-experience"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-xs font-bold font-mono tracking-widest uppercase bg-[#12141A] text-white hover:bg-[#BD903C] hover:text-[#12141A] transition-all duration-300 shadow-sm"
              >
                <span>EXPLORE CLINICAL RECORD</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Career Vision: The 4-Stage Surgical Roadmap (Clean Luminous) */}
      <section className="relative bg-[#FAF9F5] py-24 lg:py-32 border-b border-[#E2DED2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-14">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E2DED2]">
            <div className="space-y-3">
              <SectionEyebrow number="04" label="LONG-TERM VISION" variant="dark" />
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#12141A]">
                The Trajectory Toward Surgery
              </h2>
            </div>
            <p className="text-sm text-[#5A6172] max-w-md font-sans leading-relaxed">
              Transparent, milestone-based pathway from undergraduate clinical studies to structured postgraduate residency.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROFILE.interests.careerVision.aspirationalPath.map((step, idx) => {
              const isCurrent = step.status.includes("In Progress");

              return (
                <div
                  key={idx}
                  className={`p-8 rounded-3xl border transition-all duration-300 space-y-4 ${
                    isCurrent
                      ? "bg-white border-[#BD903C] shadow-lg ring-1 ring-[#BD903C]/30"
                      : "bg-[#F5F3EB] border-[#E2DED2] hover:border-[#BD903C]"
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

                  <h3 className="font-editorial text-2xl font-bold text-[#12141A]">
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
      </section>

      {/* 6. Compact Precision Correspondence CTA */}
      <CompactCTA />
    </div>
  );
}
