import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Headphones, Wrench, ShoppingCart, Globe } from "lucide-react";

const highlights = [
  {
    icon: Headphones,
    title: "Customer Support",
    description: "Multi-channel expertise in calls, chat, and email communications"
  },
  {
    icon: Wrench,
    title: "Technical Service",
    description: "Skilled in troubleshooting and resolving complex technical issues"
  },
  {
    icon: ShoppingCart,
    title: "Sales",
    description: "Promoting products and driving customer satisfaction"
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Experience with HTML, Java, SQL, and site maintenance"
  }
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-secondary font-mono text-sm tracking-wider uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Career Overview
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With experience spanning multiple industries—travel, appliances, technology, and renewable energy—I bring a versatile skill set to every role. I excel at handling customer inquiries via multiple channels, resolving technical issues efficiently, booking services, and promoting additional products to enhance customer satisfaction and drive sales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;