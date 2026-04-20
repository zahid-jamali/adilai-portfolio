"use client";

import { motion } from "framer-motion";
import { Mic, Newspaper, Speech, Users, Video } from "lucide-react";

const responsibilities = [
  { label: "News Anchoring", icon: Mic },
  { label: "Public Interviews", icon: Users },
  { label: "Social Awareness", icon: Newspaper },
  { label: "Media Discussions", icon: Speech },
  { label: "Community Communication", icon: Video },
];

export default function JournalistSection() {
  return (
    <section id="journalist" className="section-shell bg-background py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <span className="section-label">Media</span>
          <h2 className="section-title">Journalism & Media</h2>
          <p className="section-copy">
            Adil Ali is the founder and anchor of AdilCast, a news and media
            platform focused on public awareness, leadership discussions, and
            community engagement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {responsibilities.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="panel rounded-[1.5rem] p-6"
            >
              <Icon className="h-7 w-7 text-action" />
              <h3 className="mt-4 text-lg font-semibold text-ink">{label}</h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
