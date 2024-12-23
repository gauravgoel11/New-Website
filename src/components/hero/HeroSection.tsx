import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import ProfileImage from "./ProfileImage";

interface HeroSectionProps {
  name?: string;
  title?: string;
  tagline?: string;
  onViewProjects?: () => void;
  onDownloadResume?: () => void;
}

const HeroSection = ({
  name = "Gaurav Goel",
  title = "Software Developer",
  tagline = "Building innovative solutions including websites, machine learning models, and PC software",
  onViewProjects = () => console.log("View projects clicked"),
  onDownloadResume = () => console.log("Download resume clicked"),
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] w-full bg-background px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto h-full max-w-7xl">
        <div className="grid h-full min-h-[calc(100vh-4rem)] grid-cols-1 items-center gap-8 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 flex flex-col items-start justify-center lg:order-1"
          >
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl"
            >
              {name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-4 text-xl font-semibold text-muted-foreground sm:text-2xl md:text-3xl"
            >
              {title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
            >
              {tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex w-full flex-col gap-4 sm:w-auto sm:flex-row"
            >
              <Button
                size="lg"
                onClick={onViewProjects}
                className="w-full sm:w-auto"
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={onDownloadResume}
                className="w-full sm:w-auto"
              >
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="order-1 flex items-center justify-center lg:order-2"
          >
            <ProfileImage size="responsive" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
