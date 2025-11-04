import { motion } from "framer-motion";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";

const Services = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 glow-text">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive MEP and decoration services tailored to meet your needs with precision and excellence
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
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
      </div>
    </div>
  );
};

export default Services;
