import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, Building2 } from "lucide-react";

const experiences = [
  {
    company: "TTEC",
    role: "CSR II - Qantas & Jetstar Holidays",
    period: "July 2022 - November 2025",
    duties: [
      "Assisted customers with booking accommodations, transportation, and travel products",
      "Processed reservations and payments for flights, hotels, and tours",
      "Recommended travel options and add-ons such as insurance and seat upgrades",
      "Managed post-booking requests including changes, confirmations, and cancellations"
    ]
  },
  {
    company: "Transcom",
    role: "CSR - Samsung",
    period: "February 2021 - April 2021",
    duties: [
      "Diagnosed appliance issues and provided repair solutions",
      "Estimated costs for maintenance and repairs",
      "Delivered technical guidance and troubleshooting assistance to customers"
    ]
  },
  {
    company: "SPI CRM",
    role: "CSR/TSR - eHost / Endurance",
    period: "May 2017 - July 2017",
    duties: [
      "Provided website and software support to clients",
      "Used web development tools to assist in site maintenance and updates",
      "Coordinated with technical teams to address issues and improve functionality",
      "Ensured websites met quality and compatibility standards"
    ]
  },
  {
    company: "Solar Inc.",
    role: "Customer Service / Sales",
    period: "August 2014 - October 2016",
    duties: [
      "Consulted with customers to assess solar energy needs",
      "Recommended suitable solar systems and equipment",
      "Prepared cost-benefit analyses and proposals",
      "Followed up with leads to close sales and ensure satisfaction"
    ]
  }
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <span className="text-secondary font-mono text-sm tracking-wider uppercase mb-4 block">
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Work History
          </h2>
        </motion.div>

        <div ref={ref} className="relative max-w-4xl">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md -translate-x-1/2" />

                <div className="bg-card p-6 md:p-8 rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 text-primary mb-1">
                        <Building2 className="w-4 h-4" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm bg-muted px-3 py-1.5 rounded-full">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {exp.duties.map((duty, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;