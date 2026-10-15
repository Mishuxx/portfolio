"use client";

import React, { useState } from "react";
import { 
  Briefcase, 
  Sparkles, 
  Calendar, 
  MapPin, 
  ExternalLink, 
  ChevronRight, 
  CheckCircle2, 
  Building2,
  Filter
} from "lucide-react";

type FilterType = "all" | "product" | "recruitment";

interface TimelineItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  category: "product" | "recruitment";
  badge: string;
  badgeColor: string;
  description: string;
  achievements: string[];
  skills: string[];
  featured?: boolean;
}

const EXPERIENCES: TimelineItem[] = [
  {
    id: "skillea",
    role: "Co-Founder & Product Lead",
    company: "Skillea",
    period: "Dec 2025 – Present",
    location: "Remote / Global",
    category: "product",
    badge: "Co-Founder & Product",
    badgeColor: "#8B5CF6", // Violet
    featured: true,
    description:
      "Collaborating on the product vision, user experience narrative, and gamification ideas for an innovative vocational learning platform.",
    achievements: [
      "Designed the core conceptual framework for the 'Progress Tree', bringing RPG skill tree inspiration into career readiness for developers.",
      "Bridged recruiting insights with candidate empathy to map real job requirements into structured, approachable learning milestones.",
      "Actively exploring frontend tools and collaborating closely with technical teammates to bring the vision to life."
    ],
    skills: ["Product Ideation", "Gamification Concepts", "UX Flows", "Recruiting Insights", "Continuous Learning"]
  },
  {
    id: "devengine",
    role: "Senior Technical Recruiter / Technical Recruiter",
    company: "Devengine.ca",
    period: "Nov 2025 – Present & May 2024 – Oct 2024",
    location: "Vancouver, Canada (Remote)",
    category: "recruitment",
    badge: "Senior Tech Talent",
    badgeColor: "#06B6D4", // Cyan
    featured: true,
    description:
      "Leading technical recruitment initiatives connecting elite software engineering talent across the Americas with fast-scaling Canadian and North American tech companies.",
    achievements: [
      "Specialized in Staff, Principal, and Lead-level engineering profiles across Cloud, Distributed Systems, and Full-Stack domains.",
      "Collaborated directly with Canadian VPs of Engineering and CTOs to calibrate technical screening filters and accelerate hiring velocity.",
      "Reduced candidate drop-off during technical interview rounds by 28% through structured behavioral prep."
    ],
    skills: ["Full-Cycle Tech Recruiting", "Staff/Senior Sourcing", "Canadian Tech Market", "ATS Systems", "Technical Vetting"]
  },
  {
    id: "it-bootcamp",
    role: "Lead Recruiter (End-to-End IT Hiring & ATS / AI Integration)",
    company: "The IT Bootcamp",
    period: "Oct 2024 – Oct 2025",
    location: "Remote",
    category: "recruitment",
    badge: "Recruitment Leadership",
    badgeColor: "#10B981", // Emerald
    featured: false,
    description:
      "Spearheaded IT talent acquisition pipelines, automated ATS workflows, and integrated AI-assisted candidate screening.",
    achievements: [
      "Formulated and implemented automated QA protocols for ATS pipelines, cutting candidate review latency by 45%.",
      "Piloted generative AI prompt frameworks for automated resume categorization and technical skill taxonomy mapping.",
      "Led full-lifecycle hiring for software developers, cloud architects, and QA engineers."
    ],
    skills: ["ATS Architecture", "AI Integration", "Pipeline Optimization", "Candidate Experience", "Technical Screening"]
  },
  {
    id: "bold-business",
    role: "Recruiter & HR Management Specialist",
    company: "Bold Business",
    period: "Apr 2022 – Apr 2024",
    location: "Remote / US Timezones",
    category: "recruitment",
    badge: "Operations & HR",
    badgeColor: "#3B82F6", // Blue
    featured: false,
    description:
      "Drove high-volume and specialized technical recruiting pipelines, managing client stakeholder relations and talent lifecycle.",
    achievements: [
      "Placed over 70+ technical and specialized operational professionals across enterprise US clients.",
      "Created standardized behavioral evaluation frameworks based on clinical psychology principles for culture fit and resilience.",
      "Managed full HR operations, candidate onboarding, and pipeline performance reporting."
    ],
    skills: ["Executive Sourcing", "HR Operations", "Behavioral Calibration", "Client Stakeholder Management", "Talent Funnels"]
  },
  {
    id: "sourcing-specialist",
    role: "Technical Sourcing & Recruiting Specialist",
    company: "Listopro • Fetcher • Revelo Network",
    period: "2021 – 2022",
    location: "Latin America / North America",
    category: "recruitment",
    badge: "Talent Sourcing",
    badgeColor: "#F59E0B", // Amber
    featured: false,
    description:
      "Conducted specialized candidate search, boolean string optimization, and passive candidate engagement across top LatAm engineering hubs.",
    achievements: [
      "Sourced hundreds of high-caliber software developers for North American startups and venture-backed tech platforms.",
      "Refined outbound messaging strategies, achieving a 42% cold response rate among senior developers."
    ],
    skills: ["Boolean Search", "Passive Candidate Outreach", "Talent Intelligence", "Pipeline Sourcing"]
  },
  {
    id: "bioetica",
    role: "Content & Ethics Specialist",
    company: "Bioética en la Red",
    period: "2020 – 2026",
    location: "Remote",
    category: "product",
    badge: "Ethics & Governance",
    badgeColor: "#EC4899", // Pink
    featured: false,
    description:
      "Investigating the ethical implications of emerging technology, psychological well-being, and digital governance.",
    achievements: [
      "Authored research articles on ethics in artificial intelligence, cognitive enhancement, and behavioral psychology.",
      "Integrated bioethical standards into modern digital product design and AI automation practices."
    ],
    skills: ["Ethics in AI", "Research & Editorial", "Cognitive Systems", "Governance"]
  }
];

export default function ExperienceTimeline() {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredItems = EXPERIENCES.filter((item) => {
    if (filter === "all") return true;
    return item.category === filter;
  });

  return (
    <section id="experience" className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
            Proven track record in product leadership & tech talent.
          </h2>
          <p className="mt-3 text-base text-zinc-400 max-w-2xl">
            A continuous progression from clinical behavioral research to senior technical recruiting and founding product architecture.
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
            All Roles ({EXPERIENCES.length})
          </button>
          <button
            onClick={() => setFilter("product")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              filter === "product"
                ? "bg-violet-500/30 text-violet-300 font-semibold border border-violet-500/40"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Product & Founder
          </button>
          <button
            onClick={() => setFilter("recruitment")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all ${
              filter === "recruitment"
                ? "bg-cyan-500/30 text-cyan-300 font-semibold border border-cyan-500/40"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Tech Recruitment
          </button>
        </div>
      </div>

      {/* Timeline Items List */}
      <div className="space-y-6">
        {filteredItems.map((item, index) => (
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

            {/* Role Summary */}
            <p className="mt-4 text-sm text-zinc-300 leading-relaxed max-w-4xl">
              {item.description}
            </p>

            {/* Impact Achievements */}
            <div className="mt-4 space-y-2">
              {item.achievements.map((ach, aIdx) => (
                <div key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400">
                  <CheckCircle2
                    className="w-4 h-4 shrink-0 mt-0.5"
                    style={{ color: item.badgeColor }}
                  />
                  <span>{ach}</span>
                </div>
              ))}
            </div>

            {/* Skills & Technologies Tags */}
            <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap items-center gap-1.5">
              <span className="text-[11px] font-mono text-zinc-400 mr-2">Key Competencies:</span>
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
