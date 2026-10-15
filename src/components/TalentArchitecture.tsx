"use client";

import React, { useState } from "react";
import { 
  Users, 
  Terminal, 
  BrainCircuit, 
  Workflow, 
  CheckCircle2, 
  Search, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  BarChart3,
  Sparkles
} from "lucide-react";

const TALENT_METRICS = [
  {
    value: "5+ Years",
    label: "Tech Talent Leadership",
    detail: "Full-cycle recruiting across Canadian, US, and LatAm ecosystems."
  },
  {
    value: "150+",
    label: "Engineering Placements",
    detail: "Specialized in Senior, Staff, Principal, and C-Level technical leaders."
  },
  {
    value: "94%",
    label: "1-Year Retention Rate",
    detail: "Engineered through rigorous clinical behavioral calibration."
  },
  {
    value: "3x",
    label: "Pipeline Velocity",
    detail: "ATS automation, AI-assisted screening, and optimized funnels."
  }
];

const PILLARS = [
  {
    id: "technical-depth",
    icon: Terminal,
    title: "Technical Depth & Architectural Screening",
    badge: "Engineering Rigor",
    color: "#06B6D4", // Cyan
    summary: "Beyond keyword matching: evaluating architectural maturity, distributed systems intuition, concurrency models, and hands-on code quality.",
    highlights: [
      "In-depth screening for Full-Stack (React/Next, Node, Python, Go, Java), Cloud (AWS, GCP), and AI/ML engineers.",
      "Calibrating system design problem-solving vs. pure memorization.",
      "Direct technical alignment with Engineering Directors, VPs, and CTOs."
    ]
  },
  {
    id: "behavioral-assessment",
    icon: BrainCircuit,
    title: "Behavioral & Cognitive Assessment",
    badge: "Clinical Psychology Advantage",
    color: "#10B981", // Emerald
    summary: "Applying clinical psychology frameworks to measure cultural resilience, psychological safety, intrinsic motivation, and team dynamics.",
    highlights: [
      "Structured competency-based behavioral interviewing to identify real ownership and accountability.",
      "Predicting long-term team retention and reducing turnover through cognitive friction mitigation.",
      "Assessing leadership empathy and psychological safety in high-stress engineering environments."
    ]
  },
  {
    id: "systems-automation",
    icon: Workflow,
    title: "Systems, ATS & AI Automation",
    badge: "Operational Scale",
    color: "#8B5CF6", // Violet
    summary: "Engineering repeatable talent pipelines. Integrating ATS workflows, automated candidate scoring, and responsible GenAI sourcing.",
    highlights: [
      "Proven architecture across Greenhouse, Lever, Ashby, and customized internal ATS workflows.",
      "Designed QA protocols and AI sourcing workflows at The IT Bootcamp and Devengine.",
      "Real-time pipeline analytics, SLA tracking, and diversity-conscious candidate funnels."
    ]
  }
];

const PIPELINE_STAGES = [
  {
    step: "01",
    title: "Algorithmic & AI Sourcing",
    rate: "100%",
    desc: "Targeted passive candidate mapping across North America & LatAm with precision queries."
  },
  {
    step: "02",
    title: "Technical Calibration",
    rate: "42%",
    desc: "Rigorous technical deep-dive into architectural patterns, system scalability, and code hygiene."
  },
  {
    step: "03",
    title: "Cognitive & Culture Alignment",
    rate: "18%",
    desc: "Psychological evaluation of ownership, resilience, cross-functional empathy, and work ethics."
  },
  {
    step: "04",
    title: "Executive Placement",
    rate: "94% Retained",
    desc: "High-conviction offers, compensation calibration, and seamless 90-day onboarding."
  }
];

export default function TalentArchitecture() {
  const [activeStage, setActiveStage] = useState(1);

  return (
    <section id="talent" className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
          <Users className="w-3.5 h-3.5" />
          <span>TECHNICAL TALENT & HR ARCHITECTURE</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl">
          Engineering high-performing tech teams as a predictable, data-driven system.
        </h2>
        <p className="mt-3 text-base sm:text-lg text-zinc-400 max-w-3xl leading-relaxed">
          Recruitment is not a numbers game; it is an organizational engineering discipline. By uniting technical depth with clinical psychology frameworks, I build pipelines that yield high tenure and exceptional impact.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
        {TALENT_METRICS.map((metric, i) => (
          <div
            key={i}
            className="p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/30 transition-all hover:bg-white/[0.04] flex flex-col justify-between"
          >
            <div>
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-cyan-400 tracking-tight">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-white mt-1">
                {metric.label}
              </div>
            </div>
            <div className="text-xs text-zinc-400 mt-3 border-t border-white/5 pt-2">
              {metric.detail}
            </div>
          </div>
        ))}
      </div>

      {/* 3 Key Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        {PILLARS.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <div
              key={pillar.id}
              className="group relative rounded-3xl bg-[#0d121c]/80 border border-white/10 p-6 sm:p-7 backdrop-blur-xl flex flex-col justify-between hover:border-white/20 transition-all duration-300 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div 
                    className="p-2.5 rounded-xl border"
                    style={{
                      backgroundColor: `${pillar.color}15`,
                      borderColor: `${pillar.color}35`,
                      color: pillar.color
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span 
                    className="text-[10px] font-mono px-2.5 py-1 rounded-full border"
                    style={{
                      backgroundColor: `${pillar.color}10`,
                      borderColor: `${pillar.color}25`,
                      color: pillar.color
                    }}
                  >
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-cyan-300 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {pillar.summary}
                </p>
              </div>

              <div className="space-y-2.5 border-t border-white/10 pt-4">
                {pillar.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 
                      className="w-3.5 h-3.5 shrink-0 mt-0.5" 
                      style={{ color: pillar.color }}
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Recruitment Pipeline Funnel */}
      <div className="rounded-3xl bg-[#0b0f17]/90 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h4 className="text-lg font-bold text-white flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-emerald-400" />
              <span>Full-Cycle Calibration Architecture</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
              How candidate profiles are systematically screened from top-of-funnel sourcing to long-term organizational impact.
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            Interactive Funnel Analysis
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PIPELINE_STAGES.map((stage, idx) => (
            <div
              key={idx}
              onClick={() => setActiveStage(idx)}
              className={`cursor-pointer rounded-2xl p-4 sm:p-5 border transition-all duration-200 ${
                activeStage === idx
                  ? "bg-white/[0.06] border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.15)]"
                  : "bg-white/[0.02] border-white/5 hover:border-white/15"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs text-zinc-400">STEP {stage.step}</span>
                <span className="font-mono text-xs font-semibold text-emerald-400">{stage.rate}</span>
              </div>
              <h5 className="text-sm font-bold text-white mb-1.5">{stage.title}</h5>
              <p className="text-xs text-zinc-400 leading-relaxed">{stage.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
