import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Package, Smartphone } from "lucide-react";
import trainingImage from "@/assets/training-workshop.jpg";
import productImage from "@/assets/product-development.jpg";
import digitalImage from "@/assets/digital-market.jpg";

const WhatWeDoSection = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Post-Harvest Training",
      description: "Comprehensive training programs for farmers on post-harvest handling, processing, and value addition techniques.",
      image: trainingImage,
      stat: "600+ farmers trained",
      features: [
        "Quality processing techniques",
        "Storage and preservation",
        "Value addition methods",
        "Food safety standards"
      ]
    },
    {
      icon: Package,
      title: "Product Development & Packaging",
      description: "Supporting farmers in developing marketable products with professional packaging and branding solutions.",
      image: productImage,
      stat: "50+ products developed",
      features: [
        "Product design and development",
        "Professional packaging solutions",
        "Brand identity creation",
        "Market-ready presentation"
      ]
    },
    {
      icon: Smartphone,
      title: "Digital Market & E-commerce Enablement",
      description: "Empowering farmers with digital literacy and e-commerce skills to access broader markets.",
      image: digitalImage,
      stat: "25+ digital platforms",
      features: [
        "Digital literacy training",
        "E-commerce platform setup",
        "Online marketing strategies",
        "Digital payment systems"
      ]
    }
  ];

  return (
    <section id="what-we-do" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive support to rural farmers and producer groups, 
            focusing on post-harvest value addition and market connectivity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-card transition-all duration-300 transform hover:scale-105">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {service.stat}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4 bg-primary p-3 rounded-full">
                  <service.icon className="h-6 w-6 text-primary-foreground" />
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-primary">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-earth-beige p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Ready to Scale Your Impact?
            </h3>
            <p className="text-foreground mb-6 max-w-2xl mx-auto">
              Join us in building sustainable rural value chains that create lasting impact 
              for farming communities across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById("csr-partner")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
              >
                Explore CSR Partnership
              </button>
              <button 
                onClick={() => document.getElementById("invest")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-accent text-accent-foreground px-6 py-3 rounded-md hover:bg-earth-mustard transition-colors"
              >
                Investment Opportunities
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;