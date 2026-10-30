import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import Logo from "../brand/Logo";
import { PROFILE } from "@/content/profile";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="border-t border-white/10 bg-surface/90 text-foreground pt-16 pb-12 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Column 1: Identity & Signature */}
          <div className="lg:col-span-5 space-y-4">
            <Logo size="default" />
            <p className="text-sm text-muted max-w-md leading-relaxed">
              {PROFILE.heroIntro}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="font-mono text-xs uppercase px-2 py-1 rounded bg-white/5 border border-white/10 text-metallic">
                {PROFILE.session} MBBS
              </span>
              <span className="font-mono text-xs uppercase px-2 py-1 rounded bg-white/5 border border-white/10 text-metallic">
                {PROFILE.currentYear}
              </span>
            </div>
            <p className="font-editorial italic text-metallic/80 text-lg pt-1">
              &ldquo;{PROFILE.signatureLine}&rdquo;
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-mono tracking-widest text-muted uppercase">
              SECTIONS
            </p>
            <ul className="space-y-2 text-sm">
              {PROFILE.routes.map((route) => (
                <li key={route.href}>
                  <Link
                    href={route.href}
                    className="group inline-flex items-center gap-1.5 text-muted hover:text-foreground transition-colors"
                  >
                    <span>{route.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all text-metallic" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact & Direct Inquiries */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-mono tracking-widest text-muted uppercase">
              DIRECT CHANNELS
            </p>
            <ul className="space-y-3 text-sm font-mono">
              <li>
                <a
                  href={`mailto:${PROFILE.contact.email}`}
                  className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                >
                  <Mail className="w-4 h-4 text-metallic flex-shrink-0" />
                  <span className="truncate">{PROFILE.contact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PROFILE.contact.phone}`}
                  className="flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4 text-metallic flex-shrink-0" />
                  <span>{PROFILE.contact.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-muted hover:text-foreground transition-colors"
                >
                  <ArrowUpRight className="w-4 h-4 text-metallic flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  <span className="truncate">LinkedIn / ebbad-nazir-225316280</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted">
                <MapPin className="w-4 h-4 text-metallic flex-shrink-0 mt-0.5" />
                <span className="font-sans text-xs leading-relaxed">
                  {PROFILE.location.formatted}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Ethical / Medical Integrity Disclaimer (Section 10 & 11) */}
        <div className="py-8 text-[11px] leading-relaxed text-muted/80 border-b border-white/5 space-y-2">
          <p>
            <strong className="text-foreground/90 font-medium">Academic Transparency Notice:</strong>{" "}
            This portfolio presents the verified undergraduate academic credentials and observational clinical internship exposure of Ebbad Nazir, a fourth-year medical student enrolled in the MBBS program (Session 2022–2027) at Rai Medical College, Sargodha, Pakistan.
          </p>
          <p className="text-muted/60">
            Statements concerning surgery represent aspirational postgraduate career ambitions and academic interest, not current licensed medical practice, specialist status, or independent clinical authority. All dates and statistics adhere strictly to verified academic records.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted">
          <p>
            &copy; {currentYear} Ebbad Nazir. All rights reserved.
          </p>
          <p className="text-[11px] text-metallic/70">
            Engineered with Precision &bull; Next.js &bull; Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
