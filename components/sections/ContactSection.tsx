"use client";

import { motion } from "framer-motion";
import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  inquiry: string;
  message: string;
};

const INQUIRY_OPTIONS = [
  { value: "", label: "What are you looking for?" },
  { value: "hire", label: "I want to hire Dylan full-time" },
  { value: "automate", label: "I need AI automation built for my business" },
  { value: "collab", label: "I want to collaborate" },
  { value: "other", label: "Other" },
];

const inputBase: React.CSSProperties = {
  fontFamily: "'DM Mono', monospace",
  fontSize: "0.85rem",
  color: "#F0F0F0",
  background: "#0d0d0d",
  border: "1px solid #1E1E1E",
  borderRadius: 0,
  outline: "none",
  padding: "0.75rem 1rem",
  width: "100%",
  transition: "border-color 0.2s",
};

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", inquiry: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function updateField(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (status !== "idle") setStatus("idle");
  }

  async function handleSubmit() {
    if (!form.name || !form.email || !form.inquiry || !form.message) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", inquiry: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-6 py-28 md:px-12 lg:px-20">
      <div className="mx-auto max-w-5xl">
        {/* Heading */}
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
          Let&apos;s Build Something
        </motion.h2>
        <motion.p
          className="mb-14"
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.8rem",
            color: "#888888",
            lineHeight: 1.75,
            maxWidth: "480px",
          }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          Whether you&apos;re looking to hire or looking to automate — I want to hear from you.
        </motion.p>

        {/* Two-column layout */}
        <div className="grid gap-16 lg:grid-cols-[1fr_360px]">
          {/* ── Form ── */}
          <motion.div
            className="flex flex-col gap-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#444444",
                }}
              >
                Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
                placeholder=""
                required
                style={inputBase}
                onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "#00ff88"; }}
                onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "#1E1E1E"; }}
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#444444",
                }}
              >
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => updateField("email", e.target.value)}
                placeholder=""
                required
                style={inputBase}
                onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = "#00ff88"; }}
                onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = "#1E1E1E"; }}
              />
            </div>

            {/* Inquiry type */}
            <div className="flex flex-col gap-2">
              <label
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#444444",
                }}
              >
                What are you looking for?
              </label>
              <select
                value={form.inquiry}
                onChange={(e) => updateField("inquiry", e.target.value)}
                required
                style={{
                  ...inputBase,
                  appearance: "none",
                  cursor: "pointer",
                  color: form.inquiry ? "#F0F0F0" : "#444444",
                }}
                onFocus={(e) => { (e.target as HTMLSelectElement).style.borderColor = "#00ff88"; }}
                onBlur={(e) => { (e.target as HTMLSelectElement).style.borderColor = "#1E1E1E"; }}
              >
                {INQUIRY_OPTIONS.map((opt) => (
                  <option
                    key={opt.value}
                    value={opt.value}
                    disabled={opt.value === ""}
                    style={{ background: "#0d0d0d", color: "#F0F0F0" }}
                  >
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#444444",
                }}
              >
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => updateField("message", e.target.value)}
                placeholder=""
                required
                rows={5}
                style={{ ...inputBase, resize: "vertical", lineHeight: 1.7 }}
                onFocus={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "#00ff88"; }}
                onBlur={(e) => { (e.target as HTMLTextAreaElement).style.borderColor = "#1E1E1E"; }}
              />
            </div>

            {/* Submit */}
            <div className="flex items-center gap-6 pt-2">
              <button
                onClick={handleSubmit}
                disabled={status === "loading" || !form.name || !form.email || !form.inquiry || !form.message}
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  padding: "0.85rem 2.4rem",
                  background: status === "loading" ? "#00cc6e" : "#00ff88",
                  color: "#080808",
                  fontWeight: 700,
                  border: "none",
                  cursor: status === "loading" ? "wait" : "pointer",
                  transition: "background 0.2s, opacity 0.2s",
                  opacity: (!form.name || !form.email || !form.inquiry || !form.message) ? 0.4 : 1,
                  borderRadius: 0,
                }}
              >
                {status === "loading" ? "Sending..." : "Send It →"}
              </button>

              {status === "success" && (
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.7rem",
                    color: "#00ff88",
                    letterSpacing: "0.08em",
                  }}
                >
                  Message received. I&apos;ll be in touch.
                </span>
              )}
              {status === "error" && (
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.7rem",
                    color: "#ff4444",
                    letterSpacing: "0.08em",
                  }}
                >
                  Something went wrong. Try LinkedIn instead.
                </span>
              )}
            </div>
          </motion.div>

          {/* ── Right column ── */}
          <motion.div
            className="flex flex-col gap-8 lg:pt-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              <p
                className="mb-4"
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.62rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#444444",
                }}
              >
                Direct Links
              </p>

              <a
                href="https://www.linkedin.com/in/dylan-pintado-3634022ab"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 mb-6"
                style={{ textDecoration: "none" }}
              >
                <span
                  style={{
                    color: "#555555",
                    transition: "color 0.2s",
                  }}
                  className="group-hover:text-[#F0F0F0]"
                >
                  <LinkedInIcon />
                </span>
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    color: "#888888",
                    transition: "color 0.2s",
                  }}
                  className="group-hover:text-[#F0F0F0]"
                >
                  Connect on LinkedIn →
                </span>
              </a>

              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.72rem",
                  color: "#444444",
                  lineHeight: 1.75,
                }}
              >
                Prefer email? Reach out on LinkedIn for my direct email.
              </p>
            </div>

            <div
              style={{
                borderTop: "1px solid #1E1E1E",
                paddingTop: "1.5rem",
              }}
            >
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.68rem",
                  color: "#333333",
                  lineHeight: 1.8,
                  letterSpacing: "0.05em",
                }}
              >
                Based in South Florida.<br />
                Available for full-time roles and freelance projects.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
