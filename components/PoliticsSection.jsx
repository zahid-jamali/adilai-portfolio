"use client";

import { motion } from "framer-motion";
import { Building, HandHeart, Landmark, Users, Vote } from "lucide-react";

const responsibilities = [
  { label: "Public Service", icon: HandHeart },
  { label: "Policy Support", icon: Landmark },
  { label: "Community Leadership", icon: Users },
  { label: "Social Welfare", icon: Building },
  { label: "Public Representation", icon: Vote },
];

export default function PoliticsSection() {
  return (
    <section id="politics" className="section-shell bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="max-w-3xl"
        >
          <span className="section-label">Public Leadership</span>
          <h2 className="section-title">Political & Public Leadership</h2>
          <p className="section-copy">
            Adil Ali actively contributes to public service and political
            leadership initiatives, working toward community development and
            institutional improvement.
          </p>
        </motion.div>
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {responsibilities.map(({ label, icon: Icon }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="panel rounded-[1.5rem] p-6"
            >
              <Icon className="h-7 w-7 text-action" />
              <h3 className="mt-4 text-lg font-semibold text-ink">{label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
