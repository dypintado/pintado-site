"use client";

import { motion } from "framer-motion";

// ─── Data ─────────────────────────────────────────────────────────────────────

const hackathons = [
  {
    event: "Pulse AI Hackathon",
    year: "2026 — Event 1",
    project: "AI Voice Therapy Assistant",
    description:
      "Addressed the limitations people with intellectual disabilities face in accessing cognitive behavioral therapy. In five hours, our team developed an AI-powered voice assistant tailored to help individuals with traumatic brain injuries improve memory through interactive, therapeutic storytelling.",
    photoLabel: "📸 Add event photo — /public/hackathon-1.jpg",
    photo: "/hackathon-1.jpg",
    photoHeight: "200px",
  },
  {
    event: "Pulse AI Hackathon",
    year: "2026 — Event 2",
    project: "Loreley — Compliance Intelligence Platform",
    description:
      "Designed Loreley to meet the rigors of real-world compliance with robust audit trails and regulation-grounded checks. Built a two-model prototype: a lead intelligence tool and a compliance officer language tool — turning a 6-week compliance process into 6 minutes.",
    photoLabel: "📸 Add event photo — /public/hackathon-2.jpg",
    photo: "/hackathon-2.jpg",
    photoHeight: "420px",
  },
] as const;

const credentials = [
  {
    icon: "🎓",
    title: "AI Cohort Certification",
    issuer: "Miami Dade College",
    badge: "Completed",
    badgeStyle: "solid" as const,
    note: null,
    photo: "/mdc-cohort.jpg",
    photoContain: false,
    photo2: null,
    title2: null,
    issuer2: null,
    badge2: null,
    badge2Style: null,
  },
  {
    icon: "🔍",
    title: "Prompting Essentials Certification",
    issuer: "Google",
    badge: "Completed",
    badgeStyle: "solid" as const,
    note: null,
    photo: "/google-badge.jpg",
    photoContain: true,
    photo2: "/claude-101.jpg",
    title2: "Claude 101",
    issuer2: "Anthropic",
    badge2: "Completed",
    badge2Style: "solid" as const,
    photo3: "/aws-cert.jpg",
    title3: "AWS AI & ML Scholars",
    issuer3: "Amazon Web Services & Udacity",
    badge3: "Completed",
    badge3Style: "solid" as const,
  },
  {
    icon: "⚡",
    title: "Pulse AI Hackathon",
    issuer: "Pulse AI — Miami",
    badge: "2x Participant",
    badgeStyle: "outline" as const,
    note: null,
    photo: null,
    photoContain: false,
    photo2: null,
    title2: null,
    issuer2: null,
    badge2: null,
    badge2Style: null,
  },
  {
    icon: "🧠",
    title: "AI Development Cohort",
    issuer: "Ja'dan Johnson",
    badge: "Currently Enrolled",
    badgeStyle: "outline" as const,
    note: "Covering vibe coding, web and app development, and AI product building under one of Miami's leading AI practitioners.",
    photo: null,
    photoContain: false,
    photo2: null,
    title2: null,
    issuer2: null,
    badge2: null,
    badge2Style: null,
  },
] as const;

// ─── Sub-components ───────────────────────────────────────────────────────────

type HackathonCardData = {
  event: string;
  year: string;
  project: string;
  description: string;
  photoLabel: string;
  photo: string | null;
  photoHeight: string;
};

