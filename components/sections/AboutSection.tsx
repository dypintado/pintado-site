"use client";

import { motion } from "framer-motion";

const bio =
  "I started in sales and operations, then taught myself the technical side. Now I build AI systems that bridge both worlds — voice receptionists, workflow automation, and tools built to last.";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="px-6 py-28 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-3xl">
        <motion.p
          className="font-sans text-xl leading-relaxed text-[#F0F0F0]/85 md:text-2xl"
          initial={{ opacity: 0, x: 56 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {bio}
        </motion.p>
      </div>
    </section>
  );
}
