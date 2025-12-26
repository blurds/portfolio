import { motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.button
          whileHover={{ scale: 1.02 }}
          onClick={() => scrollToSection("#hero")}
          className="font-display font-bold text-xl text-foreground"
        >
          <span className="text-primary">J</span>L
        </motion.button>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => scrollToSection(link.href)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium text-sm link-underline"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => scrollToSection("#contact")}
          className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium text-sm shadow-md hover:shadow-lg transition-all"
        >
          Get in Touch
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;