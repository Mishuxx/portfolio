"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Brain, 
  Eye, 
  Activity, 
  HeartHandshake, 
  ShieldCheck, 
  GraduationCap, 
  Layers, 
  Search, 
  BarChart2, 
  Compass, 
  Network
} from "lucide-react";

interface PsychologicalPillar {
  id: string;
  icon: React.ElementType;
  title: string;
  tag: string;
  accent: string;
  formalDefinition: string;
  analyticalLayer: string;
  methodologicalAxiom: string;
}

const PILLARS: PsychologicalPillar[] = [
  {
    id: "observability",
    icon: Eye,
    title: "Behavioral Observability & Telemetry",
    tag: "Empirical Observation",
    accent: "#10B981", // Emerald
    formalDefinition:
      "Systematic observation of human behavioral patterns within operational environments. Rigorous tracking of micro-hesitations, communication latency, task friction, and avoidance behaviors across recruitment interviews and interactive software interfaces.",
    analyticalLayer:
      "Deconstructing the critical delta between self-reported intent and actual behavioral execution. Applying behavioral baseline profiling to diagnose friction points before they manifest as attrition or user drop-off.",
    methodologicalAxiom:
      "Observable behavior yields empirical ground truth; verbal declarations merely reflect aspirational self-perception."
  },
  {
    id: "cognitive-analysis",
    icon: Activity,
    title: "Functional Cognitive Analysis & Ergonomics",
    tag: "Cognitive Architecture",
    accent: "#06B6D4", // Cyan
    formalDefinition:
      "Deconstruction of human information processing limits, cognitive load distribution (intrinsic, germane, extraneous), and mental model congruence. Evaluating how working memory constraints (Sweller, Miller) govern decision-making under uncertainty.",
    analyticalLayer:
      "Auditing workflows and user journeys to ensure system states map seamlessly onto biological cognitive heuristics, systematically eliminating extraneous cognitive overhead and decision fatigue.",
    methodologicalAxiom:
      "Systemic usability is not cosmetic minimalism; it is structural mathematical congruence with human working memory."
  },
  {
    id: "mind-understanding",
    icon: Brain,
    title: "Psychological Depth & Affective Regulation",
    tag: "Mind Understanding",
    accent: "#8B5CF6", // Violet
    formalDefinition:
      "Clinical depth in decoding internal motivational structures, cognitive biases, and emotional appraisal mechanisms. Grounded in Self-Determination Theory (autonomy, competence, relatedness) and Lazarus-Folkman stress-coping paradigms.",
    analyticalLayer:
      "Analyzing resilience thresholds, intrinsic versus extrinsic drivers, and affective stability during high-stakes technical execution, ensuring long-term candidate tenure and psychological equilibrium.",
    methodologicalAxiom:
      "Technical competence remains dormant or compromised absent robust psychological safety and emotional regulation."
  },
  {
    id: "ethical-systems",
    icon: ShieldCheck,
    title: "Organizational Psychodynamics & Ethical Governance",
    tag: "Human Systems & Ethics",
    accent: "#F59E0B", // Amber
    formalDefinition:
      "Examination of group dynamics, structural hierarchy friction, and the ethics of human-agent interaction. Applying bioethical principles to automated algorithmic sourcing and AI-driven pedagogical systems.",
    analyticalLayer:
      "Fostering psychological safety (Edmondson framework) to stimulate intellectual candor while safeguarding human cognitive agency against coercive algorithmic feedback loops.",
    methodologicalAxiom:
      "Digital tools must serve as cognitive scaffolding that augments human volition, never subordinating human agency."
  }
];

