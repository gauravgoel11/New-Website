import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./navigation/NavBar";
import HeroSection from "./hero/HeroSection";

interface HomePageProps {
  name?: string;
  title?: string;
  tagline?: string;
  onDownloadResume?: () => void;
}

const HomePage = ({
  name = "Gaurav Goel",
  title = "Software Developer",
  tagline = "Building innovative solutions including websites, machine learning models, and PC software",
  onDownloadResume = () => console.log("Download resume clicked"),
}: HomePageProps) => {
  const navigate = useNavigate();

  const handleViewProjects = () => {
    navigate("/projects");
  };

  return (
    <main className="min-h-screen w-full bg-background">
      <NavBar onDownloadResume={onDownloadResume} />
      <div id="home" className="pt-16">
        <HeroSection
          name={name}
          title={title}
          tagline={tagline}
          onViewProjects={handleViewProjects}
          onDownloadResume={onDownloadResume}
        />
      </div>
    </main>
  );
};

export default HomePage;
