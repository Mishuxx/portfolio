"use client";

import React, { useState } from "react";
import { 
  Sparkles, 
  GitBranch, 
  Brain, 
  Users, 
  Cpu, 
  ShieldCheck, 
  CheckCircle2, 
  Layers,
  Activity,
  Flame
} from "lucide-react";

interface NodeItem {
  id: string;
  title: string;
  category: "psychology" | "talent" | "product" | "ai";
  status: "Mastered" | "In Production" | "Scaling" | "Active";
  level: string;
  metric: string;
  description: string;
  color: string;
  icon: React.ElementType;
  x: number; // percentage
  y: number; // percentage
}

const NODES: NodeItem[] = [
  {
    id: "cognition",
    title: "Cognitive Foundations",
    category: "psychology",
    status: "Mastered",
    level: "Lv. 99 Clinical Rigor",
    metric: "UCV Honors / Human Systems",
    description: "Clinical frameworks decoding intrinsic human motivation, cognitive load limits, and behavioral dynamics.",
    color: "#10B981", // Emerald
    icon: Brain,
    x: 50,
    y: 78,
  },
  {
    id: "talent",
    title: "Talent Architecture",
    category: "talent",
    status: "Mastered",
    level: "5+ Years Americas",
    metric: "150+ Staff/Lead Placements",
    description: "Full-cycle recruitment engines calibrated with psychological culture fit and deep technical vetting.",
    color: "#06B6D4", // Cyan
    icon: Users,
    x: 24,
    y: 42,
  },
  {
    id: "skillea",
    title: "Skillea Progress Tree",
    category: "product",
    status: "Scaling",
    level: "CPO / Co-Founder",
    metric: "Gamified Vocational Engine",
    description: "RPG-inspired branching skill tree mapping real-world engineering readiness into actionable dopamine loops.",
    color: "#8B5CF6", // Violet
    icon: GitBranch,
    x: 76,
    y: 42,
  },
  {
    id: "ai-systems",
    title: "Ethical AI & Telemetry",
    category: "ai",
    status: "Active",
    level: "Adaptive ML Loops",
    metric: "Human-in-the-Loop",
    description: "AI-assisted candidate sourcing & personalized curriculum generation without compromising ethical agency.",
    color: "#EC4899", // Pink / Magenta
    icon: Cpu,
    x: 50,
    y: 16,
  },
];

