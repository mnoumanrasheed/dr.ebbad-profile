"use client";

import { useState } from "react";
import Image from "next/image";

export default function PortraitReveal({ src, alt, sizes, className = "" }) {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsRevealed((current) => !current)}
      aria-pressed={isRevealed}
      aria-label={isRevealed ? "Show portrait in black and white" : "Reveal portrait in colour"}
      className="group absolute inset-0 block cursor-zoom-in overflow-hidden bg-transparent p-0 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#E2C98E]"
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes={sizes}
        className={`object-cover object-top transition-[filter,transform] duration-700 ease-out group-hover:scale-[1.015] ${
          isRevealed ? "grayscale-0 contrast-[1.03]" : "grayscale contrast-[1.08]"
        } ${className}`}
      />
      <span className="absolute bottom-4 right-4 rounded-full border border-white/25 bg-black/45 px-3 py-1.5 font-mono text-[9px] font-bold tracking-wider text-white/85 opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
        {isRevealed ? "COLOUR VIEW" : "TAP TO REVEAL COLOUR"}
      </span>
    </button>
  );
}
