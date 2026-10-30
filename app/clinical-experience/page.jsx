import Link from "next/link";
import { ArrowRight, Building, Calendar, Users, Eye, ShieldCheck, HeartHandshake, Stethoscope } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
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
    <div className="bg-background text-foreground pb-24">
      {/* Page Hero */}
      <PageHero
        eyebrowNumber="03"
        eyebrowLabel="CLINICAL ENVIRONMENT"
        title={exp.heading}
        subtitle="Departmental exposure, hospital professionalism, and observational learning at a major federal tertiary institution."
        breadcrumb={[{ label: "Clinical Experience" }]}
        bgImage="/images/hero-clinical.jpg"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-24 space-y-16">
        {/* Core Institutional Dossier Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-surface border border-white/15 shadow-2xl relative overflow-hidden">
          {/* Subtle background ambient light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/[0.04] to-transparent rounded-full blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <SectionEyebrow number="C.01" label="INSTITUTIONAL RECORD" />
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {exp.institution}
              </h2>
              <p className="text-lg font-mono text-metallic flex items-center gap-2">
                <Stethoscope className="w-5 h-5" />
                <span>{exp.department} &bull; {exp.role}</span>
              </p>
            </div>

            {/* Key Date Badge (Strictly 14 June - 15 July, no invented year) */}
            <div className="lg:col-span-4 lg:text-right">
              <div className="inline-block p-4 rounded-2xl bg-white/5 border border-white/10 text-left font-mono">
                <span className="block text-[10px] uppercase tracking-wider text-muted flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-metallic" />
                  INTERNSHIP DURATION
                </span>
                <span className="mt-1 block text-2xl font-bold text-foreground">
                  {exp.duration}
                </span>
                <span className="text-[10px] text-metallic/70 block mt-0.5">
                  {exp.durationNote}
                </span>
              </div>
            </div>
          </div>

          {/* Approved Reflective Narrative */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="font-mono text-xs tracking-widest text-muted uppercase mb-4">
              APPROVED CLINICAL REFLECTION
            </h3>
            <blockquote className="p-6 sm:p-8 rounded-2xl bg-background/60 border border-white/10 text-base sm:text-xl text-foreground/95 leading-relaxed font-editorial italic">
              &ldquo;{exp.approvedDescription}&rdquo;
            </blockquote>
          </div>
        </div>

        {/* Four Themes of Exposure & Learning */}
        <div className="space-y-6">
          <div className="space-y-1">
            <SectionEyebrow number="C.02" label="CORE OBSERVATIONAL LEARNING" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Dimensions of Clinical Exposure
            </h2>
            <p className="text-sm text-muted max-w-2xl">
              Authentic student observational themes from the Surgery Department. No surgical procedures or clinical duties were claimed or fabricated.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {exp.exposureThemes.map((theme, idx) => {
              const Icon = THEME_ICONS[theme.title] || Stethoscope;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl bg-surface/60 border border-white/10 hover:border-metallic/40 hover:bg-surface transition-all duration-300 space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-metallic">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-metallic/60">0{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {theme.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {theme.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ethical Standards & Practice Protocol Box */}
        <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 text-xs text-muted space-y-2">
          <p className="font-mono text-metallic flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Scope of Medical Student Internship</span>
          </p>
          <p className="leading-relaxed">
            As a fourth-year undergraduate medical student, all departmental exposure at Federal Government Polyclinic Hospital was completed within academic observational guidelines. In adherence to strict ethical codes, no claims of independent clinical consultation, assisting operative surgery, invasive intervention, or unauthorized medical authority are made.
          </p>
        </div>

        {/* Next Route Navigation */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-muted uppercase tracking-widest block">
              NEXT SECTION
            </span>
            <span className="text-base font-semibold text-foreground">
              Medical Interests & Career Vision: Surgery
            </span>
          </div>
          <Link
            href="/interests"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider bg-foreground text-background hover:bg-white transition-all duration-300"
          >
            <span>EXPLORE SURGICAL INTERESTS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
