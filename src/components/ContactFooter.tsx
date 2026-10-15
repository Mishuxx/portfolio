"use client";

import React, { useState, useEffect } from "react";
import { 
  Copy, 
  Check, 
  Mail, 
  MapPin, 
  Clock, 
  ArrowUpRight, 
  Sparkles, 
  Globe, 
  ShieldCheck,
  Send
} from "lucide-react";
import confetti from "canvas-confetti";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
    </svg>
  );
}

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState<string>("");
  const email = "andrick712@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/rickpm";

  // Live Caracas Timezone (GMT-4) Clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat("en-US", {
          timeZone: "America/Caracas",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        });
        setTime(formatter.format(now));
      } catch (e) {
        setTime("02:40:00 PM GMT-4");
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    
    // Trigger celebratory confetti burst
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.85 },
        colors: ["#10B981", "#8B5CF6", "#06B6D4"],
      });
    } catch (e) {
      // fallback if canvas-confetti is not loaded
    }

    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10 mt-20">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-b from-emerald-500/10 via-violet-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Main CTA Container */}
      <div className="rounded-3xl bg-gradient-to-b from-[#121826]/90 to-[#0a0d14]/90 border border-white/10 p-8 sm:p-12 md:p-16 backdrop-blur-2xl relative overflow-hidden text-center mb-16 shadow-2xl">
        
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 font-mono text-xs mb-6">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for strategic advisory & select roles</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Let&apos;s build products and teams that <span className="text-gradient-dual">scale together.</span>
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
          Whether you need advisory on gamified product architecture at Skillea, scaling high-tenure engineering teams, or consulting on human-centered cognitive systems.
        </p>

        {/* Interactive Email Module */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <div className="w-full flex items-center justify-between px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white font-mono text-sm shadow-inner group hover:border-white/20 transition-all">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="truncate">{email}</span>
            </div>
            
            <button
              onClick={handleCopyEmail}
              className="ml-2 px-3 py-1 rounded-xl bg-white/10 hover:bg-emerald-500 hover:text-black transition-all flex items-center gap-1.5 text-xs font-semibold text-zinc-200 shrink-0"
              title="Copy to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-black" />
                  <span className="text-black">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>

          <a
            href={`mailto:${email}?subject=Intro%20%2F%20Collaboration%20with%20Ricardo%20Pulgar`}
            className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 font-semibold text-xs sm:text-sm text-white flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] shrink-0"
          >
            <Send className="w-4 h-4" />
            <span>Send Email</span>
          </a>
        </div>

        {/* Secondary Links & Socials */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-zinc-400">
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 hover:border-white/20 hover:text-white transition-colors"
          >
            <LinkedInIcon className="w-4 h-4 text-[#0A66C2]" />
            <span>linkedin.com/in/rickpm</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-zinc-300">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>Caracas, Venezuela / Remote Global</span>
          </div>

          {/* Timezone Clock */}
          <div className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-cyan-300">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>Caracas (GMT-4): {time || "Loading..."}</span>
          </div>
        </div>

      </div>

      {/* Bottom Copyright & Design Credit */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500 pt-6 border-t border-white/5">
        <div>
          © 2026 Ricardo (Rick) Pulgar Mendoza. All rights reserved.
        </div>
        <div className="text-center sm:text-right">
          Architected at the intersection of <span className="text-zinc-400">Psychology</span> & <span className="text-zinc-400">Digital Systems</span>.
        </div>
      </div>

    </footer>
  );
}
