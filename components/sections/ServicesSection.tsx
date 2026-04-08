"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Play } from "lucide-react";

const services = [
  {
    title: "Voice Receptionists",
    body: "Natural phone experiences that route, qualify, and hand off without friction.",
    // Replace with your YouTube embed URL, e.g. "https://www.youtube.com/embed/VIDEO_ID"
    videoUrl: "",
  },
  {
    title: "Backend Automations",
    body: "Pipelines and integrations that remove repetition from how your team works.",
    videoUrl: "",
  },
  {
    title: "AI Content Creation",
    body: "Automated content pipelines that produce on-brand copy, visuals, and posts at scale.",
    videoUrl: "",
  },
  {
    title: "Website Development",
    body: "Fast, minimal sites and landing pages built to convert — designed to last.",
    videoUrl: "",
  },
] as const;

export default function ServicesSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <section id="services" className="px-6 py-28 md:px-12 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            className="font-sans mb-14 text-center text-3xl text-[#F0F0F0] md:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            Services
          </motion.h2>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((s, i) => (
              <motion.article
                key={s.title}
                className="group relative cursor-pointer border border-[#F0F0F0]/10 bg-[#F0F0F0]/[0.02] px-8 py-10 shadow-[0_0_60px_-30px_rgba(240,240,240,0.15)] backdrop-blur-[1px] transition-colors duration-300 hover:border-[#F0F0F0]/25 hover:bg-[#F0F0F0]/[0.04]"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => s.videoUrl && setActiveVideo(s.videoUrl)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && s.videoUrl) setActiveVideo(s.videoUrl);
                }}
                aria-label={`Watch video: ${s.title}`}
              >
                <h3 className="font-sans mb-4 text-xl text-[#F0F0F0]/95 md:text-2xl">
                  {s.title}
                </h3>
                <p className="font-mono text-sm leading-relaxed text-[#F0F0F0]/45">
                  {s.body}
                </p>

                {/* Play hint */}
                <div className="mt-6 flex items-center gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-7 w-7 items-center justify-center border border-[#F0F0F0]/20">
                    <Play size={12} className="text-[#F0F0F0]/60" fill="currentColor" />
                  </div>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.65rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#888888",
                    }}
                  >
                    Watch
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Video Modal ── */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
              onClick={() => setActiveVideo(null)}
            />

            {/* Modal */}
            <motion.div
              className="relative z-10 w-full max-w-3xl mx-4"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Close button */}
              <button
                className="absolute -top-10 right-0 flex items-center gap-2 text-[#888888] transition-colors hover:text-[#F0F0F0]"
                onClick={() => setActiveVideo(null)}
                aria-label="Close video"
              >
                <X size={16} />
                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "0.65rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  Close
                </span>
              </button>

              {/* Video embed */}
              <div className="aspect-video w-full border border-[#F0F0F0]/10 bg-[#111111]">
                <iframe
                  src={activeVideo}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Service video"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
