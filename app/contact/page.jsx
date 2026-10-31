import { ArrowUpRight, Clock, ShieldCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ContactForm from "@/components/sections/ContactForm";
import { PROFILE } from "@/content/profile";

export const metadata = {
  title: "Contact | Ebbad Nazir — Professional Correspondence",
  description:
    "Direct contact channels for Ebbad Nazir, fourth-year MBBS student at Rai Medical College, Sargodha. Reach out via email, phone, or LinkedIn.",
};

export default function ContactPage() {
  const c = PROFILE.contact;

  return (
    <div className="bg-[#FAF9F5] text-[#12141A] pb-28">
      {/* Page Hero */}
      <PageHero
        eyebrowNumber="06"
        eyebrowLabel="PROFESSIONAL CORRESPONDENCE"
        title={c.heading}
        subtitle={c.subheading}
        breadcrumb={[{ label: "Contact" }]}
        bgImage="/images/hero-contact.jpg"
        variant="light"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-24 space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Channels & Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <SectionEyebrow number="C.01" label="AUTHENTIC CONTACT CHANNELS" variant="dark" />
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold tracking-tight text-[#12141A]">
                Verified Communication Lines
              </h2>
              <p className="text-sm sm:text-base text-[#5A6172] font-sans leading-relaxed">
                Direct methods to reach Ebbad Nazir for academic, clinical, or public health conversations.
              </p>
            </div>

            <div className="space-y-4">
              {c.channels.filter((chan) => chan.label !== "Location").map((chan, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white p-6 border border-[#E2DED2] shadow-sm hover:border-[#BD903C] hover:shadow-md transition-all duration-300 space-y-2 relative"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#BD903C] uppercase tracking-widest font-bold">
                      {chan.label}
                    </span>
                    <span className="text-[11px] font-mono text-[#848A96] font-semibold">
                      {chan.helper}
                    </span>
                  </div>

                  {chan.href ? (
                    <a
                      href={chan.href}
                      target={chan.href.startsWith("http") ? "_blank" : undefined}
                      rel={chan.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group inline-flex items-center gap-2 text-base sm:text-lg font-semibold text-[#12141A] hover:text-[#BD903C] transition-colors pt-1"
                    >
                      <span className="break-all">{chan.value}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-[#BD903C]" />
                    </a>
                  ) : (
                    <div className="pt-1">
                      <p className="text-base sm:text-lg font-semibold text-[#12141A]">
                        {chan.value}
                      </p>
                      {chan.subtext && (
                        <p className="text-xs text-[#5A6172] font-mono mt-0.5">{chan.subtext}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact transparency & privacy assurance */}
            <div className="p-7 rounded-2xl bg-[#F5F3EB] border border-[#E2DED2] space-y-3 text-xs sm:text-sm text-[#5A6172]">
              <div className="flex items-center gap-2 text-[#BD903C] font-mono font-bold uppercase tracking-wider text-xs">
                <Clock className="w-4 h-4" />
                <span>Contact Transparency</span>
              </div>
              <p className="font-sans leading-relaxed text-[#2C313E]">
                This portfolio operates without tracking cookies or contact databases. Form submissions hand off securely to your own email client, keeping your correspondence private.
              </p>
              <div className="pt-2 border-t border-[#E2DED2] flex items-center gap-2 text-xs text-[#5A6172] font-sans">
                <ShieldCheck className="w-4 h-4 text-[#BD903C]" />
                <span>No physical address is published on this page.</span>
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
