"use client";

import React from "react";

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Primary Emerald/Teal Glow - Top Left */}
      <div 
        className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full blur-[140px] opacity-18 transition-all"
        style={{
          background: "radial-gradient(circle, #10B981 0%, #06B6D4 40%, transparent 70%)"
        }}
      />

      {/* Cyber Violet/Indigo Glow - Top Right & Center */}
      <div 
        className="absolute top-[20%] -right-[15%] w-[60vw] h-[60vw] max-w-[850px] max-h-[850px] rounded-full blur-[160px] opacity-16 transition-all"
        style={{
          background: "radial-gradient(circle, #8B5CF6 0%, #6366F1 45%, transparent 70%)"
        }}
      />

      {/* Subtle Mid-page Ambient Glow */}
      <div 
        className="absolute top-[55%] left-[20%] w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] rounded-full blur-[180px] opacity-12 transition-all"
        style={{
          background: "radial-gradient(circle, #14B8A6 0%, #6366F1 50%, transparent 75%)"
        }}
      />

      {/* Bottom Subtle Violet Glow */}
      <div 
        className="absolute -bottom-[10%] right-[10%] w-[50vw] h-[50vw] max-w-[750px] max-h-[750px] rounded-full blur-[150px] opacity-15 transition-all"
        style={{
          background: "radial-gradient(circle, #A855F7 0%, #3B82F6 40%, transparent 70%)"
        }}
      />

      {/* High-tech Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)]" />
    </div>
  );
}
