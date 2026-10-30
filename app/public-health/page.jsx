import Link from "next/link";
import { ArrowRight, Shield, Activity, Globe, HeartHandshake, Users } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import PublicHealthAccent from "@/components/sections/PublicHealthAccent";
import { PROFILE } from "@/content/profile";

export const metadata = {
  title: "Public Health | Ebbad Nazir — EPI Awareness Participation",
  description:
    "Ebbad Nazir's involvement in the Expanded Programme on Immunization (EPI) awareness campaign, highlighting preventative medicine, disease prevention, and community health.",
};

const THEME_ICONS = {
  "Immunization Awareness": Shield,
  "Disease Prevention": Activity,
  "Preventive Healthcare": Globe,
  "Community Well-being": HeartHandshake,
};

export default function PublicHealthPage() {
  const ph = PROFILE.publicHealth;

  return (
    <div className="bg-background text-foreground pb-24">
      {/* Page Hero */}
      <PageHero
        eyebrowNumber="04"
        eyebrowLabel="PREVENTIVE MEDICINE"
        title={ph.heading}
        subtitle="Community advocacy, epidemiological awareness, and population-level health protection in Pakistan."
        breadcrumb={[{ label: "Public Health" }]}
        bgImage="/images/hero-publichealth.jpg"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-24 space-y-16">
        {/* Campaign Dossier Split: Narrative & 3D Scientific Accent */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-12 rounded-3xl bg-surface border border-white/15 shadow-2xl relative overflow-hidden">
          {/* Left: Campaign Details & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-metallic">
                <Users className="w-3.5 h-3.5" />
                <span>ROLE: {ph.role.toUpperCase()}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {ph.initiative}
              </h2>
            </div>

            {/* Approved Copy */}
            <div className="relative pl-5 border-l-2 border-metallic/40">
              <blockquote className="text-base sm:text-lg text-foreground/90 font-editorial italic leading-relaxed">
                &ldquo;{ph.approvedCopy}&rdquo;
              </blockquote>
            </div>

            <p className="text-xs text-muted/70 font-mono">
              * Participation recorded in alignment with public health advocacy standards. No unauthorized campaign leadership or medical administration duties are claimed.
            </p>
          </div>

          {/* Right: 3D Scientific Accent Scene */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center p-4 rounded-2xl bg-background/50 border border-white/10">
            <span className="font-mono text-[10px] tracking-widest text-metallic uppercase mb-2">
              SCIENTIFIC VISUALIZATION &bull; CELLULAR NODES
            </span>
            <PublicHealthAccent />
            <span className="text-[10px] text-muted/60 font-mono mt-2 text-center">
              Artistic scientific accent celebrating community immunity
            </span>
          </div>
        </div>

        {/* Four Themes Grid */}
        <div className="space-y-6">
          <div className="space-y-1">
            <SectionEyebrow number="P.02" label="PREVENTATIVE THEMES" />
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
              Core Principles in Public Health
            </h2>
            <p className="text-sm text-muted max-w-2xl">
              Fostering a broad perspective that pairs clinical bedside skill with proactive community disease prevention.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            {ph.themes.map((theme, idx) => {
              const Icon = THEME_ICONS[theme.title] || Shield;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-surface/60 border border-white/10 hover:border-metallic/40 hover:bg-surface transition-all duration-300 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-metallic">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-metallic/50">0{idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {theme.title}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {theme.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Next Route Navigation */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="font-mono text-xs text-muted uppercase tracking-widest block">
              NEXT SECTION
            </span>
            <span className="text-base font-semibold text-foreground">
              Medical Interests & Career Vision: Surgery
            </span>
          </div>
          <Link
            href="/interests"
            className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider bg-foreground text-background hover:bg-white transition-all duration-300"
          >
            <span>VIEW SURGICAL VISION</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
