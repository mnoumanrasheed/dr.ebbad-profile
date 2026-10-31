"use client";

import { useState } from "react";
import Link from "next/link";
import { GraduationCap, Award, Building2, Stethoscope, CheckCircle2, Sparkles, Activity, ArrowRight, ShieldCheck } from "lucide-react";
import SectionEyebrow from "../ui/SectionEyebrow";

export default function AcademicMilestones() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="relative bg-[#FAF7EE] border-b border-[#E2DED2] py-20 lg:py-28 overflow-hidden select-none">
      {/* Background soft ambient illumination */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[380px] bg-gradient-to-b from-[#BD903C]/[0.05] to-transparent rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E2DED2]">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <SectionEyebrow number="01" label="AUTHENTICATED STANDING" variant="dark" />
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#E2DED2] font-mono text-[10px] text-[#BD903C] font-bold shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#BD903C] animate-ping" />
                VERIFIED UNDERGRADUATE RECORD
              </span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#12141A] leading-tight">
              Academic Progress & Clinical Milestones
            </h2>
          </div>
          <p className="text-sm text-[#5A6172] max-w-md font-sans leading-relaxed">
            Current MBBS studies at Rai Medical College, Sargodha, paired with surgical internship exposure at FGPC Islamabad.
          </p>
        </div>

        {/* MBBS academic dossier */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* ================= LEFT MAIN SHOWCASE (7 COLS) ================= */}
          <div className="lg:col-span-7 rounded-3xl bg-[#12141A] p-8 sm:p-10 lg:p-12 border border-[#BD903C]/35 shadow-[0_18px_48px_rgba(18,20,26,0.20)] transition-all duration-500 flex flex-col justify-between space-y-8 relative overflow-hidden group">
            {/* Subtle top ambient glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#BD903C]/10 blur-3xl pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E2C98E] to-transparent" />

            <div className="space-y-6">
              {/* Institutional Header Badge */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#E2C98E]/10 border border-[#E2C98E]/25 flex items-center justify-center text-[#E2C98E]">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-white block uppercase tracking-wider">
                      Rai Medical College
                    </span>
                    <span className="font-mono text-[10px] text-white/55">
                      Sargodha, Pakistan &bull; Session 2022–2027
                    </span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-[#E2C98E]/35 font-mono text-[10px] font-bold text-[#E2C98E]">
                  <span className="w-2 h-2 rounded-full bg-[#E2C98E] animate-pulse" />
                  FOURTH YEAR (MBBS)
                </span>
              </div>

              {/* Primary Typographic Focus */}
              <div className="space-y-3 pt-2 relative z-10">
                <span className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white block leading-none">
                  2022–2027
                </span>
                <p className="font-editorial italic text-2xl sm:text-3xl text-[#E2C98E]">
                  MBBS Programme <span className="not-italic text-lg sm:text-xl">&middot; In Progress</span>
                </p>
                <p className="text-sm text-white/65 font-sans leading-relaxed pt-1 max-w-xl">
                  Fourth-year MBBS student in a five-year medical programme at Rai Medical College, developing clinical knowledge through structured study, bedside learning, and current ward rotations.
                </p>

                <div className="grid grid-cols-3 gap-3 pt-3">
                  {[
                    ["STATUS", "Fourth Year"],
                    ["DURATION", "5 Years"],
                    ["CURRENT FOCUS", "Clinical Wards"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-xl bg-white/[0.06] border border-white/10 px-3 py-3">
                      <span className="block font-mono text-[9px] tracking-wider text-white/45">{label}</span>
                      <span className="mt-1 block text-xs sm:text-sm font-bold text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* LIVE 5-YEAR CURRICULUM PROGRESSION TRACKER */}
              <div className="space-y-3 pt-4 border-t border-white/10 relative z-10">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-white/50 tracking-wider uppercase font-semibold">
                    Curriculum Milestones
                  </span>
                  <span className="text-[#E2C98E] font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E2C98E] animate-ping" />
                    YEAR 4 ACTIVE ROTATIONS
                  </span>
                </div>

                <div className="grid grid-cols-5 gap-2">
                  {[
                    { year: "Yr 1", status: "Basic Sciences", done: true },
                    { year: "Yr 2", status: "Anatomy & Physio", done: true },
                    { year: "Yr 3", status: "Pathology", done: true },
                    { year: "Yr 4", status: "Clinical Wards", active: true },
                    { year: "Yr 5", status: "Final Clinical Year", future: true },
                  ].map((step, i) => (
                    <div
                      key={i}
                      className={`p-2.5 rounded-xl border text-center transition-all ${
                        step.active
                          ? "bg-[#E2C98E]/10 border-[#E2C98E] shadow-xs ring-1 ring-[#E2C98E]/30"
                          : step.done
                          ? "bg-white/[0.05] border-white/10 text-white"
                          : "bg-white/[0.02] border-dashed border-white/10 text-white/40"
                      }`}
                    >
                      <span className={`block font-mono text-xs font-bold ${step.active ? "text-[#E2C98E]" : "text-white"}`}>
                        {step.year}
                      </span>
                      <span className="block text-[9px] font-sans text-white/45 truncate">
                        {step.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Verification Note */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-white/50 relative z-10">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#E2C98E]" />
                Official Medical Enrolment
              </span>
              <span className="text-white font-bold">Good Academic Standing</span>
            </div>
          </div>

          {/* ================= RIGHT DUAL PANELS (5 COLS) ================= */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Panel 1: 83% Admission Aggregate with Live Circular Precision Dial */}
            <div className="flex-1 rounded-3xl bg-white p-8 border border-[#E2DED2] shadow-[0_8px_28px_rgba(0,0,0,0.035)] hover:border-[#BD903C] transition-all duration-500 space-y-4 group flex flex-col justify-center">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#BD903C] uppercase tracking-wider flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#BD903C]" />
                  ACADEMIC MERIT
                </span>
                <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-[#FAF9F5] text-[#BD903C] border border-[#BD903C]/30 font-bold">
                  Verified Score
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 pt-1">
                <div className="space-y-1">
                  <span className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#12141A] group-hover:text-[#BD903C] transition-colors block leading-none">
                    83%
                  </span>
                  <span className="text-xs font-bold text-[#12141A] uppercase tracking-wide block font-sans">
                    Medical Admission Aggregate
                  </span>
                  <p className="text-xs text-[#5A6172] font-sans leading-relaxed">
                    Competitive provincial medical entry aggregate on official authenticated record.
                  </p>
                </div>

                {/* SVG Radial Dial */}
                <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-[#E2DED2]"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-[#BD903C] transition-all duration-1000 ease-out"
                      strokeDasharray="83, 100"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <Sparkles className="absolute w-5 h-5 text-[#BD903C] group-hover:rotate-12 transition-transform" />
                </div>
              </div>
            </div>

            {/* Panel 2: Surgical Department Internship & Career Focus with Live ECG */}
            <div className="flex-1 rounded-3xl bg-white p-8 border border-[#E2DED2] shadow-[0_8px_28px_rgba(0,0,0,0.035)] hover:border-[#BD903C] transition-all duration-500 space-y-4 group flex flex-col justify-center">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-[#BD903C] uppercase tracking-wider flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-[#BD903C]" />
                  SURGICAL ROTATION
                </span>
                <span className="text-[10px] font-mono text-[#848A96] font-semibold">
                  14 June – 15 July
                </span>
              </div>

              <div className="space-y-1">
                <span className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#12141A] group-hover:text-[#BD903C] transition-colors block leading-tight">
                  FGPC Islamabad
                </span>
                <p className="font-sans text-xs font-semibold text-[#12141A]">
                  Surgery Department Intern &bull; Aspiring Surgeon
                </p>
                <p className="text-xs text-[#5A6172] font-sans leading-relaxed">
                  Observational surgical experience at Federal Government Polyclinic Hospital, focusing on operating room etiquette and clinical care.
                </p>
              </div>

              {/* LIVE ECG PULSE LINE */}
              <div className="p-3 rounded-2xl bg-[#FAF9F5] border border-[#E2DED2] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#12141A] font-semibold">
                  <Stethoscope className="w-4 h-4 text-[#BD903C]" />
                  <span>Surgical Rhythm</span>
                </div>
                <div className="h-5 w-32 flex items-center overflow-hidden text-[#BD903C]">
                  <svg className="w-full h-5" viewBox="0 0 120 20" fill="none">
                    <path
                      d="M 0 10 L 25 10 L 32 3 L 38 17 L 44 6 L 50 14 L 56 10 L 80 10 L 86 2 L 92 18 L 98 10 L 120 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="animate-pulse"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
