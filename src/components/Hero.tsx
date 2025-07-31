import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroShoes from "@/assets/hero-shoes.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent fill-current" />
                ))}
              </div>
              <span className="text-muted-foreground">Trusted by 50,000+ customers</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Step Into
              <span className="block gradient-hero bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-md">
              Discover our curated collection of premium footwear that combines 
              style, comfort, and craftsmanship in every step you take.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Explore Collection
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                View Lookbook
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              <div>
                <div className="text-2xl font-bold text-foreground">1000+</div>
                <div className="text-sm text-muted-foreground">Premium Styles</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">24/7</div>
                <div className="text-sm text-muted-foreground">Customer Support</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">Free</div>
                <div className="text-sm text-muted-foreground">Worldwide Shipping</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={heroShoes}
                alt="Premium shoes collection"
                className="w-full h-auto object-cover rounded-2xl shadow-elegant hover-lift"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute top-4 right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-4 left-4 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;