import { Check, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import weddingHero from "@/assets/wedding-hero.jpg";

const weddingServices = ["Wedding videography", "Wedding photography", "Highlight films", "Full ceremony recordings"];

const Weddings = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        label="WEDDING FILMS"
        heading="Cinematic Wedding Films"
        subtitle="We capture the most important moments of your wedding day in a beautiful cinematic film you can relive forever."
        primaryCta={{ label: "Book Your Consultation", to: "/contact" }}
        backgroundImage={weddingHero}
      />

      <section className="py-16 bg-background">
        <div className="container-main section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <SectionHeading
                label="YOUR LOVE STORY"
                heading="Every Love Story Deserves to Be Told"
                subtitle="Your wedding day is filled with once‑in‑a‑lifetime memories. Our team captures every emotion, moment, and detail to create a timeless wedding film that tells your love story."
                align="left"
              />
              <ul className="space-y-3 mb-8">
                {weddingServices.map((s) => (
                  <li key={s} className="flex items-center gap-3 font-body text-muted-foreground">
                    <Check size={18} className="text-accent flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary">
                Book Your Wedding Consultation
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="aspect-[1/1] rounded-lg overflow-hidden">
                <img src={weddingHero} alt="Wedding film" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="gradient-cta py-16">
        <div className="container-main section-padding text-center">
          <ScrollReveal>
            <Heart className="text-primary-foreground/80 mx-auto mb-6" size={48} />
            <h2 className="heading-lg text-primary-foreground mb-6 max-w-2xl mx-auto">Let Us Tell Your Love Story</h2>
            <p className="text-lg text-primary-foreground/70 font-body font-light max-w-xl mx-auto mb-10">
              Every wedding film is crafted to tell your story in a cinematic and timeless way.
            </p>
            <Link to="/contact" className="btn-primary">
              Book Your Wedding Consultation
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Weddings;
