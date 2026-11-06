"use client";

import { useEffect, useState } from "react";
import { Activity, Stethoscope } from "lucide-react";

const LOAD_DURATION = 1650;

export default function MedicalLoader() {
  const [progress, setProgress] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let frameId;
    const startedAt = performance.now();

    const updateProgress = (now) => {
      const elapsed = Math.min((now - startedAt) / LOAD_DURATION, 1);
      setProgress(Math.round((1 - Math.pow(1 - elapsed, 4)) * 100));

      if (elapsed < 1) frameId = requestAnimationFrame(updateProgress);
      else setIsLeaving(true);
    };

    frameId = requestAnimationFrame(updateProgress);
    const removeTimer = window.setTimeout(() => setIsVisible(false), LOAD_DURATION + 760);

    return () => {
      cancelAnimationFrame(frameId);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="surgical-loader" data-leaving={isLeaving} role="status" aria-live="polite" aria-label="Loading Ebbad Nazir medical portfolio">
      <div className="surgical-loader__grid" aria-hidden="true" />
      <div className="surgical-loader__glow" aria-hidden="true" />

      <header className="surgical-loader__header" aria-hidden="true">
        <div className="surgical-loader__brand">
          <img src="/brand/ebbad-nazir-mark-transparent.png" alt="" />
          <span>EBBAD NAZIR</span>
        </div>
        <div className="surgical-loader__header-status"><i /> CLINICAL PORTFOLIO</div>
      </header>

      <main className="surgical-loader__console">
        <section className="surgical-loader__identity">
          <p className="surgical-loader__eyebrow">MEDICAL PROFILE / 01</p>
          <h1>Ebbad Nazir</h1>
          <p className="surgical-loader__role">Fourth-Year MBBS Student</p>
          <dl>
            <div><dt>Current focus</dt><dd>Clinical learning</dd></div>
            <div><dt>Academic base</dt><dd>Rai Medical College</dd></div>
          </dl>
        </section>

        <section className="surgical-loader__monitor" aria-hidden="true">
          <div className="surgical-loader__monitor-head">
            <span><Activity size={14} /> SURGICAL LEARNING PORTFOLIO</span>
            <span>STATUS / ACTIVE</span>
          </div>
          <div className="surgical-loader__monitor-body">
            <div className="surgical-loader__crosshair"><span /><span /></div>
            <svg className="surgical-loader__wave" viewBox="0 0 500 150" preserveAspectRatio="none">
              <path d="M0 83H132L150 83L162 67L175 102L194 23L215 127L235 83H500" />
            </svg>
            <span className="surgical-loader__scan" />
            <span className="surgical-loader__coordinate surgical-loader__coordinate--one">36.7°</span>
            <span className="surgical-loader__coordinate surgical-loader__coordinate--two">MBBS / IV</span>
          </div>
          <div className="surgical-loader__monitor-foot">
            <span>ACADEMIC RECORD</span><span>CLINICAL EXPOSURE</span><span>FUTURE DIRECTION</span>
          </div>
        </section>

        <section className="surgical-loader__specialty">
          <Stethoscope size={18} aria-hidden="true" />
          <p>SPECIALTY INTEREST</p>
          <strong>Surgery</strong>
          <span>Knowledge / Precision / Care</span>
        </section>
      </main>

      <footer className="surgical-loader__footer">
        <div className="surgical-loader__progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress / 100})` }} /></div>
        <div className="surgical-loader__readout">
          <span><i /> PREPARING MEDICAL PORTFOLIO</span>
          <strong>{String(progress).padStart(3, "0")}%</strong>
          <span>RAI MEDICAL COLLEGE, SARGODHA</span>
        </div>
      </footer>
    </div>
  );
}
