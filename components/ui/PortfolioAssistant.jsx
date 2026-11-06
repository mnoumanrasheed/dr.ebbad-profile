"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { LoaderCircle, MessageCircle, Send, ShieldCheck, Sparkles, X } from "lucide-react";

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
  const [messages, setMessages] = useState([initialMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState(openingSuggestions);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

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

  return (
    <aside className="portfolio-assistant" aria-label="Portfolio assistant">
      {isOpen && (
        <div className="portfolio-assistant__panel" role="dialog" aria-modal="false" aria-labelledby="portfolio-guide-title">
          <header className="portfolio-assistant__header">
            <div className="portfolio-assistant__header-icon"><Sparkles size={16} aria-hidden="true" /></div>
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

      <button type="button" onClick={() => setIsOpen((open) => !open)} className="portfolio-assistant__launcher" aria-expanded={isOpen} aria-controls="portfolio-guide-title" aria-label={isOpen ? "Close portfolio assistant" : "Open portfolio assistant"}>
        {isOpen ? <X size={20} /> : <MessageCircle size={21} />}
        <span>Ask the portfolio</span>
      </button>
    </aside>
  );
}
