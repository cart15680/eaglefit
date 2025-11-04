import { motion } from "framer-motion";
import { Target, Eye, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 glow-text">About Eagle Fit Decorations</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Premier MEP & Decoration Company delivering excellence in Dubai since 2014
          </p>
        </motion.div>

        {/* Company Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-2xl mb-16"
        >
          <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Eagle Fit Decorations is a premier MEP (Mechanical, Electrical, and Plumbing) company based in the UAE, known for delivering exceptional services across diverse domains.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Established with a commitment to quality, innovation, and customer satisfaction, Eagle Fit Decorations has positioned itself as a leader in the field of building maintenance, decoration, and MEP services. With a team of highly skilled professionals, advanced tools, and a customer-centric approach, we ensure that every project we undertake meets the highest standards of excellence.
          </p>
        </motion.div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass h-full hover-glow">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as the most trusted and innovative MEP and decoration company in the UAE, setting benchmarks for quality and professionalism in the industry.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass h-full hover-glow">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide top-notch MEP and decoration solutions that enhance the functionality, aesthetics, and value of properties across the UAE. We aim to build lasting relationships with our clients through reliable services and innovative solutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Managing Director Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass p-8 md:p-12 rounded-2xl mb-16"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Users className="w-16 h-16 text-primary-foreground" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Engineer Mohammed Elrefaey</h3>
              <p className="text-primary mb-4">Managing Director</p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Welcome to Eagle Fit Decorations! Our journey has been defined by our unwavering dedication to delivering solutions that are not only functional but also aesthetically pleasing and sustainable.
                </p>
                <p>
                  We understand the unique needs of our clients and strive to offer tailored services that enhance the comfort, efficiency, and beauty of their spaces. From advanced air conditioning systems to bespoke carpentry, from comprehensive maintenance to intricate decoration design, our team approaches every task with precision and passion.
                </p>
                <p>
                  In a rapidly evolving industry, staying ahead means embracing innovation and fostering a culture of continuous improvement. At Eagle Fit Decorations, we invest in the latest technologies, nurture our talented workforce, and uphold the highest standards of safety and quality.
                </p>
                <p className="font-semibold text-foreground">
                  Thank you for choosing Eagle Fit Decorations. We look forward to serving you and turning your vision into reality.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-12 glow-text">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for excellence in every project we undertake"
              },
              {
                icon: Users,
                title: "Customer Focus",
                description: "Our clients' satisfaction is our top priority"
              },
              {
                icon: Target,
                title: "Innovation",
                description: "We embrace new technologies and innovative solutions"
              },
              {
                icon: Eye,
                title: "Integrity",
                description: "We conduct business with honesty and transparency"
              }
            ].map((value, i) => (
              <Card key={i} className="glass hover-glow">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
