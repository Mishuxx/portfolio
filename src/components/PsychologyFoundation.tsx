"use client";

import React from "react";
import { 
  Brain, 
  Eye, 
  HeartHandshake, 
  ShieldAlert, 
  GraduationCap, 
  Sparkles, 
  Network, 
  Cpu, 
  Layers, 
  Quote
} from "lucide-react";

export default function PsychologyFoundation() {
  const foundations = [
    {
      icon: Eye,
      title: "Cognitive Ergonomics & Mental Models",
      tag: "Product & UI/UX",
      accent: "#10B981", // Emerald
      description:
        "Human cognition is finite. Interfaces shouldn't force users to decipher state machines. By modeling cognitive load limits (Miller's Law, Gestalt grouping, Hick-Hyman law), I design frictionless experiences that feel instantaneous and reduce decision fatigue.",
      takeaway: "Intuitive software is an accurate mirror of human working memory."
    },
    {
      icon: HeartHandshake,
      title: "Organizational Dynamics & Psychological Safety",
      tag: "Team Health & Retention",
      accent: "#06B6D4", // Cyan
      description:
        "High-performing engineering teams fail when fear suppresses candor. Drawing from clinical assessment and group dynamics, I structure recruitment and leadership practices that foster radical psychological safety, open disagreement, and mutual accountability.",
      takeaway: "Culture is not perks; it is how safe engineers feel when proposing bold solutions or surfacing critical bugs."
    },
    {
      icon: ShieldAlert,
      title: "Ethical AI & Human-in-the-Loop Agency",
      tag: "AI Systems & Governance",
      accent: "#8B5CF6", // Violet
      description:
        "With my background spanning clinical practice and bioethics research (Bioética en la Red), I approach GenAI not as a replacement for human agency, but as cognitive scaffolding. We design systems that empower user mastery rather than create passive algorithmic addiction.",
      takeaway: "Automate repetitive mechanics, but protect human sovereignty and critical thought."
    }
  ];

  return (
    <section id="psychology" className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col items-start mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-3">
          <Brain className="w-3.5 h-3.5" />
          <span>THE UNFAIR ADVANTAGE</span>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl">
              The Psychology Foundation: Why human behavior is the blueprint for digital systems.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed">
              Trained in Clinical Psychology at the prestigious <span className="text-white font-medium">Universidad Central de Venezuela (UCV)</span>. Technology is built by humans, operated by humans, and consumed by humans. Mastering the human variable turns good software into iconic products.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-zinc-300">
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            <span>UCV Clinical Psychology Degree</span>
          </div>
        </div>
      </div>

      {/* 3 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 mb-12">
        {foundations.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="rounded-3xl bg-[#0d121c]/80 border border-white/10 p-6 sm:p-7 backdrop-blur-xl flex flex-col justify-between hover:border-white/20 transition-all duration-300 group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div
                    className="p-3 rounded-xl border"
                    style={{
                      backgroundColor: `${item.accent}15`,
                      borderColor: `${item.accent}35`,
                      color: item.accent
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className="text-[10px] font-mono px-2.5 py-0.5 rounded-full border"
                    style={{
                      backgroundColor: `${item.accent}10`,
                      borderColor: `${item.accent}25`,
                      color: item.accent
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                  Core Rule:
                </div>
                <div className="text-xs font-medium text-zinc-200 italic">
                  &ldquo;{item.takeaway}&rdquo;
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Philosophy Quote Banner */}
      <div className="relative z-10 rounded-3xl bg-gradient-to-r from-emerald-950/20 via-zinc-900/60 to-violet-950/20 border border-white/10 p-6 sm:p-8 backdrop-blur-xl flex flex-col md:flex-row items-center gap-6">
        <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 shrink-0 text-emerald-400">
          <Quote className="w-8 h-8" />
        </div>
        <div className="space-y-1 text-center md:text-left">
          <p className="text-base sm:text-lg font-medium text-white leading-relaxed">
            &ldquo;Code compiles deterministically, but teams and users operate on emotion, cognitive bias, and motivation. If you solve only for the algorithm, you will fail in production. Solve for the human mind first.&rdquo;
          </p>
          <p className="text-xs font-mono text-zinc-400">
            — Ricardo (Rick) Pulgar Mendoza // Clinical Psychologist & Product Architect
          </p>
        </div>
      </div>

    </section>
  );
}
