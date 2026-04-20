"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Landmark,
  Mic2,
  Scale,
} from "lucide-react";
import ImageSlot from "@/components/ImageSlot";

const highlights = [
  {
    icon: BriefcaseBusiness,
    title: "Business Builder",
    text: "Leading ventures across software and infrastructure.",
  },
  {
    icon: Mic2,
    title: "Media Voice",
    text: "Connecting communities through journalism.",
  },
  {
    icon: Scale,
    title: "Legal Advocate",
    text: "Championing justice and legal awareness.",
  },
  {
    icon: Landmark,
    title: "Public Leader",
    text: "Driving people-centered initiatives.",
  },
];

const stats = [
  { value: "15+", label: "Years of leadership" },
  { value: "4", label: "Professional domains" },
  { value: "2", label: "Technology companies" },
];

export default function Hero({ heroImage }) {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-action/20 bg-white px-4 py-2 text-sm font-semibold shadow-sm">
              <BriefcaseBusiness className="h-4 w-4 text-action" />
              Leadership Portfolio
            </span>

            <h1 className="mt-6 font-display text-5xl font-bold text-ink sm:text-6xl lg:text-7xl">
              Adil Ali
            </h1>

            <p className="mt-5 text-xl font-semibold text-secondary">
              Entrepreneur | Journalist | Lawyer | Public Leader
            </p>

            <p className="mt-6 max-w-xl text-lg text-ink/70">
              A multidisciplinary leader with experience in technology, media,
              law, and public service — focused on innovation, justice, and
              community development.
            </p>

            {/* BUTTONS */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/#about"
                className="inline-flex items-center gap-2 rounded-full bg-action px-7 py-4 font-semibold text-white shadow-lg transition hover:scale-105"
              >
                View Profile
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-secondary/20 px-7 py-4 font-semibold transition hover:bg-white"
              >
                Contact
              </Link>
            </div>

            {/* STATS */}

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl bg-white p-6 shadow-md"
                >
                  <p className="text-3xl font-bold text-ink">{item.value}</p>

                  <p className="mt-2 text-sm text-secondary">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <ImageSlot
                src={heroImage}
                alt="Adil Ali portrait"
                className="aspect-[4/5]"
                imageClassName="object-cover"
              />

              {/* VERIFIED BADGE */}

              <div className="absolute top-6 right-6 rounded-xl bg-white p-3 shadow-lg">
                <BadgeCheck className="h-6 w-6 text-action" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* HIGHLIGHTS */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border bg-white p-6 transition hover:shadow-xl"
            >
              <span className="inline-flex rounded-xl bg-action/10 p-3 text-action">
                <Icon className="h-5 w-5" />
              </span>

              <h3 className="mt-4 text-lg font-semibold">{title}</h3>

              <p className="mt-3 text-sm text-secondary">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
