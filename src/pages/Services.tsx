import { Mic, Video, Camera, Heart, Check } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";
import podcastRecording from "@/assets/podcast-recording.jpg";
import videoProduction from "@/assets/video-production.jpg";
import photographyService from "@/assets/photography-service.jpg";
import weddingHero from "@/assets/wedding-hero.jpg";
import { Link } from "react-router-dom";

const serviceDetails = [
  {
    icon: Mic,
    title: "Podcast Production",
    desc: "Launch or elevate your podcast with our professional studio setup.",
    features: ["Multi‑camera video recording", "Professional lighting setup", "Studio microphones", "Audio recording and mixing", "Podcast editing"],
    image: podcastRecording,
    cta: { label: "Book Studio", to: "/book-studio" },
  },
  {
    icon: Video,
    title: "Video Production",
    desc: "We create cinematic video productions for brands, businesses, creators, and events.",
    features: ["Brand videos", "Commercial production", "YouTube content creation", "Corporate video production", "Event videography"],
    image: videoProduction,
    cta: { label: "Get Started", to: "/contact" },
  },
  {
    icon: Camera,
    title: "Photography",
    desc: "Our photography services capture meaningful moments and powerful visual stories.",
    features: ["Portrait photography", "Brand photography", "Event photography", "Lifestyle photography"],
    image: photographyService,
    cta: { label: "Book a Session", to: "/contact" },
  },
  {
    icon: Heart,
    title: "Wedding Films",
    desc: "Our wedding films capture the beauty, emotion, and unforgettable moments of your wedding day.",
    features: ["Wedding videography", "Wedding photography", "Highlight films", "Full ceremony recordings"],
    image: weddingHero,
    cta: { label: "Plan Your Wedding Film", to: "/weddings" },
  },
];

const Services = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        label="OUR SERVICES"
        heading="Professional Video Production & Creative Services"
        subtitle="We help creators, businesses, and brands produce high‑quality visual content that captures attention and communicates powerful messages."
        primaryCta={{ label: "Get Started", to: "/contact" }}
        backgroundImage={heroBg}
        compact
      />

      {serviceDetails.map((svc, i) => (
        <section key={svc.title} className={`py-16 ${i % 2 === 0 ? "bg-background" : "bg-muted"}`}>
          <div className="container-main section-padding">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
              <ScrollReveal direction={i % 2 === 0 ? "left" : "right"} className={i % 2 !== 0 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <svc.icon className="text-accent" size={22} />
                  </div>
                  <span className="label-tag">{svc.title.toUpperCase()}</span>
                </div>
                <h2 className="heading-lg text-foreground mb-4">{svc.title}</h2>
                <p className="body-lg mb-8">{svc.desc}</p>
                <ul className="space-y-3 mb-8">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 font-body text-muted-foreground">
                      <Check size={18} className="text-accent flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to={svc.cta.to} className="btn-primary">
                  {svc.cta.label}
                </Link>
              </ScrollReveal>
              <ScrollReveal direction={i % 2 === 0 ? "right" : "left"} delay={0.2} className={i % 2 !== 0 ? "lg:order-1" : ""}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <img
                    loading="lazy"
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      <CTASection
        heading="Ready to Start Your Project?"
        subtitle="Let's discuss your creative vision and bring it to life."
        buttonLabel="Contact Us"
        buttonTo="/contact"
      />
    </div>
  );
};

export default Services;
