import Link from "next/link";
import { PROFILE } from "@/content/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#08090C] text-[#F5F2E9]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.35fr_0.8fr_1fr] gap-x-12 gap-y-12 lg:gap-x-20">
          <section className="max-w-md" aria-labelledby="footer-brand-heading">
            <h2 id="footer-brand-heading" className="font-editorial text-3xl sm:text-4xl font-semibold tracking-tight text-[#F5F2E9]">
              Ebbad Nazir
            </h2>
            <p className="mt-5 text-sm sm:text-base leading-relaxed text-[#9B9FA8]">
              A thoughtful journey through medicine, learning, and surgical ambition.
            </p>
            <p className="mt-5 font-mono text-[11px] tracking-[0.12em] uppercase text-[#E2C98E]">
              {PROFILE.shortRole} &middot; {PROFILE.college}
            </p>
          </section>

          <nav aria-label="Footer navigation">
            <h2 className="font-mono text-[10px] font-semibold tracking-[0.2em] uppercase text-[#9B9FA8]">
              Explore
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {PROFILE.routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="w-fit py-1 text-sm text-[#F5F2E9]/75 transition-colors hover:text-[#E2C98E] focus-visible:text-[#E2C98E]"
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
            <div className="mt-5 space-y-3 text-sm leading-relaxed text-[#9B9FA8]">
              <a
                href={`mailto:${PROFILE.contact.email}`}
                className="block w-fit py-1 text-[#F5F2E9] transition-colors hover:text-[#E2C98E] focus-visible:text-[#E2C98E]"
              >
                {PROFILE.contact.email}
              </a>
              <a
                href={PROFILE.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-fit py-1 transition-colors hover:text-[#E2C98E] focus-visible:text-[#E2C98E]"
              >
                LinkedIn
              </a>
              <a
                href={`tel:${PROFILE.contact.phone}`}
                className="block w-fit py-1 transition-colors hover:text-[#E2C98E] focus-visible:text-[#E2C98E]"
              >
                {PROFILE.contact.phoneDisplay}
              </a>
              <p className="pt-1">{PROFILE.location.formatted}</p>
              <Link
                href="/contact"
                className="inline-block pt-3 text-[#F5F2E9] transition-colors hover:text-[#E2C98E] focus-visible:text-[#E2C98E]"
              >
                Let&apos;s connect &rarr;
              </Link>
            </div>
          </section>
        </div>

        <div className="mt-16 sm:mt-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 text-xs text-[#9B9FA8]">
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
