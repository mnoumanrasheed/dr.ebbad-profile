import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
  MapPin,
  Stethoscope,
  Target,
} from "lucide-react";
import HomeHero from "@/components/sections/HomeHero";
import CompactCTA from "@/components/sections/CompactCTA";
import { PROFILE } from "@/content/profile";

export const metadata = {
  title: "Ebbad Nazir | MBBS Student & Aspiring Surgeon - Medical Portfolio",
  description:
    "A medical portfolio documenting Ebbad Nazir's academic record, clinical learning, and developing interest in surgery.",
};

export default function HomePage() {
  const clinical = PROFILE.clinicalExperience;
  const interests = PROFILE.interests;

  return (
    <div className="bg-[#F7F5F0] text-[#15161A]">
      <HomeHero />

      <section id="portfolio-record" className="scroll-mt-24 border-b border-[#DED9CF] px-6 py-20 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <header className="grid gap-6 border-b border-[#DCD6CA] pb-9 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#A4772D]">The portfolio record</p>
              <h2 className="mt-4 max-w-3xl font-editorial text-4xl font-semibold leading-[.94] tracking-[-.045em] sm:text-5xl lg:text-6xl">
                A foundation built through study, observation, and care.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#636772] lg:col-span-4 lg:col-start-9">
              The homepage now carries the key facts from every chapter, arranged as one clear medical narrative rather than a collection of repeated links.
            </p>
          </header>

          <div className="mt-8 grid gap-5 lg:grid-cols-12">
            <article className="overflow-hidden rounded-[1.6rem] border border-[#DCD6CA] bg-[#FCFBF8] lg:col-span-8">
              <div className="flex flex-col gap-5 border-b border-[#DCD6CA] p-7 sm:p-9 md:flex-row md:items-end md:justify-between">
                <div>
                  <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#A4772D]"><GraduationCap className="h-4 w-4" /> Education</span>
                  <h3 className="mt-4 font-editorial text-3xl font-semibold tracking-tight sm:text-4xl">{PROFILE.education.heading}</h3>
                </div>
                <Link href="/education" className="group inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.13em] text-[#966A24]">
                  Full academic record <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
              <div className="divide-y divide-[#E5E0D5]">
                {PROFILE.education.timeline.map((entry, index) => (
                  <div key={entry.degree} className="grid gap-4 px-7 py-6 sm:grid-cols-[3.6rem_1fr_auto] sm:items-center sm:px-9">
                    <span className="font-mono text-xs font-bold text-[#B98A38]">0{index + 1}</span>
                    <div>
                      <p className="font-editorial text-xl font-semibold text-[#18191D]">{entry.degree}</p>
                      <p className="mt-1 text-sm text-[#666A73]">{entry.institution}</p>
                    </div>
                    <div className="sm:text-right">
                      <p className="font-editorial text-2xl font-semibold text-[#18191D]">{entry.score}</p>
                      <p className="mt-1 font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-[#9A722E]">{entry.badge}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="relative overflow-hidden rounded-[1.6rem] bg-[#15171C] p-7 text-[#F7F3EA] sm:p-9 lg:col-span-4">
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border border-[#E2C98E]/20" aria-hidden="true" />
              <div className="absolute -right-3 -top-3 h-32 w-32 rounded-full border border-[#E2C98E]/15" aria-hidden="true" />
              <span className="relative inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#E2C98E]"><Stethoscope className="h-4 w-4" /> Clinical learning</span>
              <h3 className="relative mt-8 font-editorial text-3xl font-semibold leading-tight">{clinical.department}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-white/62">{clinical.institution}</p>
              <div className="relative mt-8 border-y border-white/12 py-5">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-[#E2C98E]">Placement on record</p>
                <p className="mt-3 text-lg font-semibold">{clinical.role}</p>
                <p className="mt-1 text-sm text-white/55">{clinical.duration}</p>
              </div>
              <Link href="/clinical-experience" className="relative mt-7 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.13em] text-[#E2C98E]">
                Explore clinical chapter <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="home-foundation">
        <div className="home-foundation__aura" aria-hidden="true" />
        <div className="home-foundation__shell">
          <div className="home-foundation__intro">
            <p className="home-foundation__eyebrow"><span aria-hidden="true" /> Personal foundation</p>
            <h2>{PROFILE.about.heading}</h2>
            <p>{PROFILE.about.body[0]}</p>
            <Link href="/about" className="home-foundation__link">
              Read the personal profile <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="home-foundation__values">
            <div className="home-foundation__axis" aria-hidden="true"><span /></div>
            {PROFILE.about.values.map((value, index) => (
              <article key={value.title} className={`home-foundation__value home-foundation__value--${index + 1}`}>
                <div className="home-foundation__value-meta"><span>0{index + 1}</span><i aria-hidden="true" /></div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#DED9CF] px-6 py-20 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:items-end">
          <div className="rounded-[1.6rem] bg-[#E2C98E] p-8 text-[#211A0E] sm:p-10 lg:col-span-5">
            <span className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-[#634B1E]"><Target className="h-4 w-4" /> Future direction</span>
            <p className="mt-10 font-mono text-[10px] font-bold uppercase tracking-[0.17em] text-[#725727]">Primary interest</p>
            <h2 className="mt-3 font-editorial text-5xl font-semibold tracking-[-.05em] sm:text-6xl">{interests.featured.name}</h2>
            <p className="mt-5 text-sm leading-relaxed text-[#51401F]">{interests.featured.body}</p>
            <Link href="/interests" className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#2E2516]">
              Vision and interests <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="lg:col-span-7 lg:pl-8">
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#A4772D]">Areas of continued learning</p>
            <h2 className="mt-4 max-w-xl font-editorial text-4xl font-semibold leading-[.95] tracking-[-.04em] sm:text-5xl">What informs the next chapter.</h2>
            <div className="mt-9 grid gap-x-7 gap-y-7 sm:grid-cols-2">
              {interests.additional.map((interest, index) => (
                <article key={interest.title} className="border-t border-[#D8D1C3] pt-5">
                  <span className="font-mono text-[10px] font-bold tracking-[0.15em] text-[#B98A38]">0{index + 1}</span>
                  <h3 className="mt-4 font-editorial text-2xl font-semibold">{interest.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#626671]">{interest.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#DED9CF] bg-[#EFEBE1] px-6 py-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[#626671] sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-[#A4772D]" /> {PROFILE.location.formatted}</span>
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-[#8B6A2E]">Medical education in progress</span>
        </div>
      </section>

      <CompactCTA />
    </div>
  );
}
