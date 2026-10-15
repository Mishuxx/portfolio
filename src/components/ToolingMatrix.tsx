"use client";

import React, { useState } from "react";
import { 
  Wrench, 
  Sparkles, 
  Layers, 
  Workflow, 
  Cpu, 
  Users, 
  Share2, 
  Compass, 
  CheckCircle2, 
  Terminal, 
  ShieldCheck, 
  MessageSquare,
  Search
} from "lucide-react";

interface ToolItem {
  name: string;
  category: "product" | "talent" | "ai" | "management";
  proficiency: "Expert" | "Advanced" | "Operational";
  note: string;
}

const TOOLING_DATA: {
  category: "product" | "talent" | "ai" | "management";
  title: string;
  icon: React.ElementType;
  color: string;
  description: string;
  items: ToolItem[];
}[] = [
  {
    category: "product",
    title: "Product & Design",
    icon: Compass,
    color: "#8B5CF6", // Violet
    description: "Frameworks for translating user psychology into scalable digital products.",
    items: [
      { name: "Product Roadmapping", category: "product", proficiency: "Expert", note: "Milestone-driven release scoping" },
      { name: "Information Architecture", category: "product", proficiency: "Expert", note: "Cognitive load optimization" },
      { name: "Wireframing & UI Prototyping", category: "product", proficiency: "Advanced", note: "Rapid iterative validation" },
      { name: "UX Behavioral Research", category: "product", proficiency: "Expert", note: "Qualitative & quantitative user studies" },
      { name: "Gamification Loops", category: "product", proficiency: "Expert", note: "RPG progression & reward psychology" },
      { name: "User Journey Mapping", category: "product", proficiency: "Expert", note: "Friction point elimination" },
    ]
  },
  {
    category: "talent",
    title: "Talent & Operations",
    icon: Users,
    color: "#06B6D4", // Cyan
    description: "Data-driven architectures for finding, screening, and closing tech talent.",
    items: [
      { name: "Full-Cycle Technical Recruiting", category: "talent", proficiency: "Expert", note: "Senior/Staff/Lead engineering roles" },
      { name: "ATS Architecture (Lever, Greenhouse, Ashby)", category: "talent", proficiency: "Expert", note: "Pipeline stage calibration & QA" },
      { name: "Sourcing Automation & Boolean", category: "talent", proficiency: "Expert", note: "Deep search strings & passive outreach" },
      { name: "Behavioral & Culture Fit Assessment", category: "talent", proficiency: "Expert", note: "Clinical interview methodologies" },
      { name: "HR Operations & Pipeline Analytics", category: "talent", proficiency: "Advanced", note: "SLA tracking, funnel metrics" },
      { name: "Compensation Calibration", category: "talent", proficiency: "Advanced", note: "North American & LatAm market rates" },
    ]
  },
  {
    category: "ai",
    title: "AI & Productivity",
    icon: Cpu,
    color: "#10B981", // Emerald
    description: "Human-in-the-loop workflows leveraging state-of-the-art Generative AI.",
    items: [
      { name: "ChatGPT & Advanced Prompting", category: "ai", proficiency: "Expert", note: "Curriculum & scenario engineering" },
      { name: "Microsoft Copilot & Workspace AI", category: "ai", proficiency: "Expert", note: "Enterprise workflow acceleration" },
      { name: "AI Prompt Engineering", category: "ai", proficiency: "Expert", note: "Taxonomy extraction & candidate mapping" },
      { name: "Workflow Automation (Zapier/Make)", category: "ai", proficiency: "Advanced", note: "ATS to CRM sync automation" },
      { name: "Ethics & Governance in GenAI", category: "ai", proficiency: "Expert", note: "Bias mitigation & bioethical standards" },
      { name: "Claude & Perplexity Research", category: "ai", proficiency: "Expert", note: "Technical market intelligence" },
    ]
  },
  {
    category: "management",
    title: "Management & Collaboration",
    icon: MessageSquare,
    color: "#F59E0B", // Amber
    description: "Orchestrating cross-functional teams with clarity and asynchronous velocity.",
    items: [
      { name: "Slack & Async Communication", category: "management", proficiency: "Expert", note: "Clear, documentation-first culture" },
      { name: "Asana & Trello", category: "management", proficiency: "Expert", note: "Sprint planning & task governance" },
      { name: "Google Workspace & Docs", category: "management", proficiency: "Expert", note: "PRDs, specifications, and reports" },
      { name: "CRM & Pipeline Management", category: "management", proficiency: "Advanced", note: "Client & partner relationship tracking" },
      { name: "Notion & Knowledge Bases", category: "management", proficiency: "Expert", note: "Single-source-of-truth documentation" },
      { name: "Figma (Review & Spec)", category: "management", proficiency: "Advanced", note: "Design handoff & UX calibration" },
    ]
  }
];

export default function ToolingMatrix() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section id="tooling" className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-mono text-xs mb-3">
            <Wrench className="w-3.5 h-3.5" />
            <span>TOOLING & METHODOLOGY MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Systematic competencies across Product, Talent & AI.
          </h2>
          <p className="mt-3 text-base text-zinc-400 max-w-2xl">
            A battle-tested stack combining product architecture rigor, advanced candidate intelligence, and modern AI automation.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search methodology..."
            aria-label="Search methodology..."
            className="w-full pl-10 pr-4 py-2 text-xs font-mono rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500/50 transition-colors"
          />
        </div>
      </div>

      {/* 4 Category Columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TOOLING_DATA.map((col) => {
          const Icon = col.icon;
          const filteredItems = col.items.filter((item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.note.toLowerCase().includes(searchQuery.toLowerCase())
          );

          return (
            <div
              key={col.category}
              className="rounded-3xl bg-[#0d121c]/80 border border-white/10 p-6 backdrop-blur-xl flex flex-col justify-between hover:border-white/20 transition-all duration-300"
            >
              <div>
                {/* Column Header */}
                <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-white/10">
                  <div
                    className="p-2.5 rounded-xl border"
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
                    <p className="text-[11px] text-zinc-400 line-clamp-1">{col.description}</p>
                  </div>
                </div>

                {/* Items */}
                <div className="space-y-2.5">
                  {filteredItems.length === 0 ? (
                    <div className="text-xs font-mono text-zinc-500 py-4 text-center">
                      No matching tools
                    </div>
                  ) : (
                    filteredItems.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 hover:bg-white/[0.04] transition-colors"
                      >
                        <div className="flex items-center justify-between gap-1 mb-1">
                          <span className="text-xs font-semibold text-zinc-200">
                            {item.name}
                          </span>
                          <span
                            className="text-[9px] font-mono px-1.5 py-0.5 rounded border"
                            style={{
                              backgroundColor: `${col.color}10`,
                              borderColor: `${col.color}30`,
                              color: col.color,
                            }}
                          >
                            {item.proficiency}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-400 leading-snug">
                          {item.note}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-white/5 text-[10px] font-mono text-zinc-400 flex items-center justify-between">
                <span>{filteredItems.length} methodologies</span>
                <span style={{ color: col.color }}>● Verified</span>
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
