import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Globe, Calendar, ArrowRight, Phone } from "lucide-react";

const InvestSection = () => {
  const visionPoints = [
    {
      year: "2026",
      target: "10,000 rural producers empowered",
      description: "Comprehensive training and market linkage programs"
    },
    {
      year: "2027",
      target: "50 FPO partnerships established",
      description: "Strategic alliances for sustainable growth"
    },
    {
      year: "2028",
      target: "100+ branded products in market",
      description: "Complete value chain transformation"
    }
  ];

  const investmentAreas = [
    {
      icon: TrendingUp,
      title: "Technology Infrastructure",
      description: "Digital platforms for farmer training and market connectivity",
      impact: "Scale training reach by 10x"
    },
    {
      icon: Users,
      title: "Human Resource Development",
      description: "Expert trainers and field coordinators for quality delivery",
      impact: "Ensure 95% program success rate"
    },
    {
      icon: Globe,
      title: "Market Expansion",
      description: "Partnership development and new geographic regions",
      impact: "Reach 5 new states by 2027"
    }
  ];

  const teamMembers = [
    {
      name: "Swosti Mishra",
      role: "Founder & CEO",
      expertise: "Rural Development, 8+ years experience",
      initial: "S"
    },
    {
      name: "Development Team",
      role: "Program Directors",
      expertise: "Agricultural extension, Post-harvest management",
      initial: "T"
    },
    {
      name: "Advisory Board",
      role: "Strategic Advisors",
      expertise: "Impact investing, Rural entrepreneurship",
      initial: "A"
    }
  ];

  const scheduleCall = () => {
    window.open("mailto:swosti@mye.farm?subject=Investment Opportunity - Intro Call Request&body=I'm interested in discussing investment opportunities with Abeja Foundation. Please let me know your availability for an introductory call.", "_blank");
  };

  return (
    <section id="invest" className="py-20 bg-earth-beige">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Invest in Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Join us in scaling sustainable solutions for rural development. 
            Create financial returns while generating measurable social impact.
          </p>
        </div>

        {/* Vision 2026+ */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">
            Our Vision for 2026+
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent hidden md:block"></div>
              
              <div className="space-y-8">
                {visionPoints.map((point, index) => (
                  <div key={index} className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className="hidden md:flex absolute left-6 w-4 h-4 bg-accent rounded-full border-4 border-background"></div>
                    
                    {/* Content */}
                    <Card className="w-full md:ml-16 hover:shadow-card transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-2">
                          <Badge variant="secondary" className="bg-accent text-accent-foreground">
                            {point.year}
                          </Badge>
                          <h4 className="text-xl font-bold text-primary">{point.target}</h4>
                        </div>
                        <p className="text-foreground">{point.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Investment Areas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">
            Investment Opportunities
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {investmentAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300 transform hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                    <area.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-primary">{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent">
                    {area.impact}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">
            Leadership Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">{member.initial}</span>
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-1">{member.name}</h4>
                  <p className="text-secondary font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Financial Projections */}
        <div className="mb-16">
          <Card className="max-w-4xl mx-auto bg-card">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">Projected Impact & Returns</CardTitle>
              <CardDescription>Financial sustainability with social impact</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">₹2.5Cr</div>
                  <div className="text-sm text-muted-foreground">Total Program Value (2026)</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">15%</div>
                  <div className="text-sm text-muted-foreground">Projected Annual Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-earth-brown mb-2">10,000+</div>
                  <div className="text-sm text-muted-foreground">Lives Impacted</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-card p-8 rounded-lg shadow-card">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Ready to Invest in Rural Transformation?
          </h3>
          <p className="text-foreground mb-6 max-w-2xl mx-auto">
            Schedule an introductory call with our team to discuss investment opportunities, 
            impact metrics, and how we can align with your investment thesis.
          </p>
          
          <Button variant="invest" size="xl" onClick={scheduleCall}>
            <Phone className="mr-2 h-5 w-5" />
            Schedule Intro Call
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          
          <div className="mt-6 text-sm text-muted-foreground">
            <p>
              <strong>Legal Status:</strong> Section-8 Company | 
              <strong> Registration:</strong> CIN: 88900OD2025NPL049565 | 
              <strong> Compliance:</strong> NGO Darpan Certified
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestSection;