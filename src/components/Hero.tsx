"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowDown, Users, Sparkles, Heart, Coffee, ShieldCheck, FileDown } from "lucide-react";
import HeroWidget from "./HeroWidget";

export default function Hero() {
  const [activePhoto, setActivePhoto] = useState<"workspace" | "outdoors">("workspace");

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      
      {/* Photo Showcase & Persona Badge */}
      <div className="relative mb-8 flex flex-col items-center">
        {/* Profile Pictures Container with Subtle Switcher */}
        <div className="relative group p-1.5 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-500 to-purple-600 shadow-[0_0_35px_rgba(16,185,129,0.25)]">
          <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-[#0c1018] bg-zinc-900">
            <Image
              src={activePhoto === "workspace" ? "/images/rick-workspace.jpg" : "/images/rick-outdoors.jpg"}
              alt="Ricardo (Rick) Pulgar Mendoza"
              fill
              className="object-cover object-center transition-all duration-500 group-hover:scale-105"
              priority
            />
          </div>

          {/* Quick Photo Switcher Pill */}
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-[#0c1018]/95 border border-white/15 px-2.5 py-1 rounded-full shadow-lg text-[11px] font-mono whitespace-nowrap">
            <button
              onClick={() => setActivePhoto("workspace")}
              className={`px-2 py-0.5 rounded-full transition-all ${
                activePhoto === "workspace"
                  ? "bg-emerald-500/25 text-emerald-300 font-bold border border-emerald-500/40"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              🐱 Workspace
            </button>
            <span className="text-zinc-600">|</span>
            <button
              onClick={() => setActivePhoto("outdoors")}
              className={`px-2 py-0.5 rounded-full transition-all ${
                activePhoto === "outdoors"
                  ? "bg-violet-500/25 text-violet-300 font-bold border border-violet-500/40"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              🐴 Outdoors
            </button>
          </div>
        </div>

        {/* Small Caption */}
        <p className="mt-5 text-xs font-mono text-zinc-400 flex items-center gap-1.5">
          <span>Ricardo (Rick) Pulgar Mendoza</span>
          <span className="text-emerald-400">•</span>
          <span className="text-zinc-300">Human Systems & Tech Talent</span>
        </p>
      </div>

      {/* Professional Identity Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(16,185,129,0.08)]">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs sm:text-sm font-mono text-zinc-300">
          Clinical Psychologist <span className="text-emerald-400">•</span> Senior Tech Recruiter (5+ Yrs) <span className="text-violet-400">•</span> Co-Founder @ Skillea
        </span>
      </div>

      {/* Main H1 Headline - Honest & Human */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white max-w-4xl leading-[1.15]">
        Understanding human behavior to build better teams and{" "}
        <span className="text-gradient-dual inline-block">
          thoughtful digital products.
        </span>
      </h1>

      {/* Subtitle - Honest positioning */}
      <p className="mt-5 text-base sm:text-lg text-zinc-300 max-w-2xl leading-relaxed font-normal">
        5+ years recruiting and evaluating software engineering talent for high-growth tech companies across the Americas. Grounded in clinical psychology, now exploring product design and hands-on coding as Co-Founder at{" "}
        <span className="text-white font-medium underline decoration-violet-500/50 underline-offset-4">Skillea</span>.
      </p>

      {/* CTAs */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#skillea"
          className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-emerald-500 via-teal-600 to-indigo-600 shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Sparkles className="w-4 h-4 text-emerald-200" />
          <span>Explore Skillea & Journey</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        </a>

        <a
          href="#talent"
          className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-zinc-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-300 hover:text-white hover:scale-[1.02] active:scale-[0.98]"
        >
          <Users className="w-4 h-4 text-cyan-400" />
          <span>Talent Architecture</span>
        </a>

        <a
          href="/Ricardo_Pulgar_CV.pdf"
          download="Ricardo_Pulgar_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 hover:border-emerald-400/60 shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <FileDown className="w-4 h-4 text-emerald-400 group-hover:translate-y-0.5 transition-transform" />
          <span>Download CV (PDF)</span>
        </a>
      </div>

      {/* Hero Visual Component: Bento Graph Widget */}
      <div className="w-full mt-14">
        <HeroWidget />
      </div>

    </section>
  );
}
