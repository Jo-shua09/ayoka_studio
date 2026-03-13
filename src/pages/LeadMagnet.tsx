import { useState } from "react";
import { Check, Download } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";

const learnings = [
  "How to start a podcast",
  "How to create cinematic video content",
  "How to grow your personal brand using video",
  "Content strategies used by successful creators",
];

const LeadMagnet = () => {
  const [form, setForm] = useState({ name: "", email: "" });

  return (
    <div className="overflow-x-hidden">
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0 gradient-overlay" />
        <div className="relative z-10 container-main section-padding w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-32">
            <ScrollReveal direction="left">
              <span className="label-tag mb-6 block">FREE GUIDE</span>
              <h1 className="heading-xl text-primary-foreground mb-6">The Creator Video Authority Guide</h1>
              <p className="text-lg text-primary-foreground/70 font-body font-light leading-relaxed mb-8">Learn how creators and entrepreneurs use video content to build authority, grow their audience, and attract opportunities.</p>
              <h3 className="font-heading font-semibold text-primary-foreground text-xl mb-4">What You'll Learn:</h3>
              <ul className="space-y-3 mb-8">
                {learnings.map((l) => (
                  <li key={l} className="flex items-center gap-3 text-primary-foreground/80 font-body">
                    <Check size={18} className="text-accent flex-shrink-0" />
                    {l}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.2}>
              <div className="bg-background/10 backdrop-blur-md rounded-lg p-8 border border-primary-foreground/10">
                <h3 className="font-heading font-semibold text-primary-foreground text-2xl mb-6 text-center">Download the Free Guide</h3>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <input type="text" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-5 py-4 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50" />
                  <input type="email" placeholder="Your email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-5 py-4 bg-primary-foreground/10 border border-primary-foreground/20 rounded-sm font-body text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent/50" />
                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    <Download size={18} />
                    Download the Guide
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeadMagnet;
