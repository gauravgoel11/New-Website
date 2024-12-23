import { Suspense } from "react";
import NavBar from "./components/navigation/NavBar";
import HeroSection from "./components/hero/HeroSection";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import Experience from "./components/pages/Experience";
import Contact from "./components/pages/Contact";
import { Toaster } from "./components/ui/toaster";

function App() {
  const handleDownloadResume = () => {
    console.log("Download resume clicked");
  };

  return (
    <div className="min-h-screen w-full bg-background">
      <NavBar onDownloadResume={handleDownloadResume} />
      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center">
            <p className="text-lg">Loading...</p>
          </div>
        }
      >
        <main className="mx-auto max-w-[2000px]">
          <section id="home" className="scroll-mt-16">
            <HeroSection />
          </section>
          <section id="about" className="scroll-mt-16">
            <About />
          </section>
          <section id="projects" className="scroll-mt-16">
            <Projects />
          </section>
          <section id="skills" className="scroll-mt-16">
            <Skills />
          </section>
          <section id="experience" className="scroll-mt-16">
            <Experience />
          </section>
          <section id="contact" className="scroll-mt-16">
            <Contact />
          </section>
        </main>
      </Suspense>
      <Toaster />
    </div>
  );
}

export default App;
