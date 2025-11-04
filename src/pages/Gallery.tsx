import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { galleryItems } from "@/lib/data";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const categories = ["All", "Interior", "Renovation", "Commercial", "Residential", "Outdoor"];

  const filteredItems = filter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-6 glow-text">Gallery</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Browse through our collection of completed projects and inspiring designs
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-xl overflow-hidden hover-glow cursor-pointer group"
              onClick={() => setSelectedImage(item.image)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">No items found in this category</p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Gallery item"
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
