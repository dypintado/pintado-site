"use client";

import { motion } from "framer-motion";

const projects = [
  {
    year: "2026",
    name: "Franny AI",
    tag: "Voice AI",
    description:
      "Built a fully automated AI voice receptionist for Food King restaurant using VAPI. Handles inbound calls, answers FAQs, takes orders, and routes to staff. Deployed and live.",
    stack: ["VAPI", "n8n", "Webhooks"],
  },
  {
    year: "2026",
    name: "BookMe",
    tag: "Web App",
    description:
      "Built a fully functional Calendly-style booking application for a South Florida content creator brand. Custom calendar picker, rate card modal, and availability management.",
    stack: ["React", "localStorage", "Tailwind CSS"],
  },
  {
    year: "2026",
    name: "Shipping Label Automation",
    tag: "Automation",
    description:
      "Built an end-to-end automated shipping label system for an e-commerce client. Orders from WooCommerce automatically generate labels via Shippo and print via PrintNode — zero manual steps.",
    stack: ["WooCommerce", "Shippo", "PrintNode", "n8n"],
  },
  {
    year: "2025",
    name: "Potty Paradise System",
    tag: "Automation",
    description:
      "Built a conversion-optimized landing page and automated their entire email-to-CRM pipeline. Inbound leads now flow directly into their business CRM without manual data entry.",
    stack: ["Next.js", "n8n", "CRM Integration"],
  },
] as const;

export default function HackathonsSection() {
  return (
    <section id="projects" className="px-6 py-28 md:px-12 lg:px-20">
      <div className="mx-auto max-w-3xl">
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
          Selected Work
        </motion.h2>
        <motion.p
          className="mb-16"
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
          Projects
        </motion.p>

        {/* Timeline */}
        <ol className="relative border-l border-[#1E1E1E] pl-8">
          {projects.map((project, i) => (
            <motion.li
              key={project.name}
              className="relative mb-14 last:mb-0"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.09, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Timeline dot — green */}
              <span
                className="absolute left-0 top-2 block h-2 w-2 -translate-x-[calc(50%+0.5px)]"
                style={{ background: "#00ff88", borderRadius: "50%" }}
              />

              {/* Year */}
              <p
                className="mb-1"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#444444",
                }}
              >
                {project.year}
              </p>

              {/* Name + tag */}
              <div className="mb-3 flex flex-wrap items-baseline gap-3">
                <h3
                  style={{
                    fontFamily: "'Bodoni Moda', 'Playfair Display', serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    fontSize: "1.4rem",
                    color: "#F0F0F0",
                    lineHeight: 1.2,
                  }}
                >
                  {project.name}
                </h3>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.58rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "#00ff88",
                    border: "1px solid rgba(0,255,136,0.25)",
                    padding: "2px 8px",
                  }}
                >
                  {project.tag}
                </span>
              </div>

              {/* Description */}
              <p
                className="mb-4 leading-relaxed"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.8rem",
                  color: "#888888",
                  lineHeight: 1.75,
                  borderLeft: "2px solid #00ff88",
                  paddingLeft: "1rem",
                }}
              >
                {project.description}
              </p>

              {/* Stack pills */}
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.58rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#555555",
                      border: "1px solid #1E1E1E",
                      padding: "3px 10px",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
