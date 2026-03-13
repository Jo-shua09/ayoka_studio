import { Link } from "react-router-dom";

const footerLinks = [
  { label: "Home", path: "/" },
  { label: "Podcast", path: "/podcast" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Offers", path: "/offers" },
  { label: "Weddings", path: "/weddings" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
  { label: "Book Studio", path: "/book-studio" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-main section-padding py-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Logo & Description */}
          <div className="lg">
            <Link to="/" className="inline-block mb-6">
              <span className="font-heading text-2xl font-semibold tracking-tight">
                AYOKA <span className="text-accent">FILMS</span>
              </span>
            </Link>
            <p className="text-primary-foreground/60 font-body text-sm leading-relaxed w-full">
              Helping creators, entrepreneurs, and brands produce powerful visual content that captures attention and tells unforgettable stories.
            </p>
          </div>

          <div className=" flex items-start gap-y-12 gap-x-24 md:flex-nowrap flex-wrap md:justify-end w-full">
            {/* Links */}
            <div className="md:w-fit">
              <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6">Navigation</h4>
              <div className="grid grid-cols-2 gap-2">
                {footerLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="text-sm text-primary-foreground/60 hover:text-accent transition-colors font-body py-1"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="md:w-fit w-full">
              <h4 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-6">Connect</h4>
              <div className="flex flex-col gap-2 items-start">
                {["Instagram", "YouTube", "TikTok", "LinkedIn"].map((social) => (
                  <a key={social} href="#" className="text-sm text-primary-foreground/60 hover:text-accent transition-colors font-body py-1">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/40 font-body">© {new Date().getFullYear()} Ayoka Films & Photos. All rights reserved.</p>
          <Link to="/lead-magnet" className="text-xs text-primary-foreground/40 hover:text-accent transition-colors font-body">
            Free Creator Guide
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
