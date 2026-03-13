import { useState } from "react";
import { Mail } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-16 bg-accent-light">
      <div className="container-main section-padding">
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
              <Mail className="text-accent" size={24} />
            </div>
            <h2 className="heading-md text-foreground mb-4">Join our newsletter</h2>
            <p className="body-md mb-8">
              Get creative insights, behind-the-scenes content, and updates on our latest productions delivered to your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-5 py-4 bg-background border border-border rounded-sm font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default NewsletterSection;
