"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { PROFILE } from "@/content/profile";

export default function MobileMenu({ isOpen, onClose }) {
  const pathname = usePathname();

  // Close on ESC and lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation Menu"
      className="fixed inset-0 z-50 flex flex-col justify-between bg-background/95 backdrop-blur-2xl p-6 md:hidden overflow-y-auto"
    >
      {/* Top Bar with Close Button */}
      <div className="flex items-center justify-between border-b border-white/10 pb-5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-metallic animate-pulse" />
          <span className="text-xs font-mono tracking-widest text-muted uppercase">
            NAVIGATION
          </span>
        </div>
        <button
          onClick={onClose}
          aria-label="Close menu"
          className="p-2.5 rounded-lg border border-white/10 text-foreground hover:bg-white/5 active:scale-95 transition-all"
        >
          <X className="w-5 h-5 text-metallic" />
        </button>
      </div>

      {/* Nav Links */}
      <nav className="my-8 flex flex-col gap-2">
        {PROFILE.routes.map((route, idx) => {
          const isActive = pathname === route.href;
          return (
            <Link
              key={route.href}
              href={route.href}
              onClick={onClose}
              className={`group flex items-center justify-between py-3.5 px-4 rounded-xl transition-all ${
                isActive
                  ? "bg-white/10 text-foreground border border-white/20 font-semibold"
                  : "text-muted hover:text-foreground hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-metallic/60">
                  {`0${idx + 1}`}
                </span>
                <span className="text-xl tracking-tight">{route.label}</span>
              </div>
              <ArrowUpRight
                className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                  isActive ? "text-foreground opacity-100" : "opacity-30 group-hover:opacity-100"
                }`}
              />
            </Link>
          );
        })}
      </nav>

      {/* Verified Contact Details Strip */}
      <div className="border-t border-white/10 pt-6 space-y-3 text-xs text-muted font-mono">
        <div className="flex items-center gap-2">
          <Mail className="w-3.5 h-3.5 text-metallic" />
          <a
            href={`mailto:${PROFILE.contact.email}`}
            className="hover:text-foreground transition-colors"
          >
            {PROFILE.contact.email}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-3.5 h-3.5 text-metallic" />
          <a
            href={`tel:${PROFILE.contact.phone}`}
            className="hover:text-foreground transition-colors"
          >
            {PROFILE.contact.phoneDisplay}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-metallic" />
          <span>{PROFILE.location.formatted}</span>
        </div>
        <p className="pt-2 text-[11px] text-metallic/60 font-sans">
          {PROFILE.role} &bull; {PROFILE.college}
        </p>
      </div>
    </div>
  );
}
