import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="card-elevated p-8 group flex flex-col items-start h-full w-full">
      <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
        <Icon className="text-accent" size={28} />
      </div>
      <h3 className="heading-sm mb-3 text-card-foreground">{title}</h3>
      <p className="body-md">{description}</p>
    </div>
  );
};

export default ServiceCard;
