"use client";

import { motion } from "framer-motion";
import { BadgeCheck, BookOpenText, Scale, Shield, Users } from "lucide-react";

const roles = [
  "Practicing Lawyer",
  "Vice President Peoples Lawyers Forum Karachi Division",
  "President Sindh RUJ Pakistan",
];

const focusAreas = [
  { label: "Legal Advocacy", icon: Scale },
  { label: "Public Rights", icon: BadgeCheck },
  { label: "Legal Awareness", icon: BookOpenText },
  { label: "Community Support", icon: Users },
  { label: "Justice and Accountability", icon: Shield },
];

export default function LawyerSection() {
  return (
    <section id="lawyer" className="section-shell bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55 }}
          >
            <span className="section-label">Law</span>
            <h2 className="section-title">Legal Career</h2>
            <p className="section-copy">
              Adil Ali is a practicing lawyer dedicated to justice, legal
              advocacy, and community support.
            </p>
            <div className="mt-8 space-y-3">
              {roles.map((role) => (
                <div
                  key={role}
                  className="rounded-[1.25rem] border border-accent/25 bg-background px-5 py-4 text-ink/80 shadow-sm transition hover:border-action/30"
                >
                  {role}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {focusAreas.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="panel rounded-[1.5rem] bg-mesh-gradient p-6"
              >
                <Icon className="h-7 w-7 text-action" />
                <h3 className="mt-4 text-lg font-semibold text-ink">{label}</h3>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
