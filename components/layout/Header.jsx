"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";
import Logo from "../brand/Logo";
import MobileMenu from "./MobileMenu";

// Navbar Links (Home removed, Contact removed — only 1 CONNECT CTA on the right)
const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/education", label: "Education" },
  { href: "/clinical-experience", label: "Clinical Experience" },
  { href: "/interests", label: "Interests & Vision" },
];

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // When scrolled down OR on subpages, adapt colors for light backgrounds
  const isLightMode = !isHomePage || scrolled;

  return (
    <>
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none transition-all duration-500">
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-5 py-3 rounded-[1.35rem] pointer-events-auto transition-all duration-500 backdrop-blur-2xl flex items-center justify-between gap-3 animate-[header-reveal_700ms_cubic-bezier(0.16,1,0.3,1)_both] ${
            isLightMode
              ? "bg-[#0B0D12]/[0.96] shadow-[0_18px_45px_rgba(0,0,0,0.30)]"
              : "bg-[#0B0D12]/90 shadow-[0_18px_48px_rgba(0,0,0,0.50)]"
          }`}
        >
          {/* 1. Left: Brand Identity (Clicking logo navigates to Home) */}
          <div className="flex items-center gap-3 pl-1 shrink-0">
            <Logo size="small" variant="light" showTagline={false} />
          </div>

          {/* 2. Center: 4 Curated Routes (Home & Contact labels removed as requested) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-5 lg:gap-7"
          >
            {NAV_LINKS.map((route, index) => {
              const isActive = pathname === route.href;

              return (
                <Link
                  key={route.href}
                  href={route.href}
                  style={{ animationDelay: `${140 + index * 70}ms` }}
                  className={`group relative py-2 text-[12px] font-medium tracking-wide transition-colors duration-300 select-none animate-[nav-link-reveal_500ms_cubic-bezier(0.16,1,0.3,1)_both] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-[#E2C98E] after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                    isActive
                      ? "text-[#E2C98E] font-bold after:scale-x-100"
                      : "text-white/65 hover:text-[#F5F2E9]"
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>{route.label}</span>
                    {isActive && (
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#BD903C] opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#BD903C]" />
                      </span>
                    )}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* 3. Right: SINGLE Luxury CONNECT Action (No duplicate contact link) */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/contact"
              className={`group relative inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-[10px] font-bold tracking-[0.14em] uppercase transition-all duration-300 active:scale-95 overflow-hidden shadow-sm ${
                isLightMode
                  ? "bg-[#E2C98E] text-[#12141A] hover:bg-white hover:text-[#12141A] shadow-[0_0_20px_rgba(226,201,142,0.24)]"
                  : "bg-[#E2C98E] text-[#0E1117] hover:bg-white hover:text-[#0E1117] shadow-[0_0_20px_rgba(226,201,142,0.35)]"
              }`}
            >
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" />
              <span className="relative z-10 hidden sm:inline">LET&apos;S CONNECT</span>
              <span className="relative z-10 sm:hidden">CONNECT</span>
              <ArrowRight className="w-3.5 h-3.5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              className={`md:hidden p-2.5 rounded-xl border transition-all ${
                isLightMode
                  ? "border-white/20 bg-white/[0.08] text-white hover:bg-white/15"
                  : "border-white/15 bg-white/[0.05] text-white hover:bg-white/10"
              }`}
            >
              <Menu className="w-4 h-4 text-[#BD903C]" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Fullscreen Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
