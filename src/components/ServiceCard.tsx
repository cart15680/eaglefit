import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, href, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <Card className="glass hover-glow group cursor-pointer h-full">
        <CardContent className="p-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Icon className="w-7 h-7 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {description}
          </p>
          <Link to={href}>
            <Button variant="outline" className="w-full group-hover:bg-primary/10">
              Learn More
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
