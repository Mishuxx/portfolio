"use client";

import React from "react";
import { ArrowDown, Sparkles, Users, ArrowUpRight, ShieldCheck, Terminal } from "lucide-react";
import HeroWidget from "./HeroWidget";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      
      {/* Top Professional Identity Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(16,185,129,0.1)] hover:border-emerald-500/40 transition-colors">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-xs sm:text-sm font-mono text-zinc-300">
          Psychologist <span className="text-emerald-400">•</span> Senior Tech Recruiter <span className="text-violet-400">•</span> Co-Founder & CPO @ Skillea
        </span>
      </div>

      {/* Main H1 Headline */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white max-w-5xl leading-[1.12]">
        Architecting digital products and high-performance teams through{" "}
        <span className="text-gradient-dual inline-block">
          human behavioral psychology.
        </span>
      </h1>

      {/* Subtitle */}
      <p className="mt-6 text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl leading-relaxed font-normal">
        Translating cognitive insights into gamified product interfaces at{" "}
        <span className="text-white font-medium underline decoration-violet-500/50 underline-offset-4">Skillea</span>{" "}
        and scaling engineering teams for top tech organizations across the Americas.
      </p>

      {/* CTAs */}
      <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4">
        {/* Glowing Primary CTA */}
        <a
          href="#skillea"
          className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-emerald-500 via-teal-600 to-indigo-600 shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_35px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <Sparkles className="w-4 h-4 text-emerald-200" />
          <span>Explore Product & Systems</span>
          <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
        </a>

        {/* Ghost Secondary CTA */}
        <a
          href="#talent"
          className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-zinc-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-300 hover:text-white hover:scale-[1.02] active:scale-[0.98]"
        >
          <Users className="w-4 h-4 text-cyan-400" />
          <span>View Talent Architecture</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Hero Visual Component: Bento Graph Widget */}
      <div className="w-full mt-14 sm:mt-18">
        <HeroWidget />
      </div>

    </section>
  );
}
