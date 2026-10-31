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

  return (
    <section
      className={`relative pt-36 pb-24 md:pt-44 md:pb-32 border-b overflow-hidden isolate ${
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
                ? "opacity-60 sm:opacity-75 filter contrast-[1.06] brightness-[1.02]"
                : "opacity-70 sm:opacity-85 filter brightness-[0.78] contrast-115"
            }`}
          />
          {/* Directional gradient: Text on the left stays ultra-crisp, image on right is clearly visible */}
          <div
            className={`absolute inset-0 ${
              isLight
                ? "bg-gradient-to-r from-[#FAF9F5] via-[#FAF9F5]/85 sm:via-[#FAF9F5]/75 to-[#FAF9F5]/25"
                : "bg-gradient-to-r from-[#0E1117] via-[#0E1117]/85 sm:via-[#0E1117]/75 to-[#0E1117]/30"
            }`}
          />
          {/* Bottom edge seamless fade into page content */}
          <div
            className={`absolute inset-0 ${
              isLight
                ? "bg-gradient-to-t from-[#FAF9F5] via-transparent to-transparent"
                : "bg-gradient-to-t from-[#0E1117] via-transparent to-transparent"
            }`}
          />
        </div>
      )}

      {/* 2. Architectural Hairline Guide Rules */}
      <div className="absolute inset-0 pointer-events-none z-[1]" aria-hidden="true">
        <span className={`absolute top-0 bottom-0 left-[4%] w-px ${isLight ? "bg-[#E2DED2]/60" : "bg-white/[0.05]"}`} />
        <span className={`absolute top-0 bottom-0 right-[4%] w-px ${isLight ? "bg-[#E2DED2]/60" : "bg-white/[0.05]"}`} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10">
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
                isLight ? "text-[#5A6172] hover:text-[#BD903C]" : "text-[#9AA0AC] hover:text-[#E2C98E]"
              }`}
            >
              PORTFOLIO
            </Link>
            {breadcrumb.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span className={isLight ? "text-[#C5C8D0]" : "text-white/20"}>/</span>
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className={`transition-colors ${
                      isLight ? "text-[#5A6172] hover:text-[#BD903C]" : "text-[#9AA0AC] hover:text-[#E2C98E]"
                    }`}
                  >
                    {crumb.label.toUpperCase()}
                  </Link>
                ) : (
                  <span
                    className={`font-bold ${
                      isLight ? "text-[#BD903C]" : "text-[#E2C98E]"
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
          <div className="lg:col-span-8 space-y-5">
            <SectionEyebrow
              number={eyebrowNumber}
              label={eyebrowLabel}
              variant={isLight ? "dark" : "champagne"}
            />
            <h1
              className={`font-editorial text-[clamp(2.8rem,5.5vw,5.6rem)] font-semibold tracking-[-0.03em] leading-[1.04] text-wrap-balance ${
                isLight ? "text-[#12141A]" : "text-[#F8F7F4]"
              }`}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className={`pt-2 text-base sm:text-xl max-w-2xl font-normal leading-relaxed ${
                  isLight ? "text-[#5A6172]" : "text-[#9AA0AC]"
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
