"use client";

import { useEffect, useState } from "react";

const MIN_PRESENTATION_MS = 1050;
const EXIT_DURATION_MS = 540;

function waitForWindowLoad() {
  if (document.readyState === "complete") return Promise.resolve();
  return new Promise((resolve) => window.addEventListener("load", resolve, { once: true }));
}

function waitForFonts() {
  return document.fonts?.ready?.catch(() => undefined) || Promise.resolve();
}

function preloadImage(src) {
  return new Promise((resolve) => {
    const image = new window.Image();
    image.onload = resolve;
    image.onerror = resolve;
    image.src = src;
  });
}

function waitAtMost(promise, timeout) {
  return new Promise((resolve) => {
    const timer = window.setTimeout(resolve, timeout);
    promise.finally(() => {
      window.clearTimeout(timer);
      resolve();
    });
  });
}

export default function MedicalLoader() {
  const [progress, setProgress] = useState(0);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let isCancelled = false;
    const timers = [];
    const startedAt = performance.now();
    const completeStep = (weight) => {
      if (!isCancelled) setProgress((current) => Math.min(.94, current + weight));
    };

    const readiness = [
      [waitForWindowLoad(), .22],
      [waitForFonts(), .2],
      [preloadImage("/brand/ebbad-nazir-mark-transparent.png"), .24],
      [preloadImage("/images/profile.png"), .28],
    ].map(([task, weight]) => task.finally(() => completeStep(weight)));

    waitAtMost(Promise.allSettled(readiness), 4000).then(() => {
      if (isCancelled) return;
      const remainingPresentation = Math.max(0, MIN_PRESENTATION_MS - (performance.now() - startedAt));
      const finish = () => {
        if (isCancelled) return;
        setProgress(1);
        timers.push(window.setTimeout(() => setIsLeaving(true), 90));
        timers.push(window.setTimeout(() => setIsVisible(false), EXIT_DURATION_MS + 90));
      };

      timers.push(window.setTimeout(finish, remainingPresentation));
    });

    return () => {
      isCancelled = true;
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="cinematic-loader" data-leaving={isLeaving} role="status" aria-live="polite" aria-label="Loading Ebbad Nazir medical portfolio">
      <div className="cinematic-loader__ambient" aria-hidden="true" />
      <main className="cinematic-loader__content">
        <div className="cinematic-loader__monogram" aria-hidden="true">
          <img src="/brand/ebbad-nazir-mark-transparent.png" alt="" />
        </div>
        <p className="cinematic-loader__chapter">A journey in medicine</p>
        <h1 className="cinematic-loader__name"><span>EBBAD</span><span>NAZIR</span></h1>
        <p className="cinematic-loader__role">MBBS Student <i aria-hidden="true" /> Future Medical Professional</p>
        <div className="cinematic-loader__ecg" aria-hidden="true">
          <svg viewBox="0 0 360 64" preserveAspectRatio="none"><path pathLength="1" d="M0 34H106L123 34L133 25L144 46L161 8L177 55L194 34H360" /></svg>
        </div>
        <div className="cinematic-loader__progress-wrap" role="progressbar" aria-label="Portfolio loading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress * 100)}>
          <span className="cinematic-loader__progress" style={{ transform: `scaleX(${progress})` }} />
        </div>
        <span className="sr-only">Loading the portfolio</span>
      </main>
    </div>
  );
}
