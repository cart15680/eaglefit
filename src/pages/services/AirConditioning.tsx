import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Wind, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ServiceRequestForm from "@/components/ServiceRequestForm";
import acServiceImage from "@/assets/services/ac-service.jpg";

const AirConditioning = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Link to="/services">
          <Button variant="outline" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-8 md:p-12 rounded-2xl mb-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
              <Wind className="w-10 h-10 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4 glow-text">Air Conditioning Services</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Professional HVAC installation, maintenance, and repair services. We ensure optimal cooling efficiency and air quality for residential and commercial spaces across Dubai.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Service Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="mb-12"
        >
          <img 
            src={acServiceImage} 
            alt="Professional air conditioning installation service in Dubai" 
            className="w-full h-[400px] object-cover rounded-2xl glass"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass h-full">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">Our AC Services</h2>
                <ul className="space-y-4">
                  {[
                    "Central AC installation & maintenance",
                    "Split unit installation & repair",
                    "Duct cleaning & sanitization",
                    "AC troubleshooting & diagnostics",
                    "Energy-efficient system upgrades",
                    "24/7 emergency AC repair"
                  ].map((service, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="glass h-full">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">Why Choose Us</h2>
                <ul className="space-y-4">
                  {[
                    "Certified HVAC technicians",
                    "Quick response time",
                    "Genuine spare parts",
                    "Competitive pricing",
                    "1-year warranty on installations",
                    "Free consultation & quotation"
                  ].map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Service Request Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <ServiceRequestForm serviceTitle="Air Conditioning Service" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass p-8 rounded-2xl text-center"
        >
          <h2 className="text-3xl font-bold mb-4 glow-text">Need Immediate Assistance?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team is available 24/7 for emergency AC services
          </p>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="tel:+971551753322">
              <Phone className="w-5 h-5" />
              Call +971 55 175 3322
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default AirConditioning;
