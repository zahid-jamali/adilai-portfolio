"use client";

import { motion } from "framer-motion";

const entries = [
  "Founder & CEO - CodeNergy",
  "Founder & CEO - TechSynergy Pvt Ltd",
  "Anchor - AdilCast",
  "Vice President - Peoples Lawyers Forum",
  "President - Sindh RUJ Pakistan",
  "Lawyer",
];

export default function Timeline() {
  return (
    <section id="experience" className="section-shell bg-background py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Leadership Journey</h2>
        </div>
        <div className="relative mt-12 pl-8">
          <div className="absolute left-3 top-0 h-full w-1 rounded-full bg-action" />
          <div className="space-y-8">
            {entries.map((entry, index) => (
              <motion.div
                key={entry}
                initial={{ opacity: 0, x: -18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="panel relative rounded-[1.75rem] p-6"
              >
                <div className="absolute -left-[2.15rem] top-8 h-5 w-5 rounded-full border-4 border-background bg-action" />
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-action/80">
                  Milestone {index + 1}
                </p>
                <h3 className="mt-2 text-xl font-semibold text-ink">{entry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
