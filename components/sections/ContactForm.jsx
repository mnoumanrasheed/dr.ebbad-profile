"use client";

import { useState } from "react";
import { Send, Mail, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
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
    if (!formData.name.trim()) errs.name = "Please enter your full name";
    if (!formData.email.trim()) {
      errs.email = "Please enter your email address";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }
    if (!formData.subject.trim()) errs.subject = "Please enter an inquiry subject";
    if (!formData.message.trim()) errs.message = "Please write your message";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length > 0) return;

    // Honest Email Client Composer Hand-off
    const encodedSubject = encodeURIComponent(`[Medical Inquiries] ${formData.subject}`);
    const encodedBody = encodeURIComponent(
      `Hello Ebbad,\n\n${formData.message}\n\n---\nFrom: ${formData.name}\nEmail: ${formData.email}`
    );

    const mailtoUrl = `mailto:${PROFILE.contact.email}?subject=${encodedSubject}&body=${encodedBody}`;

    setComposerPrepared(true);

    // Open user's email client
    window.location.href = mailtoUrl;
  };

  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[#111318] p-7 text-[#F7F2E8] shadow-[0_24px_70px_rgba(18,20,26,0.18)] sm:p-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E2C98E] to-transparent" aria-hidden="true" />
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#C99A43]/10 blur-3xl" aria-hidden="true" />
      <div className="space-y-2 relative z-10">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] text-[#E2C98E] uppercase tracking-[0.18em] flex items-center gap-1.5 font-bold">
            <Sparkles className="w-4 h-4 text-[#BD903C]" />
            DIRECT COMPOSER
          </span>
          <span className="font-mono text-[10px] text-white/45 font-semibold">PRIVATE MAIL HANDOFF</span>
        </div>
        <h3 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#F7F2E8]">
          Send a Professional Note
        </h3>
        <p className="max-w-xl text-xs sm:text-sm text-white/60 leading-relaxed font-sans">
          This form formats your message and launches your native email client directly to <strong>{PROFILE.contact.email}</strong>. No third-party servers store your private correspondence.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="relative z-10 grid gap-5 sm:grid-cols-2">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-[10px] font-mono uppercase tracking-[0.14em] text-white/75 font-bold mb-2">
            Full Name <span className="text-[#BD903C]">*</span>
          </label>
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Dr. Ayesha Khan / Prof. Tariq"
            className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.06] border text-sm text-white placeholder:text-white/35 focus:outline-none transition-colors ${
              errors.name ? "border-rose-500 focus:border-rose-500" : "border-white/15 focus:border-[#E2C98E]"
            }`}
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-semibold">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
            </p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-[10px] font-mono uppercase tracking-[0.14em] text-white/75 font-bold mb-2">
            Your Email Address <span className="text-[#BD903C]">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="colleague@institution.org"
            className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.06] border text-sm text-white placeholder:text-white/35 focus:outline-none transition-colors ${
              errors.email ? "border-rose-500 focus:border-rose-500" : "border-white/15 focus:border-[#E2C98E]"
            }`}
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-semibold">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
            </p>
          )}
        </div>

        {/* Subject Field */}
        <div className="sm:col-span-2">
          <label htmlFor="subject" className="block text-[10px] font-mono uppercase tracking-[0.14em] text-white/75 font-bold mb-2">
            Subject <span className="text-[#BD903C]">*</span>
          </label>
          <input
            id="subject"
            type="text"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
            placeholder="Clinical Mentorship / Academic Dialogue / Research"
            className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.06] border text-sm text-white placeholder:text-white/35 focus:outline-none transition-colors ${
              errors.subject ? "border-rose-500 focus:border-rose-500" : "border-white/15 focus:border-[#E2C98E]"
            }`}
          />
          {errors.subject && (
            <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-semibold">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.subject}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block text-[10px] font-mono uppercase tracking-[0.14em] text-white/75 font-bold mb-2">
            Message <span className="text-[#BD903C]">*</span>
          </label>
          <textarea
            id="message"
            rows={4}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Write your note, question, or discussion point here..."
            className={`w-full px-4 py-3.5 rounded-xl bg-white/[0.06] border text-sm text-white placeholder:text-white/35 focus:outline-none transition-colors resize-y ${
              errors.message ? "border-rose-500 focus:border-rose-500" : "border-white/15 focus:border-[#E2C98E]"
            }`}
          />
          {errors.message && (
            <p className="mt-1.5 text-xs text-rose-500 flex items-center gap-1 font-semibold">
              <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
            </p>
          )}
        </div>

        {/* Submit / Compose Button */}
        <button
          type="submit"
          className="sm:col-span-2 w-full inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl text-xs font-bold tracking-widest uppercase bg-[#E2C98E] text-[#12141A] hover:bg-white transition-all duration-300 shadow-[0_12px_30px_rgba(226,201,142,0.18)] active:scale-95"
        >
          <Send className="w-4 h-4" />
          <span>LAUNCH IN EMAIL CLIENT</span>
        </button>

        {composerPrepared && (
          <div className="sm:col-span-2 p-5 rounded-xl bg-white/[0.06] border border-[#E2C98E]/40 text-xs sm:text-sm text-white/80 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#BD903C] mt-0.5" />
            <p>
              Your default email client was opened with your message pre-filled to <strong>{PROFILE.contact.email}</strong>. If your mail client did not open automatically, please click the direct email link on the left.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
