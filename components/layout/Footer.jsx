import Link from "next/link";
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
            <div className="mt-3 space-y-1.5 text-sm leading-relaxed text-[#9B9FA8]">
              <a
                href={`mailto:${PROFILE.contact.email}`}
                className="block w-fit py-0.5 text-[#F5F2E9] transition-colors hover:text-[#E2C98E] focus-visible:text-[#E2C98E]"
              >
                {PROFILE.contact.email}
              </a>
              <a
                href={PROFILE.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit py-0.5 transition-colors hover:text-[#E2C98E] focus-visible:text-[#E2C98E]"
              >
                LinkedIn
              </a>
              <a
                href={`tel:${PROFILE.contact.phone}`}
                className="block w-fit py-0.5 transition-colors hover:text-[#E2C98E] focus-visible:text-[#E2C98E]"
              >
                {PROFILE.contact.phoneDisplay}
              </a>
              <Link
                href="/contact"
                className="inline-block pt-2 text-[#F5F2E9] transition-colors hover:text-[#E2C98E] focus-visible:text-[#E2C98E]"
              >
                Let&apos;s connect &rarr;
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
