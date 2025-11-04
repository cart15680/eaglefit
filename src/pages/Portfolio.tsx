import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Residential", "Commercial", "Retail"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-6 glow-text">Our Portfolio</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our collection of successfully completed projects across Dubai
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={filter === category ? "bg-gradient-to-r from-primary to-accent" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, i) => (
            <ProjectCard
              key={project.id}
              {...project}
              delay={i * 0.1}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No projects found in this category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
