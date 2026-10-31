"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowUpRight, Mail, Phone, MapPin, Award } from "lucide-react";
import { PROFILE } from "@/content/profile";

export default function MobileMenu({ isOpen, onClose }) {
  const pathname = usePathname();
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);

  // Close on ESC and lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab") return;
      const focusable = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-navigation"
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col justify-between bg-[#0E1117]/98 backdrop-blur-2xl p-6 sm:p-8 md:hidden overflow-y-auto"
    >
      {/* Top Bar with Brand & Close Button */}
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-widest text-[#E2C98E] uppercase font-bold">
          <span className="w-2 h-2 rounded-full bg-[#E2C98E] animate-pulse" />
          <span>EBBAD NAZIR &bull; MEDICAL PORTFOLIO</span>
        </div>
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Close menu"
          className="p-2.5 rounded-xl border border-white/10 bg-[#14171F] text-white hover:bg-white/10 active:scale-95 transition-all"
        >
          <X className="w-5 h-5 text-[#E2C98E]" />
        </button>
      </div>

      {/* Nav Links styled as an Editorial Index */}
      <nav className="my-8 flex flex-col gap-2">
        {PROFILE.routes.map((route, idx) => {
          const isActive = pathname === route.href;
          return (
            <Link
              key={route.href}
              href={route.href}
              onClick={onClose}
              className={`group flex items-center justify-between py-4 px-5 rounded-2xl transition-all duration-300 ${
                isActive
                  ? "bg-white/[0.08] text-white border border-[#E2C98E]/40 font-semibold"
                  : "text-[#9AA0AC] hover:text-white hover:bg-white/[0.03]"
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-[#E2C98E]/70 font-bold">
                  {`0${idx + 1}`}
                </span>
                <span className="font-editorial text-2xl sm:text-3xl tracking-tight">
                  {route.label}
                </span>
              </div>
              <ArrowUpRight
                className={`w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                  isActive ? "text-[#E2C98E] opacity-100" : "opacity-30 group-hover:opacity-100"
                }`}
              />
            </Link>
          );
        })}
      </nav>

      {/* Verified Contact Details Strip */}
      <div className="border-t border-white/[0.08] pt-6 space-y-3.5 text-xs text-[#9AA0AC] font-mono">
        <div className="flex items-center gap-2.5">
          <Mail className="w-4 h-4 text-[#E2C98E] flex-shrink-0" />
          <a
            href={`mailto:${PROFILE.contact.email}`}
            className="hover:text-white transition-colors"
          >
            {PROFILE.contact.email}
          </a>
        </div>
        <div className="flex items-center gap-2.5">
          <Phone className="w-4 h-4 text-[#E2C98E] flex-shrink-0" />
          <a
            href={`tel:${PROFILE.contact.phone}`}
            className="hover:text-white transition-colors"
          >
            {PROFILE.contact.phoneDisplay}
          </a>
        </div>
        <div className="flex items-center gap-2.5">
          <MapPin className="w-4 h-4 text-[#E2C98E] flex-shrink-0" />
          <span>{PROFILE.location.formatted}</span>
        </div>
        <div className="pt-2 flex items-center gap-2 text-[11px] text-[#848A96] font-sans border-t border-white/[0.05]">
          <Award className="w-3.5 h-3.5 text-[#E2C98E]" />
          <span>{PROFILE.role} &bull; {PROFILE.college}</span>
        </div>
      </div>
    </div>
  );
}
