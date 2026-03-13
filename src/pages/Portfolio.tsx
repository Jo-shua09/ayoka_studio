import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";
import podcastStudio from "@/assets/podcast-studio.jpg";
import podcastRecording from "@/assets/podcast-recording.jpg";
import videoProduction from "@/assets/video-production.jpg";
import photographyService from "@/assets/photography-service.jpg";
import weddingHero from "@/assets/wedding-hero.jpg";

const categories = ["All", "Podcast", "Brand Videos", "Photography", "Wedding Films"];
const items = [
  { title: "Studio Podcast Session", category: "Podcast", image: podcastStudio },
  { title: "Brand Story Film", category: "Brand Videos", image: videoProduction },
  { title: "Portrait Photography", category: "Photography", image: photographyService },
  { title: "Wedding Highlight Reel", category: "Wedding Films", image: weddingHero },
  { title: "Podcast Episode Recording", category: "Podcast", image: podcastRecording },
  { title: "Corporate Commercial", category: "Brand Videos", image: heroBg },
  { title: "Lifestyle Photography", category: "Photography", image: photographyService },
  { title: "Cinematic Wedding Film", category: "Wedding Films", image: weddingHero },
];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? items : items.filter((i) => i.category === active);

  return (
    <div className="overflow-x-hidden">
      <HeroSection
        label="PORTFOLIO"
        heading="Our Work"
        subtitle="Explore our collection of creative video productions, podcast recordings, photography projects, and wedding films."
        backgroundImage={heroBg}
        compact
      />

      <section className="py-16 bg-background">
        <div className="container-main section-padding">
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-6 py-2.5 rounded-sm text-sm font-body font-medium transition-all duration-200 ${active === cat ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground hover:bg-accent/10 hover:text-accent"}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((item, i) => (
              <ScrollReveal key={`${active}-${i}`} delay={i * 0.06}>
                <div className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer">
                  <img
                    loading="lazy"
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <span className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-accent">{item.category}</span>
                    <h3 className="font-heading font-semibold text-primary-foreground">{item.title}</h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Have a Project in Mind?" buttonLabel="Let's Talk" buttonTo="/contact" />
    </div>
  );
};

export default Portfolio;
