"use client";

import { GlassRefractionHero } from "@/components/ui/glass-refraction-hero";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HackathonsSection from "@/components/sections/HackathonsSection";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-[#F0F0F0]">
      <GlassRefractionHero />
      <AboutSection />
      <ServicesSection />
      <HackathonsSection />
      <ContactSection />
    </main>
  );
}
