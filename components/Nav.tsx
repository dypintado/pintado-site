"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function smoothScroll(href: string) {
  const id = href.replace("#", "");
  if (id === "") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll for background fade-in
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detect active section via IntersectionObserver
  useEffect(() => {
    const sectionIds = links.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50"
        animate={{
          background: scrolled ? "rgba(8,8,8,0.92)" : "rgba(8,8,8,0)",
          backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
          borderBottom: scrolled ? "1px solid #1E1E1E" : "1px solid rgba(30,30,30,0)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-20 flex items-center justify-between h-[64px]">
          {/* Logo / Name */}
          <button
            onClick={() => { smoothScroll(""); setMenuOpen(false); }}
            style={{
              fontFamily: "'Bodoni Moda', 'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: "1.1rem",
              color: "#F0F0F0",
              letterSpacing: "0.02em",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            Dylan Pintado
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <button
                    onClick={() => smoothScroll(link.href)}
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: isActive ? "#00ff88" : "#888888",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = "#F0F0F0";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) (e.currentTarget as HTMLButtonElement).style.color = "#888888";
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <motion.span
              className="block h-px bg-[#F0F0F0] w-5"
              animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
            <motion.span
              className="block h-px bg-[#F0F0F0] w-5"
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block h-px bg-[#F0F0F0] w-5"
              animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-x-0 top-[64px] z-40 md:hidden"
            style={{
              background: "rgba(8,8,8,0.97)",
              backdropFilter: "blur(16px)",
              borderBottom: "1px solid #1E1E1E",
            }}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            <ul className="flex flex-col px-6 py-6 gap-6">
              {links.map((link) => {
                const isActive = activeSection === link.href.replace("#", "");
                return (
                  <li key={link.href}>
                    <button
                      onClick={() => { smoothScroll(link.href); setMenuOpen(false); }}
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "0.75rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: isActive ? "#00ff88" : "#888888",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        padding: 0,
                      }}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
