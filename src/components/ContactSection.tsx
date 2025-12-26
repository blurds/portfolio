import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="geo-circle w-80 h-80 -bottom-20 -left-20 blur-3xl" />
      <div className="geo-circle w-64 h-64 top-10 right-20 blur-2xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-mono text-sm tracking-wider uppercase mb-4 block">
              Contact
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Let's Work Together
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto mb-12">
              Ready to bring my customer service expertise to your team. Feel free to reach out!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <a
              href="mailto:jasonprimo2@gmail.com"
              className="group p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-1">Email</h3>
              <p className="text-primary-foreground/70 text-sm">jasonprimo2@gmail.com</p>
            </a>

            <a
              href="tel:+639923146761"
              className="group p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-1">Phone</h3>
              <p className="text-primary-foreground/70 text-sm">+63 992 314 6761</p>
            </a>

            <div className="group p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-secondary/20 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <h3 className="font-semibold text-primary-foreground mb-1">Location</h3>
              <p className="text-primary-foreground/70 text-sm">Marikina City, Philippines</p>
            </div>
          </motion.div>

          <motion.a
            href="mailto:jasonprimo2@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            <Send className="w-5 h-5" />
            Send Me a Message
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;