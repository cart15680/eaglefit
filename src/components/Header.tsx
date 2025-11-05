import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/gallery", label: "Gallery" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img src={logo} alt="Eagle Fit Logo" className="w-12 h-12 object-contain" />
              <div className="hidden md:block">
                <h1 className="text-xl font-bold glow-text">Eagle Fit</h1>
                <p className="text-xs text-muted-foreground">Decorations</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    location.pathname === link.path
                      ? "bg-primary/20 text-primary"
                      : "text-foreground/80 hover:bg-primary/10 hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Contact Buttons */}
            <div className="hidden lg:flex items-center space-x-2">
              <Button variant="outline" size="sm" className="gap-2" asChild>
                <a href="tel:+971XXXXXXXXX">
                  <Phone className="w-4 h-4" />
                  <span>Call Us</span>
                </a>
              </Button>
              <Button size="sm" className="gap-2 bg-gradient-to-r from-primary to-accent" asChild>
                <a href="mailto:info@eaglefitdecorations.com">
                  <Mail className="w-4 h-4" />
                  <span>Get Quote</span>
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-primary/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-40 w-full max-w-sm glass shadow-2xl lg:hidden"
          >
            <nav className="flex flex-col p-6 space-y-2 mt-20">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg transition-all ${
                    location.pathname === link.path
                      ? "bg-primary/20 text-primary"
                      : "text-foreground/80 hover:bg-primary/10"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Button variant="outline" className="w-full gap-2" asChild>
                  <a href="tel:+971XXXXXXXXX">
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                </Button>
                <Button className="w-full gap-2 bg-gradient-to-r from-primary to-accent" asChild>
                  <a href="mailto:info@eaglefitdecorations.com">
                    <Mail className="w-4 h-4" />
                    Get Quote
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
