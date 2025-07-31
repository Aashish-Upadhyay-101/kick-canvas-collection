import ShoeCard from "./ShoeCard";
import { Button } from "@/components/ui/button";
import { Crown, Sparkles } from "lucide-react";

// Import exclusive shoe images
import shoe9 from "@/assets/shoe-9.jpg";
import shoe10 from "@/assets/shoe-10.jpg";

const Exclusive = () => {
  const exclusiveShoes = [
    {
      id: 9,
      name: "Monaco Slip-On",
      price: 299,
      originalPrice: 349,
      image: shoe9,
      description: "Riviera luxury meets effortless sophistication in every glide.",
      rating: 5,
      isExclusive: true,
    },
    {
      id: 10,
      name: "Metropolitan Elite",
      price: 389,
      image: shoe10,
      description: "City nights demand nothing less than perfection in leather form.",
      rating: 5,
      isExclusive: true,
    },
  ];

  return (
    <section id="exclusive" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Crown className="h-8 w-8 text-accent" />
            <Sparkles className="h-6 w-6 text-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Exclusive <span className="gradient-hero bg-clip-text text-transparent">Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Limited edition masterpieces for the discerning individual. 
            Where rarity meets uncompromising quality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {exclusiveShoes.map((shoe) => (
            <ShoeCard key={shoe.id} {...shoe} />
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-card rounded-2xl p-8 shadow-card max-w-2xl mx-auto">
            <Crown className="h-12 w-12 text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">VIP Access</h3>
            <p className="text-muted-foreground mb-6">
              Join our exclusive club to get early access to limited releases, 
              personalized styling sessions, and members-only events.
            </p>
            <Button variant="premium" size="lg">
              Become a VIP Member
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Exclusive;