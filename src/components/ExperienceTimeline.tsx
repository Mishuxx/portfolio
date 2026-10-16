"use client";

import React, { useState } from "react";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Building2 
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type FilterType = "all" | "product" | "recruitment";

export default function ExperienceTimeline() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredRoles = t.experience.roles.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  return (
    <section id="experience" className="relative pt-6 pb-16 md:pt-10 md:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            {t.experience.headline}
          </h2>
          <p className="mt-3 text-base text-zinc-400 max-w-2xl">
            {t.experience.subheadline}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white/[0.04] border border-white/10 shrink-0 self-start md:self-end">
          <button
            onClick={() => setFilter("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              filter === "all"
                ? "bg-white/15 text-white font-semibold shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            {t.experience.filterAll} ({t.experience.roles.length})
          </button>
          <button
            onClick={() => setFilter("product")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              filter === "product"
                ? "bg-violet-500/30 text-violet-300 font-semibold border border-violet-500/40"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            {t.experience.filterProduct}
          </button>
          <button
            onClick={() => setFilter("recruitment")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              filter === "recruitment"
                ? "bg-cyan-500/30 text-cyan-300 font-semibold border border-cyan-500/40"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            {t.experience.filterRecruiting}
          </button>
        </div>
      </div>

      {/* Timeline Items List */}
      <div className="space-y-6">
        {filteredRoles.map((item) => (
          <div
            key={item.id}
            className={`group rounded-3xl p-6 sm:p-8 backdrop-blur-xl border transition-all duration-300 relative overflow-hidden ${
              item.featured
                ? "bg-[#0d131f]/90 border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.5)] hover:border-white/25"
                : "bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.03]"
            }`}
          >
            {/* Top row: Role, Company & Badges */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.role}
                  </h3>
                  <span
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-full border"
                    style={{
                      backgroundColor: `${item.badgeColor}15`,
                      borderColor: `${item.badgeColor}35`,
                      color: item.badgeColor
                    }}
                  >
                    {item.badge}
                  </span>
                </div>
                
                <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-zinc-300">
                  <span className="font-semibold text-white flex items-center gap-1.5">
                    <Building2 className="w-4 h-4 text-zinc-400" />
                    {item.company}
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="flex items-center gap-1 text-zinc-400">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.period}
                  </span>
                  <span className="text-zinc-600">•</span>
                  <span className="flex items-center gap-1 text-zinc-400">
                    <MapPin className="w-3.5 h-3.5" />
                    {item.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="mt-4 space-y-2">
              {item.achievements.map((ach, aIdx) => (
                <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2
                    className="w-4 h-4 shrink-0 mt-0.5"
                    style={{ color: item.badgeColor }}
                  />
                  <span>{ach}</span>
                </div>
              ))}
            </div>

            {/* Competencies Tags */}
            <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-mono text-zinc-400 mr-2">{t.experience.competenciesLabel}</span>
              {item.skills.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 text-[11px] font-mono text-zinc-300 hover:border-white/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
