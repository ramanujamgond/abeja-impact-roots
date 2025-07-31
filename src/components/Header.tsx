import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Shield, Award, CheckCircle } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
    }`}>
      {/* Trust Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center">
        <div className="container mx-auto flex items-center justify-center gap-6 text-xs md:text-sm">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4" />
            <span>NGO Darpan Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-4 w-4" />
            <span>Section-8 Company</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            <span>CIN: 88900OD2025NPL049565</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-primary">
              Abeja Foundation
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("what-we-do")}
              className="text-foreground hover:text-primary transition-colors"
            >
              What We Do
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Impact
            </button>
            <button
              onClick={() => scrollToSection("csr-partner")}
              className="text-foreground hover:text-primary transition-colors"
            >
              CSR & Partner
            </button>
            <button
              onClick={() => scrollToSection("invest")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Invest
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Desktop Donate Button */}
          <div className="hidden md:block">
            <Button 
              variant="donate" 
              size="sm"
              onClick={() => scrollToSection("donate")}
            >
              Donate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-card rounded-lg shadow-card">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("what-we-do")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                What We Do
              </button>
              <button
                onClick={() => scrollToSection("impact")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Impact
              </button>
              <button
                onClick={() => scrollToSection("csr-partner")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                CSR & Partner
              </button>
              <button
                onClick={() => scrollToSection("invest")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Invest
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              <Button 
                variant="donate" 
                size="sm" 
                className="w-full"
                onClick={() => scrollToSection("donate")}
              >
                Donate
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Sticky Donate Button (appears on scroll) */}
      {isScrolled && (
        <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40">
          <Button 
            variant="donate" 
            size="sm"
            onClick={() => scrollToSection("donate")}
            className="shadow-card animate-fade-in"
          >
            Donate
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;