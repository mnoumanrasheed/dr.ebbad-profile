"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { 
  ArrowRight, 
  ArrowUpRight,
  GraduationCap, 
  Stethoscope, 
  Crosshair, 
  Award, 
  ShieldCheck, 
  Compass, 
  Sparkles,
  HeartHandshake
} from "lucide-react";
import { PROFILE } from "@/content/profile";
import SectionEyebrow from "../ui/SectionEyebrow";
import SceneFallback from "../three/SceneFallback";

// Lazy-load 3D scene to preserve initial load speed & SSR hydration
const HeroHeartScene = dynamic(() => import("../three/HeroHeartScene"), {
  ssr: false,
  loading: () => <SceneFallback />,
});

export default function HomeHero() {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let ctx;
    import("gsap").then(({ default: gsap }) => {
      ctx = gsap.context(() => {
        gsap.from(".hero-anim-item", {
          y: 28,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          delay: 0.1,
        });

        gsap.from(".editorial-card-anim", {
          y: 24,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.3,
        });
      }, containerRef);
    });

    return () => ctx?.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full">
      {/* =========================================================================
          SECTION 1: CINEMATIC BLACK & METALLIC 3D HERO (75-85% Black Atmosphere)
          ========================================================================= */}
      <section className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-background text-foreground border-b border-white/10">
        {/* Background Image with Cinematic Overlays */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <Image
            src="/images/hero-home.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-30 filter brightness-[0.4] contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/70" />
        </div>

        {/* Background radial spotlights & subtle medical grid */}
        <div className="absolute inset-0 medical-grid opacity-25 pointer-events-none z-[1]" />
        <div className="absolute top-1/4 right-1/4 w-[480px] h-[480px] bg-gradient-to-b from-white/[0.04] to-transparent rounded-full blur-3xl pointer-events-none z-[1]" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/[0.02] rounded-full blur-2xl pointer-events-none z-[1]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Hero Narrative */}
            <div className="lg:col-span-7 space-y-6">
              {/* Eyebrow Label */}
              <div className="hero-anim-item inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-surface border border-white/10 text-[11px] font-mono tracking-widest text-metallic uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-metallic animate-pulse" />
                <span>{PROFILE.heroEyebrow}</span>
                <span className="text-white/20">|</span>
                <span className="text-muted/80">{PROFILE.college}</span>
              </div>

              {/* Name & Title */}
              <div className="hero-anim-item space-y-2">
                <h1 className="text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
                  {PROFILE.name.toUpperCase()}.
                </h1>
                <p className="text-base sm:text-lg font-mono tracking-[0.2em] text-metallic uppercase">
                  {PROFILE.role}
                </p>
              </div>

              {/* Signature Tagline */}
              <p className="hero-anim-item font-editorial italic text-2xl sm:text-3xl text-metallic-subtle">
                &ldquo;{PROFILE.signatureLine}&rdquo;
              </p>

              {/* Concise Verified Intro (2-3 sentences max) */}
              <p className="hero-anim-item text-base sm:text-lg text-muted max-w-xl leading-relaxed">
                {PROFILE.heroIntro}
              </p>

              {/* Primary & Secondary Action CTAs */}
              <div className="hero-anim-item flex flex-wrap items-center gap-4 pt-2">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider bg-foreground text-background hover:bg-white hover:shadow-[0_0_30px_rgba(255,255,255,0.25)] transition-all duration-300"
                >
                  <span>EXPLORE MY JOURNEY</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/clinical-experience"
                  className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider text-foreground bg-surface border border-white/15 hover:border-metallic hover:bg-surface-soft transition-all duration-300"
                >
                  <span>VIEW CLINICAL EXPERIENCE</span>
                  <ArrowRight className="w-4 h-4 text-metallic transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Verified Location & Current Status Badge */}
              <div className="hero-anim-item pt-2 flex flex-wrap items-center gap-4 text-xs font-mono text-muted/80">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Session {PROFILE.session} (Fourth Year)
                </span>
                <span>&bull;</span>
                <span>{PROFILE.location.formatted}</span>
              </div>
            </div>

            {/* Right Column: 3D Anatomical Silver Heart Sculpture */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <HeroHeartScene />
            </div>
          </div>
        </div>

        {/* Ambient architectural bottom transition indicator */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </section>


      {/* =========================================================================
          SECTION 2: LUXURY EDITORIAL WHITE / PAPER SECTION (High-Contrast Elegance)
          Requested by User: "sara black nai karna, background black and white dono rakho,
          kuch section white bi kar do"
          ========================================================================= */}
      <section className="relative py-20 lg:py-28 editorial-paper text-ink overflow-hidden border-b border-black/10">
        {/* Subtle architectural light grid background */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
            backgroundSize: "48px 48px"
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
          {/* Header of White Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b paper-border">
            <div className="space-y-3 max-w-2xl">
              <SectionEyebrow number="01" label="AUTHENTICATED RECORDS" variant="dark" />
              <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-ink leading-tight">
                Academic Rigor Meets Surgical Precision.
              </h2>
              <p className="text-base sm:text-lg text-ink/75 leading-relaxed font-normal">
                A verified summary of undergraduate academic standings, federal hospital surgical exposure, and an ethical dedication to medical learning.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/education"
                className="group inline-flex items-center gap-2 text-xs font-mono tracking-wider font-semibold text-ink hover:text-black uppercase pb-1 border-b-2 border-ink transition-colors"
              >
                <span>VIEW FULL TIMELINE</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* 4 Verified Metric Cards in Crisp White Editorial Style */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROFILE.editorialHighlights.map((item, idx) => (
              <div
                key={idx}
                className="editorial-card-anim p-6 sm:p-7 rounded-2xl bg-white border border-black/10 shadow-sm hover:shadow-xl hover:border-black/25 transition-all duration-300 space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-ink/60 font-medium">
                    {item.label}
                  </span>
                  <span className="font-mono text-xs text-ink/30 font-semibold">
                    0{idx + 1}
                  </span>
                </div>
                <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-ink group-hover:translate-x-0.5 transition-transform">
                  {item.value}
                </div>
                <p className="text-xs text-ink/70 leading-snug font-medium pt-1 border-t paper-border">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Current academic, clinical, and community-health snapshot */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
            <div className="lg:col-span-4 rounded-2xl bg-ink p-7 sm:p-8 text-white flex flex-col justify-between min-h-[260px]">
              <div>
                <SectionEyebrow number="02" label="CURRENT FOCUS" />
                <h3 className="mt-5 text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
                  Learning, service, and a clear surgical direction.
                </h3>
              </div>
              <p className="mt-8 text-sm leading-relaxed text-muted">
                A concise view of the academic and healthcare experiences shaping Ebbad&apos;s medical journey today.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROFILE.homeFocus.map((item, idx) => {
                const icons = [GraduationCap, Stethoscope, ShieldCheck, Compass];
                const Icon = icons[idx];

                return (
                  <div key={item.label} className="rounded-2xl bg-white border border-black/10 p-6 flex gap-4 hover:border-black/25 hover:shadow-lg transition-all duration-300">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-ink/5 border border-black/10 flex items-center justify-center text-ink">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-ink/50">{item.label}</p>
                      <h4 className="mt-1 text-base font-bold text-ink">{item.title}</h4>
                      <p className="mt-2 text-xs leading-relaxed text-ink/70">{item.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Curated Multi-Page Editorial Pathways (Light Showcase) */}
          <div className="space-y-6 pt-4">
            <div className="flex items-center justify-between">
              <SectionEyebrow number="P.02" label="EXPLORE THE PORTFOLIO" variant="dark" />
              <span className="hidden sm:inline-block font-mono text-xs text-ink/50">
                MULTI-PAGE NAVIGATION HUB
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card A: Beyond the White Coat */}
              <Link
                href="/about"
                className="group p-7 rounded-2xl bg-white border border-black/10 hover:border-black/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-ink/5 border border-black/10 flex items-center justify-center text-ink group-hover:bg-ink group-hover:text-white transition-colors">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-ink/40 group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
                      PROFILE & STORY
                    </span>
                    <h3 className="text-xl font-bold text-ink mt-0.5">
                      Beyond the White Coat
                    </h3>
                  </div>
                  <p className="text-xs text-ink/75 leading-relaxed">
                    Personal narrative, verified Rai Medical College session (2022–2027), authentic portrait photograph, and 4 foundational ethical values.
                  </p>
                </div>
                <div className="pt-5 mt-4 border-t paper-border flex items-center justify-between text-xs font-semibold text-ink">
                  <span>Read Story</span>
                  <span className="font-mono text-ink/40">&rarr;</span>
                </div>
              </Link>

              {/* Card B: Clinical Exposure */}
              <Link
                href="/clinical-experience"
                className="group p-7 rounded-2xl bg-white border border-black/10 hover:border-black/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-ink/5 border border-black/10 flex items-center justify-center text-ink group-hover:bg-ink group-hover:text-white transition-colors">
                      <Stethoscope className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-ink/40 group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
                      TERTIARY INTERNSHIP
                    </span>
                    <h3 className="text-xl font-bold text-ink mt-0.5">
                      Clinical Environment
                    </h3>
                  </div>
                  <p className="text-xs text-ink/75 leading-relaxed">
                    Surgical Department observational internship at Federal Government Polyclinic Hospital (FGPC), Islamabad (14 June – 15 July).
                  </p>
                </div>
                <div className="pt-5 mt-4 border-t paper-border flex items-center justify-between text-xs font-semibold text-ink">
                  <span>View Clinical Record</span>
                  <span className="font-mono text-ink/40">&rarr;</span>
                </div>
              </Link>

              {/* Card C: Specialty Ambition & Vision */}
              <Link
                href="/interests"
                className="group p-7 rounded-2xl bg-white border border-black/10 hover:border-black/30 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-ink/5 border border-black/10 flex items-center justify-center text-ink group-hover:bg-ink group-hover:text-white transition-colors">
                      <Crosshair className="w-5 h-5" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-ink/40 group-hover:text-ink group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-ink/50">
                      FUTURE SPECIALTY
                    </span>
                    <h3 className="text-xl font-bold text-ink mt-0.5">
                      Surgery & Career Vision
                    </h3>
                  </div>
                  <p className="text-xs text-ink/75 leading-relaxed">
                    Aspirational postgraduate focus on surgery, core undergraduate learning domains, and a transparent 4-step developmental path.
                  </p>
                </div>
                <div className="pt-5 mt-4 border-t paper-border flex items-center justify-between text-xs font-semibold text-ink">
                  <span>Explore Vision</span>
                  <span className="font-mono text-ink/40">&rarr;</span>
                </div>
              </Link>
            </div>
          </div>

          {/* Quick Connect & Direct Action Ribbon in Light Section */}
          <div className="p-8 rounded-3xl bg-ink text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-1 max-w-xl">
              <span className="font-mono text-[10px] uppercase tracking-widest text-metallic flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                ACADEMIC INQUIRIES & MENTORSHIP
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Connect with Ebbad Nazir
              </h3>
              <p className="text-xs text-muted leading-relaxed">
                Open to discussions with medical faculty, surgical mentors, peers, and health advocates.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider bg-white text-ink hover:bg-paper transition-all"
              >
                OPEN CONTACT FORM
              </Link>
              <a
                href={`mailto:${PROFILE.contact.email}`}
                className="px-5 py-3.5 rounded-full text-xs font-mono font-medium text-white border border-white/20 hover:bg-white/10 transition-all"
              >
                {PROFILE.contact.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
