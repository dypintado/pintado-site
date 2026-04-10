"use client";

import { motion } from "framer-motion";


const bio = "Where most see a gap between business and technology, I build the bridge. AI-certified, deployment-proven, and backed by a foundation in sales — I deliver intelligent systems built for the real world."
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
