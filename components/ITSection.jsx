"use client";

import { motion } from "framer-motion";
import { Building2, Code2, Network, ShieldCheck, Smartphone } from "lucide-react";

const companies = [
  {
    name: "CodeNergy",
    description:
      "A software development company headquartered in UAE with a branch in Karachi DHA Phase 2.",
    services: [
      { name: "Software Development", icon: Code2 },
      { name: "Web Development", icon: Building2 },
      { name: "Mobile Applications", icon: Smartphone },
      { name: "Enterprise Solutions", icon: ShieldCheck },
      { name: "IT Consulting", icon: Network },
    ],
  },
  {
    name: "TechSynergy Pvt Ltd",
    description:
      "A local IT infrastructure solutions company delivering enterprise IT and networking services.",
    services: [
      { name: "IT Infrastructure", icon: Building2 },
      { name: "Networking", icon: Network },
      { name: "Cybersecurity", icon: ShieldCheck },
      { name: "Data Center Solutions", icon: Code2 },
      { name: "Power Backup Systems", icon: Smartphone },
    ],
  },
];

export default function ITSection() {
  return (
    <section id="it" className="section-shell bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="section-label">Technology</span>
          <h2 className="section-title">Technology Leadership</h2>
          <p className="section-copy">
            Building modern digital capability through software innovation, enterprise
            infrastructure, and practical consulting leadership.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {companies.map((company, index) => (
            <motion.article
              key={company.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="panel rounded-[2rem] bg-mesh-gradient p-8 transition-shadow hover:shadow-card"
            >
              <h3 className="font-display text-3xl font-bold text-ink">
                {company.name}
              </h3>
              <p className="mt-4 text-base leading-8 text-ink/75">
                {company.description}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {company.services.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="rounded-[1.5rem] border border-white bg-white p-4"
                  >
                    <Icon className="h-6 w-6 text-action" />
                    <p className="mt-3 font-medium text-ink">{name}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
