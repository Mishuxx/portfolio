"use client";

import React from "react";
import Image from "next/image";
import { Brain, GraduationCap, Quote } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function PsychologyFoundation() {
  const { t } = useLanguage();

  return (
    <section id="psychology" className="relative pt-16 pb-6 md:pt-20 md:pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-start mb-10 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-3">
          <Brain className="w-3.5 h-3.5" />
          <span>{t.psychology.eyebrow}</span>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl">
              {t.psychology.headline}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed font-normal">
              {t.psychology.body}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300">
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            <span>{t.psychology.badge}</span>
          </div>
        </div>
      </div>

      {/* Quote Block (With Outdoors Photo) */}
      <div className="relative z-10 rounded-3xl bg-gradient-to-r from-emerald-950/20 via-zinc-900/60 to-violet-950/20 border border-white/10 p-6 sm:p-8 backdrop-blur-xl flex flex-col md:flex-row items-center gap-6 shadow-xl">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border border-white/20 shadow-md bg-zinc-800">
          <Image
            src="/images/rick-outdoors.jpg"
            alt="Ricardo (Rick) Pulgar Mendoza"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-1.5 text-center md:text-left">
          <p className="text-base sm:text-lg font-medium text-white leading-relaxed">
            {t.psychology.quote}
          </p>
          <p className="text-xs font-mono text-zinc-400">
            {t.psychology.quoteAuthor}
          </p>
        </div>
      </div>

    </section>
  );
}
