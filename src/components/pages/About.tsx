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
          I'm a passionate Full Stack Developer with a keen eye for creating
          elegant solutions. With several years of experience in web
          development, I specialize in building responsive and user-friendly
          applications using modern technologies.
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-card p-6 shadow-lg">
            <h3 className="text-xl font-semibold">Background</h3>
            <p className="mt-4 text-muted-foreground">
              With a background in Computer Science and years of practical
              experience, I've developed a strong foundation in both frontend
              and backend development.
            </p>
          </div>

          <div className="rounded-lg bg-card p-6 shadow-lg">
            <h3 className="text-xl font-semibold">Approach</h3>
            <p className="mt-4 text-muted-foreground">
              I believe in writing clean, maintainable code and creating
              intuitive user experiences that solve real-world problems.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
