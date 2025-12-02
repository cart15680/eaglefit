import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const mailtoLink = `mailto:sumonforwork007@gmail.com?subject=Service Request: ${formData.get("service")}&body=Name: ${formData.get("name")}%0D%0AEmail: ${formData.get("email")}%0D%0APhone: ${formData.get("phone")}%0D%0AService: ${formData.get("service")}%0D%0A%0D%0AMessage:%0D%0A${formData.get("message")}`;
    
    window.location.href = mailtoLink;
    toast.success("Opening your email client...");
    setIsSubmitting(false);
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 glow-text">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with us for a free consultation on your MEP and decoration needs
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-primary">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="John Doe"
                        required
                        className="glass"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="glass"
                      />
                    </div>
                  </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+971 XX XXX XXXX"
                        required
                        className="glass"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="service">Service Interested</Label>
                      <select
                        id="service"
                        name="service"
                        className="w-full h-10 rounded-lg glass px-3 py-2 text-sm"
                        required
                      >
                        <option value="">Select a service</option>
                        <option>Air Conditioning Services</option>
                        <option>Carpentry & Wood Flooring Works</option>
                        <option>Sanitary Installation & Pipe Repairing</option>
                        <option>Painting Contracting</option>
                        <option>Wallpaper Fixing Works</option>
                        <option>Electrical Fitting & Fixture Repairing & Maintenance</option>
                        <option>Plaster Works</option>
                        <option>False Ceiling & Light Partition Installation</option>
                        <option>Swimming Pool Installation Works</option>
                        <option>Building Maintenance</option>
                        <option>Decoration Design & Implementation</option>
                      </select>
                    </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      required
                      className="glass"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <Card className="glass hover-glow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                    <p className="text-muted-foreground">
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass hover-glow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                    <a href="tel:+971551753322" className="text-muted-foreground hover:text-primary transition-colors block mb-1">
                      +971 55 175 3322
                    </a>
                    <a href="tel:+971568158826" className="text-muted-foreground hover:text-primary transition-colors block mb-1">
                      +971 56 815 8826
                    </a>
                    <p className="text-muted-foreground">Available 24 x 7</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass hover-glow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                    <a href="mailto:info@eaglefitdecorations.com" className="text-muted-foreground hover:text-primary transition-colors block mb-1">
                      info@eaglefitdecorations.com
                    </a>
                    <p className="text-muted-foreground">We'll respond within 24 hours</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass hover-glow">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Working Hours</h3>
                    <p className="text-muted-foreground text-lg font-semibold">24 x 7</p>
                    <p className="text-muted-foreground">Available All Days, Anytime</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 glass rounded-2xl overflow-hidden"
        >
          <div className="aspect-[21/9] bg-muted/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.68285284476!2d54.89782399296174!3d25.076280055515413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai!5e0!3m2!1sen!2sae!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
