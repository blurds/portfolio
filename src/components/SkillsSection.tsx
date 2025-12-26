import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "CRM & Booking Systems",
    skills: ["Amadeus", "Salesforce", "Jira"]
  },
  {
    category: "Productivity Tools",
    skills: ["Microsoft Office", "Excel", "Word", "Google Docs", "Google Sheets"]
  },
  {
    category: "Technical Skills",
    skills: ["HTML", "Java", "SQL"]
  },
  {
    category: "Soft Skills",
    skills: ["Customer Service", "Technical Support", "Sales", "Problem Solving", "Communication"]
  }
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="text-secondary font-mono text-sm tracking-wider uppercase mb-4 block">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Skills & Tools
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat, catIndex) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="bg-card p-6 rounded-xl border border-border"
            >
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                    className="px-3 py-1.5 bg-muted text-muted-foreground text-sm rounded-lg hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;