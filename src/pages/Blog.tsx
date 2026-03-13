import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/ScrollReveal";
import heroBg from "@/assets/hero-bg.jpg";
import podcastStudio from "@/assets/podcast-studio.jpg";
import videoProduction from "@/assets/video-production.jpg";
import photographyService from "@/assets/photography-service.jpg";
import podcastRecording from "@/assets/podcast-recording.jpg";

const posts = [
  { title: "How to Start a Podcast in 2026", category: "Podcasting", image: podcastRecording, date: "Mar 5, 2026" },
  { title: "Behind the Scenes of Video Production", category: "Video", image: videoProduction, date: "Feb 20, 2026" },
  { title: "Why Storytelling Matters in Branding", category: "Branding", image: podcastStudio, date: "Feb 10, 2026" },
  { title: "Tips for Creating Cinematic Content", category: "Filmmaking", image: heroBg, date: "Jan 28, 2026" },
  { title: "The Art of Wedding Cinematography", category: "Weddings", image: photographyService, date: "Jan 15, 2026" },
  { title: "Growing Your Audience with Video", category: "Strategy", image: videoProduction, date: "Jan 5, 2026" },
];

const Blog = () => {
  return (
    <div className="overflow-x-hidden">
      <HeroSection
        label="BLOG"
        heading="Creative Insights & Stories"
        subtitle="Explore insights about filmmaking, podcasting, creativity, and content creation."
        backgroundImage={heroBg}
        compact
      />

      <section className="py-16 bg-background">
        <div className="container-main section-padding">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <article className="card-elevated overflow-hidden group cursor-pointer">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      loading="lazy"
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-body font-semibold text-accent">{post.category}</span>
                      <span className="text-xs text-muted-foreground font-body">{post.date}</span>
                    </div>
                    <h3 className="font-heading font-semibold text-lg text-card-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
