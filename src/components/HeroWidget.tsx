"use client";

import React, { useState } from "react";
import { 
  GitBranch, 
  Brain, 
  Users, 
  Code, 
  Activity
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface NodeItem {
  id: "recruiting" | "psychology" | "skillea" | "productCode";
  color: string;
  icon: React.ElementType;
  x: number;
  y: number;
}

const NODE_POSITIONS: NodeItem[] = [
  {
    id: "psychology",
    color: "#10B981", // Emerald
    icon: Brain,
    x: 50,
    y: 78,
  },
  {
    id: "recruiting",
    color: "#06B6D4", // Cyan
    icon: Users,
    x: 24,
    y: 42,
  },
  {
    id: "skillea",
    color: "#8B5CF6", // Violet
    icon: GitBranch,
    x: 76,
    y: 42,
  },
  {
    id: "productCode",
    color: "#F59E0B", // Amber
    icon: Code,
    x: 50,
    y: 16,
  },
];

export default function HeroWidget() {
  const { t } = useLanguage();
  const [activeNodeId, setActiveNodeId] = useState<"recruiting" | "psychology" | "skillea" | "productCode">("skillea");

  const activePos = NODE_POSITIONS.find((n) => n.id === activeNodeId) || NODE_POSITIONS[2];
  const activeDetail = t.nodeGraph.nodes[activeNodeId];

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-white/0 shadow-[0_20px_70px_rgba(0,0,0,0.8)]">
      <div className="relative overflow-hidden rounded-[22px] bg-[#0c1018]/90 border border-white/10 p-5 sm:p-7 backdrop-blur-2xl">
        
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.nodeGraph.title}</span>
            </div>
            <span className="text-xs text-zinc-400 font-mono hidden sm:inline">
              {t.nodeGraph.subtitle}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>{t.nodeGraph.status}</span>
            </span>
          </div>
        </div>

        {/* Interactive Graph Canvas Area */}
        <div className="relative w-full h-[320px] sm:h-[350px] my-4 rounded-2xl bg-[#080b12]/80 border border-white/5 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-grid-pattern opacity-30" />

          {/* SVG Connection Lines between nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="lineGrad1" x1="50%" y1="78%" x2="24%" y2="42%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="lineGrad2" x1="50%" y1="78%" x2="76%" y2="42%">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id="lineGrad3" x1="24%" y1="42%" x2="50%" y2="16%">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="lineGrad4" x1="76%" y1="42%" x2="50%" y2="16%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.7" />
              </linearGradient>
            </defs>

            <line x1="50%" y1="78%" x2="24%" y2="42%" stroke="url(#lineGrad1)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
            <line x1="50%" y1="78%" x2="76%" y2="42%" stroke="url(#lineGrad2)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
            <line x1="24%" y1="42%" x2="50%" y2="16%" stroke="url(#lineGrad3)" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="76%" y1="42%" x2="50%" y2="16%" stroke="url(#lineGrad4)" strokeWidth="2" strokeDasharray="4 4" />
          </svg>

          {/* Interactive Nodes */}
          {NODE_POSITIONS.map((pos) => {
            const isSelected = activeNodeId === pos.id;
            const Icon = pos.icon;
            const nodeData = t.nodeGraph.nodes[pos.id];

            return (
              <button
                key={pos.id}
                onClick={() => setActiveNodeId(pos.id)}
                className={`group absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center p-2 rounded-2xl transition-all duration-300 focus:outline-none z-10 ${
                  isSelected ? "scale-110 z-20" : "scale-100 hover:scale-105 opacity-85 hover:opacity-100"
                }`}
                style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
              >
                <div
                  className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl transition-all duration-300 ${
                    isSelected
                      ? "shadow-[0_0_30px_rgba(255,255,255,0.3)] border-2"
                      : "border border-white/20 bg-zinc-900/90 hover:border-white/40"
                  }`}
                  style={{
                    backgroundColor: isSelected ? `${pos.color}25` : "#111622",
                    borderColor: isSelected ? pos.color : "rgba(255,255,255,0.15)",
                    boxShadow: isSelected ? `0 0 25px ${pos.color}66` : undefined,
                  }}
                >
                  <Icon
                    className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110"
                    style={{ color: isSelected ? pos.color : "#d1d5db" }}
                  />
                  <span
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-[#0c1018]"
                    style={{ backgroundColor: pos.color }}
                  />
                </div>

                <div className="mt-1.5 px-2.5 py-0.5 rounded-full bg-black/70 border border-white/10 text-[10px] sm:text-xs font-mono font-medium text-white shadow-md text-center whitespace-nowrap max-w-[150px] truncate">
                  {nodeData.title}
                </div>
              </button>
            );
          })}

          <div
            className="absolute w-44 h-44 rounded-full blur-3xl pointer-events-none transition-all duration-500 opacity-40 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${activePos.x}%`,
              top: `${activePos.y}%`,
              backgroundColor: activePos.color,
            }}
          />
        </div>

        {/* Node Detail Drawer */}
        <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1 max-w-xl text-left">
            <div className="flex items-center gap-2">
              <span 
                className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold"
                style={{
                  backgroundColor: `${activePos.color}20`,
                  color: activePos.color,
                  border: `1px solid ${activePos.color}40`,
                }}
              >
                {activeDetail.badge}
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-semibold text-white">
              {activeDetail.title}
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {activeDetail.desc}
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <span className="text-[11px] font-mono text-zinc-400">
              {t.nodeGraph.clickPrompt}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
