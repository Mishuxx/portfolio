"use client";

import React from "react";
import { 
  Users, 
  Terminal, 
  BrainCircuit, 
  Workflow, 
  Sparkles,
  Lightbulb
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TalentArchitecture() {
  const { t } = useLanguage();

  return (
    <section id="recruiting" className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
          <Users className="w-3.5 h-3.5" />
          <span>{t.recruiting.eyebrow}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl">
          {t.recruiting.headline}
        </h2>
        <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed">
          {t.recruiting.body}
        </p>
      </div>

      {/* 3 Core Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        
        {/* Card 1 — Technical screening */}
        <div className="group relative rounded-3xl bg-[#0d121c]/80 border border-white/10 p-6 sm:p-7 backdrop-blur-xl flex flex-col justify-between hover:border-white/20 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="p-2.5 rounded-xl border bg-cyan-500/15 border-cyan-500/35 text-cyan-400">
                <Terminal className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full border bg-cyan-500/10 border-cyan-500/25 text-cyan-400">
                {t.recruiting.card1Badge}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
              {t.recruiting.card1Title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {t.recruiting.card1Body}
            </p>
          </div>
        </div>

        {/* Card 2 — Behavioral interviewing */}
        <div className="group relative rounded-3xl bg-[#0d121c]/80 border border-white/10 p-6 sm:p-7 backdrop-blur-xl flex flex-col justify-between hover:border-white/20 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="p-2.5 rounded-xl border bg-emerald-500/15 border-emerald-500/35 text-emerald-400">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full border bg-emerald-500/10 border-emerald-500/25 text-emerald-400">
                {t.recruiting.card2Badge}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
              {t.recruiting.card2Title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {t.recruiting.card2Body}
            </p>
          </div>
        </div>

        {/* Card 3 — Process & automation */}
        <div className="group relative rounded-3xl bg-[#0d121c]/80 border border-white/10 p-6 sm:p-7 backdrop-blur-xl flex flex-col justify-between hover:border-white/20 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)]">
          <div>
            <div className="flex items-center justify-between gap-2 mb-4">
              <div className="p-2.5 rounded-xl border bg-violet-500/15 border-violet-500/35 text-violet-400">
                <Workflow className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono px-2.5 py-1 rounded-full border bg-violet-500/10 border-violet-500/25 text-violet-400">
                {t.recruiting.card3Badge}
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
              {t.recruiting.card3Title}
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {t.recruiting.card3Body}
            </p>
          </div>
        </div>

      </div>

      {/* Example Case: small highlighted box under cards */}
      <div className="rounded-2xl bg-gradient-to-r from-cyan-950/20 via-zinc-900/60 to-emerald-950/20 border border-white/10 p-5 sm:p-6 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 shrink-0">
          <Lightbulb className="w-5 h-5" />
        </div>
        <div className="space-y-1">
          <div className="text-xs font-mono text-cyan-400 font-semibold tracking-wider uppercase">
            {t.recruiting.exampleCaseTitle}
          </div>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            {t.recruiting.exampleCaseBody}
          </p>
        </div>
      </div>

    </section>
  );
}
