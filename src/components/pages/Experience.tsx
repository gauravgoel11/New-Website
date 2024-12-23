import React from "react";
import { motion } from "framer-motion";

interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

const experiences: Experience[] = [
  {
    role: "Software Developer Intern",
    company: "Joule Universal",
    period: "August 2024 – Current",
    description: [
      "Currently working as a Software Developer Intern",
      "Developing and maintaining software applications",
      "Collaborating with team members on various projects",
    ],
  },
];

const Experience = () => {
  return (
    <section className="min-h-screen w-full bg-background px-4 py-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Experience
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            My professional journey in software development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 space-y-8"
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="rounded-lg bg-card p-6 shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-lg text-muted-foreground">{exp.company}</p>
                </div>
                <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                  {exp.period}
                </span>
              </div>
              <ul className="mt-4 space-y-2">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
