import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import { services, projects } from "@/lib/data";
import redaImage from "@/assets/reda.jpg";
import mohammedImage from "@/assets/md.jpg";

const Home = () => {
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
              EAGLE FIT DECORATIONS
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
              Premier MEP & Decoration Company in Dubai
            </p>
            <p className="text-lg text-muted-foreground/80 mb-8 max-w-2xl mx-auto">
              Delivering excellence across diverse domains with innovation, quality, and customer satisfaction
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-accent hover-glow">
                  Request Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="gap-2">
                  Explore Projects
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
              { icon: Award, label: "Years Experience", value: "10+" },
              { icon: Users, label: "Happy Clients", value: "500+" },
              { icon: Star, label: "Projects Completed", value: "1000+" },
              { icon: CheckCircle2, label: "Services Offered", value: "11" }
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
            <h2 className="text-4xl font-bold mb-4 glow-text">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive MEP and decoration services tailored to meet your needs
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
                View All Services
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
            <h2 className="text-4xl font-bold mb-4 glow-text">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our portfolio of successfully completed projects across Dubai
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
                View All Projects
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 glow-text">Our Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the visionary leaders driving excellence in MEP and decoration services
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
                <p className="text-primary font-semibold mb-3">Managing Director</p>
                <p className="text-muted-foreground text-sm">
                  Leading Eagle Fit Decorations with strategic vision and decades of MEP expertise
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
                <p className="text-primary font-semibold mb-3">Financial Manager</p>
                <p className="text-muted-foreground text-sm">
                  Ensuring financial excellence and strategic growth for sustainable operations
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
            <h2 className="text-4xl font-bold mb-4 glow-text">What Our Clients Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
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
            ].map((testimonial, i) => (
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
            <h2 className="text-4xl font-bold mb-4 glow-text">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Excellence, innovation, and customer satisfaction drive everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Experienced Team",
                description: "Highly skilled professionals with years of industry experience"
              },
              {
                title: "Quality Materials",
                description: "We use only premium materials for long-lasting results"
              },
              {
                title: "On-Time Delivery",
                description: "Committed to completing projects within agreed timelines"
              },
              {
                title: "Competitive Pricing",
                description: "Transparent pricing with no hidden costs"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock customer support for your peace of mind"
              },
              {
                title: "Guaranteed Satisfaction",
                description: "We stand behind our work with comprehensive warranties"
              }
            ].map((feature, i) => (
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

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4 glow-text">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with our expert MEP and decoration services
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-accent">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Call +971 55 175 3322
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
