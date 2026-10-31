import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";

export default function CompactCTA({
  title = "Connect with Ebbad Nazir",
  subtitle = "Welcoming opportunities for academic mentorship, surgical case discussions, and student healthcare initiatives.",
  primaryAction = { label: "SEND AN INQUIRY", href: "/contact" },
  secondaryAction = { label: "SURGERY INTERNSHIP", href: "/clinical-experience" },
}) {
  return (
    <section className="relative bg-[#F3EFE6] border-t border-[#E2DED2] py-10 sm:py-12 text-[#12141A] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Left: Concise Editorial Info */}
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest text-[#BD903C] uppercase">
              <Mail className="w-3 h-3 text-[#BD903C]" />
              <span>PROFESSIONAL CORRESPONDENCE</span>
            </div>
            <h2 className="font-editorial text-2xl sm:text-3xl font-semibold tracking-tight text-[#12141A]">
              {title}
            </h2>
            <p className="text-xs sm:text-sm text-[#5A6172] font-sans leading-relaxed">
              {subtitle}
            </p>
          </div>

          {/* Right: Two Compact Precision Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href={primaryAction.href}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold font-mono tracking-wider uppercase bg-[#12141A] text-white hover:bg-[#BD903C] hover:text-[#12141A] transition-all duration-300 shadow-sm active:scale-95"
            >
              <span>{primaryAction.label}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {secondaryAction && (
              <Link
                href={secondaryAction.href}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold font-mono tracking-wider uppercase bg-white border border-[#E2DED2] text-[#12141A] hover:border-[#BD903C] hover:bg-[#FAF9F5] transition-all duration-300 active:scale-95"
              >
                <span>{secondaryAction.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#BD903C]" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

