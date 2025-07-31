import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Shield, Award, CheckCircle, Heart, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Abeja Foundation</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Building rural value chains, one farmer at a time. Empowering marginal farmers, 
              SHGs, FPOs, and Producer Groups through post-harvest training, product development, 
              and digital market enablement.
            </p>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 bg-primary-foreground/10 px-3 py-2 rounded-md">
                <Shield className="h-4 w-4" />
                <span className="text-sm">NGO Darpan</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 px-3 py-2 rounded-md">
                <Award className="h-4 w-4" />
                <span className="text-sm">Section-8</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 px-3 py-2 rounded-md">
                <CheckCircle className="h-4 w-4" />
                <span className="text-sm">80G Certified</span>
              </div>
            </div>

            {/* Quick Donate */}
            <div className="bg-primary-foreground/10 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="h-5 w-5 text-accent" />
                <span className="font-semibold">Quick Support</span>
              </div>
              <p className="text-sm text-primary-foreground/80 mb-3">
                ₹850 trains 30 rural producers
              </p>
              <Button 
                variant="secondary" 
                size="sm"
                onClick={() => scrollToSection("donate")}
              >
                Donate Now
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("what-we-do")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  Our Programs
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("impact")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  Impact Stories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("csr-partner")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  CSR Partnership
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("invest")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  Investment
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open("mailto:swosti@mye.farm?subject=Partnership Inquiry", "_blank")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  Partner with Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open("mailto:swosti@mye.farm?subject=Volunteer Inquiry", "_blank")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  Volunteer
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("donate")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-left"
                >
                  Donate
                </button>
              </li>
            </ul>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm text-primary-foreground/80">swosti@mye.farm</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5" />
                <span className="text-sm text-primary-foreground/80">Bhubaneswar, Odisha</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />

      {/* Bottom Bar */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-primary-foreground/80">
              © 2025 Abeja Foundation. All rights reserved.
            </p>
            <p className="text-xs text-primary-foreground/60">
              Section-8 Non-Profit Company | CIN: 88900OD2025NPL049565
            </p>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-primary-foreground/80">
            <button 
              onClick={() => window.open("mailto:swosti@mye.farm?subject=Privacy Policy Request", "_blank")}
              className="hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => window.open("mailto:swosti@mye.farm?subject=Terms of Service Request", "_blank")}
              className="hover:text-primary-foreground transition-colors"
            >
              Terms of Service
            </button>
            <button 
              onClick={() => window.open("mailto:swosti@mye.farm?subject=Annual Report Request", "_blank")}
              className="hover:text-primary-foreground transition-colors"
            >
              Reports
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;