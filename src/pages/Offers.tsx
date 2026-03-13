import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";

const offers = [
  {
    title: "Podcast Production Package",
    subtitle: "Perfect for creators launching their podcast.",
    features: ["Studio recording", "Professional lighting", "Multi‑camera setup", "Audio recording"],
    highlight: false,
  },
  {
    title: "Creator Video Package",
    subtitle: "Designed for entrepreneurs building their personal brand.",
    features: ["Strategy session", "Video recording", "Editing", "Content clips for social media"],
    highlight: true,
  },
  {
    title: "Authority Content System",
    subtitle: "A complete system for creators and brands who want to dominate with video content.",
    features: ["Content strategy", "Studio recording sessions", "Professional editing", "Content distribution guidance"],
    highlight: false,
  },
];

const Offers = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        label="OUR OFFERS"
        heading="Authority Video Systems for Creators & Brands"
        subtitle="We help entrepreneurs and creators produce powerful video content designed to grow their brand and attract opportunities."
        primaryCta={{ label: "Get Started", to: "/contact" }}
        backgroundImage={heroBg}
        compact
      />

      <section className="py-16 bg-background">
        <div className="container-main section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {offers.map((offer, i) => (
              <ScrollReveal key={offer.title} delay={i * 0.15}>
                <div
                  className={`rounded-lg p-8 flex flex-col h-full ${offer.highlight ? "bg-foreground md:scale-105 text-primary-foreground ring-2 ring-accent" : "card-elevated"}`}
                >
                  {offer.highlight && <span className="label-tag mb-2">MOST POPULAR</span>}
                  <h3 className={`heading-sm mb-2 ${offer.highlight ? "text-primary-foreground" : "text-foreground"}`}>{offer.title}</h3>
                  <p className={`text-sm font-body mb-6 ${offer.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {offer.subtitle}
                  </p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {offer.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-sm font-body">
                        <Check size={16} className="text-accent flex-shrink-0" />
                        <span className={offer.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={offer.highlight ? "btn-primary text-center w-full" : "btn-outline text-center w-full"}>
                    Get Started
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Ready to Build Your Authority?" buttonLabel="Book a Consultation" buttonTo="/contact" />
    </div>
  );
};

export default Offers;
