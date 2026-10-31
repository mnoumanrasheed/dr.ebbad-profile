"use client";

import { Sparkles, Stethoscope, GraduationCap, MapPin, Award } from "lucide-react";
import { PROFILE } from "@/content/profile";

export default function StatusTicker() {
  const items = [
    { icon: GraduationCap, text: `${PROFILE.college}, Sargodha` },
    { icon: Award, text: `MBBS Session ${PROFILE.session} • Fourth Year` },
    { icon: Stethoscope, text: "Surgery Department Intern — FGPC Islamabad" },
    { icon: Sparkles, text: `"${PROFILE.signatureLine}"` },
    { icon: MapPin, text: PROFILE.location.formatted },
    { icon: Award, text: "Verified Undergraduate Medical Record" },
  ];

  return (
    <aside
      aria-label="Live Academic Status Ticker"
      className="relative w-full overflow-hidden border-y border-white/10 bg-[#0B0D12] py-3 text-xs font-mono tracking-wider select-none text-white/80"
    >
      <div className="flex w-max items-center animate-ticker whitespace-nowrap">
        {/* Render sets for an infinite seamless loop */}
        {[...items, ...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={idx} className="flex items-center gap-3 px-6 text-white/85">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/[0.08] border border-white/15 text-[#E2C98E] shadow-xs">
                <Icon className="w-3 h-3" />
              </span>
              <span className="font-semibold">{item.text}</span>
              <span className="text-[#E2C98E]/60 pl-4 font-sans text-xs">◆</span>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
