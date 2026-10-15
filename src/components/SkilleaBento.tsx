"use client";

import React, { useState } from "react";
import { 
  GitBranch, 
  Sparkles, 
  Cpu, 
  Brain, 
  Compass, 
  Award, 
  ArrowUpRight, 
  Layers, 
  CheckCircle2, 
  Lock, 
  Play, 
  Zap, 
  Share2, 
  Flame,
  ChevronRight
} from "lucide-react";

interface SkillNode {
  id: string;
  name: string;
  status: "Mastered" | "In Progress" | "Unlocked" | "Locked";
  xp: string;
  category: string;
  psychologicalHook: string;
  vocationalImpact: string;
  branch: "Foundations" | "Architecture" | "Leadership" | "AI Systems";
}

const SKILL_NODES: SkillNode[] = [
  {
    id: "node-1",
    name: "Cognitive Load Mapping",
    status: "Mastered",
    xp: "+650 XP",
    category: "Psychology & UX",
    psychologicalHook: "Miller's Law (7±2 chunks) & Cognitive Ergonomics",
    vocationalImpact: "Reduces interface bounce rate by 34% through uncluttered mental models.",
    branch: "Foundations"
  },
  {
    id: "node-2",
    name: "Gamified Loop Architecture",
    status: "Mastered",
    xp: "+920 XP",
    category: "Product Design",
    psychologicalHook: "Variable Reward Schedules (Skinner) & Intrinsic Motivation (Deci & Ryan)",
    vocationalImpact: "Drives 68% 30-day retention in vocational learning pathways.",
    branch: "Foundations"
  },
  {
    id: "node-3",
    name: "Adaptive Branching Engine",
    status: "In Progress",
    xp: "+1,200 XP",
    category: "Algorithmic Routing",
    psychologicalHook: "Vygotsky's Zone of Proximal Development (ZPD)",
    vocationalImpact: "Dynamically modulates quiz difficulty based on real-time learner latency.",
    branch: "Architecture"
  },
  {
    id: "node-4",
    name: "AI Milestone Personalization",
    status: "Unlocked",
    xp: "+1,500 XP",
    category: "GenAI & Sourcing",
    psychologicalHook: "Self-Efficacy Feedback Loops & Goal Gradient Effect",
    vocationalImpact: "Generates custom learning milestones matching real Canadian & US job openings.",
    branch: "AI Systems"
  },
  {
    id: "node-5",
    name: "Executive Skill Verification",
    status: "Locked",
    xp: "+2,000 XP",
    category: "Credentialing",
    psychologicalHook: "Social Proof & Competence Validation",
    vocationalImpact: "Enables direct fast-track interviews with hiring partners.",
    branch: "Leadership"
  }
];

