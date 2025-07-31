import ShoeCard from "./ShoeCard";

// Import all shoe images
import shoe1 from "@/assets/shoe-1.jpg";
import shoe2 from "@/assets/shoe-2.jpg";
import shoe3 from "@/assets/shoe-3.jpg";
import shoe4 from "@/assets/shoe-4.jpg";
import shoe5 from "@/assets/shoe-5.jpg";
import shoe6 from "@/assets/shoe-6.jpg";
import shoe7 from "@/assets/shoe-7.jpg";
import shoe8 from "@/assets/shoe-8.jpg";

const Collection = () => {
  const regularShoes = [
    {
      id: 1,
      name: "AeroFlex Runner",
      price: 129,
      originalPrice: 159,
      image: shoe1,
      description: "Where clouds meet pavement, every stride becomes poetry in motion.",
      rating: 5,
    },
    {
      id: 2,
      name: "Executive Oxford",
      price: 189,
      image: shoe2,
      description: "Boardroom elegance crafted in leather, commanding respect with every step.",
      rating: 4,
    },
    {
      id: 3,
      name: "Urban Minimalist",
      price: 95,
      originalPrice: 120,
      image: shoe3,
      description: "Simplicity perfected, where less becomes infinitely more in style.",
      rating: 5,
    },
    {
      id: 4,
      name: "Court Legend",
      price: 145,
      image: shoe4,
      description: "Born on hardwood, destined for greatness, carrying victories within.",
      rating: 4,
    },
    {
      id: 5,
      name: "Gentleman's Choice",
      price: 225,
      image: shoe5,
      description: "Timeless sophistication wrapped in handcrafted perfection and tradition.",
      rating: 5,
    },
    {
      id: 6,
      name: "Evening Grace",
      price: 165,
      originalPrice: 195,
      image: shoe6,
      description: "Elegance elevated, where confidence finds its perfect silhouette.",
      rating: 4,
    },
    {
      id: 7,
      name: "Trail Conqueror",
      price: 175,
      image: shoe7,
      description: "Mountain paths become highways when adventure calls your name.",
      rating: 5,
    },
    {
      id: 8,
      name: "Vintage Soul",
      price: 89,
      image: shoe8,
      description: "Nostalgia reimagined, where yesterday's charm meets today's comfort.",
      rating: 4,
    },
  ];

  return (
    <section id="collection" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="gradient-hero bg-clip-text text-transparent">Collection</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover footwear that tells your story, crafted for those who understand 
            that great style never goes out of fashion.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {regularShoes.map((shoe) => (
            <ShoeCard key={shoe.id} {...shoe} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collection;