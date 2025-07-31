import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart, Users, GraduationCap, Package, Smartphone } from "lucide-react";

const DonateSection = () => {
  const impactLevels = [
    {
      amount: "₹500",
      impact: "Trains 1 farmer in post-harvest techniques",
      icon: GraduationCap,
      color: "bg-primary"
    },
    {
      amount: "₹850",
      impact: "Trains a group of 30 rural producers",
      icon: Users,
      color: "bg-accent",
      featured: true
    },
    {
      amount: "₹2,500",
      impact: "Complete packaging solution for 1 FPO",
      icon: Package,
      color: "bg-earth-brown"
    },
    {
      amount: "₹5,000",
      impact: "Digital platform setup for 50 farmers",
      icon: Smartphone,
      color: "bg-earth-sage"
    }
  ];

  const handleDonate = (amount: string) => {
    // In a real implementation, this would integrate with Razorpay/Instamojo
    window.open(`mailto:swosti@mye.farm?subject=Donation - ${amount}&body=I would like to donate ${amount} to Abeja Foundation. Please send me the payment details.`, "_blank");
  };

  return (
    <section id="donate" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-8 w-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Support Our Mission
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every contribution directly empowers rural farmers with skills, tools, and market access. 
            Your support creates lasting impact in farming communities.
          </p>
        </div>

        {/* Impact Message */}
        <div className="text-center mb-12">
          <Card className="max-w-2xl mx-auto bg-accent/10 border-accent">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-accent mb-2">₹850</div>
              <div className="text-lg font-semibold text-foreground mb-2">
                trains a group of 30 rural producers
              </div>
              <p className="text-muted-foreground">
                Complete post-harvest training including packaging, branding, and market linkage
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Donation Levels */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactLevels.map((level, index) => (
            <Card 
              key={index} 
              className={`text-center hover:shadow-card transition-all duration-300 transform hover:scale-105 ${
                level.featured ? 'ring-2 ring-accent ring-offset-2' : ''
              }`}
            >
              <CardHeader>
                {level.featured && (
                  <Badge className="mx-auto mb-2 bg-accent text-accent-foreground">
                    Most Popular
                  </Badge>
                )}
                <div className={`mx-auto w-16 h-16 ${level.color} rounded-full flex items-center justify-center mb-4`}>
                  <level.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-primary">{level.amount}</CardTitle>
                <CardDescription className="text-foreground font-medium">
                  {level.impact}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant={level.featured ? "hero" : "outline"}
                  size="sm"
                  className="w-full"
                  onClick={() => handleDonate(level.amount)}
                >
                  Donate {level.amount}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Custom Amount */}
        <div className="text-center mb-16">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-primary">Custom Amount</CardTitle>
              <CardDescription>Choose your own contribution amount</CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="donate" 
                size="lg" 
                className="w-full"
                onClick={() => handleDonate("Custom Amount")}
              >
                Donate Custom Amount
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Payment Information */}
        <div className="text-center mb-12">
          <div className="bg-earth-beige p-6 rounded-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-4">
              Secure & Transparent Donations
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-secondary mb-2">Payment Methods</h4>
                <ul className="text-sm text-foreground space-y-1">
                  <li>• Bank Transfer (NEFT/RTGS)</li>
                  <li>• UPI Payments</li>
                  <li>• Cheque/DD</li>
                  <li>• Online Banking</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-2">Tax Benefits</h4>
                <ul className="text-sm text-foreground space-y-1">
                  <li>• 80G Tax Exemption</li>
                  <li>• Receipt for all donations</li>
                  <li>• Annual impact reports</li>
                  <li>• Transparent fund usage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stories */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">
            Your Impact in Action
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">95%</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Success Rate</h4>
                <p className="text-sm text-muted-foreground">
                  Of trained farmers successfully implement new techniques
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-accent-foreground font-bold">3x</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Income Growth</h4>
                <p className="text-sm text-muted-foreground">
                  Average increase in farmer income post-training
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-earth-brown rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold">100%</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Transparency</h4>
                <p className="text-sm text-muted-foreground">
                  Complete visibility into fund utilization and impact
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Legal & Compliance */}
        <div className="text-center">
          <div className="text-sm text-muted-foreground max-w-3xl mx-auto">
            <p className="mb-2">
              <strong>Abeja Foundation</strong> is a registered Section-8 Non-Profit Company 
              under the Companies Act, 2013.
            </p>
            <p>
              <strong>CIN:</strong> 88900OD2025NPL049565 | 
              <strong> NGO Darpan:</strong> Certified | 
              <strong> 80G:</strong> Tax Exemption Available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;