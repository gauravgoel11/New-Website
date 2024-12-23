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
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  demoLink: string;
  githubLink: string;
  image: string;
}

const defaultProjects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with cart functionality and payment integration.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "#",
    githubLink: "#",
    image:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600",
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    demoLink: "#",
    githubLink: "#",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600",
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard showing forecasts and historical weather data.",
    technologies: ["React", "Redux", "OpenWeather API"],
    demoLink: "#",
    githubLink: "#",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600",
  },
  {
    title: "Social Media Analytics",
    description: "Analytics dashboard for social media performance tracking.",
    technologies: ["Vue.js", "D3.js", "Firebase"],
    demoLink: "#",
    githubLink: "#",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600",
  },
  {
    title: "Fitness Tracker",
    description:
      "A fitness tracking application with workout plans and progress monitoring.",
    technologies: ["React Native", "GraphQL", "MongoDB"],
    demoLink: "#",
    githubLink: "#",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600",
  },
  {
    title: "Recipe Sharing Platform",
    description:
      "A platform for sharing and discovering recipes with social features.",
    technologies: ["Angular", "Node.js", "MySQL"],
    demoLink: "#",
    githubLink: "#",
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
                <Button asChild variant="outline" size="sm">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
