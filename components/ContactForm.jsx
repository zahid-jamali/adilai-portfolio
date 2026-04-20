"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquareMore, Send, UserRound } from "lucide-react";

export default function ContactForm({
  title = "Contact",
  description = "Use this polished contact interface to present outreach details for professional communication.",
  embedded = false,
}) {
  return (
    <section
      id="contact"
      className={`${embedded ? "bg-transparent py-0" : "section-shell bg-background py-20"}`}
    >
      <div className={`mx-auto max-w-7xl ${embedded ? "" : "px-6 lg:px-8"}`}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="panel grid gap-8 rounded-[2rem] p-8 lg:grid-cols-[0.92fr_1.08fr] lg:p-10"
        >
          <div>
            <span className="section-label">Contact</span>
            <h2 className="section-title">{title}</h2>
            <p className="section-copy">{description}</p>
            <div className="mt-8 grid gap-4">
              {[
                { icon: UserRound, label: "Professional Meetings" },
                { icon: MessageSquareMore, label: "Media & Public Discussions" },
                { icon: Mail, label: "Technology & Legal Consultation" },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-[1.25rem] border border-white/80 bg-white/80 px-4 py-4"
                >
                  <span className="rounded-2xl bg-action/10 p-3 text-action">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-medium text-ink/80">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-4 md:grid-cols-2">
              <input className="form-input" type="text" placeholder="Name" />
              <input className="form-input" type="email" placeholder="Email" />
            </div>
            <input className="form-input" type="text" placeholder="Subject" />
            <textarea
              className="form-input min-h-[180px] resize-none"
              placeholder="Message"
            />
            <button
              type="submit"
              className="inline-flex w-fit items-center justify-center gap-2 rounded-full bg-action px-6 py-4 text-base font-semibold text-white shadow-card transition hover:-translate-y-0.5 hover:bg-secondary"
            >
              <Send className="h-5 w-5" />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
