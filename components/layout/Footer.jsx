import Link from "next/link";
import { Linkedin, Mail, Phone } from "lucide-react";
import { PROFILE } from "@/content/profile";
import Logo from "../brand/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08090C] text-[#F5F2E9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 sm:py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.35fr_0.8fr_1fr] gap-x-10 gap-y-8 lg:gap-x-16">
          <section className="max-w-md" aria-labelledby="footer-brand-heading">
            <div id="footer-brand-heading">
              <Logo variant="light" size="default" showTagline={false} />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#9B9FA8]">
              A thoughtful journey through medicine, learning, and surgical ambition.
            </p>
            <p className="mt-3 font-mono text-[10px] tracking-[0.1em] uppercase text-[#E2C98E]">
              {PROFILE.shortRole} &middot; {PROFILE.college}
            </p>
          </section>

          <nav aria-label="Footer navigation">
            <h2 className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase text-[#9B9FA8]">
              Explore
            </h2>
            <div className="mt-3 grid grid-cols-2 gap-x-5 gap-y-1">
              {PROFILE.routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="w-fit py-0.5 text-sm text-[#F5F2E9]/75 transition-colors hover:text-[#E2C98E] focus-visible:text-[#E2C98E]"
                >
                  {route.label}
                </Link>
              ))}
            </div>
          </nav>

          <section aria-labelledby="footer-contact-heading">
            <h2 id="footer-contact-heading" className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase text-[#9B9FA8]">
              Get in touch
            </h2>
            <div className="mt-4 flex items-center gap-3" aria-label="Direct contact links">
              <a
                href={`mailto:${PROFILE.contact.email}`}
                aria-label="Email Ebbad Nazir"
                title="Email"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-[#F5F2E9] transition-all hover:-translate-y-1 hover:border-[#E2C98E] hover:bg-[#E2C98E] hover:text-[#111317] focus-visible:border-[#E2C98E]"
              >
                <Mail className="h-[18px] w-[18px]" strokeWidth={1.7} aria-hidden="true" />
              </a>
              <a
                href={`tel:${PROFILE.contact.phone}`}
                aria-label="Call Ebbad Nazir"
                title="Phone / WhatsApp"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-[#F5F2E9] transition-all hover:-translate-y-1 hover:border-[#E2C98E] hover:bg-[#E2C98E] hover:text-[#111317] focus-visible:border-[#E2C98E]"
              >
                <Phone className="h-[18px] w-[18px]" strokeWidth={1.7} aria-hidden="true" />
              </a>
              <a
                href={PROFILE.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open Ebbad Nazir's LinkedIn profile"
                title="LinkedIn"
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/[0.03] text-[#F5F2E9] transition-all hover:-translate-y-1 hover:border-[#E2C98E] hover:bg-[#E2C98E] hover:text-[#111317] focus-visible:border-[#E2C98E]"
              >
                <Linkedin className="h-[18px] w-[18px]" strokeWidth={1.7} aria-hidden="true" />
              </a>
            </div>
            <div className="mt-4 space-y-1 text-xs leading-relaxed text-[#9B9FA8]">
              <Link
                href="/contact"
                className="inline-block text-[#F5F2E9] transition-colors hover:text-[#E2C98E] focus-visible:text-[#E2C98E]"
              >
                Send a message &rarr;
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-9 sm:mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-[#9B9FA8]">
          <p>&copy; {currentYear} Ebbad Nazir. All rights reserved.</p>
          <a
            href="#main-content"
            className="w-fit py-2 transition-colors hover:text-[#E2C98E] focus-visible:text-[#E2C98E]"
          >
            Back to top &uarr;
          </a>
        </div>
      </div>
    </footer>
  );
}
