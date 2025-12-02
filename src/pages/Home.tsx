import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import ProjectGallerySlider from "@/components/ProjectGallerySlider";
import FAQSection from "@/components/FAQSection";
import { services, projects } from "@/lib/data";
import redaImage from "@/assets/reda.jpg";
import mohammedImage from "@/assets/md.jpg";

const Home = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Ahmed Al Mansouri",
      role: "Villa Owner, Dubai Hills",
      rating: 5,
      testimonial: "Eagle Fit transformed our villa with their exceptional MEP services. The AC installation was flawless, and their team was professional throughout. Highly recommended!"
    },
    {
      name: "Sarah Johnson",
      role: "Restaurant Manager, JBR",
      rating: 5,
      testimonial: "We needed complete electrical work for our new restaurant. Eagle Fit delivered on time and within budget. Their attention to detail is impressive!"
    },
    {
      name: "Mohammed Hassan",
      role: "Property Developer, Downtown",
      rating: 5,
      testimonial: "Working with Eagle Fit on multiple projects has been a pleasure. Their carpentry and painting services are top-notch. True professionals!"
    },
    {
      name: "Lisa Anderson",
      role: "Homeowner, Palm Jumeirah",
      rating: 5,
      testimonial: "The wood flooring installation exceeded our expectations. Beautiful craftsmanship and excellent customer service. Worth every dirham!"
    },
    {
      name: "Khalid Al Hamadi",
      role: "Office Manager, Business Bay",
      rating: 5,
      testimonial: "Eagle Fit handles all our building maintenance needs. Their 24/7 availability and quick response time give us peace of mind."
    },
    {
      name: "Emily Roberts",
      role: "Boutique Owner, Dubai Mall",
      rating: 5,
      testimonial: "From painting to electrical work, Eagle Fit did it all for our boutique renovation. Professional, reliable, and excellent quality!"
    }
  ];

  const features = [
    {
      title: t('feature.experiencedTeam'),
      description: t('feature.experiencedTeamDesc')
    },
    {
      title: t('feature.qualityMaterials'),
      description: t('feature.qualityMaterialsDesc')
    },
    {
      title: t('feature.onTimeDelivery'),
      description: t('feature.onTimeDeliveryDesc')
    },
    {
      title: t('feature.competitivePricing'),
      description: t('feature.competitivePricingDesc')
    },
    {
      title: t('feature.support247'),
      description: t('feature.support247Desc')
    },
    {
      title: t('feature.guaranteedSatisfaction'),
      description: t('feature.guaranteedSatisfactionDesc')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background"></div>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 glow-text">
              {t('companyFullName')}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              {t('companyDesc')}
            </p>
            <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
              {t('companyIntro')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-accent hover-glow">
                  {t('hero.requestQuote')}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="gap-2">
                  {t('hero.exploreProjects')}
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-4xl mx-auto"
          >
            {[
              { icon: Award, label: t('hero.yearsExperience'), value: "10+" },
              { icon: Users, label: t('hero.happyClients'), value: "500+" },
              { icon: Star, label: t('hero.projectsCompleted'), value: "1000+" },
              { icon: CheckCircle2, label: t('hero.servicesOffered'), value: "11" }
            ].map((stat, i) => (
              <div key={i} className="glass p-6 rounded-xl hover-glow">
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold glow-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 glow-text">{t('section.ourServices')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('section.servicesDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, i) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.shortDesc}
                href={`/services/${service.id}`}
                delay={i * 0.1}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="outline" size="lg" className="gap-2">
                {t('section.viewAllServices')}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 glass">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 glow-text">{t('section.featuredProjects')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('section.projectsDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, i) => (
              <ProjectCard
                key={project.id}
                {...project}
                delay={i * 0.1}
              />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="gap-2">
                {t('section.viewAllProjects')}
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Project Gallery Slider */}
      <ProjectGallerySlider />

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 glow-text">{t('section.leadership')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('section.leadershipDesc')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl overflow-hidden hover-glow"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={mohammedImage} 
                  alt="Eng Mohammed Elrefaey - Managing Director" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Eng Mohammed Elrefaey</h3>
                <p className="text-primary font-semibold mb-3">{t('leader.md')}</p>
                <p className="text-muted-foreground text-sm">
                  {t('leader.mdDesc')}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass rounded-2xl overflow-hidden hover-glow"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={redaImage} 
                  alt="Eng Reda Elmaghraby - Financial Manager" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2">Eng Reda Elmaghraby</h3>
                <p className="text-primary font-semibold mb-3">{t('leader.fm')}</p>
                <p className="text-muted-foreground text-sm">
                  {t('leader.fmDesc')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 glow-text">{t('section.testimonials')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('section.testimonialsDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-xl hover-glow"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, index) => (
                    <Star key={index} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.testimonial}"</p>
                <div className="border-t border-border/50 pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 glass">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 glow-text">{t('section.whyChooseUs')}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('section.whyChooseUsDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-6 rounded-xl hover-glow"
              >
                <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 glow-text">{t('cta.title')}</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              {t('cta.desc')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-accent">
                  {t('cta.consultation')}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                {t('button.call')} +971 55 175 3322
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
