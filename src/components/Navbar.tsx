"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Sparkles, Brain, Cpu, Users, FileDown } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Product & Skillea", href: "#skillea", icon: Sparkles },
    { name: "Technical Talent", href: "#talent", icon: Users },
    { name: "Psychology Foundation", href: "#psychology", icon: Brain },
    { name: "Experience", href: "#experience", icon: Cpu },
    { name: "Contact", href: "#contact", icon: ArrowUpRight },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-6 transition-all duration-300">
      <nav
        className={`w-full max-w-7xl rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "bg-[#0c1017]/85 backdrop-blur-xl border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-3 px-5 md:px-7"
            : "bg-[#0f141f]/60 backdrop-blur-md border-white/8 py-4 px-5 md:px-7"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <a
            href="#"
            className="group flex items-center gap-3 transition-transform hover:scale-[1.02]"
          >
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-emerald-400/20 via-teal-500/20 to-purple-600/30 border border-white/10 group-hover:border-emerald-400/40 transition-colors">
              <span className="font-mono font-bold text-sm tracking-tighter text-white">
                RPM
              </span>
              <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                Ricardo Pulgar
              </span>
              <span className="text-[10px] text-zinc-400 font-mono tracking-wider uppercase">
                Product • Talent • Psychology
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] rounded-full p-1.5 px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-zinc-300 hover:text-white px-3 py-1.5 rounded-full hover:bg-white/[0.06] transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right Status Badge & CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Advisory & Select Roles</span>
            </div>

            <a
              href="/Ricardo_Pulgar_CV.pdf"
              download="Ricardo_Pulgar_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-emerald-500/40 text-xs font-mono text-zinc-300 hover:text-white transition-all active:scale-95"
              title="Download Ricardo's CV in PDF"
            >
              <FileDown className="w-3.5 h-3.5 text-emerald-400" />
              <span>CV</span>
            </a>

            <a
              href="#contact"
              className="relative group overflow-hidden rounded-xl px-4 py-2 text-xs font-semibold text-white bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-purple-600/30 border border-emerald-500/30 hover:border-emerald-400/60 shadow-[0_0_15px_rgba(16,185,129,0.15)] transition-all hover:shadow-[0_0_22px_rgba(16,185,129,0.3)] active:scale-95"
            >
              <span className="flex items-center gap-1.5">
                Connect / Intro
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-300 hover:text-white"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-300 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Strategic Advisory</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 text-sm text-zinc-200 hover:text-emerald-300 hover:bg-white/5 rounded-lg transition-colors"
              >
                <span>{link.name}</span>
                <link.icon className="w-4 h-4 text-zinc-400" />
              </a>
            ))}

            <a
              href="/Ricardo_Pulgar_CV.pdf"
              download="Ricardo_Pulgar_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-500/25 hover:bg-emerald-500/20 transition-all text-center"
            >
              <FileDown className="w-4 h-4 text-emerald-400" />
              <span>Download CV (PDF)</span>
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 transition-all text-center"
            >
              Connect / Book Intro
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
