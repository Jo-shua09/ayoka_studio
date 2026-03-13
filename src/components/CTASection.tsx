import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";

interface CTASectionProps {
  heading: string;
  subtitle?: string;
  buttonLabel: string;
  buttonTo: string;
  variant?: "gradient" | "dark";
}

const CTASection = ({ heading, subtitle, buttonLabel, buttonTo, variant = "gradient" }: CTASectionProps) => {
  return (
    <section className={`py-16 sm:py-24 ${variant === "gradient" ? "gradient-cta" : "gradient-dark"}`}>
      <div className="container-main section-padding text-center">
        <ScrollReveal>
          <h2 className="heading-lg text-primary-foreground mb-6 max-w-3xl mx-auto">{heading}</h2>
          {subtitle && <p className="text-lg text-primary-foreground/70 font-body font-light max-w-xl mx-auto mb-10">{subtitle}</p>}
          <Link to={buttonTo} className="btn-primary">
            {buttonLabel}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
