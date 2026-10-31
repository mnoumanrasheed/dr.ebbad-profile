import Link from "next/link";
import { ArrowUpRight, GraduationCap, MapPin, Stethoscope } from "lucide-react";

const curriculum = [
  ["01", "Basic Sciences", "Foundation complete"],
  ["02", "Anatomy & Physiology", "Foundation complete"],
  ["03", "Pathology", "Foundation complete"],
  ["04", "Clinical Wards", "Current focus"],
  ["05", "Final Clinical Year", "Upcoming"],
];

export default function AcademicMilestones() {
  return (
    <section className="bg-[#F6F3EC] py-16 text-[#17181B] sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <header className="flex flex-col justify-between gap-5 border-b border-[#D7D1C5] pb-7 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[10px] font-semibold tracking-[0.2em] text-[#A4772D] uppercase">Academic journey</p>
            <h2 className="mt-3 font-editorial text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">MBBS Academic Progress</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[#686A70]">A focused five-year medical education at Rai Medical College, with current learning centred on clinical wards.</p>
        </header>

        <div className="mt-9 overflow-hidden rounded-[1.75rem] border border-[#D7D1C5] bg-[#FCFBF8] shadow-[0_18px_50px_rgba(40,34,22,0.08)] lg:grid lg:grid-cols-12">
          <section className="relative overflow-hidden bg-[#121419] px-7 py-9 text-[#F7F3EA] sm:px-10 sm:py-11 lg:col-span-5">
            <div className="absolute inset-x-0 top-0 h-1 bg-[#E2C98E] academic-progress-bar" aria-hidden="true" />
            <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-5">
              <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-[#E2C98E] uppercase"><GraduationCap className="h-4 w-4" /> MBBS programme</span>
              <span className="font-mono text-[10px] text-white/50">2022—2027</span>
            </div>
            <div className="pt-12">
              <p className="font-mono text-[10px] tracking-[0.18em] text-white/45 uppercase">Current status</p>
              <h3 className="mt-4 font-editorial text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">Fourth<br /><span className="italic text-[#E2C98E]">Year.</span></h3>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/65">Currently developing clinical knowledge through structured study, bedside learning, and ward rotations.</p>
            </div>
            <div className="mt-12 grid grid-cols-2 gap-5 border-t border-white/15 pt-5">
              <div><p className="font-mono text-[9px] tracking-[0.16em] text-white/40 uppercase">Duration</p><p className="mt-2 text-sm font-semibold">5 years</p></div>
              <div><p className="font-mono text-[9px] tracking-[0.16em] text-white/40 uppercase">Standing</p><p className="mt-2 text-sm font-semibold text-[#E2C98E]">In progress</p></div>
            </div>
            <p className="mt-8 flex items-center gap-2 text-xs text-white/50"><MapPin className="h-3.5 w-3.5 text-[#E2C98E]" /> Rai Medical College, Sargodha</p>
          </section>

          <section className="px-7 py-9 sm:px-10 sm:py-11 lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-3"><div><p className="font-mono text-[10px] tracking-[0.18em] text-[#8A887F] uppercase">Curriculum progress</p><h3 className="mt-3 font-editorial text-3xl font-semibold">A clear path forward.</h3></div><span className="rounded-full bg-[#F2E6C9] px-3 py-1 font-mono text-[9px] font-semibold tracking-[0.12em] text-[#9B702B] uppercase">Year four active</span></div>
            <div className="mt-9 divide-y divide-[#DED9CF] border-y border-[#DED9CF]">
              {curriculum.map(([number, title, status]) => {
                const active = number === "04";
                return <div key={number} className="flex items-center gap-4 py-4 sm:gap-6"><span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-[10px] font-semibold ${active ? "bg-[#B98735] text-white" : "border border-[#CDC6BA] text-[#77736B]"}`}>{number}</span><p className={`min-w-0 flex-1 text-sm font-semibold ${active ? "text-[#A4772D]" : "text-[#242529]"}`}>{title}</p><span className={`text-right font-mono text-[9px] tracking-[0.08em] uppercase ${active ? "text-[#A4772D]" : "text-[#8A887F]"}`}>{status}</span></div>;
              })}
            </div>
            <div className="mt-8 flex items-center justify-between gap-4 text-xs text-[#686A70]"><span>Verified undergraduate medical record</span><span className="font-semibold text-[#242529]">Good academic standing</span></div>
          </section>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <article className="border-t-2 border-[#B98735] bg-[#E4C77E] px-6 py-7"><p className="font-mono text-[10px] tracking-[0.18em] text-[#5D4821] uppercase">Admission merit</p><p className="mt-5 font-editorial text-6xl leading-none tracking-[-0.06em]">83<span className="text-3xl">%</span></p><p className="mt-3 text-xs leading-relaxed text-[#5D4821]">Medical admission aggregate on authenticated record.</p></article>
          <article className="border border-[#D7D1C5] bg-[#FCFBF8] px-6 py-7"><p className="font-mono text-[10px] tracking-[0.18em] text-[#8A887F] uppercase">Current focus</p><p className="mt-5 font-editorial text-3xl">Clinical Wards</p><p className="mt-3 text-xs leading-relaxed text-[#686A70]">Applying classroom knowledge to structured clinical learning.</p></article>
          <article className="flex flex-col justify-between bg-[#202227] px-6 py-7 text-[#F7F3EA]"><div><p className="flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-[#E2C98E] uppercase"><Stethoscope className="h-4 w-4" /> Clinical exposure</p><p className="mt-5 font-editorial text-3xl">FGPC Islamabad</p><p className="mt-2 text-xs text-white/60">Surgery Department Intern · 14 June—15 July</p></div><Link href="/clinical-experience" className="mt-7 inline-flex items-center gap-2 text-xs font-semibold text-[#E2C98E] hover:text-white">View clinical record <ArrowUpRight className="h-4 w-4" /></Link></article>
        </div>
      </div>
    </section>
  );
}
