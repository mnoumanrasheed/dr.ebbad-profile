import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, HeartHandshake, Shield, Sparkles, MapPin, Building2, Calendar, Compass } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
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
    <div className="bg-background text-foreground pb-24">
      {/* Page Hero */}
      <PageHero
        eyebrowNumber="01"
        eyebrowLabel="ABOUT EBBAD NAZIR"
        title={PROFILE.about.heading}
        subtitle={PROFILE.about.subheading}
        breadcrumb={[{ label: "About" }]}
        bgImage="/images/hero-about.jpg"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-24">
        {/* Main Split: Editorial Portrait & Personal Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative group">
              {/* Outer hairline framing */}
              <div className="absolute -inset-3 rounded-2xl border border-white/10 opacity-70 pointer-events-none" />
              
              {/* Image Container with high-end editorial styling */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-surface border border-white/15 shadow-2xl">
                <Image
                  src="/images/profile.png"
                  alt="Ebbad Nazir - Fourth-Year MBBS Student"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                  className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                
                {/* Vertical editorial caption */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono tracking-widest text-metallic bg-background/80 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10">
                  <span>EBBAD NAZIR</span>
                  <span>MBBS 2022–2027</span>
                </div>
              </div>
            </div>

            {/* Verified Bio Metadata Strip */}
            <div className="p-5 rounded-xl bg-surface/60 border border-white/10 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-muted flex items-center gap-2">
                  <Building2 className="w-3.5 h-3.5 text-metallic" /> Institution
                </span>
                <span className="text-foreground font-sans font-medium text-right">
                  {PROFILE.college}
                </span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-muted flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-metallic" /> MBBS Session
                </span>
                <span className="text-foreground">
                  {PROFILE.session} (Fourth Year)
                </span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <span className="text-muted flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-metallic" /> Specialty Interest
                </span>
                <span className="text-foreground font-sans font-medium">
                  {PROFILE.specialtyInterest}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-muted flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-metallic" /> Location
                </span>
                <span className="text-foreground font-sans">
                  {PROFILE.location.city}, {PROFILE.location.district}
                </span>
              </div>
            </div>
          </div>

          {/* Story Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <SectionEyebrow number="P.01" label="THE PERSON & MOTIVATION" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Commitment to clinical knowledge, patient dignity, and surgical art.
              </h2>
            </div>

            {/* Approved Body Copy */}
            <div className="space-y-6 text-base sm:text-lg text-muted/95 leading-relaxed font-normal">
              {PROFILE.about.body.map((paragraph, idx) => (
                <p key={idx} className="relative pl-4 border-l border-metallic/30">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Verified Quick Stats Matrix */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-surface/40 border border-white/10">
                <span className="block font-mono text-[10px] text-muted uppercase tracking-wider">
                  Degree Status
                </span>
                <span className="mt-1 block text-lg font-bold text-foreground">
                  In Progress
                </span>
                <span className="text-[11px] font-mono text-metallic/70">
                  Year 4 of 5
                </span>
              </div>

              <div className="p-4 rounded-xl bg-surface/40 border border-white/10">
                <span className="block font-mono text-[10px] text-muted uppercase tracking-wider">
                  Admission Aggregate
                </span>
                <span className="mt-1 block text-lg font-bold text-foreground">
                  83%
                </span>
                <span className="text-[11px] font-mono text-metallic/70">
                  Merit Score
                </span>
              </div>

              <div className="p-4 rounded-xl bg-surface/40 border border-white/10 col-span-2 sm:col-span-1">
                <span className="block font-mono text-[10px] text-muted uppercase tracking-wider">
                  Clinical Internship
                </span>
                <span className="mt-1 block text-lg font-bold text-foreground">
                  FGPC
                </span>
                <span className="text-[11px] font-mono text-metallic/70">
                  Surgery Department
                </span>
              </div>
            </div>

            {/* Personal Values Grid (Aspirational Principles, clearly demarcated) */}
            <div className="pt-8 space-y-4">
              <div className="space-y-1">
                <SectionEyebrow number="P.02" label="CORE ASPIRATIONAL VALUES" />
                <h3 className="text-xl font-bold text-foreground">
                  Guiding Principles in Medicine
                </h3>
                <p className="text-xs text-muted">
                  Aspirational values guiding study, clinical observation, and patient interaction.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {PROFILE.about.values.map((val, idx) => {
                  const Icon = VALUE_ICONS[val.title] || Sparkles;
                  return (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-surface/70 border border-white/10 hover:border-metallic/40 transition-all duration-300 space-y-2"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-metallic">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="font-semibold text-sm text-foreground">
                          {val.title}
                        </h4>
                      </div>
                      <p className="text-xs text-muted leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Next Route Navigation CTA */}
            <div className="pt-6 border-t border-white/10 flex items-center justify-between">
              <div>
                <span className="font-mono text-xs text-muted uppercase tracking-widest block">
                  CONTINUE EXPLORING
                </span>
                <span className="text-sm font-semibold text-foreground">
                  Academic Timeline & Verified Scores
                </span>
              </div>
              <Link
                href="/education"
                className="group inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold tracking-wider bg-foreground text-background hover:bg-white transition-all duration-300"
              >
                <span>VIEW EDUCATION</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
