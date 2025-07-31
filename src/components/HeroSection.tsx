import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-training.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Rural farmers during post-harvest training session"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-earth-forest/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Building rural value chains,{" "}
            <span className="text-accent">one farmer at a time.</span>
          </h1>
          
          <p className="text-lg md:text-xl mb-8 text-primary-foreground/90">
            Powered by NGO Darpan | Section 8 Company | CIN: 88900OD2025NPL049565
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection("csr-partner")}
              className="animate-fade-in"
            >
              Partner with us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => scrollToSection("about")}
              className="bg-white/10 text-white border-white/30 hover:bg-white/20 animate-fade-in"
            >
              Learn More
            </Button>
          </div>

          {/* Farmer Quote */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto animate-fade-in">
            <blockquote className="text-lg italic mb-4">
              "This training changed everything for our women's group."
            </blockquote>
            <cite className="text-accent font-semibold">— Laxmi, Odisha</cite>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;