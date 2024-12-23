import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import Home from "./components/home";
import About from "./components/pages/About";
import Projects from "./components/pages/Projects";
import Skills from "./components/pages/Skills";
import Experience from "./components/pages/Experience";
import Contact from "./components/pages/Contact";

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
        <main className="mx-auto max-w-[2000px] pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Suspense>
    </div>
  );
}

export default App;
