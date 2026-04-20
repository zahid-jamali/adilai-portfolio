"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import ImageSlot from "@/components/ImageSlot";

const roles = [
  "Founder & CEO of CodeNergy",
  "Founder & CEO of TechSynergy Pvt Ltd",
  "Anchor of AdilCast News Channel",
  "Vice President Peoples Lawyers Forum Karachi Division",
  "President Sindh RUJ Pakistan",
  "Practicing Lawyer",
  "Author of the book Adliyat",
];

export default function About({ primaryImage, secondaryImage }) {
  return (
    <section id="about" className="section-shell bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">About</span>
          <h2 className="section-title">About Adil Ali</h2>
          <p className="section-copy">
            Adil Ali is a dynamic leader with over 15 years of professional
            experience across technology, media, law, and public service. He
            has successfully built organizations, led teams, delivered
            enterprise solutions, and served communities through leadership and
            advocacy.
          </p>
          <div className="panel mt-8 rounded-[1.75rem] p-6">
            <div className="flex items-start gap-4">
              <span className="rounded-2xl bg-action/10 p-3 text-action">
                <Quote className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary/70">
                  Leadership Philosophy
                </p>
                <p className="mt-3 text-base leading-8 text-ink/75">
                  Building institutions, strengthening public voice, and advancing justice
                  through disciplined leadership and long-term vision.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="panel rounded-[2rem] p-8"
        >
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-4">
              <ImageSlot
                src={primaryImage}
                alt="Adil Ali profile"
                label="Profile Image"
                className="min-h-[360px]"
              />
              <ImageSlot
                src={secondaryImage}
                alt="Adil Ali secondary profile"
                label="Secondary Image"
                className="min-h-[220px]"
              />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-action/80">
                Current Roles
              </p>
              <div className="mt-6 grid gap-4">
                {roles.map((role, index) => (
                  <motion.div
                    key={role}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    className="rounded-[1.5rem] border border-white/90 bg-white/90 p-4 shadow-sm transition hover:-translate-y-1 hover:border-accent/60"
                  >
                    <p className="text-sm leading-7 text-ink/80">{role}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
