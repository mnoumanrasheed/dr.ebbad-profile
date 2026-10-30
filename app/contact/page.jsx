import { Mail, Phone, MapPin, ArrowUpRight, Clock, ShieldCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ContactForm from "@/components/sections/ContactForm";
import { PROFILE } from "@/content/profile";

export const metadata = {
  title: "Contact | Ebbad Nazir — Let's Connect",
  description:
    "Direct contact channels for Ebbad Nazir, fourth-year MBBS student at Rai Medical College, Sargodha. Reach out via email, phone, or LinkedIn.",
};

export default function ContactPage() {
  const c = PROFILE.contact;

  return (
    <div className="bg-background text-foreground pb-24">
      {/* Page Hero */}
      <PageHero
        eyebrowNumber="06"
        eyebrowLabel="GET IN TOUCH"
        title={c.heading}
        subtitle={c.subheading}
        breadcrumb={[{ label: "Contact" }]}
        bgImage="/images/hero-contact.jpg"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-24 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Channels & Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <SectionEyebrow number="C.01" label="AUTHENTIC CONTACT CHANNELS" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                Verified Communication Lines
              </h2>
              <p className="text-sm text-muted">
                Direct methods to reach Ebbad Nazir for academic, clinical, or public health conversations.
              </p>
            </div>

            <div className="space-y-4">
              {c.channels.map((chan, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-surface/70 border border-white/10 hover:border-metallic/40 transition-all duration-300 space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-metallic uppercase tracking-wider">
                      {chan.label}
                    </span>
                    <span className="text-[10px] font-mono text-muted/60">
                      {chan.helper}
                    </span>
                  </div>

                  {chan.href ? (
                    <a
                      href={chan.href}
                      target={chan.href.startsWith("http") ? "_blank" : undefined}
                      rel={chan.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-2 text-base font-semibold text-foreground hover:text-metallic transition-colors"
                    >
                      <span className="break-all">{chan.value}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-metallic" />
                    </a>
                  ) : (
                    <div>
                      <p className="text-base font-semibold text-foreground">
                        {chan.value}
                      </p>
                      {chan.subtext && (
                        <p className="text-xs text-muted font-mono">{chan.subtext}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Response Time & Privacy Assurance */}
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3 text-xs text-muted font-mono">
              <div className="flex items-center gap-2 text-metallic">
                <Clock className="w-4 h-4" />
                <span className="uppercase tracking-wider">Academic Availability</span>
              </div>
              <p className="font-sans leading-relaxed text-muted/80">
                As a fourth-year medical student undergoing daily hospital rotations and academic study, replies are usually returned within 24 to 48 hours.
              </p>
              <div className="pt-2 border-t border-white/5 flex items-center gap-2 text-[11px] text-muted/60 font-sans">
                <ShieldCheck className="w-3.5 h-3.5 text-metallic" />
                <span>No private residential street addresses are stored or displayed.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Honest Message Composer Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