export default function PsychologyFoundation() {
  const [activePillarId, setActivePillarId] = useState<string>("observability");

  return (
    <section id="psychology" className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Formal Header */}
      <div className="flex flex-col items-start mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs mb-3">
          <Brain className="w-3.5 h-3.5" />
          <span>HUMAN BEHAVIORAL SYSTEMS & CLINICAL RIGOR</span>
        </div>
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between w-full gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white max-w-3xl leading-tight">
              The Psychology Foundation: Behavioral Observability, Cognitive Analysis & Mind Understanding.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-zinc-300 max-w-3xl leading-relaxed font-normal">
              Grounded in Clinical Psychology at the <span className="text-white font-medium">Universidad Central de Venezuela (UCV)</span>. Technology, workflows, and high-velocity engineering organizations are human constructs. Applying empirical behavioral observation, functional cognitive analysis, and clinical insight transforms how we evaluate talent, structure interfaces, and navigate complex team dynamics.
            </p>
          </div>

          <div className="flex items-center gap-2.5 shrink-0 px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-zinc-300 shadow-sm">
            <GraduationCap className="w-4 h-4 text-emerald-400" />
            <span>Lic. en Psicología Clínica • UCV</span>
          </div>
        </div>
      </div>

      {/* Analytical Process Telemetry Bar */}
      <div className="relative z-10 mb-12 p-4 sm:p-5 rounded-2xl bg-[#0c1017]/90 border border-white/10 backdrop-blur-xl">
        <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3 pb-2 border-b border-white/5">
          <span className="text-emerald-400 font-semibold">// METHODOLOGICAL PIPELINE</span>
          <span>From Behavioral Signal to Systemic Synthesis</span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-emerald-400 block font-bold mb-0.5">01. Observability</span>
            <span className="text-zinc-400 text-[11px]">Empirical tracking of behavioral latency & micro-signals</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-cyan-400 block font-bold mb-0.5">02. Cognitive Audit</span>
            <span className="text-zinc-400 text-[11px]">Deconstructing working memory load & mental models</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-violet-400 block font-bold mb-0.5">03. Affective Decoding</span>
            <span className="text-zinc-400 text-[11px]">Assessing intrinsic drivers, coping & resilience</span>
          </div>
          <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5">
            <span className="text-amber-400 block font-bold mb-0.5">04. Systemic Alignment</span>
            <span className="text-zinc-400 text-[11px]">Engineering organizational safety & ethical agency</span>
          </div>
        </div>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 mb-12">
        {PILLARS.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="rounded-3xl bg-[#0d121c]/80 border border-white/10 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between hover:border-white/25 transition-all duration-300 group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
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
                    className="text-[10px] font-mono px-3 py-1 rounded-full border"
                    style={{
                      backgroundColor: `${item.accent}10`,
                      borderColor: `${item.accent}25`,
                      color: item.accent
                    }}
                  >
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                  {item.formalDefinition}
                </p>

                {/* Formal Analytical Dimension Box */}
                <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 mb-4">
                  <span className="text-[11px] font-mono text-zinc-400 block font-semibold mb-1 uppercase tracking-wider">
                    Analytical Dimension:
                  </span>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.analyticalLayer}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mb-1">
                  Methodological Axiom:
                </div>
                <div className="text-xs font-medium text-zinc-200 italic">
                  &ldquo;{item.methodologicalAxiom}&rdquo;
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Human Philosophy Banner with Authentic Photo */}
      <div className="relative z-10 rounded-3xl bg-gradient-to-r from-emerald-950/20 via-zinc-900/60 to-violet-950/20 border border-white/10 p-6 sm:p-8 backdrop-blur-xl flex flex-col md:flex-row items-center gap-6">
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border border-white/20 shadow-md bg-zinc-800">
          <Image
            src="/images/rick-outdoors.jpg"
            alt="Ricardo Pulgar Mendoza"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-1.5 text-center md:text-left">
          <p className="text-base sm:text-lg font-medium text-white leading-relaxed">
            &ldquo;Digital architectures execute deterministically, but human beings navigate through affective appraisal, cognitive heuristics, and subconscious motivation. True systemic reliability—whether in building high-tenure engineering teams or shaping digital products—demands rigorous observation, functional analysis, and deep respect for the human mind.&rdquo;
          </p>
          <p className="text-xs font-mono text-zinc-400">
            — Ricardo (Rick) Pulgar Mendoza // Clinical Psychologist & Technical Talent Specialist
          </p>
        </div>
      </div>

    </section>
  );
}
