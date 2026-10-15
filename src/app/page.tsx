import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SkilleaBento from "@/components/SkilleaBento";
import TalentArchitecture from "@/components/TalentArchitecture";
import PsychologyFoundation from "@/components/PsychologyFoundation";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ToolingMatrix from "@/components/ToolingMatrix";
import ContactFooter from "@/components/ContactFooter";
import BackgroundGlow from "@/components/BackgroundGlow";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#08090D] text-white selection:bg-violet-500/30 selection:text-white">
      {/* Ambient background glow & grid */}
      <BackgroundGlow />

      {/* Floating glassmorphic navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col w-full overflow-hidden">
        {/* Hero Section */}
        <Hero />

        {/* Section 1: Flagship Product Showcase (Skillea - Bento Grid) */}
        <SkilleaBento />

        {/* Section 2: Technical Talent Acquisition & HR Strategy */}
        <TalentArchitecture />

        {/* Section 3: The Psychology Foundation (UCV) */}
        <PsychologyFoundation />

        {/* Section 4: Career Experience Timeline */}
        <ExperienceTimeline />

        {/* Section 5: Tooling & Methodology Matrix */}
        <ToolingMatrix />
      </main>

      {/* Footer / Contact CTA */}
      <ContactFooter />
    </div>
  );
}
