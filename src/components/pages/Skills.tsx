import React from "react";
import { motion } from "framer-motion";

interface Skill {
  category: string;
  items: string[];
}

const skills: Skill[] = [
  {
    category: "Languages",
    items: ["Java", "Python", "SQL"],
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "Applications",
    items: [
      "Eclipse",
      "Visual Studio",
      "Git",
      "VirtualBox",
      "MySQL",
      "Wireshark",
      "Jupyter Notebook",
      "PyCharm",
    ],
  },
  {
    category: "Operating Systems",
    items: ["Linux", "macOS", "Windows", "Android"],
  },
];

const Skills = () => {
  return (
    <section className="w-full bg-background px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Skills
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Here's an overview of my technical skills and expertise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="rounded-xl bg-card p-6 shadow-lg ring-1 ring-gray-200/50 transition-transform duration-300 hover:scale-[1.02]"
            >
              <h3 className="text-xl font-semibold">{skillGroup.category}</h3>
              <ul className="mt-4 space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="flex items-center text-muted-foreground"
                  >
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                    {skill}
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

export default Skills;
