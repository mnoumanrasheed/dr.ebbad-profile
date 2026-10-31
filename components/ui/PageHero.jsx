import Image from "next/image";
import Link from "next/link";
import SectionEyebrow from "./SectionEyebrow";

export default function PageHero({
  eyebrowNumber,
  eyebrowLabel,
  title,
  subtitle,
  breadcrumb = [],
  variant = "light",
  bgImage = null,
  asideContent = null,
  statusBadge = "MBBS SESSION 2022–2027",
}) {
  const isLight = variant === "light";
  const hasImage = Boolean(bgImage);

  return (
    <section
      className={`relative flex min-h-[100svh] items-center border-b overflow-hidden isolate ${
        isLight
          ? "bg-[#FAF9F5] text-[#12141A] border-[#E2DED2]"
          : "bg-[#0E1117] text-[#F8F7F4] border-white/10"
      }`}
    >
      {/* 1. Cinematic Background Hero Image (Vibrant & Clearly Visible) */}
      {bgImage && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <Image
            src={bgImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className={`object-cover object-center transition-all duration-700 ${
              isLight
                ? "opacity-75 sm:opacity-95 filter contrast-[1.08] brightness-[1.04] saturate-[1.06]"
                : "opacity-72 sm:opacity-88 filter brightness-[0.84] contrast-115 saturate-110"
            }`}
          />
          {/* Directional gradient: Text on the left stays ultra-crisp, image on right is clearly visible */}
          <div
            className={`absolute inset-0 ${
              isLight
                ? "bg-gradient-to-r from-[#090B0F]/78 via-[#090B0F]/42 sm:via-[#090B0F]/22 to-transparent"
                : "bg-gradient-to-r from-[#0E1117]/88 via-[#0E1117]/55 sm:via-[#0E1117]/34 to-[#0E1117]/8"
            }`}
          />
          {/* Bottom edge seamless fade into page content */}
          <div
            className={`absolute inset-0 ${
              isLight
                ? "bg-gradient-to-t from-[#0B0D11]/55 via-transparent to-transparent"
                : "bg-gradient-to-t from-[#0E1117]/70 via-transparent to-transparent"
            }`}
          />
        </div>
      )}

      {/* 2. Architectural Hairline Guide Rules */}
      <div className="absolute inset-0 pointer-events-none z-[1]" aria-hidden="true">
        <span className={`absolute top-0 bottom-0 left-[4%] w-px ${isLight ? "bg-[#E2DED2]/60" : "bg-white/[0.05]"}`} />
        <span className={`absolute top-0 bottom-0 right-[4%] w-px ${isLight ? "bg-[#E2DED2]/60" : "bg-white/[0.05]"}`} />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 py-32 lg:px-12 lg:py-36 z-10">
        {/* Top Meta Bar: Breadcrumbs & Folio Status */}
        <div className={`mb-10 flex flex-wrap items-center justify-between gap-4 border-b pb-4 ${
          isLight ? "border-[#E2DED2]" : "border-white/[0.08]"
        }`}>
          <nav
            aria-label="Breadcrumb"
            className="flex items-center gap-2 text-[11px] font-mono tracking-widest uppercase font-semibold"
          >
            <Link
              href="/"
              className={`transition-colors ${
                hasImage ? "text-white/70 hover:text-[#E2C98E]" : isLight ? "text-[#5A6172] hover:text-[#BD903C]" : "text-[#9AA0AC] hover:text-[#E2C98E]"
              }`}
            >
              PORTFOLIO
            </Link>
            {breadcrumb.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span className={hasImage ? "text-white/45" : isLight ? "text-[#C5C8D0]" : "text-white/20"}>/</span>
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className={`transition-colors ${
                      hasImage ? "text-white/70 hover:text-[#E2C98E]" : isLight ? "text-[#5A6172] hover:text-[#BD903C]" : "text-[#9AA0AC] hover:text-[#E2C98E]"
                    }`}
                  >
                    {crumb.label.toUpperCase()}
                  </Link>
                ) : (
                  <span
                    className={`font-bold ${
                      hasImage ? "text-[#E2C98E]" : isLight ? "text-[#BD903C]" : "text-[#E2C98E]"
                    }`}
                  >
                    {crumb.label.toUpperCase()}
                  </span>
                )}
              </span>
            ))}
          </nav>

          {statusBadge && (
            <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-mono tracking-wider font-semibold backdrop-blur-md ${
              isLight ? "bg-white/70 border border-[#E2DED2] text-[#5A6172]" : "bg-white/[0.06] border border-white/10 text-[#9AA0AC]"
            }`}>
              <span className="w-2 h-2 rounded-full bg-[#BD903C] animate-pulse" />
              <span>{statusBadge}</span>
            </div>
          )}
        </div>

        {/* Hero Title & Subtitle Split with Magazine Editorial Scale */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className={`lg:col-span-8 space-y-5 ${hasImage ? "max-w-4xl rounded-2xl border border-white/10 bg-[#080A0E]/45 p-6 shadow-[0_18px_55px_rgba(0,0,0,0.25)] backdrop-blur-[3px] sm:p-8" : ""}`}>
            <SectionEyebrow
              number={eyebrowNumber}
              label={eyebrowLabel}
              variant={hasImage ? "champagne" : isLight ? "dark" : "champagne"}
            />
            <h1
              className={`font-editorial text-[clamp(2.8rem,5.5vw,5.6rem)] font-semibold tracking-[-0.03em] leading-[1.04] text-wrap-balance ${
                hasImage ? "text-[#F8F4EA]" : isLight ? "text-[#12141A]" : "text-[#F8F7F4]"
              }`}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className={`pt-2 text-base sm:text-xl max-w-2xl font-normal leading-relaxed ${
                  hasImage ? "text-white/75" : isLight ? "text-[#5A6172]" : "text-[#9AA0AC]"
                }`}
              >
                {subtitle}
              </p>
            )}
          </div>

          {asideContent && (
            <div className="lg:col-span-4 flex lg:justify-end">
              {asideContent}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
