import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, MapPin, Eye, Target, Users, Leaf } from "lucide-react";

const CSRPartnerSection = () => {
  const csrBenefits = [
    {
      icon: MapPin,
      title: "Region-Specific Development",
      description: "Focus your CSR impact on specific rural regions with measurable outcomes"
    },
    {
      icon: Eye,
      title: "High Visibility Impact",
      description: "Clear documentation and reporting for stakeholder communication"
    },
    {
      icon: Target,
      title: "SDG Alignment",
      description: "Direct contribution to multiple Sustainable Development Goals"
    }
  ];

  const sdgGoals = [
    { number: 1, title: "No Poverty", color: "bg-red-500" },
    { number: 2, title: "Zero Hunger", color: "bg-yellow-500" },
    { number: 5, title: "Gender Equality", color: "bg-pink-500" },
    { number: 8, title: "Decent Work", color: "bg-purple-500" },
    { number: 12, title: "Responsible Consumption", color: "bg-green-500" }
  ];

  const pilotOutcomes = [
    "15 FPOs strengthened with sustainable business models",
    "450+ women farmers trained in value-addition techniques",
    "85% average income increase post-intervention",
    "30+ branded products successfully launched in markets",
    "25+ digital platforms enabled for direct farmer sales"
  ];

  const downloadPitchDeck = () => {
    // In a real implementation, this would trigger a PDF download
    window.open("mailto:swosti@mye.farm?subject=CSR Partnership - Pitch Deck Request&body=Please send me the detailed CSR partnership pitch deck.", "_blank");
  };

  return (
    <section id="csr-partner" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            CSR & Partner With Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Create lasting impact in rural India through strategic partnerships. 
            Align your CSR objectives with measurable outcomes in agricultural development.
          </p>
        </div>

        {/* CSR Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {csrBenefits.map((benefit, index) => (
            <Card key={index} className="text-center hover:shadow-card transition-all duration-300 transform hover:scale-105">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="h-8 w-8 text-accent-foreground" />
                </div>
                <CardTitle className="text-primary">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-foreground">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* SDG Alignment */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">
            SDG Alignment
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-5 gap-4 mb-8">
              {sdgGoals.map((goal) => (
                <div key={goal.number} className="text-center">
                  <div className={`w-20 h-20 mx-auto ${goal.color} rounded-full flex items-center justify-center text-white font-bold text-xl mb-2`}>
                    {goal.number}
                  </div>
                  <p className="text-xs text-foreground">{goal.title}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-muted-foreground">
                Our programs directly contribute to 5 key Sustainable Development Goals, 
                providing clear pathways for CSR impact measurement and reporting.
              </p>
            </div>
          </div>
        </div>

        {/* Pilot Outcomes */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">
            Proven Pilot Outcomes
          </h3>
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold text-secondary mb-4">Key Results</h4>
                  <ul className="space-y-3">
                    {pilotOutcomes.map((outcome, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-foreground">{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-secondary mb-4">Partnership Benefits</h4>
                  <div className="space-y-4">
                    <Badge variant="outline" className="w-full justify-start p-3">
                      <Users className="h-4 w-4 mr-2" />
                      Direct community engagement
                    </Badge>
                    <Badge variant="outline" className="w-full justify-start p-3">
                      <Leaf className="h-4 w-4 mr-2" />
                      Sustainable development focus
                    </Badge>
                    <Badge variant="outline" className="w-full justify-start p-3">
                      <Target className="h-4 w-4 mr-2" />
                      Measurable impact metrics
                    </Badge>
                    <Badge variant="outline" className="w-full justify-start p-3">
                      <Eye className="h-4 w-4 mr-2" />
                      Transparent reporting
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-earth-beige p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Ready to Create Lasting Impact?
          </h3>
          <p className="text-foreground mb-6 max-w-2xl mx-auto">
            Join us in building sustainable rural value chains. Download our detailed 
            CSR partnership proposal or schedule a consultation call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="csr" size="lg" onClick={downloadPitchDeck}>
              <Download className="mr-2 h-5 w-5" />
              Download CSR Pitch Deck
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Schedule Consultation
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground">
            <p>
              <strong>NGO Darpan:</strong> Certified | 
              <strong> Section-8 Company:</strong> Registered | 
              <strong> CIN:</strong> 88900OD2025NPL049565
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CSRPartnerSection;