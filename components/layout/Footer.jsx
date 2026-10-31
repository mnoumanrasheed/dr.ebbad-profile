import Link from "next/link";
import { ArrowUp, ArrowUpRight, Mail, Phone, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import Logo from "../brand/Logo";
import StatusTicker from "./StatusTicker";
import { PROFILE } from "@/content/profile";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-[#08090C] text-[#F4F3EF] border-t border-[#E2C98E]/25 relative overflow-hidden">
      {/* 1. Live Ambient Status Ticker (Dark Obsidian Theme) */}
      <StatusTicker />

      {/* 2. Bespoke Luxury Black Colophon */}
      <div className="relative py-12 lg:py-16 px-6 lg:px-12 bg-[radial-gradient(circle_at_15%_10%,rgba(226,201,142,0.10),transparent_28rem),linear-gradient(135deg,#111319_0%,#08090C_55%,#0B0D12_100%)]">
        {/* Subtle champagne radial aura in background */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-[#E2C98E]/[0.03] blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto space-y-8 relative z-10">
          {/* Main Top Row: Brand & Concise Navigation */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_.9fr] gap-8 rounded-[2rem] border border-[#E2C98E]/20 bg-[linear-gradient(135deg,rgba(255,255,255,0.055),rgba(255,255,255,0.012))] p-7 sm:p-9 lg:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.30)]">
            <div className="space-y-4 max-w-lg">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#E2C98E]" />
                <span className="font-mono text-[10px] tracking-[0.22em] text-[#E2C98E] uppercase">Clinical Profile</span>
              </div>
              <Logo size="large" variant="light" />
              <p className="text-sm text-[#9AA0AC] font-sans leading-relaxed">
                Fourth-year MBBS student – Rai Medical College, Sargodha.
              </p>
              <div className="flex items-center gap-2 font-mono text-[11px] text-[#E2C98E]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#E2C98E] animate-pulse" />
                <span>MBBS Session {PROFILE.session} &bull; {PROFILE.college}</span>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#E2C98E] px-4 py-2.5 text-[10px] font-bold tracking-[0.16em] text-[#12141A] uppercase hover:bg-white transition-colors"
              >
                Start a conversation <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Quick Navigation Links */}
            <nav aria-label="Footer Navigation" className="rounded-2xl border border-white/[0.08] bg-black/20 p-6 sm:p-7">
              <p className="font-mono text-[10px] tracking-[0.22em] text-[#E2C98E] uppercase mb-5">Explore the portfolio</p>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-x-7 gap-y-3 text-xs font-semibold tracking-wider font-sans">
              {PROFILE.routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="text-white/60 hover:text-[#F3D98C] transition-colors py-1.5 inline-flex items-center gap-1 group"
                >
                  <span>{route.label}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#F3D98C] opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
              </div>
            </nav>
          </div>

          {/* Middle Row: Direct Channels in Dark Glass Badges */}
          <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5 rounded-2xl border border-white/[0.08] bg-black/20 px-5 py-4">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
              <a
                href={`mailto:${PROFILE.contact.email}`}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#E2C98E]/50 hover:bg-white/[0.08] text-[#F4F3EF] transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-[#E2C98E]" />
                <span className="font-sans font-medium">{PROFILE.contact.email}</span>
              </a>

              <a
                href={`tel:${PROFILE.contact.phone}`}
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#E2C98E]/50 hover:bg-white/[0.08] text-[#F4F3EF] transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-[#E2C98E]" />
                <span className="font-sans font-medium">{PROFILE.contact.phoneDisplay}</span>
              </a>

              <a
                href={PROFILE.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#E2C98E]/50 hover:bg-white/[0.08] text-[#F4F3EF] transition-all"
              >
                <span className="text-[#E2C98E] font-bold">in</span>
                <span className="font-sans font-medium">LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 text-[#9AA0AC]" />
              </a>

              <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.02] border border-white/[0.06] text-[#9AA0AC]">
                <MapPin className="w-3.5 h-3.5 text-[#E2C98E]" />
                <span className="font-sans text-xs">Sargodha, Pakistan</span>
              </span>
            </div>

            <a
              href="#main-content"
              aria-label="Back to top"
              className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest uppercase text-[#9AA0AC] hover:text-[#E2C98E] transition-colors py-1 group"
            >
              <span>BACK TO TOP</span>
              <span className="w-7 h-7 rounded-full bg-white/[0.06] border border-white/10 flex items-center justify-center text-[#E2C98E] group-hover:border-[#E2C98E] transition-colors">
                <ArrowUp className="w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5" />
              </span>
            </a>
          </div>

          {/* Bottom Row: Ethics Notice & Copyright */}
          <div className="pt-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#848A96]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E2C98E]" />
              <span>Verified undergraduate records &bull; Rai Medical College &bull; Surgery Dept. Intern (FGPC)</span>
            </div>
            <p>
              &copy; {currentYear} Ebbad Nazir. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
