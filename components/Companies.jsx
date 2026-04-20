"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ImageSlot from "@/components/ImageSlot";

const companies = [
  {
    name: "CodeNergy",
    description: "Software development and technology consulting company.",
  },
  {
    name: "TechSynergy Pvt Ltd",
    description: "Enterprise IT infrastructure and networking company.",
  },
];

export default function Companies({ companyImages = {} }) {
  return (
    <section id="companies" className="section-shell bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="section-label">Companies</span>

          <h2 className="section-title">Organizations Built for Impact</h2>

          <p className="section-copy">
            Visual company blocks designed to handle any image size without
            breaking layout.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {companies.map((company, index) => (
            <motion.article
              key={company.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="panel rounded-3xl overflow-hidden"
            >
              {/* IMAGE */}

              <div className="relative w-full overflow-hidden rounded-2xl">
                <ImageSlot
                  src={companyImages[company.name]}
                  alt={`${company.name} showcase`}
                  label={`${company.name} Image`}
                  className="aspect-auto w-full"
                  imageClassName="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              {/* CONTENT */}

              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-bold text-ink">
                    {company.name}
                  </h3>

                  <p className="mt-4 max-w-xl text-base leading-8 text-ink/75">
                    {company.description}
                  </p>

                  <div className="mt-6 inline-flex rounded-full bg-action/10 px-4 py-2 text-sm font-semibold text-action">
                    Enterprise-ready brand presence
                  </div>
                </div>

                <span className="rounded-full bg-action/10 p-3 text-action shrink-0">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
