"use client";

import { useState } from "react";
import { Send, Mail, CheckCircle2, AlertCircle } from "lucide-react";
import { PROFILE } from "@/content/profile";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [composerPrepared, setComposerPrepared] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) errs.subject = "Please enter a subject line";
    if (!formData.message.trim()) errs.message = "Please enter your message";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length > 0) return;

    // Honest Email Client Composer Hand-off (per prompt instructions 5 & 12)
    const encodedSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const encodedBody = encodeURIComponent(
      `Hello Ebbad,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );

    const mailtoUrl = `mailto:${PROFILE.contact.email}?subject=${encodedSubject}&body=${encodedBody}`;

    setComposerPrepared(true);

    // Open user's email client
    window.location.href = mailtoUrl;
  };

  return (
    <div className="p-8 sm:p-10 rounded-3xl bg-surface border border-white/15 shadow-2xl space-y-6">
      <div className="space-y-1">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground">
          Send a Direct Message
        </h3>
        <p className="text-xs text-muted leading-relaxed">
          Fill out this form to prepare a pre-filled direct message in your default email client. No third-party servers store your message.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-xs font-mono uppercase text-muted mb-1.5">
            Full Name <span className="text-rose-400">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Dr. Ayesha Khan / Prof. Ahmed"
            className={`w-full px-4 py-3 rounded-xl bg-background/80 border text-sm text-foreground placeholder:text-muted/40 focus:outline-none transition-colors ${
              errors.name ? "border-rose-400 focus:border-rose-400" : "border-white/10 focus:border-metallic"
            }`}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-xs font-mono uppercase text-muted mb-1.5">
            Your Email Address <span className="text-rose-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="you@institution.org"
            className={`w-full px-4 py-3 rounded-xl bg-background/80 border text-sm text-foreground placeholder:text-muted/40 focus:outline-none transition-colors ${
              errors.email ? "border-rose-400 focus:border-rose-400" : "border-white/10 focus:border-metallic"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.email}
            </p>
          )}
        </div>

        {/* Subject Field */}
        <div>
          <label htmlFor="subject" className="block text-xs font-mono uppercase text-muted mb-1.5">
            Subject <span className="text-rose-400">*</span>
          </label>
          <input
            id="subject"
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="Clinical Mentorship / Academic Inquiry / Collaboration"
            className={`w-full px-4 py-3 rounded-xl bg-background/80 border text-sm text-foreground placeholder:text-muted/40 focus:outline-none transition-colors ${
              errors.subject ? "border-rose-400 focus:border-rose-400" : "border-white/10 focus:border-metallic"
            }`}
          />
          {errors.subject && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.subject}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-xs font-mono uppercase text-muted mb-1.5">
            Message <span className="text-rose-400">*</span>
          </label>
          <textarea
            id="message"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Write your note, question, or discussion point here..."
            className={`w-full px-4 py-3 rounded-xl bg-background/80 border text-sm text-foreground placeholder:text-muted/40 focus:outline-none transition-colors resize-y ${
              errors.message ? "border-rose-400 focus:border-rose-400" : "border-white/10 focus:border-metallic"
            }`}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" /> {errors.message}
            </p>
          )}
        </div>

        {/* Submit / Compose Button */}
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl text-xs font-semibold tracking-wider bg-foreground text-background hover:bg-white hover:shadow-[0_0_25px_rgba(255,255,255,0.2)] transition-all duration-300"
        >
          <Send className="w-4 h-4" />
          <span>COMPOSE IN EMAIL CLIENT</span>
        </button>

        {composerPrepared && (
          <div className="p-4 rounded-xl bg-emerald-400/10 border border-emerald-400/20 text-xs text-emerald-300 flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <p>
              Your default email client was opened with your message pre-filled to <strong>{PROFILE.contact.email}</strong>. If your mail client did not open automatically, please click the direct email link below.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
