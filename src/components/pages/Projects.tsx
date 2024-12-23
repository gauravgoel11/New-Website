import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  image: string;
}

const defaultProjects: Project[] = [
  {
    title: "Inventory and Employee Management System",
    description:
      "The Inventory and Employee Management System is designed to simplify business operations by managing employee records, tracking stock levels, calculating salaries, and generating detailed reports. It offers features like adding, updating, and viewing inventory and employee details, ensuring efficient and accurate record-keeping.",
    technologies: ["Python", "SQL", "PyQt"],
    demoLink: "#",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600",
  },
  {
    title: "Goel's GPT",
    description:
      "Goel's GPT is an innovative website designed to provide intelligent and conversational responses similar to ChatGPT. Goel's GPT offers users an interactive experience for answering questions, solving problems, and generating creative content. Whether you need help with writing, brainstorming, or learning, Goel's GPT is your go-to platform for smart and engaging outputs.",
    technologies: ["React", "OpenAI API", "Node.js"],
    demoLink: "#",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600",
  },
  {
    title: "Text-to-Image Converter Website",
    description:
      "A text-to-image converter website allows users to transform their ideas into visual art. Simply input a description or concept in text form, and the platform generates an image based on your input. It's a powerful tool for creative projects, marketing, or bringing imaginative visions to life effortlessly.",
    technologies: ["React", "Stable Diffusion", "Python"],
    demoLink: "#",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600",
  },
  {
    title: "Titanic Survival Prediction Using Machine Learning",
    description:
      "The sinking of the RMS Titanic in 1912 was a tragic maritime disaster, with over 1,500 lives lost. This project uses machine learning to predict passenger survival based on factors like age, sex, and class. By applying the Random Forest algorithm, I aim to estimate survival chances and gain insights into safety and social dynamics.",
    technologies: ["Python", "Scikit-learn", "Pandas"],
    demoLink: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600",
  },
  {
    title: "Credit Card Fraud Detection",
    description:
      "Credit card fraud detection encompasses a range of strategies and technologies aimed at preventing unauthorized purchases, whether online or in physical stores. The primary goal is to verify the cardholder's identity and ensure the legitimacy of each transaction.",
    technologies: ["Python", "Machine Learning", "Data Analysis"],
    demoLink: "#",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600",
  },
  {
    title: "Goel's GPT Telegram Bot",
    description:
      "GoelGPT is a playful and interactive Telegram bot designed to bring the power of GPT to your Telegram channel. It provides GPT-generated outputs directly within Telegram, offering fun and engaging conversations. Perfect for those who love combining AI technology with seamless messaging!",
    technologies: ["Python", "Telegram API", "OpenAI API"],
    demoLink: "#",
    image:
      "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=800&h=600",
  },
];

const Projects = () => {
  return (
    <section className="min-h-screen w-full bg-background px-4 py-20 md:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Here are some of my recent projects that showcase my skills and
            experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {defaultProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full bg-secondary px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Project
                </a>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
