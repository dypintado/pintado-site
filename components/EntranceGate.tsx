"use client";

import { BackgroundPaths } from "@/components/ui/background-paths";
import { AnimatePresence, motion } from "framer-motion";

type EntranceGateProps = {
  visible: boolean;
  onEnter: () => void;
  /** Animated headline on the entrance screen */
  title?: string;
  ctaLabel?: string;
};

export function EntranceGate({
  visible,
  onEnter,
  title = "Welcome",
  ctaLabel = "Enter",
}: EntranceGateProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="dark fixed inset-0 z-50 h-full min-h-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <BackgroundPaths
            title={title}
            ctaLabel={ctaLabel}
            onCtaClick={onEnter}
            className="min-h-full bg-[#080808] dark:bg-[#080808]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