function HackathonCard({
  card,
  index,
}: {
  card: HackathonCardData;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: "#0f0f0f",
        border: "1px solid #1E1E1E",
        borderRadius: "4px",
        overflow: "hidden",
        transition: "border-color 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,136,0.3)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#1E1E1E";
      }}
    >
      {/* Image */}
      {card.photo ? (
        <img
          src={card.photo}
          alt={card.project}
          style={{ width: "100%", height: card.photoHeight, objectFit: "cover", objectPosition: "center center", display: "block" }}
        />
      ) : (
        <div
          style={{
            width: "100%",
            height: "200px",
            background: "#1a1a1a",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.65rem",
              color: "#444444",
              letterSpacing: "0.08em",
              textAlign: "center",
              padding: "0 1rem",
            }}
          >
            {card.photoLabel}
          </span>
        </div>
      )}

      {/* Content */}
      <div style={{ padding: "1.75rem" }}>
        {/* Event + year */}
        <div
          style={{
            marginBottom: "0.75rem",
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            alignItems: "baseline",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.58rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#00ff88",
              border: "1px solid rgba(0,255,136,0.25)",
              padding: "2px 8px",
              borderRadius: "2px",
            }}
          >
            {card.event}
          </span>
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.6rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#444444",
            }}
          >
            {card.year}
          </span>
        </div>

        {/* Project title */}
        <h3
          style={{
            fontFamily: "'Bodoni Moda', 'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "1.25rem",
            color: "#F0F0F0",
            lineHeight: 1.25,
            marginBottom: "0.9rem",
          }}
        >
          {card.project}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.78rem",
            color: "#888888",
            lineHeight: 1.75,
          }}
        >
          {card.description}
        </p>
      </div>
    </motion.article>
  );
}

