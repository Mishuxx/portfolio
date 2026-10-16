"use client";

import React, { useState } from "react";
import { 
  GitBranch, 
  Sparkles, 
  Cpu, 
  Brain, 
  CheckCircle2, 
  Lock, 
  Play, 
  Zap, 
  ChevronRight,
  ExternalLink,
  Target
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function SkilleaBento() {
  const { t } = useLanguage();
  const [selectedNodeId, setSelectedNodeId] = useState<string>("node-3");

  const nodes = t.skillea.nodes;
  const activeNode = nodes.find((n) => n.id === selectedNodeId) || nodes[2];

  return (
    <section id="skillea" className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-mono text-xs mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{t.skillea.eyebrow}</span>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              {t.skillea.headline}
            </h2>
            <div className="mt-3 space-y-2 max-w-3xl text-base sm:text-lg text-zinc-300 leading-relaxed">
              <p>{t.skillea.body1}</p>
              <p className="text-sm sm:text-base text-zinc-400">{t.skillea.body2}</p>
            </div>

            {/* What I Bring List */}
            <div className="mt-5 p-4 rounded-2xl bg-white/[0.02] border border-white/5 max-w-2xl">
              <span className="text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider block mb-2">
                {t.skillea.whatIBringTitle}:
              </span>
              <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>{t.skillea.whatIBringItem1}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                  <span>{t.skillea.whatIBringItem2}</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
            <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300">
              {t.skillea.statusPrototype}
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300">
              {t.skillea.statusRole}
            </span>
            <a
              href={t.skillea.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 text-xs font-semibold text-white transition-all flex items-center gap-1.5 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              <span>{t.skillea.tryDemoBtn}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Card A (Large 8 Cols): Interactive Progress Tree UI Preview */}
        <div className="lg:col-span-8 rounded-3xl bg-[#0d121c]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top HUD info */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {t.skillea.headline}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Visualizing non-linear progress across developer competencies.
              </p>
            </div>

            {/* Illustrative example badge */}
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/25 text-[11px] font-mono font-medium text-amber-300">
                {t.skillea.illustrativeExampleLabel}
              </span>
              <div className="hidden sm:flex items-center gap-2 bg-white/[0.04] border border-white/10 px-3 py-1 rounded-xl font-mono text-xs">
                <span className="text-emerald-400 font-bold">{t.skillea.mockLearnerTier}</span>
              </div>
            </div>
          </div>

          {/* Interactive Tree Nodes Display */}
          <div className="relative z-10 my-6 p-4 sm:p-6 rounded-2xl bg-[#090c14]/90 border border-white/5">
            <div className="flex items-center justify-between mb-4 text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
              <span>Interactive Branch Demo</span>
              <span>Click a node to inspect</span>
            </div>

            <div className="space-y-3">
              {nodes.map((node) => {
                const isSelected = selectedNodeId === node.id;
                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNodeId(node.id)}
                    className={`group cursor-pointer rounded-xl p-3.5 transition-all duration-200 border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                      isSelected
                        ? "bg-violet-950/30 border-violet-500/60 shadow-[0_0_20px_rgba(139,92,246,0.15)]"
                        : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono text-xs font-bold border transition-colors ${
                        node.status === "Mastered" || node.status === "Completado"
                          ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-400"
                          : node.status === "In Progress" || node.status === "En Progreso"
                          ? "bg-violet-500/20 border-violet-500/50 text-violet-300 animate-pulse"
                          : node.status === "Unlocked" || node.status === "Desbloqueado"
                          ? "bg-cyan-500/15 border-cyan-500/40 text-cyan-400"
                          : "bg-zinc-800/40 border-zinc-700 text-zinc-500"
                      }`}>
                        {(node.status === "Mastered" || node.status === "Completado") && <CheckCircle2 className="w-4 h-4" />}
                        {(node.status === "In Progress" || node.status === "En Progreso") && <Play className="w-3.5 h-3.5 fill-violet-400" />}
                        {(node.status === "Unlocked" || node.status === "Desbloqueado") && <Zap className="w-3.5 h-3.5" />}
                      </div>

                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-semibold transition-colors ${isSelected ? "text-white" : "text-zinc-200 group-hover:text-white"}`}>
                            {node.name}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400">
                            {node.branch}
                          </span>
                        </div>
                        <div className="text-xs text-zinc-400 line-clamp-1 mt-0.5">
                          {node.psychologicalHook}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 sm:justify-end">
                      <span className="text-xs font-mono font-medium text-emerald-400">
                        {node.xp}
                      </span>
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-md border bg-white/5 border-white/10 text-zinc-300">
                        {node.status}
                      </span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? "text-violet-400 translate-x-1" : "text-zinc-600 group-hover:text-zinc-400"}`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Node Details Box (Renamed from Node Telemetry Inspector) */}
          <div className="relative z-10 rounded-2xl bg-white/[0.03] border border-white/10 p-5">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
              <span className="text-emerald-400 font-semibold">// {t.skillea.nodeDetailsTitle}</span>
              <span>Target: {activeNode.id}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-xs text-zinc-400 block mb-1">Learning Motivation Principle</span>
                <p className="text-sm text-zinc-200 font-medium bg-black/40 p-2.5 rounded-lg border border-white/5">
                  🧠 {activeNode.psychologicalHook}
                </p>
              </div>
              <div>
                <span className="text-xs text-zinc-400 block mb-1">Vocational Relevance</span>
                <p className="text-sm text-zinc-200 font-medium bg-black/40 p-2.5 rounded-lg border border-white/5">
                  📈 {activeNode.vocationalImpact}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Cards B & C */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Card B: Strategy */}
          <div className="rounded-3xl bg-[#0d121c]/80 border border-white/10 p-6 backdrop-blur-xl relative overflow-hidden flex-1 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">{t.skillea.strategyCardTitle}</h4>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
              {t.skillea.strategyCardBody}
            </p>

            <div className="space-y-2.5">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                <span className="font-mono text-cyan-400 block font-semibold mb-0.5">
                  {t.skillea.strategyItem1Title}
                </span>
                <span className="text-zinc-400">{t.skillea.strategyItem1Desc}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                <span className="font-mono text-cyan-400 block font-semibold mb-0.5">
                  {t.skillea.strategyItem2Title}
                </span>
                <span className="text-zinc-400">{t.skillea.strategyItem2Desc}</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                <span className="font-mono text-cyan-400 block font-semibold mb-0.5">
                  {t.skillea.strategyItem3Title}
                </span>
                <span className="text-zinc-400">{t.skillea.strategyItem3Desc}</span>
              </div>
            </div>
          </div>

          {/* Card C: UX Narrative */}
          <div className="rounded-3xl bg-[#0d121c]/80 border border-white/10 p-6 backdrop-blur-xl relative overflow-hidden flex-1 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400">
                <Brain className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">{t.skillea.uxCardTitle}</h4>
            </div>

            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
              {t.skillea.uxCardBody}
            </p>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-zinc-200">{t.skillea.uxItem1Title}:</strong>
                  <span className="text-zinc-400 block">{t.skillea.uxItem1Desc}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-zinc-200">{t.skillea.uxItem2Title}:</strong>
                  <span className="text-zinc-400 block">{t.skillea.uxItem2Desc}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-zinc-200">{t.skillea.uxItem3Title}:</strong>
                  <span className="text-zinc-400 block">{t.skillea.uxItem3Desc}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
