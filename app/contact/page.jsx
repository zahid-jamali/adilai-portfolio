import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Mail, MapPin, Phone, ShieldCheck, Speech } from "lucide-react";

const contactCards = [
  {
    icon: MapPin,
    title: "Location",
    value: "Karachi, Pakistan",
  },
  {
    icon: Mail,
    title: "Email",
    value: "contact@adilali.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+92 300 0000000",
  },
  {
    icon: Speech,
    title: "Media Inquiries",
    value: "Interviews, public speaking, and press coordination",
  },
  {
    icon: ShieldCheck,
    title: "Professional Focus",
    value: "Technology leadership, legal advocacy, and public engagement",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="relative overflow-hidden pt-28">
        <div className="page-orb page-orb-one" />
        <div className="page-orb page-orb-two" />
        <section className="mx-auto max-w-7xl px-6 pb-10 pt-8 lg:px-8">
          <div className="panel relative overflow-hidden rounded-[2rem] p-8 lg:p-12">
            <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-accent/15 to-transparent lg:block" />
            <div className="relative max-w-3xl">
              <span className="section-label">
                Contact
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink md:text-6xl">
                Connect with Adil Ali
              </h1>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/75">
                Reach out for leadership discussions, media engagements, legal
                consultations, technology collaborations, and public service
                initiatives.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-16 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <ContactForm
            title="Send a Message"
            description="A refined portfolio contact interface for consultations, partnerships, interviews, and public service communication."
            embedded
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {contactCards.map(({ icon: Icon, title, value }) => (
              <div
                key={title}
                className="panel rounded-[1.75rem] p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-action/10 p-3 text-action shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-ink">{title}</h2>
                    <p className="mt-2 leading-7 text-ink/70">{value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
