import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen w-full bg-background px-4 py-20 md:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl"
      >
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
          About Me
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Hi, I'm Gaurav Goel, a Software Developer with a B.Tech in Artificial
          Intelligence and Data Science. I specialize in Python development,
          data science, and machine learning, with expertise in PC software
          development and web development. I've built projects like an Inventory
          Management System that streamline processes and improve efficiency.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-card p-6 shadow-lg">
            <h3 className="text-xl font-semibold">Experience</h3>
            <p className="mt-4 text-muted-foreground">
              With a 6-month internship at Joule Universal, I've honed my skills
              in software development and creating innovative solutions.
            </p>
          </div>

          <div className="rounded-lg bg-card p-6 shadow-lg">
            <h3 className="text-xl font-semibold">Approach</h3>
            <p className="mt-4 text-muted-foreground">
              I'm driven by a curiosity for new challenges and love bringing
              ideas to life through coding. When I'm not working on projects, I
              enjoy reading, hiking, and exploring emerging tech trends.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
