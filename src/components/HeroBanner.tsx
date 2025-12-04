import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Calendar, Mail } from "lucide-react";

interface HeroBannerProps {
  title?: string;
  subtitle?: string;
  description?: string;
  showCTA?: boolean;
}

const HeroBanner = ({
  title = "Sachin-Jatin",
  subtitle = "Spreading Divine Music Through Devotion",
  description = "Experience the sacred power of bhajans that connect hearts and uplift souls. Join us on a spiritual journey through devotional music.",
  showCTA = true,
}: HeroBannerProps) => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Mandala Background Pattern */}
      <div className="absolute inset-0 mandala-pattern opacity-30" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-saffron/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gold/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-maroon/5 blur-2xl" />
      
      {/* Content */}
      <div className="container relative z-10 text-center px-4 py-20">
        {/* Om Symbol */}
        <div className="mb-6 animate-fade-in">
          <span className="text-6xl text-gold opacity-60">ॐ</span>
        </div>
        
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-4 animate-fade-in-up">
          <span className="text-gradient-devotional">{title}</span>
        </h1>
        
        <p className="font-heading text-xl md:text-2xl lg:text-3xl text-gold mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          {subtitle}
        </p>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          {description}
        </p>
        
        {showCTA && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <Button asChild size="lg" className="group bg-gradient-devotional hover:shadow-glow transition-all duration-300">
              <Link to="/bhajans" className="flex items-center gap-2">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Listen to Bhajans
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-gold/50 hover:bg-gold/10 hover:border-gold transition-all duration-300">
              <Link to="/concerts" className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Concert History
              </Link>
            </Button>
            
            <Button asChild variant="ghost" size="lg" className="hover:bg-maroon/10 hover:text-maroon transition-all duration-300">
              <Link to="/contact" className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        )}
        
        {/* Decorative Border */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-gradient-devotional rounded-full opacity-60" />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
