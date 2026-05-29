  "use client";

import React from "react";
import { motion } from "framer-motion";

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

// ─── LinkedIn Icon ─────────────────────────────────────────────────────────────
function LinkedInIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// ─── Liquid Glass Button ──────────────────────────────────────────────────────
function GlassButton({
  href,
  children,
  primary = false,
  target,
  rel,
  download,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  target?: string;
  rel?: string;
  download?: boolean;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
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
    border: hovered ? "1px solid rgba(255,255,255,0.38)" : "1px solid rgba(255,255,255,0.22)",
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
    border: hovered ? "1px solid rgba(255,255,255,0.20)" : "1px solid rgba(255,255,255,0.11)",
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
      download={download}
      style={primary ? primaryStyle : secondaryStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
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
      {/* ── Background image ── */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-photo.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full"
        style={{ objectFit: "cover", objectPosition: "center", display: "block" }}
      />

      {/* ── Gradient overlay: dark left, lighter right ── */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(8,8,8,0.6) 0%, rgba(8,8,8,0.2) 100%)",
        }}
      />

      {/* ── Content — left-aligned ── */}
      <div className="relative z-10 w-full px-8 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Name */}
          <h1
            className="mb-5"
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
                className="block"
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.18, duration: 0.9, type: "spring", stiffness: 90 }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "clamp(0.65rem, 1.2vw, 0.8rem)",
              color: "#888888",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "0.9rem",
              marginBottom: "2.5rem",
            }}
          >
            <span>AI Automation Engineer</span>
            <StarIcon />
            <span>Sales & Marketing</span>
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "0.9rem",
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: "1.5rem",
            }}
          >
            <GlassButton href="/images/pintado.RESUME.pdf" target="_blank" rel="noopener noreferrer" primary>
              Resume / CV
            </GlassButton>

            <GlassButton
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About Me
            </GlassButton>
          </motion.div>

          {/* LinkedIn */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <a
              href="https://www.linkedin.com/in/dylan-pintado-3634022ab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
              style={{
                color: "#444444",
                transition: "color 0.2s",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                textDecoration: "none",
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.62rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#F0F0F0";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#444444";
              }}
            >
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
          </motion.div>

          {/* Scroll hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 1 }}
            style={{ marginTop: "5rem" }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: "1px", height: "48px", background: "linear-gradient(to bottom, #888888, transparent)" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
