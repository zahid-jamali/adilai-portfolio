"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "IT", href: "/#it" },
  { label: "Journalist", href: "/#journalist" },
  { label: "Lawyer", href: "/#lawyer" },
  { label: "Politics", href: "/#politics" },
  { label: "Companies", href: "/#companies" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <nav className="mx-auto mt-4 w-[min(94%,82rem)] rounded-[2rem] border border-white/70 bg-white/82 px-4 py-3 shadow-soft backdrop-blur lg:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 font-display text-xl font-bold tracking-tight text-ink"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-action to-secondary text-sm font-bold text-white shadow-card">
              AA
            </span>
            <span>
              Adil Ali
              <span className="block text-xs font-medium uppercase tracking-[0.24em] text-secondary/70">
                Public Portfolio
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    active
                      ? "bg-action text-white shadow-sm"
                      : "text-ink/70 hover:bg-background hover:text-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden rounded-full bg-action px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-secondary lg:inline-flex"
            >
              Contact Now
            </Link>
            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setIsOpen((value) => !value)}
              className="inline-flex rounded-2xl border border-secondary/10 bg-background p-3 text-secondary lg:hidden"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="mt-4 grid gap-2 border-t border-secondary/10 pt-4 lg:hidden">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-ink/80 transition hover:bg-background hover:text-secondary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex justify-center rounded-full bg-action px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-secondary"
            >
              Contact Now
            </Link>
          </div>
        ) : null}
      </nav>
    </motion.header>
  );
}
