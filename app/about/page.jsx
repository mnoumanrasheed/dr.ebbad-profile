import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, HeartHandshake, Shield, Sparkles, MapPin, Building2, Calendar, Compass, Stethoscope, Award, CheckCircle2 } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import CompactCTA from "@/components/sections/CompactCTA";
import { PROFILE } from "@/content/profile";

export const metadata = {
  title: "About Ebbad Nazir | Beyond the White Coat",
  description:
    "Learn about Ebbad Nazir, a fourth-year MBBS student at Rai Medical College, Sargodha, his academic path, personal values, and aspiring interest in surgery.",
};

const VALUE_ICONS = {
  Compassion: HeartHandshake,
  Integrity: Shield,
  Discipline: Compass,
  "Continuous Learning": BookOpen,
};

export default function AboutPage() {
  return (
    <div className="bg-[#FAF9F5] text-[#12141A] pb-28">
      {/* Page Hero */}
      <PageHero
        eyebrowNumber="01"
        eyebrowLabel="CURATED DOSSIER"
        title={PROFILE.about.heading}
        subtitle={PROFILE.about.subheading}
        breadcrumb={[{ label: "About" }]}
        bgImage="/images/hero-about.jpg"
        variant="light"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-24 space-y-24">
        {/* Main Split: Editorial Portrait & Personal Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Portrait & Verified Institutional Dossier */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl bg-white p-3.5 sm:p-4 border border-[#E2DED2] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              {/* Portrait Container */}
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F5F3EB]">
                <Image
                  src="/images/profile.png"
                  alt="Ebbad Nazir - Fourth-Year MBBS Student"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                  className="object-cover object-top filter contrast-[1.03] hover:scale-[1.02] transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

                {/* Bottom editorial badge */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono tracking-widest text-white bg-[#12141A]/85 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/20">
                  <span className="font-bold">EBBAD NAZIR</span>
                  <span className="text-[#E2C98E]">MBBS &bull; {PROFILE.session}</span>
                </div>
              </div>
            </div>

            {/* Verified Bio Metadata Strip */}
            <div className="p-7 rounded-2xl bg-white border border-[#E2DED2] shadow-sm space-y-4 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-[#E2DED2]">
                <span className="text-[#5A6172] flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#BD903C]" /> Medical College
                </span>
                <span className="text-[#12141A] font-sans font-bold text-right">
                  {PROFILE.college}
                </span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E2DED2]">
                <span className="text-[#5A6172] flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#BD903C]" /> Academic Session
                </span>
                <span className="text-[#BD903C] font-bold">
                  {PROFILE.session} (Fourth Year)
                </span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E2DED2]">
                <span className="text-[#5A6172] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#BD903C]" /> Specialty Ambition
                </span>
                <span className="text-[#12141A] font-sans font-bold">
                  {PROFILE.specialtyInterest}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#5A6172] flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#BD903C]" /> Regional Residence
                </span>
                <span className="text-[#12141A] font-sans font-medium">
                  {PROFILE.location.city}, {PROFILE.location.district}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Philosophy */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <SectionEyebrow number="A.01" label="THE PERSON & MOTIVATION" variant="dark" />
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#12141A] leading-[1.08]">
                Commitment to clinical knowledge, patient dignity, and the surgical art.
              </h2>
            </div>

            {/* Approved Body Copy formatted with editorial beauty */}
            <div className="space-y-6 text-base sm:text-lg text-[#2C313E] leading-relaxed font-sans">
              {PROFILE.about.body.map((paragraph, idx) => (
                <div key={idx} className="relative pl-6 border-l-2 border-[#BD903C]">
                  <p>{paragraph}</p>
                </div>
              ))}
            </div>

            {/* Verified Quick Stats Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 pt-2">
              <div className="p-6 rounded-2xl bg-white border border-[#E2DED2] shadow-sm space-y-1">
                <span className="block font-mono text-[10px] text-[#BD903C] uppercase tracking-widest font-bold">
                  Degree Status
                </span>
                <span className="block text-2xl font-bold text-[#12141A] font-editorial">
                  In Progress
                </span>
                <span className="text-xs font-mono text-[#5A6172] block">
                  Fourth Year (2022–2027)
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E2DED2] shadow-sm space-y-1">
                <span className="block font-mono text-[10px] text-[#BD903C] uppercase tracking-widest font-bold">
                  Admission Aggregate
                </span>
                <span className="block text-2xl font-bold text-[#12141A] font-editorial">
                  83%
                </span>
                <span className="text-xs font-mono text-[#5A6172] block">
                  Medical Merit Standing
                </span>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-[#E2DED2] shadow-sm space-y-1 col-span-2 sm:col-span-1">
                <span className="block font-mono text-[10px] text-[#BD903C] uppercase tracking-widest font-bold">
                  Clinical Internship
                </span>
                <span className="block text-2xl font-bold text-[#12141A] font-editorial">
                  FGPC
                </span>
                <span className="text-xs font-mono text-[#5A6172] block">
                  Surgery Department
                </span>
              </div>
            </div>

            {/* Personal Values Grid (Aspirational Principles) */}
            <div className="pt-8 space-y-6">
              <div className="space-y-2">
                <SectionEyebrow number="A.02" label="CORE ASPIRATIONAL VALUES" variant="dark" />
                <h3 className="text-2xl sm:text-3xl font-bold text-[#12141A] font-editorial">
                  Guiding Principles in Medicine
                </h3>
                <p className="text-xs sm:text-sm text-[#5A6172]">
                  Aspirational values guiding study, clinical observation, and patient interaction.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {PROFILE.about.values.map((val, idx) => {
                  const Icon = VALUE_ICONS[val.title] || Sparkles;
                  return (
                    <div
                      key={idx}
                      className="p-7 rounded-2xl bg-white border border-[#E2DED2] shadow-sm hover:border-[#BD903C] transition-all duration-300 space-y-3"
                    >
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-xl bg-[#FAF9F5] border border-[#E2DED2] flex items-center justify-center text-[#BD903C]">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="font-mono text-xs text-[#848A96] font-bold">0{idx + 1}</span>
                      </div>
                      <h4 className="font-editorial text-2xl font-bold text-[#12141A]">
                        {val.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#5A6172] leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Next Route Navigation CTA */}
            <div className="pt-10 border-t border-[#E2DED2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-[10px] text-[#BD903C] uppercase tracking-widest block font-bold">
                  CONTINUE EXPLORING
                </span>
                <span className="text-base font-semibold text-[#12141A]">
                  Academic Timeline & Verified Scores
                </span>
              </div>
              <Link
                href="/education"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full text-xs font-bold tracking-widest uppercase bg-[#12141A] text-white hover:bg-[#BD903C] hover:text-[#12141A] transition-all duration-300 shadow-md"
              >
                <span>VIEW EDUCATION</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16">
        <CompactCTA />
      </div>
    </div>
  );
}
