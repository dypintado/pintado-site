"use client";

import { motion } from "framer-motion";

const services = [
  {
    icon: "◎",
    title: "Voice AI Receptionists",
    description:
      "Custom voice bots that answer calls, qualify leads, take bookings, and hand off to humans — 24/7, no breaks, no missed calls.",
  },
  {
    icon: "⚡",
    title: "Workflow Automation",
    description:
      "End-to-end pipelines that eliminate repetitive work — CRM updates, email routing, data syncing, and reporting on autopilot.",
  },
  {
    icon: "✦",
    title: "AI Content Systems",
    description:
      "Automated content pipelines that generate, approve, and publish across platforms — built for brands that need to show up consistently.",
  },
  {
    icon: "⟨/⟩",
    title: "Custom Web Applications",
    description:
      "Fast, minimal web apps and landing pages built to convert — from booking systems to lead capture tools.",
  },
] as const;

function ServiceCard({ service, index }: { service: typeof services[number]; index: number }) {
  return (
    <motion.article
      className="group relative flex flex-col border border-[#1E1E1E] bg-transparent px-8 py-10 transition-all duration-300"
      style={{ borderLeft: "1px solid #1E1E1E" }}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#00ff88";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(0,255,136,0.06)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#1E1E1E";
        (e.currentTarget as HTMLElement).style.boxShadow = "none";
      }}
    >
      {/* Icon */}
      <span
        className="mb-6 block transition-colors duration-300 group-hover:text-[#00ff88]"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "1.25rem",
          color: "#444444",
          letterSpacing: 0,
        }}
        aria-hidden="true"
      >
        {service.icon}
      </span>

      {/* Title */}
      <h3
        className="mb-4"
        style={{
          fontFamily: "'Bodoni Moda', 'Playfair Display', serif",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "1.35rem",
          color: "#F0F0F0",
          lineHeight: 1.2,
        }}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="flex-1 leading-relaxed"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.8rem",
          color: "#888888",
          lineHeight: 1.75,
        }}
      >
        {service.description}
      </p>

      {/* CTA */}
      <button
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        className="mt-8 self-start transition-colors duration-200"
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.65rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#444444",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.color = "#00ff88";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.color = "#444444";
        }}
      >
        Let&apos;s build this →
      </button>
    </motion.article>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="px-6 py-28 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          className="mb-3"
          style={{
            fontFamily: "'Bodoni Moda', 'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "#F0F0F0",
            letterSpacing: "-0.01em",
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          What I Build
        </motion.h2>
        <motion.p
          className="mb-14"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.72rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#444444",
          }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          Services
        </motion.p>

        <div className="grid gap-0 md:grid-cols-2">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
