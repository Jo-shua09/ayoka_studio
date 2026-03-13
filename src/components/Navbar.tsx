import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Podcast", path: "/podcast" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Offers", path: "/offers" },
  { label: "Weddings", path: "/weddings" },
  { label: "Blog", path: "/blog" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-foreground/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container-main section-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-heading text-xl sm:text-2xl font-semibold tracking-tight text-primary-foreground">
              AYOKA <span className="text-accent">FILMS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 text-sm font-body font-medium tracking-wide transition-colors duration-200 ${
                  location.pathname === link.path ? "text-accent" : "text-primary-foreground/70 hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <Link to="/book-studio" className="hidden sm:inline-flex btn-primary text-sm py-3 px-6">
              Book Studio
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden text-primary-foreground p-2" aria-label="Toggle menu">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-foreground min-h-screen shadow-lg border-t border-primary-foreground/10 animate-fade-up">
          <div className="section-padding py-6 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`py-3 px-4 text-base font-body font-medium rounded-sm transition-colors ${
                  location.pathname === link.path
                    ? "text-accent bg-primary-foreground/5"
                    : "text-primary-foreground/70 hover:text-accent hover:bg-primary-foreground/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/book-studio" className="btn-primary mt-4 text-center">
              Book Studio
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
