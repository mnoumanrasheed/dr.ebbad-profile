"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionEyebrow from "@/components/ui/SectionEyebrow";

export default function NotFound() {
  return (
    <div className="min-h-[85vh] flex flex-col items-center justify-center px-6 text-center bg-[#FAF9F5] text-[#12141A] relative overflow-hidden isolate">
      <div className="rounded-3xl bg-white p-10 sm:p-14 border border-[#E2DED2] shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative max-w-lg space-y-6 z-10">
        <SectionEyebrow number="ERR.404" label="DIAGNOSTIC NOTICE" variant="dark" className="justify-center" />

        <div className="space-y-2">
          <h1 className="font-editorial text-6xl sm:text-7xl font-bold tracking-tight text-[#12141A]">
            404
          </h1>
          <p className="font-editorial italic text-2xl text-[#BD903C]">
            Route Not Found in Clinical Index
          </p>
        </div>

        <p className="text-sm sm:text-base text-[#5A6172] leading-relaxed font-sans">
          The requested page is not registered in this verified portfolio index. Please navigate back to the home page or choose an authenticated section from the menu.
        </p>

        <div className="pt-3">
          <Link
            href="/"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase bg-[#12141A] text-white hover:bg-[#BD903C] hover:text-[#12141A] transition-all duration-300 shadow-md"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO HOME</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