function CredentialItem({
  item,
  index,
}: {
  item: (typeof credentials)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: "#0f0f0f",
        border: "1px solid #1E1E1E",
        borderRadius: "4px",
        padding: item.photo ? "0" : "1.5rem",
        transition: "border-color 0.3s",
        overflow: "hidden",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,255,136,0.3)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#1E1E1E";
      }}
    >
      <div style={{ display: "flex", alignItems: "stretch" }}>
        {/* Left: content */}
        <div style={{ flex: 1, padding: "1.5rem" }}>
      <div style={{ marginBottom: "0.75rem", fontSize: "1.4rem" }}>{item.icon}</div>

      <h4
        style={{
          fontFamily: "'Bodoni Moda', 'Playfair Display', serif",
          fontStyle: "italic",
          fontWeight: 400,
          fontSize: "1.05rem",
          color: "#F0F0F0",
          lineHeight: 1.25,
          marginBottom: "0.3rem",
        }}
      >
        {item.title}
      </h4>

      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.68rem",
          color: "#555555",
          letterSpacing: "0.06em",
          marginBottom: "0.9rem",
        }}
      >
        {item.issuer}
      </p>

      {/* Badge */}
      <span
        style={
          item.badgeStyle === "solid"
            ? {
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.56rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                background: "#00ff88",
                color: "#080808",
                fontWeight: 700,
                padding: "3px 10px",
                borderRadius: "2px",
                display: "inline-block",
              }
            : {
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.56rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                border: "1px solid rgba(0,255,136,0.4)",
                color: "#00ff88",
                padding: "3px 10px",
                borderRadius: "2px",
                display: "inline-block",
              }
        }
      >
        {item.badge}
      </span>

      {/* Optional note */}
      {item.note && (
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.68rem",
            color: "#444444",
            lineHeight: 1.75,
            marginTop: "0.85rem",
          }}
        >
          {item.note}
        </p>
      )}

      {/* Optional second credential */}
      {item.title2 && (
        <div style={{ borderTop: "1px solid #1E1E1E", marginTop: "1rem", paddingTop: "1rem" }}>
          <h4
            style={{
              fontFamily: "'Bodoni Moda', 'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "1.05rem",
              color: "#F0F0F0",
              lineHeight: 1.25,
              marginBottom: "0.3rem",
            }}
          >
            {item.title2}
          </h4>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.68rem",
              color: "#555555",
              letterSpacing: "0.06em",
              marginBottom: "0.9rem",
            }}
          >
            {item.issuer2}
          </p>
          <span
            style={
              item.badge2Style === "solid"
                ? {
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.56rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    background: "#00ff88",
                    color: "#080808",
                    fontWeight: 700,
                    padding: "3px 10px",
                    borderRadius: "2px",
                    display: "inline-block",
                  }
                : {
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.56rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    border: "1px solid rgba(0,255,136,0.4)",
                    color: "#00ff88",
                    padding: "3px 10px",
                    borderRadius: "2px",
                    display: "inline-block",
                  }
            }
          >
            {item.badge2}
          </span>
        </div>
      )}

      {/* Optional third credential */}
      {"title3" in item && item.title3 && (
        <div style={{ borderTop: "1px solid #1E1E1E", marginTop: "1rem", paddingTop: "1rem" }}>
          <h4
            style={{
              fontFamily: "'Bodoni Moda', 'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "1.05rem",
              color: "#F0F0F0",
              lineHeight: 1.25,
              marginBottom: "0.3rem",
            }}
          >
            {item.title3}
          </h4>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.68rem",
              color: "#555555",
              letterSpacing: "0.06em",
              marginBottom: "0.9rem",
            }}
          >
            {item.issuer3}
          </p>
          <span
            style={
              item.badge3Style === "solid"
                ? {
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.56rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    background: "#00ff88",
                    color: "#080808",
                    fontWeight: 700,
                    padding: "3px 10px",
                    borderRadius: "2px",
                    display: "inline-block",
                  }
                : {
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.56rem",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    border: "1px solid rgba(0,255,136,0.4)",
                    color: "#00ff88",
                    padding: "3px 10px",
                    borderRadius: "2px",
                    display: "inline-block",
                  }
            }
          >
            {item.badge3}
          </span>
        </div>
      )}
        </div>{/* end left */}

        {/* Right: photo (only when present) */}
        {item.photo && (
          <div style={{ flexShrink: 0, width: "140px" }}>
            {item.photoContain ? (
              <>
                <img
                  src={item.photo}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "contain",
                    background: "#111111",
                    padding: "12px",
                    borderRadius: item.photo2 ? "4px 4px 0 0" : "4px",
                    marginBottom: 0,
                    display: "block",
                  }}
                />
                {item.photo2 && (
                  <img
                    src={item.photo2}
                    alt={item.title2 ?? ""}
                    style={{
                      width: "100%",
                      height: "140px",
                      objectFit: "contain",
                      background: "#111111",
                      padding: "8px",
                      borderRadius: "title3" in item && item.title3 ? "0" : "0 0 4px 4px",
                      margin: 0,
                      display: "block",
                    }}
                  />
                )}
                {"photo3" in item && item.photo3 && (
                  <img
                    src={item.photo3}
                    alt={"title3" in item ? (item.title3 ?? "") : ""}
                    style={{
                      width: "100%",
                      height: "140px",
                      objectFit: "contain",
                      background: "#111111",
                      padding: "8px",
                      borderRadius: "0 0 4px 4px",
                      margin: 0,
                      display: "block",
                    }}
                  />
                )}
              </>
            ) : (
              <div style={{ overflow: "hidden", height: "260px", borderRadius: "4px" }}>
                <img
                  src={item.photo}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "260px",
                    objectFit: "cover",
                    objectPosition: "center 10%",
                    display: "block",
                  }}
                />
              </div>
            )}
          </div>
        )}
      </div>{/* end flex row */}
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-6 py-28 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">

        {/* Section header */}
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
          Hackathons &amp; Credentials
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
          Experience &amp; Recognition
        </motion.p>

        {/* Hackathon cards */}
        <div className="grid gap-6 md:grid-cols-2 mb-16">
          {hackathons.map((card, i) => (
            <HackathonCard key={card.project} card={card} index={i} />
          ))}
        </div>

        {/* Credentials sub-header */}
        <motion.p
          className="mb-8"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.62rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#444444",
            borderTop: "1px solid #1E1E1E",
            paddingTop: "2rem",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-30px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Certifications &amp; Cohorts
        </motion.p>

        {/* Credential grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {credentials.map((item, i) => (
            <CredentialItem key={item.title} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
