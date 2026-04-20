import Link from "next/link";
import { Facebook, Linkedin, Twitter, Youtube } from "lucide-react";

const socials = [
  {
    label: "Facebook",
    icon: Facebook,
    href: "https://www.facebook.com/adil.ali3011",
  },
  { label: "Twitter", icon: Twitter, href: "https://x.com/adil_ali89" },
  {
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/adil-ali89/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BZZy4VDCFSu243ptoRJkiIA%3D%3D",
  },
  // { label: "YouTube", icon: Youtube, href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink py-10 text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <div>
          <h2 className="font-display text-2xl font-bold">Adil Ali</h2>
          <p className="mt-3 max-w-xl text-white/70">
            Entrepreneur | Journalist | Lawyer | Public Leader
          </p>
        </div>
        <div className="flex items-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              aria-label={label}
              className="rounded-full border border-white/15 p-3 text-white/80 transition hover:border-accent hover:bg-white/5 hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