export default function HeroWidget() {
  const [activeNodeId, setActiveNodeId] = useState<string>("skillea");
  const activeNode = NODES.find((n) => n.id === activeNodeId) || NODES[2];

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-white/0 shadow-[0_20px_70px_rgba(0,0,0,0.8)]">
      <div className="relative overflow-hidden rounded-[22px] bg-[#0c1018]/90 border border-white/10 p-5 sm:p-7 backdrop-blur-2xl">
        
        {/* Top Header with Live System Status */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>LIVE SYSTEM MAP</span>
            </div>
            <span className="text-xs text-zinc-400 font-mono hidden sm:inline">
              // ProgressTree_Engine_v2.4
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>Sync: Real-time</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-violet-400" />
              <span>XP Mastery: 98.4%</span>
            </span>
          </div>
        </div>

        {/* Interactive Graph Canvas Area */}
        <div className="relative w-full h-[320px] sm:h-[360px] my-4 rounded-2xl bg-[#080b12]/80 border border-white/5 overflow-hidden flex items-center justify-center">
          {/* Subtle Grid in Graph */}
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
                <stop offset="100%" stopColor="#EC4899" stopOpacity="0.7" />
              </linearGradient>
              <linearGradient id="lineGrad4" x1="76%" y1="42%" x2="50%" y2="16%">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#EC4899" stopOpacity="0.7" />
              </linearGradient>
            </defs>

            {/* Connecting Lines */}
            <line x1="50%" y1="78%" x2="24%" y2="42%" stroke="url(#lineGrad1)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
            <line x1="50%" y1="78%" x2="76%" y2="42%" stroke="url(#lineGrad2)" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
            <line x1="24%" y1="42%" x2="50%" y2="16%" stroke="url(#lineGrad3)" strokeWidth="2" strokeDasharray="4 4" />
            <line x1="76%" y1="42%" x2="50%" y2="16%" stroke="url(#lineGrad4)" strokeWidth="2" strokeDasharray="4 4" />
          </svg>

          {/* Interactive Nodes */}
          {NODES.map((node) => {
            const isSelected = activeNodeId === node.id;
            const Icon = node.icon;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNodeId(node.id)}
                className={`group absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center p-2 rounded-2xl transition-all duration-300 focus:outline-none z-10 ${
                  isSelected ? "scale-110 z-20" : "scale-100 hover:scale-105 opacity-85 hover:opacity-100"
                }`}
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                {/* Outer Glow Ring */}
                <div
                  className={`relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl transition-all duration-300 ${
                    isSelected
                      ? "shadow-[0_0_30px_rgba(255,255,255,0.3)] border-2"
                      : "border border-white/20 bg-zinc-900/90 hover:border-white/40"
                  }`}
                  style={{
                    backgroundColor: isSelected ? `${node.color}25` : "#111622",
                    borderColor: isSelected ? node.color : "rgba(255,255,255,0.15)",
                    boxShadow: isSelected ? `0 0 25px ${node.color}66` : undefined,
                  }}
                >
                  <Icon
                    className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110"
                    style={{ color: isSelected ? node.color : "#d1d5db" }}
                  />
                  
                  {/* Status dot */}
                  <span
                    className="absolute -top-1 -right-1 w-3 h-3 rounded-full border-2 border-[#0c1018]"
                    style={{ backgroundColor: node.color }}
                  />
                </div>

                {/* Node Label */}
                <div className="mt-1.5 px-2.5 py-0.5 rounded-full bg-black/70 border border-white/10 text-[10px] sm:text-xs font-mono font-medium text-white shadow-md text-center whitespace-nowrap">
                  {node.title}
                </div>
              </button>
            );
          })}

          {/* Background Ambient Glow beneath active node */}
          <div
            className="absolute w-44 h-44 rounded-full blur-3xl pointer-events-none transition-all duration-500 opacity-40 -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${activeNode.x}%`,
              top: `${activeNode.y}%`,
              backgroundColor: activeNode.color,
            }}
          />
        </div>

        {/* Node Detail / Telemetry Drawer */}
        <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4 sm:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-1 max-w-xl">
            <div className="flex items-center gap-2">
              <span 
                className="px-2 py-0.5 rounded text-[11px] font-mono font-semibold"
                style={{
                  backgroundColor: `${activeNode.color}20`,
                  color: activeNode.color,
                  border: `1px solid ${activeNode.color}40`,
                }}
              >
                {activeNode.status}
              </span>
              <span className="text-xs font-mono text-zinc-400">
                // {activeNode.level}
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-semibold text-white flex items-center gap-2">
              <span>{activeNode.title}</span>
              <span className="text-xs font-mono text-emerald-400 font-normal">
                [{activeNode.metric}]
              </span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {activeNode.description}
            </p>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto justify-end">
            <span className="text-[11px] font-mono text-zinc-400">
              Click any node to calibrate
            </span>
          </div>
        </div>

        {/* 3 High-level Recruitment & Product Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-5 mt-5 border-t border-white/10">
          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-emerald-500/30 transition-colors">
            <div className="text-2xl font-bold font-mono text-emerald-400">5+ Years</div>
            <div className="text-xs text-zinc-400 font-medium mt-0.5">Specialized Tech Talent</div>
            <div className="text-[11px] text-zinc-400 mt-1">Full-cycle IT recruiting for Canadian & US tech hubs</div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/30 transition-colors">
            <div className="text-2xl font-bold font-mono text-cyan-400">Full-Cycle</div>
            <div className="text-xs text-zinc-400 font-medium mt-0.5">Engineering Recruitment</div>
            <div className="text-[11px] text-zinc-400 mt-1">From Senior to C-Level across Full-Stack & AI</div>
          </div>

          <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 transition-colors">
            <div className="text-2xl font-bold font-mono text-violet-400">Gamified</div>
            <div className="text-xs text-zinc-400 font-medium mt-0.5">Learning Architecture</div>
            <div className="text-[11px] text-zinc-400 mt-1">CPO at Skillea: RPG progression mapped to skills</div>
          </div>
        </div>

      </div>
    </div>
  );
}
