import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";

const education = [
  {
    school: "ICCT College",
    degree: "BSIT",
    period: "2024 - Present",
    status: "Currently Enrolled"
  },
  {
    school: "STI College Marikina",
    degree: "IT Studies",
    period: "2013 - 2014",
    status: "Completed"
  },
  {
    school: "AMA College University",
    degree: "IT Studies",
    period: "2012 - 2013",
    status: "Completed"
  }
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="text-secondary font-mono text-sm tracking-wider uppercase mb-4 block">
            Education
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Academic Background
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card p-6 rounded-xl border border-border hover:border-primary/30 transition-all"
            >
              {edu.status === "Currently Enrolled" && (
                <div className="absolute -top-3 right-4 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full">
                  Current
                </div>
              )}
              
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="font-bold text-foreground mb-1">{edu.school}</h3>
              <p className="text-primary font-medium mb-3">{edu.degree}</p>
              
              <div className="flex items-center gap-2 text-muted-foreground text-sm">
                <Calendar className="w-3.5 h-3.5" />
                <span>{edu.period}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;