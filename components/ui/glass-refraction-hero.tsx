"use client";

import React from "react";
import { motion } from "framer-motion";
import { MeshGradient } from "@paper-design/shaders-react";

// ─── Elongated needle-thin four-pointed star ──────────────────────────────────
function StarIcon() {
  return (
    <svg
      width="13"
      height="38"
      viewBox="0 0 13 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}
    >
      <defs>
        {/* Soft outer bloom */}
        <filter id="star-bloom" x="-250%" y="-25%" width="600%" height="150%">
          <feGaussianBlur stdDeviation="2.5" result="bloom" />
          <feGaussianBlur stdDeviation="1" result="crisp" />
          <feMerge>
            <feMergeNode in="bloom" />
            <feMergeNode in="crisp" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/*
        Elongated four-pointed star:
        Center (6.5, 19) — long needle vertical, short horizontal bar.
        Quadratic bezier control points pulled to center create the
        elegant concave-curve waist between each axis.
        Vertical: tip at y=0.5 and y=37.5  (long axis, ≈37px)
        Horizontal: tip at x=0.5 and x=12.5 (short axis, ≈12px)
      */}
      <path
        d="M6.5 0.5
           Q7.4 18.1 12.5 19
           Q7.4 19.9 6.5 37.5
           Q5.6 19.9 0.5 19
           Q5.6 18.1 6.5 0.5Z"
        fill="white"
        filter="url(#star-bloom)"
      />
    </svg>
  );
}

// ─── Liquid Glass Button (Apple visionOS/iOS 26 style) ────────────────────────
function GlassButton({
  href,
  children,
  primary = false,
  target,
  rel,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  target?: string;
  rel?: string;
}) {
  const [hovered, setHovered] = React.useState(false);

  const shared: React.CSSProperties = {
    fontFamily: "'DM Mono', monospace",
    fontSize: "0.72rem",
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    padding: "0.9rem 2.4rem",
    cursor: "pointer",
    textDecoration: "none",
    display: "inline-block",
    borderRadius: "7px",
    position: "relative",
    overflow: "hidden",
    transition: "all 0.32s cubic-bezier(0.22, 1, 0.36, 1)",
    backdropFilter: "blur(28px) saturate(1.9)",
    WebkitBackdropFilter: "blur(28px) saturate(1.9)",
  };

  const primaryStyle: React.CSSProperties = {
    ...shared,
    background: hovered
      ? "linear-gradient(145deg, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0.10) 60%, rgba(255,255,255,0.04) 100%)"
      : "linear-gradient(145deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.07) 60%, rgba(255,255,255,0.02) 100%)",
    border: hovered
      ? "1px solid rgba(255,255,255,0.38)"
      : "1px solid rgba(255,255,255,0.22)",
    boxShadow: hovered
      ? "inset 0 1.5px 0 rgba(255,255,255,0.28), inset 0 -1px 0 rgba(0,0,0,0.2), 0 8px 32px rgba(0,0,0,0.55), 0 0 0 0.5px rgba(255,255,255,0.10)"
      : "inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,0,0.15), 0 4px 20px rgba(0,0,0,0.4), 0 0 0 0.5px rgba(255,255,255,0.06)",
    color: "#F0F0F0",
  };

  const secondaryStyle: React.CSSProperties = {
    ...shared,
    background: hovered
      ? "linear-gradient(145deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 100%)"
      : "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
    border: hovered
      ? "1px solid rgba(255,255,255,0.20)"
      : "1px solid rgba(255,255,255,0.11)",
    boxShadow: hovered
      ? "inset 0 1px 0 rgba(255,255,255,0.15), 0 4px 18px rgba(0,0,0,0.35)"
      : "inset 0 1px 0 rgba(255,255,255,0.08), 0 2px 10px rgba(0,0,0,0.25)",
    color: hovered ? "#D0D0D0" : "#777777",
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      style={primary ? primaryStyle : secondaryStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
}

// ─── Main Hero Component ───────────────────────────────────────────────────────
export function GlassRefractionHero() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#080808" }}
      role="banner"
      aria-label="Hero section"
    >
      {/* ── MeshGradient background — black / grey ── */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#080808", "#111111", "#1a1a1a", "#222222"]}
        speed={0.6}
        distortion={0.3}
        swirl={0.2}
      />

      {/* ── Content ── */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Name — Didot-style (Bodoni Moda italic) */}
          <h1
            className="mb-6"
            style={{
              fontFamily: "'Bodoni Moda', 'Didot', 'GFS Didot', 'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              color: "#F0F0F0",
              letterSpacing: "-0.01em",
              lineHeight: 1,
              fontOpticalSizing: "auto",
            }}
          >
            {["Dylan", "Pintado"].map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-6 last:mr-0"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: i * 0.18,
                  duration: 0.9,
                  type: "spring",
                  stiffness: 90,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle with star icon */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "clamp(0.75rem, 1.5vw, 1rem)",
              color: "#888888",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.75rem",
              marginBottom: "2.5rem",
            }}
          >
            <span>AI Automation Engineer</span>
            <StarIcon />
            <span>Sales &amp; Marketing</span>
          </motion.p>

          {/* Buttons — Liquid Glass */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "0.9rem",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <GlassButton
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              primary
            >
              Resume / CV
            </GlassButton>

            <GlassButton href="#about">
              About Me
            </GlassButton>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            style={{
              marginTop: "5rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              style={{
                width: "1px",
                height: "48px",
                background:
                  "linear-gradient(to bottom, #888888, transparent)",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
