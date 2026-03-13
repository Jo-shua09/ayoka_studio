import { Link } from "react-router-dom";
import { Mic, Video, Camera, Heart, Play, ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import NewsletterSection from "@/components/NewsletterSection";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";
import podcastStudio from "@/assets/podcast-studio.jpg";
import podcastRecording from "@/assets/podcast-recording.jpg";
import videoProduction from "@/assets/video-production.jpg";
import photographyService from "@/assets/photography-service.jpg";
import weddingHero from "@/assets/wedding-hero.jpg";

const services = [
  {
    icon: Mic,
    title: "Podcast Production",
    description:
      "Record professional podcasts in a fully equipped studio with multi‑camera video recording, professional lighting, and broadcast‑quality audio.",
  },
  {
    icon: Video,
    title: "Video Production",
    description: "Cinematic video production for brands, businesses, and creators looking to elevate their content and tell meaningful stories.",
  },
  { icon: Camera, title: "Photography", description: "Professional photography for portraits, brands, events, and lifestyle content." },
  { icon: Heart, title: "Wedding Films", description: "Beautiful wedding cinematography capturing every emotional moment of your special day." },
];

const portfolioItems = [
  { title: "Brand Story Film", category: "Video", image: videoProduction },
  { title: "Studio Session", category: "Podcast", image: podcastStudio },
  { title: "Portrait Series", category: "Photography", image: photographyService },
  { title: "Wedding Highlight", category: "Wedding", image: weddingHero },
  { title: "Podcast Recording", category: "Podcast", image: podcastRecording },
  { title: "Behind the Scenes", category: "Video", image: heroBg },
];

const episodes = [
  { num: 15, title: "Building Authority Through Video Content" },
  { num: 14, title: "How Creators Turn Passion Into Business" },
  { num: 13, title: "The Power of Storytelling in Digital Media" },
];

const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        label="FOR CREATORS & ENTREPRENEURS"
        heading="Create Cinematic Content That Builds Authority"
        subtitle="Ayoka Films & Photos helps creators, entrepreneurs, and brands produce powerful video content, podcasts, and photography that capture attention and tell unforgettable stories."
        primaryCta={{ label: "Book a Studio Session", to: "/book-studio" }}
        secondaryCta={{ label: "Watch the Podcast", to: "/podcast", icon: true }}
        backgroundImage={heroBg}
      />

      {/* Featured In */}
      <ScrollReveal className="relative z-10 -mt-20">
        <div className="container-main section-padding">
          <div className="bg-background rounded-lg shadow-[var(--shadow-elevated)] p-8 sm:p-10">
            <p className="text-center text-xs font-body font-semibold tracking-[0.2em] uppercase text-muted-foreground mb-8">As featured in:</p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-50">
              {["CreatorPro", "FilmWeekly", "PodcastMag", "StudioLife", "VisualArts", "MediaToday"].map((brand) => (
                <span key={brand} className="font-heading text-lg sm:text-xl font-semibold text-foreground/60 tracking-tight">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* Video / Featured */}
      <section className="gradient-dark py-16 sm:py-24">
        <div className="container-main section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="label-tag mb-6 block">OUR STUDIO</span>
              <h2 className="heading-lg text-primary-foreground mb-6">Professional Video Production & Podcast Studio</h2>
              <p className="text-primary-foreground/70 font-body font-light text-lg leading-relaxed mb-4">
                At Ayoka Films & Photos, we specialize in producing high‑quality video content, podcasts, photography, and wedding films.
              </p>
              <p className="text-primary-foreground/60 font-body font-light leading-relaxed mb-8">
                Our studio is designed for creators and brands who want to produce cinematic media that stands out in today's digital world.
              </p>
              <Link to="/services" className="btn-primary">
                Explore Services
              </Link>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="relative aspect-video rounded-lg overflow-hidden group">
                <img
                  loading="lazy"
                  src={podcastStudio}
                  alt="Professional podcast studio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-foreground/30 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-accent/90 flex items-center justify-center cursor-pointer hover:bg-accent transition-colors hover:scale-110 duration-300">
                    <Play className="text-accent-foreground ml-1" size={32} />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container-main section-padding">
          <ScrollReveal>
            <SectionHeading
              label="WAYS WE CAN WORK TOGETHER"
              heading="Our Creative Services"
              subtitle="Different projects need different creative solutions. Here are the ways we help bring your vision to life."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <ServiceCard {...service} />
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-12">
              <Link to="/services" className="btn-outline inline-flex items-center gap-2">
                Explore Services <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Podcast */}
      <section className="py-16 sm:py-24 bg-muted">
        <div className="container-main section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <span className="label-tag mb-4 block">MY PODCAST</span>
              <h2 className="heading-lg text-foreground mb-6">The Authority Podcast</h2>
              <p className="body-lg mb-8">
                The Authority Podcast features inspiring conversations with creators, entrepreneurs, and industry leaders who are building influence
                and sharing powerful insights.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/podcast" className="btn-primary">
                  Watch Episodes
                </Link>
                <Link to="/contact" className="btn-outline md:w-fit w-full">
                  Apply to Be a Guest
                </Link>
              </div>
            </ScrollReveal>
            <div className="space-y-4">
              {episodes.map((ep, i) => (
                <ScrollReveal key={ep.num} delay={i * 0.1} direction="right">
                  <div className="card-elevated p-6 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img loading="lazy" src={podcastRecording} alt={ep.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs font-body font-semibold text-accent">Episode {ep.num}</span>
                      <h4 className="font-heading font-semibold text-card-foreground text-base truncate">{ep.title}</h4>
                    </div>
                    <Play size={20} className="text-accent flex-shrink-0" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 sm:py-24 bg-background">
        <div className="container-main section-padding">
          <ScrollReveal>
            <SectionHeading
              label="OUR LATEST WORK"
              heading="Our Latest Work"
              subtitle="Explore our collection of video productions, podcast recordings, photography sessions, and creative projects."
            />
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer">
                  <img
                    loading="lazy"
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-xs font-body font-semibold tracking-[0.15em] uppercase text-accent">{item.category}</span>
                    <h3 className="font-heading font-semibold text-lg text-primary-foreground">{item.title}</h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-12">
              <Link to="/portfolio" className="btn-outline inline-flex items-center gap-2">
                View Portfolio <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTASection
        heading="Ready to Create Something Amazing?"
        subtitle="Whether you're recording a podcast, filming a brand story, or capturing a once‑in‑a‑lifetime moment, our team is here to bring your vision to life."
        buttonLabel="Book Your Session"
        buttonTo="/book-studio"
      />
      <NewsletterSection />
    </div>
  );
};

export default Index;
