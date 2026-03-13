interface SectionHeadingProps {
  label?: string;
  heading: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}

const SectionHeading = ({ label, heading, subtitle, align = "center", light = false }: SectionHeadingProps) => {
  return (
    <div className={`mb-8 sm:mb-12 ${align === "center" ? "text-center" : "text-left"}`}>
      {label && <span className="label-tag mb-4 block">{label}</span>}
      <h2 className={`heading-lg ${light ? "text-primary-foreground" : "text-foreground"} ${align === "center" ? "max-w-3xl mx-auto" : ""}`}>
        {heading}
      </h2>
      {subtitle && (
        <p className={`body-lg mt-4 ${light ? "text-primary-foreground/70" : ""} ${align === "center" ? "max-w-xl mx-auto" : "max-w-xl"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
