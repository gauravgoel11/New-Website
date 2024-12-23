import React from "react";
import NavBar from "./navigation/NavBar";
import HeroSection from "./hero/HeroSection";

interface HomePageProps {
  name?: string;
  title?: string;
  tagline?: string;
  onViewProjects?: () => void;
  onDownloadResume?: () => void;
}

const HomePage = ({
  name = "John Doe",
  title = "Full Stack Developer",
  tagline = "Building beautiful and functional web experiences with modern technologies",
  onViewProjects = () => console.log("View projects clicked"),
  onDownloadResume = () => console.log("Download resume clicked"),
}: HomePageProps) => {
  return (
    <main className="min-h-screen w-full bg-background">
      <NavBar onDownloadResume={onDownloadResume} />
      <div id="home" className="pt-16">
        <HeroSection
          name={name}
          title={title}
          tagline={tagline}
          onViewProjects={onViewProjects}
          onDownloadResume={onDownloadResume}
        />
      </div>
    </main>
  );
};

export default HomePage;
