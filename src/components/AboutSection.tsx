import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Award, CheckCircle, FileText } from "lucide-react";
import founderImage from "@/assets/founder-portrait.jpg";

const AboutSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 bg-earth-beige">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <img
              src={founderImage}
              alt="Swosti Mishra, Founder of Abeja Foundation"
              className="rounded-lg shadow-card w-full max-w-md mx-auto"
            />
            <div className="absolute -bottom-4 -right-4 bg-accent p-4 rounded-lg shadow-card">
              <p className="text-sm font-semibold text-accent-foreground">
                Founded 2025
              </p>
            </div>
          </div>

          {/* Content Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              About Abeja Foundation
            </h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-secondary mb-3">
                Founded by Swosti Mishra
              </h3>
              <p className="text-foreground mb-4">
                Abeja Foundation was established with a clear vision: to bridge the critical gap 
                between cultivation and market success for rural farmers. Our founder, Swosti Mishra, 
                brings extensive experience in rural development and agricultural value chains.
              </p>
            </div>

            {/* Mission & Vision */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-secondary mb-3">
                Our Mission
              </h3>
              <p className="text-foreground mb-6">
                To empower marginal farmers, SHGs, FPOs, and Producer Groups through comprehensive 
                post-harvest training, product development, and digital market enablement.
              </p>

              <div className="bg-card p-6 rounded-lg shadow-soft border-l-4 border-accent">
                <h4 className="font-semibold text-primary mb-2">The Gap We Fill</h4>
                <p className="text-foreground italic">
                  "Most interventions end at cultivation. But the real value lies post-harvest. 
                  Abeja Foundation empowers farmers with the tools and training to capture that 
                  value through packaging, branding, and digital markets."
                </p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mb-8">
              <h4 className="font-semibold text-primary mb-4">Our Credentials</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Badge variant="outline" className="flex flex-col items-center p-4 bg-card">
                  <Shield className="h-6 w-6 text-primary mb-2" />
                  <span className="text-xs text-center">NGO Darpan</span>
                </Badge>
                <Badge variant="outline" className="flex flex-col items-center p-4 bg-card">
                  <Award className="h-6 w-6 text-primary mb-2" />
                  <span className="text-xs text-center">Section 8</span>
                </Badge>
                <Badge variant="outline" className="flex flex-col items-center p-4 bg-card">
                  <CheckCircle className="h-6 w-6 text-primary mb-2" />
                  <span className="text-xs text-center">CSR Ready</span>
                </Badge>
                <Badge variant="outline" className="flex flex-col items-center p-4 bg-card">
                  <FileText className="h-6 w-6 text-primary mb-2" />
                  <span className="text-xs text-center">Verified PAN</span>
                </Badge>
              </div>
            </div>

            {/* Call to Action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="csr" 
                onClick={() => scrollToSection("csr-partner")}
              >
                Partner with Us
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("what-we-do")}
              >
                See Our Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;