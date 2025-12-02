import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import logoImage from "@/assets/logo.png";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="glass border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logoImage} alt="Eagle Fit Decorations Logo" className="w-10 h-10 object-contain" />
              <div>
                <h3 className="text-lg font-bold glow-text">Eagle Fit</h3>
                <p className="text-xs text-muted-foreground">Decorations</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              {t('footer.desc')}
            </p>
            <div className="flex space-x-2">
              <a href="https://www.facebook.com/share/1GrJYFzrBL/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg glass hover-glow flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/eaglefitdecoration" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg glass hover-glow flex items-center justify-center">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">{t('about')}</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">{t('services')}</Link></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">{t('portfolio')}</Link></li>
              <li><Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">{t('gallery')}</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">{t('blog')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">{t('footer.ourServices')}</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services/air-conditioning" className="text-muted-foreground hover:text-primary transition-colors">{t('service.airConditioning')}</Link></li>
              <li><Link to="/services/carpentry" className="text-muted-foreground hover:text-primary transition-colors">{t('service.carpentry')}</Link></li>
              <li><Link to="/services/sanitary" className="text-muted-foreground hover:text-primary transition-colors">{t('service.sanitary')}</Link></li>
              <li><Link to="/services/painting" className="text-muted-foreground hover:text-primary transition-colors">{t('service.painting')}</Link></li>
              <li><Link to="/services/wallpaper" className="text-muted-foreground hover:text-primary transition-colors">{t('service.wallpaper')}</Link></li>
              <li><Link to="/services/electrical" className="text-muted-foreground hover:text-primary transition-colors">{t('service.electrical')}</Link></li>
              <li><Link to="/services/plaster" className="text-muted-foreground hover:text-primary transition-colors">{t('service.plaster')}</Link></li>
              <li><Link to="/services/false-ceiling" className="text-muted-foreground hover:text-primary transition-colors">{t('service.falseCeiling')}</Link></li>
              <li><Link to="/services/swimming-pool" className="text-muted-foreground hover:text-primary transition-colors">{t('service.swimmingPool')}</Link></li>
              <li><Link to="/services/maintenance" className="text-muted-foreground hover:text-primary transition-colors">{t('service.maintenance')}</Link></li>
              <li><Link to="/services/decoration" className="text-muted-foreground hover:text-primary transition-colors">{t('service.decoration')}</Link></li>
            </ul>
          </div>

           {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-primary">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Dubai, UAE</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+971551753322" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    +971 55 175 3322
                  </a>
                  <a href="tel:+971568158826" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    +971 56 815 8826
                  </a>
                </div>
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
            © {new Date().getFullYear()} {t('companyName')}. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
