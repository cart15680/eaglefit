import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { services } from "@/lib/data";

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/services">
          <Button variant="outline" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Services
          </Button>
        </Link>

        {/* Service Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-8 md:p-12 rounded-2xl mb-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
              <Icon className="w-10 h-10 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4 glow-text">{service.title}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Service Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass h-full">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">Key Features</h2>
                <ul className="space-y-4">
                  {[
                    "Professional and experienced team",
                    "High-quality materials and equipment",
                    "Timely project completion",
                    "Competitive pricing",
                    "Comprehensive warranty",
                    "24/7 emergency support"
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{feature}</span>
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
                <h2 className="text-2xl font-bold mb-6 text-primary">Service Benefits</h2>
                <ul className="space-y-4">
                  {[
                    "Enhanced property value",
                    "Improved functionality and efficiency",
                    "Modern and aesthetic solutions",
                    "Energy-efficient implementations",
                    "Long-lasting results",
                    "Compliance with UAE standards"
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass p-8 rounded-2xl text-center"
        >
          <h2 className="text-3xl font-bold mb-4 glow-text">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote for your {service.title.toLowerCase()} project
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-accent">
                Request Free Quote
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="gap-2">
              <Phone className="w-5 h-5" />
              Call +971 XX XXX XXXX
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServiceDetail;
