"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import CinematicHeroAccent from "@/components/three/CinematicHeroAccent";
import { PROFILE } from "@/content/profile";

export default function HomeHero() {
  const stageRef = useRef(null);
  const guidesRef = useRef(null);
  const nameLeftRef = useRef(null);
  const nameRightRef = useRef(null);
  const portraitRef = useRef(null);
  const statementRef = useRef(null);
  const rightCopyRef = useRef(null);
  const [isPortraitRevealed, setIsPortraitRevealed] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    let context;
    let removeParallax = () => {};
    let cancelled = false;

    import("gsap")
      .then(({ default: gsap }) => {
        if (cancelled || !stageRef.current) return;

        context = gsap.context(() => {
          const lines = statementRef.current?.querySelectorAll("[data-statement-line]");
          const details = statementRef.current?.querySelectorAll("[data-statement-detail]");
          const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

          timeline
            .from(guidesRef.current, { opacity: 0, duration: 0.55 })
            .from([nameLeftRef.current, nameRightRef.current], {
              opacity: 0,
              y: 20,
              duration: 0.55,
            }, 0.08)
            .from(portraitRef.current, {
              opacity: 0,
              y: 54,
              scale: 0.96,
              duration: 1.02,
            }, 0.28)
            .from(lines, { opacity: 0, y: 22, stagger: 0.08, duration: 0.5 }, 0.48)
            .from(details, { opacity: 0, y: 14, stagger: 0.09, duration: 0.45 }, 0.82)
            .from(rightCopyRef.current, { opacity: 0, y: 14, duration: 0.5 }, 1.02);

          if (!window.matchMedia("(pointer: fine)").matches) return;

          const portraitX = gsap.quickTo(portraitRef.current, "x", { duration: 0.9, ease: "power3.out" });
          const portraitY = gsap.quickTo(portraitRef.current, "y", { duration: 0.9, ease: "power3.out" });
          const nameLeftX = gsap.quickTo(nameLeftRef.current, "x", { duration: 1.1, ease: "power3.out" });
          const nameLeftY = gsap.quickTo(nameLeftRef.current, "y", { duration: 1.1, ease: "power3.out" });
          const nameRightX = gsap.quickTo(nameRightRef.current, "x", { duration: 1.1, ease: "power3.out" });
          const nameRightY = gsap.quickTo(nameRightRef.current, "y", { duration: 1.1, ease: "power3.out" });

          const handlePointer = (event) => {
            const bounds = stageRef.current.getBoundingClientRect();
            const x = (event.clientX - bounds.left) / bounds.width - 0.5;
            const y = (event.clientY - bounds.top) / bounds.height - 0.5;
            portraitX(x * 7);
            portraitY(y * 5);
            nameLeftX(x * -12);
            nameLeftY(y * -7);
            nameRightX(x * -12);
            nameRightY(y * -7);
          };

          const reset = () => {
            portraitX(0);
            portraitY(0);
            nameLeftX(0);
            nameLeftY(0);
            nameRightX(0);
            nameRightY(0);
          };

          const stage = stageRef.current;
          stage.addEventListener("pointermove", handlePointer, { passive: true });
          stage.addEventListener("pointerleave", reset);
          removeParallax = () => {
            stage.removeEventListener("pointermove", handlePointer);
            stage.removeEventListener("pointerleave", reset);
          };
        }, stageRef);
      })
      .catch(() => {
        // The entrance animation is decorative; the page remains fully usable if it cannot load.
      });

    return () => {
      cancelled = true;
      removeParallax();
      context?.revert();
    };
  }, []);

  return (
    <section ref={stageRef} className="reference-hero" aria-labelledby="home-hero-title">
      <h1 id="home-hero-title" className="sr-only">Ebbad Nazir - MBBS student and aspiring surgeon</h1>
      <div ref={guidesRef} className="reference-hero__guides" aria-hidden="true">
        <span className="reference-hero__guide reference-hero__guide--left" />
        <span className="reference-hero__guide reference-hero__guide--center" />
        <span className="reference-hero__guide reference-hero__guide--right" />
      </div>

      <div className="reference-hero__orbital-accent" aria-hidden="true">
        <CinematicHeroAccent />
      </div>

      <div className="reference-hero__words" aria-hidden="true">
        <span ref={nameLeftRef} className="reference-hero__word reference-hero__word--left">EBBAD</span>
        <span ref={nameRightRef} className="reference-hero__word reference-hero__word--right">NAZIR</span>
      </div>

      <button
        ref={portraitRef}
        type="button"
        onClick={() => setIsPortraitRevealed((isRevealed) => !isRevealed)}
        aria-pressed={isPortraitRevealed}
        aria-label={isPortraitRevealed ? "Show portrait in black and white" : "Reveal portrait in colour"}
        className="reference-hero__portrait group"
      >
        <Image
          src="/images/profile.png"
          alt="Ebbad Nazir, fourth-year MBBS student, wearing a white medical coat and stethoscope"
          width={1122}
          height={1402}
          priority
          sizes="(max-width: 767px) 94vw, (max-width: 1279px) 58vw, 48vw"
          className={`reference-hero__portrait-image transition-[filter] duration-700 ease-out group-hover:grayscale-0 ${isPortraitRevealed ? "grayscale-0" : "grayscale"}`}
        />
      </button>

      <div ref={statementRef} className="reference-hero__statement">
        <p className="reference-hero__mobile-status"><span aria-hidden="true" /> MBBS &middot; {PROFILE.session}</p>
        <h2 className="reference-hero__headline">
          <span data-statement-line>Learning</span>{" "}
          <span data-statement-line>Medicine.</span><br className="reference-hero__headline-break" />
          <span data-statement-line>With</span>{" "}
          <span data-statement-line className="reference-hero__headline-accent">Purpose.</span>
        </h2>
        <p data-statement-detail className="reference-hero__intro">
          A Bachelor of Medicine, Bachelor of Surgery (MBBS) student building a future through learning, discipline, and compassionate care.
        </p>
        <div data-statement-detail className="reference-hero__actions">
          <Link href="/about" className="reference-hero__button reference-hero__button--primary">
            <span>Explore My Journey</span><ArrowRight size={14} aria-hidden="true" />
          </Link>
          <Link href="/clinical-experience" className="reference-hero__button reference-hero__button--secondary">
            <span>Clinical Experience</span><ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>

      <aside ref={rightCopyRef} className="reference-hero__aside" aria-label="Academic profile summary">
        <p className="reference-hero__status"><span aria-hidden="true" /> MBBS &middot; {PROFILE.session}</p>
        <p>{PROFILE.college}, Sargodha</p>
        <span className="reference-hero__aside-rule" aria-hidden="true" />
        <p>Focused on learning.<br />Inspired by surgery.</p>
      </aside>
    </section>
  );
}
