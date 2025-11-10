import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="glass border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">E</span>
              </div>
              <div>
                <h3 className="text-lg font-bold glow-text">Eagle Fit</h3>
                <p className="text-xs text-muted-foreground">Decorations</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Premier MEP & Decoration Company in Dubai, delivering excellence across diverse domains.
            </p>
            <div className="flex space-x-2">
              <a href="#" className="w-9 h-9 rounded-lg glass hover-glow flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg glass hover-glow flex items-center justify-center">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg glass hover-glow flex items-center justify-center">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/air-conditioning" className="text-muted-foreground hover:text-primary transition-colors">Air Conditioning</Link></li>
              <li><Link to="/services/carpentry" className="text-muted-foreground hover:text-primary transition-colors">Carpentry & Wood Flooring</Link></li>
              <li><Link to="/services/painting" className="text-muted-foreground hover:text-primary transition-colors">Painting & Decoration</Link></li>
              <li><Link to="/services/electrical" className="text-muted-foreground hover:text-primary transition-colors">Electrical Services</Link></li>
              <li><Link to="/services/maintenance" className="text-muted-foreground hover:text-primary transition-colors">Building Maintenance</Link></li>
            </ul>
          </div>

           {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Dubai, UAE</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+971551753322" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +971 55 175 3322
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@eaglefitdecorations.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  info@eaglefitdecorations.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Eagle Fit Decorations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
