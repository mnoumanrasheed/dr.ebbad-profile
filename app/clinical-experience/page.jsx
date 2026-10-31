import Link from "next/link";
import { ArrowRight, Building, Calendar, Users, Eye, ShieldCheck, HeartHandshake, Stethoscope, Compass, Award } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import CompactCTA from "@/components/sections/CompactCTA";
import { PROFILE } from "@/content/profile";

export const metadata = {
  title: "Clinical Experience | Ebbad Nazir — FGPC Surgery Internship",
  description:
    "Explore Ebbad Nazir's clinical internship in the Surgery Department at Federal Government Polyclinic Hospital (FGPC), Islamabad (14 June – 15 July), emphasizing professional hospital exposure and patient-centered care.",
};

const THEME_ICONS = {
  "Surgical Setting Exposure": Eye,
  "Clinical Professionalism": ShieldCheck,
  "Healthcare Teamwork": Users,
  "Patient-Centered Focus": HeartHandshake,
};

export default function ClinicalExperiencePage() {
  const exp = PROFILE.clinicalExperience;

  return (
    <div className="bg-[#FAF9F5] text-[#12141A] pb-28">
      {/* Page Hero */}
      <PageHero
        eyebrowNumber="03"
        eyebrowLabel="CLINICAL ENVIRONMENT"
        title={exp.heading}
        subtitle="Departmental exposure, hospital professionalism, and observational learning at a major federal tertiary institution."
        breadcrumb={[{ label: "Clinical Experience" }]}
        bgImage="/images/hero-clinical.jpg"
        variant="light"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-24 space-y-20">
        {/* Core Institutional Dossier Card */}
        <div className="rounded-3xl bg-white p-8 sm:p-12 lg:p-14 border border-[#E2DED2] shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <SectionEyebrow number="C.01" label="TERTIARY HOSPITAL ROTATION" variant="dark" />
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#12141A]">
                {exp.institution}
              </h2>
              <p className="text-base sm:text-lg font-mono text-[#5A6172] flex items-center gap-2.5">
                <Stethoscope className="w-5 h-5 text-[#BD903C]" />
                <span>{exp.department} &bull; {exp.role}</span>
              </p>
            </div>

            {/* Key Date Badge */}
            <div className="lg:col-span-4 lg:text-right">
              <div className="inline-block p-6 rounded-2xl bg-[#FAF9F5] border border-[#BD903C]/40 text-left font-mono shadow-sm">
                <span className="block text-xs uppercase tracking-widest text-[#BD903C] flex items-center gap-2 font-bold">
                  <Calendar className="w-4 h-4 text-[#BD903C]" />
                  INTERNSHIP DURATION
                </span>
                <span className="mt-1 block text-2xl sm:text-3xl font-bold text-[#12141A] font-editorial">
                  {exp.duration}
                </span>
                <span className="text-xs text-[#848A96] block mt-1">
                  {exp.durationNote}
                </span>
              </div>
            </div>
          </div>

          {/* Approved Reflective Narrative */}
          <div className="mt-10 pt-8 border-t border-[#E2DED2] relative z-10">
            <h3 className="font-mono text-xs tracking-widest text-[#BD903C] uppercase mb-4 flex items-center gap-2 font-bold">
              <Award className="w-4 h-4 text-[#BD903C]" />
              AUTHENTIC CLINICAL REFLECTION
            </h3>
            <blockquote className="p-7 sm:p-9 rounded-2xl bg-[#FAF9F5] border border-[#E2DED2] text-lg sm:text-2xl text-[#12141A] leading-relaxed font-editorial italic">
              &ldquo;{exp.approvedDescription}&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Four Themes of Exposure & Learning */}
        <div className="space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#E2DED2]">
            <div className="space-y-2">
              <SectionEyebrow number="C.02" label="CORE OBSERVATIONAL LEARNING" variant="dark" />
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold tracking-tight text-[#12141A]">
                Dimensions of Clinical Exposure
              </h2>
            </div>
            <p className="text-sm text-[#5A6172] max-w-md font-sans leading-relaxed">
              Authentic student observational themes from the Surgery Department. No surgical procedures or clinical duties were claimed or fabricated.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {exp.exposureThemes.map((theme, idx) => {
              const Icon = THEME_ICONS[theme.title] || Stethoscope;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-white p-8 sm:p-9 border border-[#E2DED2] shadow-sm hover:border-[#BD903C] hover:shadow-md transition-all duration-300 space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-xl bg-[#FAF9F5] border border-[#E2DED2] flex items-center justify-center text-[#BD903C]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-[#848A96] font-bold">0{idx + 1} / DIMENSION</span>
                  </div>

                  <h3 className="font-editorial text-2xl font-bold text-[#12141A]">
                    {theme.title}
                  </h3>

                  <p className="text-sm text-[#5A6172] leading-relaxed font-sans">
                    {theme.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ethical Standards & Practice Protocol Box */}
        <div className="p-8 sm:p-9 rounded-3xl bg-[#F5F3EB] border border-[#E2DED2] text-xs text-[#5A6172] space-y-3 font-mono">
          <div className="flex items-center gap-2.5 text-[#BD903C] text-xs uppercase tracking-widest font-bold">
            <ShieldCheck className="w-5 h-5 text-[#BD903C]" />
            <span>Scope of Medical Student Internship &bull; Code of Integrity</span>
          </div>
          <p className="leading-relaxed font-sans text-sm text-[#2C313E]">
            As a fourth-year undergraduate medical student, all departmental exposure at Federal Government Polyclinic Hospital was completed within academic observational guidelines. In adherence to strict ethical codes, no claims of independent clinical consultation, assisting operative surgery, invasive intervention, or unauthorized medical authority are made.
          </p>
        </div>

        {/* Next Route Navigation */}
        <div className="pt-10 border-t border-[#E2DED2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="font-mono text-[10px] text-[#BD903C] uppercase tracking-widest block font-bold">
              NEXT SECTION
            </span>
            <span className="text-base font-semibold text-[#12141A]">
              Medical Interests & Career Vision: Surgery
            </span>
          </div>
          <Link
            href="/interests"
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-full text-xs font-bold tracking-widest uppercase bg-[#12141A] text-white hover:bg-[#BD903C] hover:text-[#12141A] transition-all duration-300 shadow-md"
          >
            <span>VIEW SURGICAL VISION</span>
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
