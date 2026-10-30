import Image from "next/image";
import Link from "next/link";
import SectionEyebrow from "./SectionEyebrow";

export default function PageHero({
  eyebrowNumber,
  eyebrowLabel,
  title,
  subtitle,
  breadcrumb = [],
  variant = "dark",
  bgImage = null,
  asideContent = null,
}) {
  const isLight = variant === "light";

  return (
    <section
      className={`relative pt-32 pb-16 md:pt-40 md:pb-24 border-b overflow-hidden ${
        isLight
          ? "bg-paper text-ink border-ink/10"
          : "bg-background text-foreground border-white/10"
      }`}
    >
      {/* Background Hero Image */}
      {bgImage && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <Image
            src={bgImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className={`object-cover object-center transition-opacity duration-1000 ${
              isLight
                ? "opacity-25 filter grayscale contrast-125 mix-blend-multiply"
                : "opacity-35 filter brightness-[0.35] contrast-115"
            }`}
          />
          {/* Dual Vignette & Fade Overlays */}
          <div
            className={`absolute inset-0 ${
              isLight
                ? "bg-gradient-to-r from-paper via-paper/85 to-transparent"
                : "bg-gradient-to-r from-background via-background/90 to-background/60"
            }`}
          />
          <div
            className={`absolute inset-0 ${
              isLight
                ? "bg-gradient-to-t from-paper via-transparent to-paper/50"
                : "bg-gradient-to-t from-background via-transparent to-background/70"
            }`}
          />
        </div>
      )}

      {/* Background medical grid */}
      <div
        className={`absolute inset-0 pointer-events-none z-[1] ${
          isLight ? "opacity-30" : "medical-grid opacity-30"
        }`}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 z-10">
        {/* Breadcrumb Context */}
        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-2 text-xs font-mono tracking-wider"
        >
          <Link
            href="/"
            className={`transition-colors ${
              isLight ? "text-ink/60 hover:text-ink" : "text-muted hover:text-foreground"
            }`}
          >
            HOME
          </Link>
          {breadcrumb.map((crumb, idx) => (
            <span key={idx} className="flex items-center gap-2">
              <span className={isLight ? "text-ink/30" : "text-white/20"}>/</span>
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className={`transition-colors ${
                    isLight ? "text-ink/60 hover:text-ink" : "text-muted hover:text-foreground"
                  }`}
                >
                  {crumb.label.toUpperCase()}
                </Link>
              ) : (
                <span className={isLight ? "text-ink font-semibold" : "text-foreground font-medium"}>
                  {crumb.label.toUpperCase()}
                </span>
              )}
            </span>
          ))}
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <SectionEyebrow
              number={eyebrowNumber}
              label={eyebrowLabel}
              variant={isLight ? "dark" : "silver"}
              className="mb-4"
            />
            <h1
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.08] ${
                isLight ? "text-ink" : "text-foreground"
              }`}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className={`mt-5 text-lg sm:text-xl max-w-2xl font-normal leading-relaxed ${
                  isLight ? "text-ink/75" : "text-muted"
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