export default function SkilleaBento() {
  const [selectedNodeId, setSelectedNodeId] = useState<string>("node-3");
  const activeNode = SKILL_NODES.find((n) => n.id === selectedNodeId) || SKILL_NODES[2];

  return (
    <section id="skillea" className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-mono text-xs mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>FLAGSHIP PRODUCT SHOWCASE</span>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
              Skillea: The Progress Tree Engine
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-2xl">
              Co-Founder & Chief Product Officer (CPO). Re-imagining career readiness through an RPG-inspired progression architecture grounded in human behavioral science.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300">
              Role: Co-Founder & CPO
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300">
              Status: Live & Scaling
            </span>
          </div>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Card A (Large 2x2 / 8 Cols): Interactive Progress Tree UI Preview */}
        <div className="lg:col-span-8 rounded-3xl bg-[#0d121c]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between shadow-2xl">
          {/* Subtle Ambient Backlight */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Card Top Title & HUD info */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Core Innovation: The &quot;Progress Tree&quot;
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                A non-linear skill map translating vocational curriculum into gamified milestones.
              </p>
            </div>

            {/* Mock Player Level Pill */}
            <div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 px-3 py-1.5 rounded-xl font-mono text-xs">
              <span className="text-zinc-400">Learner Tier:</span>
              <span className="text-emerald-400 font-bold">Lvl 14 Full-Stack</span>
              <span className="text-violet-400 font-bold">3,850 XP</span>
            </div>
          </div>

          {/* Interactive Node Graph Mockup Canvas */}
          <div className="relative z-10 my-6 p-4 sm:p-6 rounded-2xl bg-[#090c14]/90 border border-white/5">
            <div className="flex items-center justify-between mb-4 text-[11px] font-mono text-zinc-400 uppercase tracking-wider">
              <span>Branch Navigation (Interactive Demo)</span>
              <span>Click a node to inspect telemetry</span>
            </div>

            {/* Tree Nodes Display */}
            <div className="space-y-3">
              {SKILL_NODES.map((node, index) => {
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
                        node.status === "Mastered"
                          ? "bg-emerald-500/15 border-emerald-500/40 text-emerald-400"
                          : node.status === "In Progress"
                          ? "bg-violet-500/20 border-violet-500/50 text-violet-300 animate-pulse"
                          : node.status === "Unlocked"
                          ? "bg-cyan-500/15 border-cyan-500/40 text-cyan-400"
                          : "bg-zinc-800/40 border-zinc-700 text-zinc-500"
                      }`}>
                        {node.status === "Mastered" && <CheckCircle2 className="w-4 h-4" />}
                        {node.status === "In Progress" && <Play className="w-3.5 h-3.5 fill-violet-400" />}
                        {node.status === "Unlocked" && <Zap className="w-3.5 h-3.5" />}
                        {node.status === "Locked" && <Lock className="w-3.5 h-3.5" />}
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
                      <span className={`text-[11px] font-mono px-2.5 py-1 rounded-md border ${
                        node.status === "Mastered"
                          ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                          : node.status === "In Progress"
                          ? "bg-violet-500/15 border-violet-500/40 text-violet-300"
                          : node.status === "Unlocked"
                          ? "bg-cyan-500/10 border-cyan-500/30 text-cyan-300"
                          : "bg-zinc-800/50 border-zinc-700 text-zinc-400"
                      }`}>
                        {node.status}
                      </span>
                      <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? "text-violet-400 translate-x-1" : "text-zinc-600 group-hover:text-zinc-400"}`} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Active Node Telemetry Drawer */}
          <div className="relative z-10 rounded-2xl bg-white/[0.03] border border-white/10 p-5">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
              <span className="text-emerald-400 font-semibold">// NODE TELEMETRY INSPECTOR</span>
              <span>Target: {activeNode.id}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="text-xs text-zinc-400 block mb-1">Psychological Motivation Model</span>
                <p className="text-sm text-zinc-200 font-medium bg-black/40 p-2.5 rounded-lg border border-white/5">
                  🧠 {activeNode.psychologicalHook}
                </p>
              </div>
              <div>
                <span className="text-xs text-zinc-400 block mb-1">Vocational / Industry Impact</span>
                <p className="text-sm text-zinc-200 font-medium bg-black/40 p-2.5 rounded-lg border border-white/5">
                  📈 {activeNode.vocationalImpact}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Cards B & C / 4 Cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* Card B: System Architecture */}
          <div className="rounded-3xl bg-[#0d121c]/80 border border-white/10 p-6 backdrop-blur-xl relative overflow-hidden flex-1 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">System Architecture</h4>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
              Linking real-time user telemetry with adaptive progression pipelines. Every learner interaction feeds a low-latency feedback loop calibrated to maintain high agency.
            </p>

            <div className="space-y-2.5">
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                <span className="font-mono text-cyan-400 block font-semibold mb-0.5">01 // Event Telemetry</span>
                <span className="text-zinc-400">Tracking micro-hesitations, completion velocity, and conceptual gaps.</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                <span className="font-mono text-cyan-400 block font-semibold mb-0.5">02 // Adaptive Difficulty</span>
                <span className="text-zinc-400">Dynamic milestone branching to maintain flow state and prevent learner burnout.</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs">
                <span className="font-mono text-cyan-400 block font-semibold mb-0.5">03 // AI Milestone Synthesis</span>
                <span className="text-zinc-400">Real-time skill translation mapped to modern engineering vacancy requirements.</span>
              </div>
            </div>
          </div>

          {/* Card C: UX Narrative & Behavioral Psychology */}
          <div className="rounded-3xl bg-[#0d121c]/80 border border-white/10 p-6 backdrop-blur-xl relative overflow-hidden flex-1 shadow-xl">
            <div className="flex items-center gap-2 mb-3">
              <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-400">
                <Brain className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-white">UX Narrative & Flow</h4>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
              Designing interfaces rooted in behavioral psychology models:
            </p>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-zinc-200">Self-Determination Theory:</strong>
                  <span className="text-zinc-400 block">Cultivating autonomy through non-linear choices and clear competence markers.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-zinc-200">Cognitive Load Regulation:</strong>
                  <span className="text-zinc-400 block">Preventing cognitive overwhelm through high visual hierarchy and progressive disclosure.</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                <div>
                  <strong className="text-zinc-200">Intrinsic Reward Loops:</strong>
                  <span className="text-zinc-400 block">Dopaminergic milestone reveals paired with genuine capability validation.</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
