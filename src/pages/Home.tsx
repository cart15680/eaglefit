import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import { services, projects } from "@/lib/data";
import teamMembers from "@/assets/team-members.png";

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
              Meet the experts driving excellence in MEP and decoration services
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <img 
              src={teamMembers} 
              alt="Eagle Fit Leadership Team" 
              className="w-full rounded-2xl shadow-2xl hover-glow"
            />
          </motion.div>
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
                Call +971 XX XXX XXXX
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
