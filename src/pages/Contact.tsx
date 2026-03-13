import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";

const projectTypes = ["Podcast Production", "Video Production", "Photography", "Wedding Film", "Studio Booking", "Other"];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="overflow-x-hidden">
      <HeroSection
        label="CONTACT"
        heading="Let's Work Together"
        subtitle="Have a project in mind? We'd love to hear about it."
        backgroundImage={heroBg}
        compact
      />

      <section className="py-16 bg-background">
        <div className="container-main section-padding">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-2">Name</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-5 py-4 bg-muted border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-5 py-4 bg-muted border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-2">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-5 py-4 bg-muted border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-body font-medium text-foreground mb-2">Project Type</label>
                    <select
                      value={form.type}
                      onChange={(e) => setForm({ ...form, type: e.target.value })}
                      className="w-full px-5 py-4 bg-muted border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all appearance-none"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-body font-medium text-foreground mb-2">Message</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={8}
                    className="w-full px-5 py-4 bg-muted border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send Message
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Contact;
