import Link from "next/link";
import { ArrowUpRight, GraduationCap, Stethoscope } from "lucide-react";

const milestones = [
  ["2022", "Entry", "MBBS begins"],
  ["Year 01", "Foundation", "Basic sciences"],
  ["Year 02", "Structure", "Anatomy & physiology"],
  ["Year 03", "Systems", "Pathology"],
  ["Now", "Clinical wards", "Fourth year"],
  ["2027", "Completion", "MBBS target"],
];

export default function AcademicMilestones() {
  return (
    <section className="relative overflow-hidden bg-[#F4F0E7] py-20 text-[#161719] sm:py-28 lg:py-32">
      <div className="absolute left-[7%] top-0 h-full w-px bg-[#B68A3D]/20" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="flex items-center justify-between border-b border-[#1A1B1E]/20 pb-5">
          <span className="font-mono text-[10px] font-semibold tracking-[0.22em] text-[#9B702B] uppercase">Academic dossier</span>
          <span className="font-mono text-[10px] tracking-[0.16em] text-[#6B6A66] uppercase">Rai Medical College · 2022—2027</span>
        </div>

        <div className="grid border-b border-[#1A1B1E]/20 lg:grid-cols-12">
          <aside className="relative flex min-h-[18rem] flex-col justify-between border-b border-[#1A1B1E]/20 py-8 lg:col-span-3 lg:min-h-[34rem] lg:border-b-0 lg:border-r lg:py-12 lg:pr-8">
            <div>
              <span className="font-mono text-[10px] tracking-[0.18em] text-[#9B702B] uppercase">Current chapter</span>
              <p className="mt-5 font-editorial text-[clamp(6.5rem,12vw,10rem)] leading-[0.65] tracking-[-0.09em]">04</p>
              <p className="mt-7 font-editorial text-3xl italic text-[#A57830]">Fourth Year</p>
            </div>
            <div className="border-t border-[#1A1B1E]/15 pt-4"><p className="text-xs leading-relaxed text-[#5D5C59]">Focused on ward-based learning, clinical reasoning, and building dependable medical habits.</p></div>
          </aside>

          <div className="flex flex-col justify-between py-10 lg:col-span-6 lg:px-12 lg:py-12">
            <div>
              <p className="font-mono text-[10px] tracking-[0.18em] text-[#77736C] uppercase">Undergraduate medicine</p>
              <h2 className="mt-5 max-w-xl font-editorial text-5xl font-semibold leading-[0.92] tracking-[-0.055em] sm:text-6xl lg:text-7xl">A quiet practice<br />of <span className="italic text-[#A57830]">becoming.</span></h2>
              <p className="mt-8 max-w-md text-base leading-relaxed text-[#55575B]">Five years of medical study are shaping a grounded clinical foundation—one that values precision, continued learning, and thoughtful patient care.</p>
            </div>
            <div className="mt-12 flex items-center gap-3 font-mono text-[10px] tracking-[0.13em] text-[#6B6A66] uppercase"><GraduationCap className="h-4 w-4 text-[#A57830]" /> MBBS programme in progress</div>
          </div>

          <div className="flex flex-col justify-between border-t border-[#1A1B1E]/20 py-10 lg:col-span-3 lg:border-l lg:border-t-0 lg:py-12 lg:pl-8">
            <div><p className="font-mono text-[10px] tracking-[0.18em] text-[#77736C] uppercase">Admission record</p><p className="mt-6 font-editorial text-7xl leading-none tracking-[-0.07em]">83<span className="text-4xl text-[#A57830]">%</span></p><p className="mt-3 text-xs leading-relaxed text-[#5D5C59]">Medical admission aggregate, documented on the authenticated record.</p></div>
            <p className="mt-12 border-t border-[#1A1B1E]/15 pt-4 font-mono text-[10px] tracking-[0.16em] text-[#9B702B] uppercase">Good academic standing</p>
          </div>
        </div>

        <div className="relative border-b border-[#1A1B1E]/20 py-9 lg:py-11">
          <div className="flex items-center justify-between"><p className="font-mono text-[10px] tracking-[0.2em] text-[#77736C] uppercase">A five-year chronology</p><span className="font-mono text-[10px] text-[#9B702B] uppercase">Present: year four</span></div>
          <div className="relative mt-8 grid gap-7 sm:grid-cols-3 lg:grid-cols-6">
            <div className="academic-dossier-line absolute left-0 right-0 top-[0.55rem] hidden lg:block" aria-hidden="true"><span /></div>
            {milestones.map(([year, title, note], index) => (
              <div key={year} className="relative flex gap-3 lg:block">
                <span className={`relative z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border text-[8px] ${index === 4 ? "border-[#A57830] bg-[#A57830] text-white" : "border-[#1A1B1E]/35 bg-[#F4F0E7] text-transparent"}`}>{index + 1}</span>
                <div className="lg:mt-5"><p className={`font-mono text-[10px] tracking-[0.14em] uppercase ${index === 4 ? "text-[#9B702B]" : "text-[#696761]"}`}>{year}</p><p className="mt-2 text-sm font-semibold">{title}</p><p className="mt-1 text-xs text-[#77736C]">{note}</p></div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-8 pt-10 lg:grid-cols-12 lg:pt-12">
          <div className="lg:col-span-3"><p className="font-mono text-[10px] tracking-[0.2em] text-[#9B702B] uppercase">Clinical note</p><p className="mt-3 font-editorial text-3xl italic leading-tight">Learning is becoming more clinical, more deliberate.</p></div>
          <div className="lg:col-span-5 lg:border-l lg:border-[#1A1B1E]/20 lg:pl-8"><div className="flex items-start gap-4"><Stethoscope className="mt-1 h-5 w-5 shrink-0 text-[#A57830]" /><div><p className="font-mono text-[10px] tracking-[0.18em] text-[#77736C] uppercase">Surgical exposure</p><h3 className="mt-3 font-editorial text-3xl">FGPC Islamabad</h3><p className="mt-2 max-w-md text-sm leading-relaxed text-[#5D5C59]">Surgery Department internship experience at Federal Government Polyclinic Hospital, with an emphasis on professional clinical environments and learning.</p></div></div></div>
          <div className="flex items-end lg:col-span-4 lg:justify-end"><Link href="/clinical-experience" className="group inline-flex items-center gap-3 border-b border-[#1A1B1E] pb-2 text-xs font-bold tracking-[0.14em] text-[#1A1B1E] uppercase transition-colors hover:border-[#A57830] hover:text-[#A57830]">Read the clinical record <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></Link></div>
        </div>
      </div>
    </section>
  );
}
