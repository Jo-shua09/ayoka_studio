import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import podcastStudio from "@/assets/podcast-studio.jpg";
import podcastRecording from "@/assets/podcast-recording.jpg";

const episodes = [
  { num: 15, title: "Building Authority Through Video Content", desc: "Exploring how video builds trust and authority in your niche." },
  { num: 14, title: "How Creators Turn Passion Into Business", desc: "Real stories of passion-driven entrepreneurship." },
  { num: 13, title: "The Power of Storytelling in Digital Media", desc: "Why narrative drives engagement in digital content." },
  { num: 12, title: "Behind the Scenes of Creative Production", desc: "A look at what goes into professional production." },
];

const Podcast = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        label="THE AUTHORITY PODCAST"
        heading="The Authority Podcast"
        subtitle="Conversations with creators, entrepreneurs, and industry leaders building influence and sharing powerful insights."
        primaryCta={{ label: "Watch Latest Episode", to: "#featured" }}
        secondaryCta={{ label: "Apply to Be a Guest", to: "/contact" }}
        backgroundImage={podcastStudio}
        compact
      />

      <section id="featured" className="py-16 bg-background">
        <div className="container-main section-padding">
          <ScrollReveal>
            <SectionHeading
              label="FEATURED EPISODE"
              heading="Watch Our Latest Conversation"
              subtitle="Exploring creativity, entrepreneurship, storytelling, and building authority in the digital world."
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="max-w-7xl mx-auto aspect-video bg-foreground/5 rounded-lg flex items-center justify-center border border-border">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-accent/30 transition-colors">
                  <Play className="text-accent ml-1" size={32} />
                </div>
                <p className="text-sm text-muted-foreground font-body">YouTube Episode Embed</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container-main section-padding">
          <ScrollReveal>
            <SectionHeading heading="Latest Podcast Episodes" />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-7xl mx-auto">
            {episodes.map((ep, i) => (
              <ScrollReveal key={ep.num} delay={i * 0.1}>
                <div className="card-elevated p-6 flex gap-4">
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img loading="lazy" src={podcastRecording} alt={ep.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-body font-semibold text-accent">Episode {ep.num}</span>
                    <h4 className="font-heading font-semibold text-base text-card-foreground mb-1">{ep.title}</h4>
                    <p className="text-sm text-muted-foreground font-body line-clamp-2">{ep.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-main section-padding">
          <ScrollReveal>
            <div className="max-w-2xl mx-auto text-center">
              <SectionHeading
                heading="Want to Be a Guest on the Podcast?"
                subtitle="We feature entrepreneurs, creators, and professionals who are making an impact and sharing valuable insights."
              />
              <Link to="/contact" className="btn-primary">
                Apply to Be a Guest
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        heading="Start Your Own Podcast"
        subtitle="Record your podcast in our professional studio equipped with cinematic video production, premium microphones, and professional lighting."
        buttonLabel="Book the Studio"
        buttonTo="/book-studio"
        variant="dark"
      />
    </div>
  );
};

export default Podcast;
