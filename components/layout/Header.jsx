"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowRight } from "lucide-react";
import Logo from "../brand/Logo";
import MobileMenu from "./MobileMenu";
import { PROFILE } from "@/content/profile";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/50"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <Logo size="small" />

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 bg-surface/70 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md"
          >
            {PROFILE.routes.map((route) => {
              const isActive = pathname === route.href;
              return (
                <Link
                  key={route.href}
                  href={route.href}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs tracking-wider transition-all duration-200 ${
                    isActive
                      ? "text-foreground font-semibold bg-white/10 shadow-sm"
                      : "text-muted hover:text-foreground hover:bg-white/5 font-medium"
                  }`}
                >
                  {route.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-metallic" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider text-foreground bg-white/5 border border-white/20 hover:border-metallic hover:bg-white/10 transition-all duration-300 shadow-sm"
            >
              <span>CONNECT</span>
              <ArrowRight className="w-3.5 h-3.5 text-metallic" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden p-2 rounded-xl border border-white/10 bg-surface/60 text-foreground hover:bg-white/10 transition-colors"
            >
              <Menu className="w-5 h-5 text-metallic" />
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
