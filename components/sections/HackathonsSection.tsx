"use client";

import { motion } from "framer-motion";

const placeholders = [
  { year: "2025", title: "Hackathon name", note: "Placeholder — add your project story." },
  { year: "2024", title: "Another build", note: "Placeholder — stack, role, outcome." },
  { year: "2023", title: "Early experiment", note: "Placeholder — what you learned." },
] as const;

export default function HackathonsSection() {
  return (
    <section
      id="hackathons"
      className="px-6 py-28 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-3xl">
        <motion.h2
          className="font-sans mb-16 text-center text-3xl text-[#F0F0F0] md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          Hackathons
        </motion.h2>
        <ol className="relative border-l border-[#F0F0F0]/15 pl-8">
          {placeholders.map((item, i) => (
            <motion.li
              key={item.year + item.title}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{
                delay: i * 0.06,
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <span className="absolute left-0 top-1.5 block h-2 w-2 -translate-x-1/2 rounded-full bg-[#F0F0F0]/35" />
              <p className="font-mono mb-1 text-xs tracking-wider text-[#F0F0F0]/40">
                {item.year}
              </p>
              <h3 className="font-sans mb-2 text-xl text-[#F0F0F0]/90">
                {item.title}
              </h3>
              <p className="font-mono text-sm text-[#F0F0F0]/45">
                {item.note}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
