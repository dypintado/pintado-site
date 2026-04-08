"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <section
      id="contact"
      className="px-6 py-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-lg">
        <motion.h2
          className="font-sans mb-4 text-3xl text-[#F0F0F0] md:text-4xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          Contact
        </motion.h2>
        <motion.p
          className="font-mono mb-12 text-sm text-[#F0F0F0]/45"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        >
          A short note is enough. I reply in kind.
        </motion.p>
        <motion.form
          className="flex flex-col gap-10"
          onInput={() => setSent(false)}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <label className="flex flex-col gap-2">
            <span className="font-mono text-xs tracking-widest text-[#F0F0F0]/35 uppercase">
              Name
            </span>
            <input
              name="name"
              required
              className="border-0 border-b border-[#F0F0F0]/20 bg-transparent py-2 font-sans text-lg text-[#F0F0F0] outline-none transition-colors placeholder:text-[#F0F0F0]/25 focus:border-[#F0F0F0]/45"
              placeholder=""
              autoComplete="name"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-mono text-xs tracking-widest text-[#F0F0F0]/35 uppercase">
              Email
            </span>
            <input
              name="email"
              type="email"
              required
              className="border-0 border-b border-[#F0F0F0]/20 bg-transparent py-2 font-sans text-lg text-[#F0F0F0] outline-none transition-colors placeholder:text-[#F0F0F0]/25 focus:border-[#F0F0F0]/45"
              placeholder=""
              autoComplete="email"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="font-mono text-xs tracking-widest text-[#F0F0F0]/35 uppercase">
              Message
            </span>
            <textarea
              name="message"
              required
              rows={4}
              className="resize-none border-0 border-b border-[#F0F0F0]/20 bg-transparent py-2 font-sans text-lg leading-relaxed text-[#F0F0F0] outline-none transition-colors placeholder:text-[#F0F0F0]/25 focus:border-[#F0F0F0]/45"
              placeholder=""
            />
          </label>
          <div className="flex items-center gap-6 pt-2">
            <button
              type="submit"
              className="font-mono border border-[#F0F0F0]/25 px-8 py-2.5 text-xs tracking-[0.25em] text-[#F0F0F0] uppercase transition-colors hover:border-[#F0F0F0]/50"
            >
              Send
            </button>
            {sent && (
              <span className="font-mono text-xs text-[#F0F0F0]/40">
                Noted — wire this to your backend when ready.
              </span>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
