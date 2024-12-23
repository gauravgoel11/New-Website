import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Download, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import resumePdf from "/Gaurav_Goel_Resume.pdf";

interface NavItem {
  label: string;
  href: string;
}

interface NavBarProps {
  items?: NavItem[];
  onDownloadResume?: () => void;
  className?: string;
}

const NavBar = ({
  items = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ],
  className,
}: NavBarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeSection, setActiveSection] = useState("home");
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePdf;
    link.download = "Gaurav_Goel_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Handle navbar visibility
      if (currentScrollY > lastScrollY) {
        setIsVisible(false); // Scrolling down - hide navbar
      } else {
        setIsVisible(true); // Scrolling up - show navbar
      }

      setLastScrollY(currentScrollY);
      setIsScrolled(currentScrollY > 20);

      // Update active section
      const sections = items.map((item) => item.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items, lastScrollY]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-300",
        isScrolled ? "shadow-md" : "",
        isVisible ? "translate-y-0" : "-translate-y-full",
        className,
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo/Brand */}
          <button
            onClick={() => scrollToSection("#home")}
            className="text-xl font-bold hover:text-primary"
          >
            Portfolio
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {items.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  activeSection === item.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground",
                )}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={handleDownloadResume}
              variant="default"
              size="sm"
              className="ml-4"
            >
              <Download className="mr-2 h-4 w-4" />
              Resume
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="mt-8 flex flex-col space-y-4">
                  {items.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => {
                        scrollToSection(item.href);
                      }}
                      className={cn(
                        "p-2 text-sm font-medium transition-colors hover:text-primary",
                        activeSection === item.href.substring(1)
                          ? "text-primary"
                          : "text-muted-foreground",
                      )}
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button
                    onClick={handleDownloadResume}
                    variant="default"
                    size="sm"
                    className="mt-4"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
