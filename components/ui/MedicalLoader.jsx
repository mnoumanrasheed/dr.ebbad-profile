"use client";

import { useEffect, useState } from "react";

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
      const eased = 1 - Math.pow(1 - elapsed, 4);
      setProgress(Math.round(eased * 100));

      if (elapsed < 1) {
        frameId = requestAnimationFrame(updateProgress);
      } else {
        setIsLeaving(true);
      }
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
    <div
      className="monograph-loader"
      data-leaving={isLeaving}
      role="status"
      aria-live="polite"
      aria-label="Loading Ebbad Nazir medical portfolio"
    >
      <div className="monograph-loader__grid" aria-hidden="true" />
      <div className="monograph-loader__glow" aria-hidden="true" />

      <header className="monograph-loader__topline" aria-hidden="true">
        <span>EBBAD NAZIR</span>
        <span>MBBS PORTFOLIO</span>
      </header>

      <main className="monograph-loader__main">
        <div className="monograph-loader__seal" aria-hidden="true">
          <span className="monograph-loader__seal-ring monograph-loader__seal-ring--one" />
          <span className="monograph-loader__seal-ring monograph-loader__seal-ring--two" />
          <span className="monograph-loader__seal-corner monograph-loader__seal-corner--tl" />
          <span className="monograph-loader__seal-corner monograph-loader__seal-corner--tr" />
          <span className="monograph-loader__seal-corner monograph-loader__seal-corner--bl" />
          <span className="monograph-loader__seal-corner monograph-loader__seal-corner--br" />
          <div className="monograph-loader__mark">
            <img src="/brand/ebbad-nazir-mark-transparent.png" alt="" />
          </div>
        </div>

        <p className="monograph-loader__chapter">FOURTH-YEAR MBBS STUDENT</p>
        <h1 className="monograph-loader__title">Ebbad<br /><em>Nazir.</em></h1>
        <p className="monograph-loader__subtitle">A personal medical portfolio documenting academic progress, clinical learning, and a growing interest in surgery.</p>
      </main>

      <div className="monograph-loader__ecg" aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path d="M0 69H510L535 69L548 55L564 92L586 18L608 105L632 69H1440" />
        </svg>
      </div>

      <footer className="monograph-loader__footer">
        <div className="monograph-loader__progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
        <div className="monograph-loader__readout">
          <span><i /> PREPARING PORTFOLIO</span>
          <strong>{String(progress).padStart(3, "0")}</strong>
          <span>RAI MEDICAL COLLEGE</span>
        </div>
      </footer>
    </div>
  );
}
