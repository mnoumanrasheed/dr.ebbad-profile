import Link from "next/link";
import { ArrowRight, GraduationCap, CheckCircle2, Clock, Award, BookCheck, Landmark, Check } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import CompactCTA from "@/components/sections/CompactCTA";
import { PROFILE } from "@/content/profile";

export const metadata = {
  title: "Education | Ebbad Nazir — Academic Foundation",
  description:
    "Explore the verified academic trajectory of Ebbad Nazir: Matriculation 88%, F.Sc. Pre-Medical 94%, and MBBS at Rai Medical College Sargodha (Session 2022–2027) with 83% medical admission aggregate.",
};

export default function EducationPage() {
  return (
    <div className="bg-[#FAF9F5] text-[#12141A] pb-28">
      {/* Page Hero */}
      <PageHero
        eyebrowNumber="02"
        eyebrowLabel="ACADEMIC TRAJECTORY"
        title={PROFILE.education.heading}
        subtitle={PROFILE.education.subheading}
        breadcrumb={[{ label: "Education" }]}
        bgImage="/images/hero-education.jpg"
        variant="light"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-24 space-y-20">
        {/* Verified Academic Aggregate Notice Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E2DED2] shadow-[0_8px_30px_rgba(0,0,0,0.03)] relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-3">
              <span className="font-mono text-xs tracking-widest text-[#BD903C] uppercase flex items-center gap-2 font-bold">
                <Award className="w-4 h-4 text-[#BD903C]" />
                OFFICIAL RECORD VERIFICATION
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#12141A]">
                Medical Admission Aggregate & Academic Records
              </h2>
              <p className="text-sm sm:text-base text-[#5A6172] max-w-2xl leading-relaxed font-sans">
                Academic metrics below represent authenticated board exam results and the official medical college admission aggregate (83%). MBBS marks are not represented as completed degree GPAs because the degree is actively in progress (fourth year, Session 2022–2027).
              </p>
            </div>
            <div className="flex-shrink-0 p-6 rounded-2xl bg-[#FAF9F5] border border-[#BD903C]/40 text-center font-mono min-w-[190px]">
              <span className="block text-4xl sm:text-5xl font-black text-[#BD903C] tracking-tight font-editorial">83%</span>
              <span className="text-[11px] text-[#5A6172] uppercase tracking-wider block mt-1 font-semibold">Admission Aggregate</span>
            </div>
          </div>
        </div>

        {/* Chronological Timeline Section */}
        <div className="space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#E2DED2]">
            <div>
              <SectionEyebrow number="E.01" label="CHRONOLOGICAL MILESTONES" variant="dark" />
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#12141A] mt-2">
                Three Pillars of Study
              </h2>
            </div>
            <span className="font-mono text-xs text-[#848A96] font-semibold">
              ACADEMIC TRAJECTORY &bull; 2018 &mdash; 2027
            </span>
          </div>

          {/* Interactive Timeline Track */}
          <div className="relative border-l-2 border-[#E2DED2] ml-4 sm:ml-8 pl-6 sm:pl-12 space-y-12">
            {PROFILE.education.timeline.map((entry, idx) => {
              const isCurrent = entry.period.includes("2022–2027");

              return (
                <div key={idx} className="relative group">
                  {/* Timeline Node Indicator */}
                  <div
                    className={`absolute -left-[31px] sm:-left-[55px] top-6 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                      isCurrent
                        ? "bg-[#BD903C] border-white ring-4 ring-[#BD903C]/30 animate-pulse"
                        : "bg-white border-[#848A96] group-hover:bg-[#BD903C] group-hover:border-[#BD903C]"
                    }`}
                  />

                  {/* Card Container */}
                  <div
                    className={`rounded-3xl p-7 sm:p-10 transition-all duration-300 border ${
                      isCurrent
                        ? "bg-white border-[#BD903C] shadow-[0_12px_36px_rgba(0,0,0,0.06)] ring-1 ring-[#BD903C]/20"
                        : "bg-white border-[#E2DED2] hover:border-[#BD903C] shadow-sm"
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[#E2DED2]">
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-3">
                          <span
                            className={`font-mono text-xs px-3 py-1 rounded-full uppercase tracking-widest font-bold ${
                              isCurrent
                                ? "bg-[#FAF9F5] text-[#BD903C] border border-[#BD903C]/40"
                                : "bg-[#F5F3EB] text-[#5A6172] border border-[#E2DED2]"
                            }`}
                          >
                            {entry.badge}
                          </span>
                          <span className="font-mono text-xs text-[#848A96] font-semibold">
                            {entry.period}
                          </span>
                        </div>
                        <h3 className="font-editorial text-2xl sm:text-3xl font-semibold tracking-tight text-[#12141A]">
                          {entry.degree}
                        </h3>
                        <p className="text-sm font-medium text-[#5A6172] flex items-center gap-2">
                          <GraduationCap className="w-4 h-4 text-[#BD903C] flex-shrink-0" />
                          <span>{entry.institution}</span>
                        </p>
                      </div>

                      {/* Score Highlight Box */}
                      <div className="flex-shrink-0 flex items-center gap-4 p-4 rounded-2xl bg-[#FAF9F5] border border-[#E2DED2]">
                        <div className="text-right">
                          <span className="block text-3xl sm:text-4xl font-black text-[#12141A] tracking-tight font-editorial">
                            {entry.score}
                          </span>
                          <span className="block font-mono text-[10px] text-[#5A6172] uppercase tracking-wider font-semibold">
                            {entry.scoreLabel}
                          </span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white border border-[#E2DED2] text-[#BD903C]">
                          {isCurrent ? (
                            <Clock className="w-5 h-5 animate-pulse" />
                          ) : (
                            <CheckCircle2 className="w-5 h-5" />
                          )}
                        </div>
                      </div>
                    </div>

                    <p className="mt-5 text-sm sm:text-base text-[#2C313E] leading-relaxed max-w-3xl font-sans">
                      {entry.details}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Editorial Paper Moment: Academic Discipline & Study Philosophy */}
        <div className="rounded-3xl bg-[#F5F3EB] p-8 sm:p-12 lg:p-16 space-y-6 border border-[#E2DED2] shadow-sm">
          <SectionEyebrow number="E.02" label="PHILOSOPHY OF SCIENTIFIC RIGOR" variant="dark" />
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#12141A]">
            Precision, Rigor, and Scientific Depth
          </h2>
          <p className="text-base sm:text-lg text-[#2C313E] leading-relaxed max-w-3xl font-sans">
            Undergraduate medical training requires not only retention of vast anatomical and physiological taxonomies, but also the cultivation of analytical reasoning under pressure. From Taleem-ul-Islam School and Punjab College to Rai Medical College, this trajectory reflects an unbroken commitment to scientific excellence and personal integrity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#E2DED2]">
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#BD903C] font-bold block">
                Foundational Science
              </span>
              <p className="font-bold text-[#12141A] text-lg font-editorial">
                Biology, Chemistry, Physics
              </p>
              <p className="text-xs sm:text-sm text-[#5A6172] leading-relaxed">
                Graduated with 88% matriculation board standing.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#BD903C] font-bold block">
                Pre-Medical Rigor
              </span>
              <p className="font-bold text-[#12141A] text-lg font-editorial">
                Punjab College Pre-Med
              </p>
              <p className="text-xs sm:text-sm text-[#5A6172] leading-relaxed">
                Completed with 94% higher secondary distinction.
              </p>
            </div>
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-widest text-[#BD903C] font-bold block">
                Clinical Transition
              </span>
              <p className="font-bold text-[#12141A] text-lg font-editorial">
                Rai Medical College
              </p>
              <p className="text-xs sm:text-sm text-[#5A6172] leading-relaxed">
                83% admission aggregate, now actively in 4th year clinical rotations.
              </p>
            </div>
          </div>
        </div>

        {/* Next Route Navigation */}
        <div className="pt-10 border-t border-[#E2DED2] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="font-mono text-[10px] text-[#BD903C] uppercase tracking-widest block font-bold">
              NEXT SECTION
            </span>
            <span className="text-base font-semibold text-[#12141A]">
              Clinical Experience: FGPC Hospital Surgical Internship
            </span>
          </div>
          <Link
            href="/clinical-experience"
            className="group inline-flex items-center gap-3 px-7 py-4 rounded-full text-xs font-bold tracking-widest uppercase bg-[#12141A] text-white hover:bg-[#BD903C] hover:text-[#12141A] transition-all duration-300 shadow-md"
          >
            <span>VIEW CLINICAL EXPERIENCE</span>
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
