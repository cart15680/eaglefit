import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Clock, DollarSign, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/lib/data";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/portfolio">
            <Button>Back to Portfolio</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link to="/portfolio">
          <Button variant="outline" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
        </Link>

        {/* Project Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold glow-text">{project.title}</h1>
            <Badge className="bg-primary/20 text-primary">{project.category}</Badge>
          </div>
          <p className="text-lg text-muted-foreground">{project.description}</p>
        </motion.div>

        {/* Project Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl overflow-hidden mb-12"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full aspect-[16/9] object-cover"
          />
        </motion.div>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="glass h-full">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">Project Information</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-semibold">{project.details.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-semibold">{project.details.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Project Value</p>
                      <p className="font-semibold">{project.details.cost}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glass h-full">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">Services Provided</h2>
                <ul className="space-y-3">
                  {project.details.services.map((service, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{service}</span>
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
          transition={{ delay: 0.5 }}
          className="glass p-8 rounded-2xl text-center"
        >
          <h2 className="text-3xl font-bold mb-4 glow-text">Interested in a Similar Project?</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Contact us today to discuss your project requirements and get a free consultation
          </p>
          <Link to="/contact">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-accent">
              Request Similar Design
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
