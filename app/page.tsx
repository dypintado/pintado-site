"use client";

import { EntranceGate } from "@/components/EntranceGate";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HackathonsSection from "@/components/sections/HackathonsSection";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import { useEffect, useState } from "react";

export default function Home() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflow = entered ? "" : "hidden";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [entered]);

  return (
    <>
      <EntranceGate visible={!entered} onEnter={() => setEntered(true)} />
      <main className="min-h-screen bg-[#080808] text-[#F0F0F0]">
        <HeroSection revealed={entered} />
        <AboutSection />
        <ServicesSection />
        <HackathonsSection />
        <ContactSection />
      </main>
    </>
  );
}
