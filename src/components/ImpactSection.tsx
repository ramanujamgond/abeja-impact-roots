import { useState, useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, GraduationCap, Building2, TrendingUp } from "lucide-react";
import impactImage from "@/assets/impact-showcase.jpg";

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Animated counter hook
  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
      if (isVisible && !hasStarted) {
        setHasStarted(true);
        let startTime: number;
        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = (currentTime - startTime) / duration;
          
          if (progress < 1) {
            setCount(Math.floor(end * progress));
            requestAnimationFrame(animate);
          } else {
            setCount(end);
          }
        };
        requestAnimationFrame(animate);
      }
    }, [isVisible, hasStarted, end, duration]);

    return count;
  };

  // Intersection Observer for animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const fpoCount = useCounter(15);
  const trainingCount = useCounter(30);
  const womenCount = useCounter(450);
  const growthCount = useCounter(85);

  const metrics = [
    {
      icon: Building2,
      count: fpoCount,
      suffix: "",
      label: "FPOs Supported",
      description: "Farmer Producer Organizations strengthened through our programs",
      color: "text-primary"
    },
    {
      icon: GraduationCap,
      count: trainingCount,
      suffix: "+",
      label: "Trainings Conducted",
      description: "Comprehensive skill development programs delivered",
      color: "text-accent"
    },
    {
      icon: Users,
      count: womenCount,
      suffix: "+",
      label: "SHG Women Reached",
      description: "Self-Help Group women empowered with new skills",
      color: "text-earth-brown"
    },
    {
      icon: TrendingUp,
      count: growthCount,
      suffix: "%",
      label: "Income Growth",
      description: "Average increase in farmer income post-training",
      color: "text-earth-sage"
    }
  ];

  return (
    <section id="impact" ref={sectionRef} className="py-20 bg-earth-beige">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Measuring success through tangible outcomes and lasting change in rural communities.
          </p>
        </div>

        {/* Metrics Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <Card key={index} className="text-center hover:shadow-card transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-6">
                <div className={`mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 ${metric.color}`}>
                  <metric.icon className="h-6 w-6" />
                </div>
                <div className={`text-3xl md:text-4xl font-bold mb-2 ${metric.color}`}>
                  {metric.count}{metric.suffix}
                </div>
                <div className="text-sm font-semibold text-foreground mb-2">
                  {metric.label}
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Before/After Showcase */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-primary mb-8">
            Transformation in Action
          </h3>
          <div className="relative max-w-4xl mx-auto">
            <img
              src={impactImage}
              alt="Before and after comparison of agricultural products"
              className="w-full rounded-lg shadow-card"
            />
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                Before & After
              </Badge>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-card shadow-card">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-foreground">L</span>
                </div>
                <blockquote className="text-lg italic text-foreground mb-4">
                  "Before Abeja Foundation's training, we could only sell our raw turmeric for ₹20 per kg. 
                  Now, with proper packaging and branding, we're selling our processed turmeric powder for ₹180 per kg. 
                  This training has transformed our entire women's group."
                </blockquote>
                <cite className="text-primary font-semibold">
                  — Laxmi Pradhan, President, Maa Durga SHG, Odisha
                </cite>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-8 pt-8 border-t border-border">
                <div>
                  <div className="text-2xl font-bold text-destructive mb-1">₹20/kg</div>
                  <div className="text-sm text-muted-foreground">Before Training</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-1">₹180/kg</div>
                  <div className="text-sm text-muted-foreground">After Training</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Success Stories Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-6 text-center">
              <h4 className="text-xl font-bold mb-2">Skills Development</h4>
              <p className="text-primary-foreground/90">
                95% of trained farmers successfully implement new post-harvest techniques
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-accent text-accent-foreground">
            <CardContent className="p-6 text-center">
              <h4 className="text-xl font-bold mb-2">Market Access</h4>
              <p className="text-accent-foreground/90">
                80% increase in direct market connections for participating FPOs
              </p>
            </CardContent>
          </Card>
          
          <Card className="bg-earth-brown text-primary-foreground">
            <CardContent className="p-6 text-center">
              <h4 className="text-xl font-bold mb-2">Sustainability</h4>
              <p className="text-primary-foreground/90">
                100% of supported groups continue programs independently
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;