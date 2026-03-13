import { Link } from "react-router-dom";
import { Play } from "lucide-react";

interface HeroSectionProps {
  label?: string;
  heading: string;
  subtitle: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string; icon?: boolean };
  backgroundImage?: string;
  overlayStyle?: "full" | "gradient";
  compact?: boolean;
}

const HeroSection = ({
  label,
  heading,
  subtitle,
  primaryCta,
  secondaryCta,
  backgroundImage,
  overlayStyle = "gradient",
  compact = false,
}: HeroSectionProps) => {
  return (
    <section className={`relative ${compact ? "min-h-[60vh]" : "min-h-screen"} flex items-center overflow-hidden`}>
      {/* Background */}
      {backgroundImage && <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }} />}

      {/* Overlay */}
      <div className={`absolute inset-0 ${overlayStyle === "gradient" ? "gradient-overlay" : "bg-foreground/80"}`} />

      {/* Gradient bottom blend */}
      {!compact && <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-foreground to-transparent" />}

      {/* Content */}
      <div className="relative z-10 container-main section-padding w-full">
        <div className={`max-w-4xl flex justify-center h-full flex-col ${compact ? "py-32" : "pt-32 pb-48"}`}>
          {label && <span className="label-tag mb-4 block animate-fade-up">{label}</span>}
          <h1 className="heading-xl text-primary-foreground mb-6 animate-fade-up">{heading}</h1>
          <p className="text-lg sm:text-xl text-primary-foreground/70 font-body font-light leading-relaxed mb-10 max-w-2xl animate-fade-up-delay">
            {subtitle}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-2">
              {primaryCta && (
                <Link to={primaryCta.to} className="btn-primary">
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link to={secondaryCta.to} className="btn-outline-light">
                  {secondaryCta.icon && <Play size={18} className="mr-2" />}
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
