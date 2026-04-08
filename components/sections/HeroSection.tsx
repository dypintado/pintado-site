"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type HeroSectionProps = {
  revealed: boolean;
};

export default function HeroSection({ revealed }: HeroSectionProps) {
  return (
    <section className="relative min-h-[min(100vh,900px)] px-6 py-24 md:px-12 lg:px-20">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16">
        <motion.div
          className="hero-glitch relative mx-auto aspect-[3/4] w-full max-w-[320px] overflow-hidden border border-[#F0F0F0]/12 lg:mx-0 lg:max-w-none"
          initial={false}
          animate={
            revealed
              ? { opacity: 1, filter: "brightness(1)" }
              : { opacity: 0, filter: "brightness(0.4)" }
          }
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-glitch__base relative h-full w-full bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-[#0d0d0d]">
            <Image
              src="/globe.svg"
              alt=""
              fill
              className="object-contain p-12 opacity-40 invert"
              priority
            />
          </div>
          <div
            className="hero-glitch__r pointer-events-none absolute inset-0 mix-blend-screen"
            aria-hidden
          />
          <div
            className="hero-glitch__g pointer-events-none absolute inset-0 mix-blend-screen"
            aria-hidden
          />
        </motion.div>

        <div className="flex flex-col gap-6 text-center lg:text-left">
          <motion.h1
            className="font-sans text-4xl leading-tight tracking-tight text-[#F0F0F0] md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 24 }}
            animate={
              revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
            }
            transition={{
              delay: revealed ? 0.2 : 0,
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Your Name
          </motion.h1>
          <motion.p
            className="font-mono text-sm leading-relaxed tracking-wide text-[#F0F0F0]/55 md:text-base"
            initial={{ opacity: 0, y: 18 }}
            animate={
              revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }
            }
            transition={{
              delay: revealed ? 0.45 : 0,
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Builder · Voice systems · Automation
          </motion.p>
        </div>
      </div>
    </section>
  );
}
