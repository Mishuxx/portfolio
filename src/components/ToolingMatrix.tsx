"use client";

import React from "react";
import { 
  Wrench, 
  Users, 
  Terminal, 
  Cpu, 
  MessageSquare,
  Check
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ToolingMatrix() {
  const { t } = useLanguage();

  const columns = [
    {
      title: t.skills.col1Title,
      subtitle: t.skills.col1Subtitle,
      icon: Users,
      color: "#06B6D4", // Cyan
      skills: t.skills.col1Skills,
    },
    {
      title: t.skills.col2Title,
      subtitle: t.skills.col2Subtitle,
      icon: Terminal,
      color: "#10B981", // Emerald
      skills: t.skills.col2Skills,
    },
    {
      title: t.skills.col3Title,
      subtitle: t.skills.col3Subtitle,
      icon: Cpu,
      color: "#8B5CF6", // Violet
      skills: t.skills.col3Skills,
    },
    {
      title: t.skills.col4Title,
      subtitle: t.skills.col4Subtitle,
      icon: MessageSquare,
      color: "#F59E0B", // Amber
      skills: t.skills.col4Skills,
    },
  ];

  return (
    <section id="skills" className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-mono text-xs mb-3">
          <Wrench className="w-3.5 h-3.5" />
          <span>TOOLING & METHODOLOGY</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          {t.skills.headline}
        </h2>
        <p className="mt-3 text-base text-zinc-400 max-w-2xl">
          {t.skills.subheadline}
        </p>
      </div>

      {/* 4 Category Columns - No search box, no level badges, full subtitles without truncation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {columns.map((col, cIdx) => {
          const Icon = col.icon;

          return (
            <div
              key={cIdx}
              className="rounded-3xl bg-[#0d121c]/80 border border-white/10 p-6 backdrop-blur-xl flex flex-col justify-between hover:border-white/20 transition-all duration-300 shadow-lg"
            >
              <div>
                {/* Column Header */}
                <div className="flex items-start gap-3 pb-4 mb-4 border-b border-white/10">
                  <div
                    className="p-2.5 rounded-xl border shrink-0 mt-0.5"
                    style={{
                      backgroundColor: `${col.color}15`,
                      borderColor: `${col.color}35`,
                      color: col.color,
                    }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{col.title}</h3>
                    {/* Full subtitle - no truncate or line-clamp */}
                    <p className="text-xs text-zinc-400 mt-0.5 leading-relaxed">
                      {col.subtitle}
                    </p>
                  </div>
                </div>

                {/* Items List - No level badges, clean readable layout */}
                <ul className="space-y-2.5">
                  {col.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-colors flex items-center gap-2"
                    >
                      <Check className="w-3.5 h-3.5 shrink-0" style={{ color: col.color }} />
                      <span className="text-xs font-medium text-zinc-200 leading-snug">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Count Pill */}
              <div className="mt-6 pt-3 border-t border-white/5 text-[11px] font-mono text-zinc-400 flex items-center justify-between">
                <span>{col.skills.length} competencies</span>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: col.color }} />
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
