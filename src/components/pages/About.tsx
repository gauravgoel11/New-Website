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
            <h3 className="text-xl font-semibold">Education</h3>
            <div className="mt-4 space-y-2">
              <p className="font-medium">
                Maharaja Agrasen Institute of Technology (MAIT), GGSIPU
              </p>
              <p className="text-muted-foreground">
                Bachelor of Technology in Artificial Intelligence and Data
                Science
              </p>
              <p className="text-muted-foreground">2021 – 2025</p>
              <p className="text-muted-foreground">CGPA: 8.325/10</p>
              <div className="mt-4">
                <p className="font-medium">Key Coursework:</p>
                <ul className="mt-2 list-inside space-y-1 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    Data Structures and Algorithms
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    Machine Learning
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    Data Science
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    Java, Python Programming
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    Object-Oriented Programming (OOP)
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    SQL, Database Management
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    Web Development
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
