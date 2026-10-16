"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowDown, Users, Sparkles, FileDown, ExternalLink } from "lucide-react";
import HeroWidget from "./HeroWidget";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  // Requirement 6: Horse photo ("outdoors") is the default, cat photo ("workspace") is secondary toggle
  const [activePhoto, setActivePhoto] = useState<"outdoors" | "workspace">("outdoors");
  const { t } = useLanguage();

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      
      {/* Photo Showcase & Persona Badge */}
      <div className="relative mb-8 flex flex-col items-center">
        <div className="relative group p-1.5 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-500 to-purple-600 shadow-[0_0_35px_rgba(16,185,129,0.25)]">
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-[#0c1018] bg-zinc-900">
            <Image
              src={activePhoto === "outdoors" ? "/images/rick-outdoors.jpg" : "/images/rick-workspace.jpg"}
              alt="Ricardo (Rick) Pulgar Mendoza"
              fill
              className="object-cover object-center transition-all duration-500 group-hover:scale-105"
              priority
            />
          </div>

          {/* Quick Photo Switcher: Horse default, Cat secondary */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-[#0c1018]/95 border border-white/15 px-2.5 py-1 rounded-full shadow-lg text-[11px] font-mono whitespace-nowrap">
            <button
              onClick={() => setActivePhoto("outdoors")}
              className={`px-2 py-0.5 rounded-full transition-all ${
                activePhoto === "outdoors"
                  ? "bg-emerald-500/25 text-emerald-300 font-bold border border-emerald-500/40"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {t.hero.photoToggleHorse}
            </button>
            <span className="text-zinc-600">|</span>
            <button
              onClick={() => setActivePhoto("workspace")}
              className={`px-2 py-0.5 rounded-full transition-all ${
                activePhoto === "workspace"
                  ? "bg-violet-500/25 text-violet-300 font-bold border border-violet-500/40"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {t.hero.photoToggleCat}
            </button>
          </div>
        </div>

        {/* Small Caption */}
        <p className="mt-5 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
          <span>{t.hero.photoCaption}</span>
        </p>
      </div>

      {/* Tagline Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(16,185,129,0.08)]">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs sm:text-sm font-mono text-zinc-300">
          {t.hero.tagline}
        </span>
      </div>

      {/* Main H1 Headline */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.15]">
        {t.hero.headlineStart}
        <span className="text-gradient-dual inline-block">
          {t.hero.headlineGradient}
        </span>
      </h1>

      {/* Subheadline */}
      <p className="mt-5 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-normal">
        {t.hero.subheadline}
      </p>

      {/* CTAs: "Try the Skillea demo" · "Recruiting work" · "Download CV" */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
        {/* Try the Skillea demo */}
        <a
          href={t.hero.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-emerald-500 via-teal-600 to-indigo-600 shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Sparkles className="w-4 h-4 text-emerald-200" />
          <span>{t.hero.tryDemoBtn}</span>
          <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform opacity-80" />
        </a>

        {/* Recruiting work */}
        <a
          href="#recruiting"
          className="group inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl font-semibold text-sm text-zinc-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-300 hover:text-white hover:scale-[1.02] active:scale-[0.98]"
        >
          <Users className="w-4 h-4 text-cyan-400" />
          <span>{t.hero.recruitingBtn}</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </a>

        {/* Download CV */}
        <a
          href="/Ricardo_Pulgar_CV.pdf"
          download="Ricardo_Pulgar_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl font-semibold text-sm text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-400/60 shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <FileDown className="w-4 h-4 text-emerald-400 group-hover:translate-y-0.5 transition-transform" />
          <span>{t.hero.downloadCvBtn}</span>
        </a>
      </div>

      {/* Highlights strip (replaces old metrics cards & old strips) */}
      <div className="w-full max-w-4xl mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
        <div className="p-4 rounded-2xl bg-[#0d121c]/80 border border-white/10 backdrop-blur-md">
          <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">
            {t.highlights.item1Value}
          </div>
          <div className="text-xs text-zinc-300 font-medium mt-0.5">
            {t.highlights.item1Label}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#0d121c]/80 border border-white/10 backdrop-blur-md">
          <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">
            {t.highlights.item2Value}
          </div>
          <div className="text-xs text-zinc-300 font-medium mt-0.5">
            {t.highlights.item2Label}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#0d121c]/80 border border-white/10 backdrop-blur-md">
          <div className="text-xl sm:text-2xl font-bold font-mono text-violet-400">
            {t.highlights.item3Value}
          </div>
          <div className="text-xs text-zinc-300 font-medium mt-0.5">
            {t.highlights.item3Label}
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#0d121c]/80 border border-white/10 backdrop-blur-md">
          <div className="text-xl sm:text-2xl font-bold font-mono text-amber-400">
            {t.highlights.item4Value}
          </div>
          <div className="text-xs text-zinc-300 font-medium mt-0.5">
            {t.highlights.item4Label}
          </div>
        </div>
      </div>

      {/* Hero Visual Component: Bento Graph Widget */}
      <div className="w-full mt-10">
        <HeroWidget />
      </div>

    </section>
  );
}
