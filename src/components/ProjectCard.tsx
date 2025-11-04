import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  delay?: number;
}

const ProjectCard = ({ id, title, category, image, description, delay = 0 }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <Link to={`/portfolio/${id}`}>
        <Card className="glass overflow-hidden hover-glow group cursor-pointer h-full">
          <div className="relative overflow-hidden aspect-[4/3]">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute bottom-4 left-4 right-4">
                <Badge className="bg-primary/80 mb-2">{category}</Badge>
                <p className="text-sm text-foreground/80 line-clamp-2">{description}</p>
              </div>
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
              {title}
            </h3>
            <Badge variant="outline" className="mt-2">{category}</Badge>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;
