import { Clock, ShieldCheck } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import SectionEyebrow from "@/components/ui/SectionEyebrow";
import ContactForm from "@/components/sections/ContactForm";
import { PROFILE } from "@/content/profile";

export const metadata = {
  title: "Contact | Ebbad Nazir — Professional Correspondence",
  description:
    "Direct contact channels for Ebbad Nazir, a fourth-year Bachelor of Medicine, Bachelor of Surgery (MBBS) student at Rai Medical College, Sargodha. Reach out via email, phone, or LinkedIn.",
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
          {/* Left Column: Contact context - direct links live in the site footer. */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <SectionEyebrow number="C.01" label="AUTHENTIC CONTACT CHANNELS" variant="dark" />
              <h2 className="font-editorial text-3xl sm:text-4xl font-semibold tracking-tight text-[#12141A]">
                Start a thoughtful conversation.
              </h2>
              <p className="text-sm sm:text-base text-[#5A6172] font-sans leading-relaxed">
                For academic, clinical, or public-health conversations, use the message form. Direct contact links are available in the footer on every page.
              </p>
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
