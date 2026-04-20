"use client";

import { motion } from "framer-motion";
import { Briefcase, Landmark, Mic2, Network, Presentation } from "lucide-react";
import ImageSlot from "@/components/ImageSlot";

const cards = [
  { title: "Media Appearances", icon: Mic2 },
  { title: "Public Speaking", icon: Presentation },
  { title: "Community Programs", icon: Network },
  { title: "Legal Initiatives", icon: Landmark },
  { title: "Technology Projects", icon: Briefcase },
];

export default function Media({ images = [] }) {
  return (
    <section className="section-shell bg-white py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="section-label">Achievements</span>
          <h2 className="section-title">Media & Achievements</h2>
          <p className="section-copy">
            Showcase public events, interviews, speaking sessions, legal work, and
            campaign visuals with your own images.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45 }}
          >
            <ImageSlot
              src={images[0]}
              alt="Featured media showcase"
              label="Featured Media"
              className="min-h-[320px]"
            />
          </motion.div>
          <div className="grid gap-5">
            {[images[1], images[2]].map((image, index) => (
              <motion.div
                key={`media-image-${index}`}
                initial={{ opacity: 0, x: 18 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <ImageSlot
                  src={image}
                  alt={`Media showcase ${index + 2}`}
                  label={`Media Image ${index + 2}`}
                  className="min-h-[148px]"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {cards.map(({ title, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="panel rounded-[1.75rem] bg-mesh-gradient p-6"
            >
              <Icon className="h-8 w-8 text-action" />
              <h3 className="mt-5 text-lg font-semibold text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/65">
                Curated portfolio block with motion styling for a stronger visual narrative.
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
