import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, MapPin, Phone, Download, FileText, Send } from "lucide-react";

const ContactSection = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const subject = `Contact Form Submission from ${name}`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    
    window.open(`mailto:swosti@mye.farm?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_blank");
  };

  const downloadPitchDeck = () => {
    window.open("mailto:swosti@mye.farm?subject=Pitch Deck Download Request&body=Please send me the detailed CSR partnership pitch deck.", "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-earth-beige">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to create impact together? We'd love to hear from you. 
            Reach out for partnerships, investments, or to learn more about our work.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-primary flex items-center gap-2">
                <Send className="h-5 w-5" />
                Send us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                    Organization
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                    placeholder="Your organization name"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-2">
                    Interest Area
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                  >
                    <option value="">Select your primary interest</option>
                    <option value="csr-partnership">CSR Partnership</option>
                    <option value="investment">Investment Opportunity</option>
                    <option value="collaboration">Program Collaboration</option>
                    <option value="donation">Donation</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-foreground"
                    placeholder="Tell us about your interest and how we can work together..."
                  />
                </div>

                <Button type="submit" variant="csr" size="lg" className="w-full">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary">Contact Information</CardTitle>
                <CardDescription>Multiple ways to reach our team</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">swosti@mye.farm</p>
                    <p className="text-sm text-muted-foreground">Primary contact for all inquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Address</h4>
                    <p className="text-muted-foreground">
                      Bhubaneswar, Odisha, India
                    </p>
                    <p className="text-sm text-muted-foreground">Working across rural India</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-earth-brown rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">Available via email request</p>
                    <p className="text-sm text-muted-foreground">For scheduled consultations</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Downloads */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Resources & Documents
                </CardTitle>
                <CardDescription>Download our detailed information packets</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={downloadPitchDeck}
                >
                  <Download className="mr-2 h-4 w-4" />
                  CSR Partnership Pitch Deck
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.open("mailto:swosti@mye.farm?subject=Program Brochure Request", "_blank")}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Program Information Brochure
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => window.open("mailto:swosti@mye.farm?subject=Impact Report Request", "_blank")}
                >
                  <Download className="mr-2 h-4 w-4" />
                  Latest Impact Report
                </Button>
              </CardContent>
            </Card>

            {/* Credentials */}
            <Card className="shadow-card bg-card">
              <CardHeader>
                <CardTitle className="text-primary">Our Credentials</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Badge variant="outline" className="w-full justify-start p-3 bg-primary/5">
                    <span className="font-semibold">NGO Darpan:</span>&nbsp;Certified
                  </Badge>
                  <Badge variant="outline" className="w-full justify-start p-3 bg-accent/5">
                    <span className="font-semibold">Registration:</span>&nbsp;Section-8 Company
                  </Badge>
                  <Badge variant="outline" className="w-full justify-start p-3 bg-earth-brown/5">
                    <span className="font-semibold">CIN:</span>&nbsp;88900OD2025NPL049565
                  </Badge>
                  <Badge variant="outline" className="w-full justify-start p-3 bg-earth-sage/5">
                    <span className="font-semibold">Tax:</span>&nbsp;80G Exemption Available
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Response Time */}
        <div className="text-center mt-12">
          <div className="bg-card p-6 rounded-lg shadow-soft max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-2">
              Quick Response Guarantee
            </h3>
            <p className="text-foreground">
              We respond to all partnership and investment inquiries within 24 hours. 
              For urgent matters, please mention "URGENT" in your subject line.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;