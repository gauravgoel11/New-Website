import React from "react";
import { motion } from "framer-motion";

interface Skill {
  category: string;
  items: string[];
}

const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "HTML5/CSS3",
      "JavaScript",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "RESTful APIs",
      "GraphQL",
    ],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Prisma", "Supabase"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "Docker", "AWS", "CI/CD", "Linux", "Webpack"],
  },
];

const Skills = () => {
  return (
    <section className="min-h-screen w-full bg-background px-4 py-20 md:px-6 lg:px-8">
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
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
        >
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="rounded-lg bg-card p-6 shadow-lg transition-transform duration-300 hover:scale-105"
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
