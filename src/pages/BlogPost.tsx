import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/data";

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
          <Link to="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Back Button */}
        <Link to="/blog">
          <Button variant="outline" className="mb-8 gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Button>
        </Link>

        {/* Post Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Badge className="bg-primary/20 text-primary mb-4">{post.category}</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 glow-text">{post.title}</h1>
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
          </div>
        </motion.div>

        {/* Post Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-2xl overflow-hidden mb-8"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full aspect-[16/9] object-cover"
          />
        </motion.div>

        {/* Post Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass p-8 md:p-12 rounded-2xl"
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {post.excerpt}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h2 className="text-2xl font-bold text-primary mb-4 mt-8">Key Insights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass p-8 rounded-2xl text-center mt-8"
        >
          <h2 className="text-2xl font-bold mb-4 glow-text">Need Expert Advice?</h2>
          <p className="text-muted-foreground mb-6">
            Contact us today for professional consultation on your MEP and decoration projects
          </p>
          <Link to="/contact">
            <Button size="lg" className="gap-2 bg-gradient-to-r from-primary to-accent">
              Get in Touch
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogPost;
