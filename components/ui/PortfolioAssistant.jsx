"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Bot, LoaderCircle, Send, ShieldCheck, Sparkles, X } from "lucide-react";

const initialMessage = {
  role: "assistant",
  text: "Hello - I am Ebbad's portfolio guide. I can answer questions about his education, clinical experience, surgical interests, public-health work, and contact details.",
  sources: [],
};

const openingSuggestions = [
  "What is Ebbad studying?",
  "Tell me about the surgery internship",
  "What are his career interests?",
];

export default function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const [launcherPosition, setLauncherPosition] = useState(null);
  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState(openingSuggestions);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const hasEngagedRef = useRef(false);
  const dragRef = useRef(null);
  const didDragRef = useRef(false);

  const markEngaged = () => {
    hasEngagedRef.current = true;
    setShowPrompt(false);
  };

  useEffect(() => {
    const promptTimer = window.setTimeout(() => {
      if (!hasEngagedRef.current) setShowPrompt(true);
    }, 5000);

    return () => window.clearTimeout(promptTimer);
  }, []);

  useEffect(() => {
    if (isOpen) {
      window.setTimeout(() => inputRef.current?.focus(), 160);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isLoading]);

  const askQuestion = async (question) => {
    const message = question.trim();
    if (!message || isLoading) return;

    setMessages((current) => [...current, { role: "user", text: message }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/portfolio-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to answer right now.");

      setMessages((current) => [...current, {
        role: "assistant",
        text: result.answer,
        sources: result.sources || [],
      }]);
      setSuggestions(result.suggestions || openingSuggestions);
    } catch (error) {
      setMessages((current) => [...current, {
        role: "assistant",
        text: error.message || "Unable to answer right now. Please try again.",
        sources: [],
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleAssistant = () => {
    markEngaged();
    setIsOpen((open) => !open);
  };

  const handleLauncherPointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    markEngaged();
    const launcherBounds = event.currentTarget.getBoundingClientRect();
    dragRef.current = {
      pointerId: event.pointerId,
      startPointerX: event.clientX,
      startPointerY: event.clientY,
      startX: launcherBounds.left,
      startY: launcherBounds.top,
      width: launcherBounds.width,
      height: launcherBounds.height,
    };
    didDragRef.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handleLauncherPointerMove = (event) => {
    const drag = dragRef.current;
    if (!drag || drag.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - drag.startPointerX;
    const deltaY = event.clientY - drag.startPointerY;
    if (Math.hypot(deltaX, deltaY) > 6) didDragRef.current = true;
    if (!didDragRef.current) return;

    const inset = 12;
    setLauncherPosition({
      right: window.innerWidth - Math.min(Math.max(drag.startX + deltaX, inset), window.innerWidth - drag.width - inset) - drag.width,
      bottom: window.innerHeight - Math.min(Math.max(drag.startY + deltaY, inset), window.innerHeight - drag.height - inset) - drag.height,
    });
  };

  const handleLauncherPointerEnd = (event) => {
    if (dragRef.current?.pointerId !== event.pointerId) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
    dragRef.current = null;
  };

  const handleLauncherClick = () => {
    if (didDragRef.current) {
      didDragRef.current = false;
      return;
    }
    toggleAssistant();
  };

  const openFromPrompt = () => {
    markEngaged();
    setIsOpen(true);
  };

  return (
    <aside
      className="portfolio-assistant"
      aria-label="Portfolio assistant"
      style={launcherPosition ? { right: `${launcherPosition.right}px`, bottom: `${launcherPosition.bottom}px`, left: "auto", top: "auto" } : undefined}
    >
      {isOpen && (
        <div className="portfolio-assistant__panel" role="dialog" aria-modal="false" aria-labelledby="portfolio-guide-title">
          <header className="portfolio-assistant__header">
            <div className="portfolio-assistant__header-icon">
              <img src="/brand/ebbad-nazir-mark-transparent.png" alt="Ebbad Nazir monogram" />
            </div>
            <div>
              <p className="portfolio-assistant__eyebrow">SITE-GROUNDED GUIDE</p>
              <h2 id="portfolio-guide-title">Portfolio assistant</h2>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} className="portfolio-assistant__close" aria-label="Close portfolio assistant"><X size={17} /></button>
          </header>

          <div className="portfolio-assistant__notice"><ShieldCheck size={13} aria-hidden="true" /> Answers use verified information from this website only.</div>

          <div className="portfolio-assistant__messages" aria-live="polite">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`portfolio-assistant__message portfolio-assistant__message--${message.role}`}>
                <p>{message.text}</p>
                {message.sources?.length > 0 && (
                  <div className="portfolio-assistant__sources">
                    <span>Sources</span>
                    {message.sources.map((source) => <Link key={source.id} href={source.href}>{source.title}</Link>)}
                  </div>
                )}
              </div>
            ))}
            {isLoading && <div className="portfolio-assistant__typing"><LoaderCircle size={15} className="animate-spin" /> Retrieving portfolio information...</div>}
            <div ref={messagesEndRef} />
          </div>

          <div className="portfolio-assistant__suggestions">
            {suggestions.slice(0, 2).map((suggestion) => (
              <button key={suggestion} type="button" onClick={() => askQuestion(suggestion)} disabled={isLoading}>{suggestion}</button>
            ))}
          </div>

          <form className="portfolio-assistant__form" onSubmit={(event) => { event.preventDefault(); askQuestion(input); }}>
            <label className="sr-only" htmlFor="portfolio-question">Ask about this portfolio</label>
            <input ref={inputRef} id="portfolio-question" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about Ebbad's portfolio..." maxLength={500} disabled={isLoading} />
            <button type="submit" disabled={!input.trim() || isLoading} aria-label="Send question"><Send size={15} /></button>
          </form>
        </div>
      )}

      {!isOpen && showPrompt && (
        <div className="portfolio-assistant__prompt">
          <button type="button" className="portfolio-assistant__prompt-copy" onClick={openFromPrompt}>
            <span className="portfolio-assistant__prompt-icon"><Sparkles size={13} aria-hidden="true" /></span>
            <span><strong>Need a hand?</strong> Ask me about Ebbad&apos;s journey.</span>
          </button>
          <button type="button" className="portfolio-assistant__prompt-close" onClick={markEngaged} aria-label="Dismiss assistant prompt"><X size={13} /></button>
        </div>
      )}

      <button
        type="button"
        onClick={handleLauncherClick}
        onPointerDown={handleLauncherPointerDown}
        onPointerMove={handleLauncherPointerMove}
        onPointerUp={handleLauncherPointerEnd}
        onPointerCancel={handleLauncherPointerEnd}
        className="portfolio-assistant__launcher"
        aria-expanded={isOpen}
        aria-controls="portfolio-guide-title"
        aria-label={isOpen ? "Close portfolio assistant" : "Open portfolio assistant"}
      >
        {isOpen ? <X size={20} /> : <Bot size={24} strokeWidth={1.8} />}
        <span className="portfolio-assistant__launcher-status" aria-hidden="true" />
        <span className="sr-only">Ask the portfolio</span>
      </button>
    </aside>
  );
}
