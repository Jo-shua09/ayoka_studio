import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import podcastStudio from "@/assets/podcast-studio.jpg";

const features = ["Multi‑camera setup", "Professional lighting", "Premium microphones", "Podcast recording setup", "Video production support"];

const BookStudio = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        label="BOOK OUR STUDIO"
        heading="Book Our Podcast & Video Studio"
        subtitle="Record high‑quality podcasts and video content in a professional studio environment designed for creators and brands."
        primaryCta={{ label: "Book Your Session", to: "/contact" }}
        backgroundImage={podcastStudio}
      />

      <section className="py-16 bg-background">
        <div className="container-main section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="label-tag mb-4 block">STUDIO FEATURES</span>
              <h2 className="heading-lg text-foreground mb-8">Everything You Need to Create</h2>
              <ul className="space-y-4 mb-10">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-4 font-body text-lg text-muted-foreground">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Check size={16} className="text-accent" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary">
                Book Your Studio Session
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="aspect-[4/3] rounded-lg overflow-hidden">
                <img
                  loading="lazy"
                  src={podcastStudio}
                  alt="Studio"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookStudio;
