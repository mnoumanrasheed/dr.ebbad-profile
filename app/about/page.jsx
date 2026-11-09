import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Calendar,
  Compass,
  HeartHandshake,
  MapPin,
  Shield,
  Sparkles,
} from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import PortraitReveal from "@/components/ui/PortraitReveal";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import CompactCTA from "@/components/sections/CompactCTA";
import { PROFILE } from "@/content/profile";

export const metadata = {
  title: "About Ebbad Nazir | Beyond the White Coat",
  description:
    "Learn about Ebbad Nazir, a fourth-year Bachelor of Medicine, Bachelor of Surgery (MBBS) student at Rai Medical College, Sargodha, his academic path, personal values, and aspiring interest in surgery.",
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
      <PageHero
        eyebrowNumber="01"
        eyebrowLabel="CURATED DOSSIER"
        title={PROFILE.about.heading}
        subtitle={PROFILE.about.subheading}
        breadcrumb={[{ label: "About" }]}
        bgImage="/images/hero-about.jpg"
        variant="light"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-24 space-y-20 lg:space-y-24">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 space-y-5">
            <div className="relative rounded-3xl bg-white p-3.5 sm:p-4 border border-[#E2DED2] shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#F5F3EB]">
                <PortraitReveal
                  src="/images/profile.png"
                  alt="Ebbad Nazir - Fourth-Year MBBS Student"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                <div className="pointer-events-none absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 rounded-xl border border-white/20 bg-[#12141A]/85 px-4 py-2.5 text-[10px] font-mono tracking-widest text-white backdrop-blur-md">
                  <span className="font-bold">EBBAD NAZIR</span>
                  <span className="text-right text-[#E2C98E]">MBBS &bull; {PROFILE.session}</span>
                </div>
              </div>
            </div>

            <dl className="rounded-2xl border border-[#E2DED2] bg-white p-6 shadow-sm">
              {[
                [Building2, "Medical College", PROFILE.college],
                [Calendar, "Academic Session", `${PROFILE.session} (Fourth Year)`],
                [Sparkles, "Specialty Ambition", PROFILE.specialtyInterest],
                [MapPin, "Regional Residence", `${PROFILE.location.city}, ${PROFILE.location.district}`],
              ].map(([Icon, label, value], index) => (
                <div key={label} className={`flex items-start justify-between gap-5 py-3 first:pt-0 last:pb-0 ${index !== 3 ? "border-b border-[#E2DED2]" : ""}`}>
                  <dt className="flex shrink-0 items-center gap-2 font-mono text-[10px] text-[#5A6172]">
                    <Icon className="w-3.5 h-3.5 text-[#BD903C]" />
                    {label}
                  </dt>
                  <dd className="text-right text-xs font-semibold text-[#12141A]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-7 pt-1 lg:pt-8">
            <SectionEyebrow number="A.01" label="THE PERSON & MOTIVATION" variant="dark" />
            <h2 className="mt-5 max-w-3xl font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.08] text-[#12141A]">
              Commitment to clinical knowledge, patient dignity, and the surgical art.
            </h2>
            <div className="mt-9 space-y-6 text-base sm:text-lg leading-relaxed text-[#2C313E]">
              {PROFILE.about.body.map((paragraph) => (
                <p key={paragraph} className="border-l-2 border-[#BD903C] pl-6">{paragraph}</p>
              ))}
            </div>
            <p className="mt-10 max-w-xl border-t border-[#E2DED2] pt-5 text-sm leading-relaxed text-[#5A6172]">
              The academic record, clinical experience, and future specialty direction are documented in their dedicated sections for a clearer portfolio journey.
            </p>
          </div>
        </section>

        <section className="about-values">
          <div className="about-values__aura" aria-hidden="true" />
          <div className="about-values__heading">
            <div>
              <SectionEyebrow number="A.02" label="CLINICAL COMPASS" variant="dark" />
              <h3>A way of learning.<br /><em>A way of caring.</em></h3>
            </div>
            <p>
              Four principles that quietly guide study, clinical observation, and every future patient interaction.
            </p>
          </div>

          <div className="about-values__path" aria-hidden="true"><span /></div>
          <div className="about-values__list">
            {PROFILE.about.values.map((value, index) => {
              const Icon = VALUE_ICONS[value.title] || Sparkles;
              return (
                <article key={value.title} className={`about-value-card about-value-card--${index + 1}`}>
                  <div className="about-value-card__top">
                    <span className="about-value-card__icon"><Icon className="h-[18px] w-[18px]" /></span>
                    <span className="about-value-card__number">0{index + 1}</span>
                  </div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                  <span className="about-value-card__marker" aria-hidden="true" />
                </article>
              );
            })}
          </div>
        </section>

        <div className="flex flex-col items-start justify-between gap-5 border-t border-[#E2DED2] pt-8 sm:flex-row sm:items-center">
          <div>
            <span className="block font-mono text-[10px] font-bold uppercase tracking-widest text-[#BD903C]">CONTINUE EXPLORING</span>
            <span className="mt-1 block text-base font-semibold text-[#12141A]">Academic Timeline & Verified Scores</span>
          </div>
          <Link
            href="/education"
            className="group inline-flex items-center gap-3 rounded-full bg-[#12141A] px-7 py-4 text-xs font-bold tracking-widest text-white uppercase shadow-md transition-all duration-300 hover:bg-[#BD903C] hover:text-[#12141A]"
          >
            <span>VIEW EDUCATION</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="pt-16"><CompactCTA /></div>
    </div>
  );
}
