import About from "@/components/About";
import Companies from "@/components/Companies";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ITSection from "@/components/ITSection";
import JournalistSection from "@/components/JournalistSection";
import LawyerSection from "@/components/LawyerSection";
import Media from "@/components/Media";
import Navbar from "@/components/Navbar";
import PoliticsSection from "@/components/PoliticsSection";
import Timeline from "@/components/Timeline";

const portfolioImages = {
  // Replace these with your own portfolio image paths, for example: "/images/adil-hero.jpg"
  heroPortrait: "/images/adil3.jpg",
  aboutPrimary: "/images/adilAdvocate.jpg",
  aboutSecondary: "/images/adil2.jpg",
  mediaShowcase: [
    "/images/adil4.jpg",
    "/images/adil5.jpg",
    "/images/adilppp.jpg",
  ],
  companyShowcase: {
    CodeNergy: "/images/codenergygbt.png",
    "TechSynergy Pvt Ltd": "/images/techsynergygbt.png",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="page-orb page-orb-one" />
        <div className="page-orb page-orb-two" />
        <Hero heroImage={portfolioImages.heroPortrait} />
        <About
          primaryImage={portfolioImages.aboutPrimary}
          secondaryImage={portfolioImages.aboutSecondary}
        />
        <ITSection />
        <JournalistSection />
        <LawyerSection />
        <PoliticsSection />
        <Companies companyImages={portfolioImages.companyShowcase} />
        <Timeline />
        <Media images={portfolioImages.mediaShowcase} />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
