"use client";

import { BackgroundPaths } from "@/components/ui/background-paths";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

type EntranceGateProps = {
  visible: boolean;
  onEnter: () => void;
  /** Unused visually; kept for API compatibility. Background headline is custom in this gate. */
  title?: string;
  ctaLabel?: string;
};

function EntranceSparkle() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 28"
      width={18}
      height={18}
      className="shrink-0 text-white"
      aria-hidden
      style={{ filter: "drop-shadow(0 0 6px white)" }}
    >
      <title>Sparkle</title>
      <path
        fill="currentColor"
        d="M10 0.5C10.8 7.2 14.6 10.2 19.2 11.6C14.6 13 10.8 16 10 22.7C9.2 16 5.4 13 .8 11.6C5.4 10.2 9.2 7.2 10 0.5z"
      />
    </svg>
  );
}

export function EntranceGate({
  visible,
  onEnter,
  ctaLabel = "Enter",
}: EntranceGateProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="dark fixed inset-0 z-50 h-full min-h-screen [&_div.max-w-4xl>div.group]:hidden [&_h1]:hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <BackgroundPaths
            title=""
            ctaLabel={ctaLabel}
            onCtaClick={onEnter}
            className="min-h-full bg-[#080808] dark:bg-[#080808]"
          />

          <div
            className="pointer-events-none absolute inset-0 z-[15] flex flex-col items-center justify-start px-4"
            style={{ paddingTop: "8vh" }}
          >
            <div className="flex flex-col items-center text-center">
              <p
                className="font-sans mb-2 font-thin tracking-[0.3em] text-white"
                style={{
                  fontSize: "clamp(6rem, 16vw, 11rem)",
                }}
              >
                PINTADO
              </p>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
                <span className="font-mono text-[14px] tracking-[0.25em] text-[#888888] uppercase">
                  AI Automation Engineer
                </span>
                <EntranceSparkle />
                <span className="font-mono text-[14px] tracking-[0.25em] text-[#888888] uppercase">
                  Sales &amp; Marketing
                </span>
              </div>

              <div className="pointer-events-auto mt-[48px]">
                <div className="group relative inline-block overflow-hidden rounded-2xl bg-gradient-to-b from-black/10 to-white/10 p-px shadow-lg backdrop-blur-lg transition-shadow duration-300 hover:shadow-xl dark:from-white/10 dark:to-black/10">
                  <Button
                    type="button"
                    variant="ghost"
                    onClick={onEnter}
                    className="rounded-[1.15rem] border border-black/10 bg-white/95 px-8 py-6 text-lg font-semibold text-black backdrop-blur-md transition-all duration-300 hover:bg-white/100 hover:shadow-md group-hover:-translate-y-0.5 dark:border-white/10 dark:bg-black/95 dark:text-white dark:hover:bg-black/100 dark:hover:shadow-neutral-800/50"
                  >
                    <span className="opacity-90 transition-opacity group-hover:opacity-100">
                      {ctaLabel}
                    </span>
                    <span className="ml-3 opacity-70 transition-all duration-300 group-hover:translate-x-1.5 group-hover:opacity-100">
                      →
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
