"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TalentArchitecture from "@/components/TalentArchitecture";
import SkilleaBento from "@/components/SkilleaBento";
import PsychologyFoundation from "@/components/PsychologyFoundation";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ToolingMatrix from "@/components/ToolingMatrix";
import BeyondWork from "@/components/BeyondWork";
import ContactFooter from "@/components/ContactFooter";
import BackgroundGlow from "@/components/BackgroundGlow";
import { LanguageProvider } from "@/context/LanguageContext";

export default function Home() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen bg-[#08090D] text-white selection:bg-violet-500/30 selection:text-white">
        {/* Ambient background glow & grid */}
        <BackgroundGlow />

        {/* Floating glassmorphic navbar with EN / ES toggle */}
        <Navbar />

        {/* Main Content Sections in exact Navbar sequence */}
        <main className="relative z-10 flex flex-col w-full overflow-hidden">
          {/* Hero Section */}
          <Hero />

          {/* Section 1: Recruiting */}
          <TalentArchitecture />

          {/* Section 2: Skillea */}
          <SkilleaBento />

          {/* Section 3: Psychology */}
          <PsychologyFoundation />

          {/* Section 4: Experience */}
          <ExperienceTimeline />

          {/* Section 5: Skills & Tools */}
          <ToolingMatrix />

          {/* Section 6: Beyond Work */}
          <BeyondWork />
        </main>

        {/* Footer / Contact CTA */}
        <ContactFooter />
      </div>
    </LanguageProvider>
  );
}
