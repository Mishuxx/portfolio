"use client";

import React from "react";
import Image from "next/image";
import { Heart, Gamepad2, Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function BeyondWork() {
  const { t } = useLanguage();

  return (
    <section id="beyond-work" className="relative py-16 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background Subtle Ambient */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="rounded-3xl bg-[#0d121c]/80 border border-white/10 p-6 sm:p-10 backdrop-blur-xl relative overflow-hidden shadow-2xl flex flex-col md:flex-row items-center gap-8">
        
        {/* Cat Photo Display (Workspace / Cat) */}
        <div className="relative w-40 h-40 sm:w-52 sm:h-52 rounded-2xl overflow-hidden shrink-0 border border-white/15 shadow-xl bg-zinc-900 group">
          <Image
            src="/images/rick-workspace.jpg"
            alt="Ricardo Pulgar with cat"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-mono text-zinc-300 text-center">
            {t.beyondWork.photoCaption}
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-4 text-center md:text-left flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
            <Gamepad2 className="w-3.5 h-3.5" />
            <span>{t.beyondWork.eyebrow}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            {t.beyondWork.headline}
          </h2>

          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-2xl font-normal">
            {t.beyondWork.body}
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2 text-xs font-mono text-zinc-400">
            <span className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/5">
              🐱 Cats & Horses
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/5">
              🎮 RPGs & Skill Trees
            </span>
            <span className="px-3 py-1.5 rounded-xl bg-white/[0.03] border border-white/5">
              📚 Learning & Psychology
            </span>
          </div>
        </div>

      </div>

    </section>
  );
}
