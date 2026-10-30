"use client";

import Image from "next/image";

export default function SceneFallback({ className = "" }) {
  return (
    <div
      className={`relative w-full h-full min-h-[380px] md:min-h-[500px] flex items-center justify-center ${className}`}
      aria-label="Anatomical heart sculpture visualization"
    >
      {/* Ambient background glow */}
      <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-white/[0.04] to-transparent blur-3xl pointer-events-none" />

      {/* Coordinate & technical framing rings */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/10 flex items-center justify-center p-8">
        <div className="absolute inset-2 rounded-full border border-dashed border-white/10 animate-[spin_60s_linear_infinite]" />
        
        {/* Monogram emblem */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <Image
            src="/brand/monogram.svg"
            alt="EN Anatomical Monogram"
            width={120}
            height={120}
            className="w-24 h-24 md:w-28 md:h-28 drop-shadow-[0_10px_25px_rgba(255,255,255,0.08)]"
          />
          <span className="mt-4 font-mono text-[10px] tracking-[0.28em] text-metallic uppercase">
            ANATOMICAL PRECISION &bull; 3D
          </span>
          <span className="text-[10px] font-mono text-muted/60 mt-1">
            SILVER SCULPTURE ENGINE
          </span>
        </div>

        {/* Technical corner coordinate ticks */}
        <span className="absolute top-2 left-1/2 -translate-x-1/2 text-[9px] font-mono text-muted/40">00&deg;N</span>
        <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[9px] font-mono text-muted/40">180&deg;S</span>
        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-[9px] font-mono text-muted/40">270&deg;W</span>
        <span className="absolute right-2 top-1/2 -translate-y-1/2 text-[9px] font-mono text-muted/40">090&deg;E</span>
      </div>
    </div>
  );
}
