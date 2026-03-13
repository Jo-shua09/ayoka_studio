import { Link } from "react-router-dom";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";

const About = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        label="ABOUT US"
        heading="About Ayoka Films & Photos"
        subtitle="Our mission is to help creators, brands, and individuals produce powerful visual content that connects with audiences and leaves a lasting impact."
        backgroundImage={heroBg}
        compact
      />

      <section className="py-16 bg-background">
        <div className="container-main section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <SectionHeading label="OUR STORY" heading="Founded With a Passion for Storytelling" align="left" />
              <div className="space-y-4 body-md">
                <p>Ayoka Films & Photos was founded with a passion for storytelling through visual media.</p>
                <p>
                  We believe every story deserves to be captured beautifully through video and photography. Our mission is to help creators, brands,
                  and individuals produce powerful visual content that connects with audiences and leaves a lasting impact.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="aspect-square rounded-lg overflow-hidden">
                <img loading="lazy" src={heroBg} alt="Our studio" className="w-full h-full object-cover" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-16 gradient-dark">
        <div className="container-main section-padding text-center">
          <ScrollReveal>
            <span className="label-tag mb-6 block">OUR MISSION</span>
            <h2 className="heading-lg text-primary-foreground max-w-3xl mx-auto mb-6">
              To create meaningful media that inspires, connects, and elevates creative storytelling.
            </h2>
            <Link to="/contact" className="btn-primary">
              Work With Us
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default About;
