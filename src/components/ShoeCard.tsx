import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

interface ShoeCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  rating: number;
  isExclusive?: boolean;
}

const ShoeCard = ({ name, price, originalPrice, image, description, rating, isExclusive }: ShoeCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="group hover-lift gradient-card border-border/50 overflow-hidden">
      <div className="relative overflow-hidden">
        {isExclusive && (
          <div className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
            Exclusive
          </div>
        )}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-smooth"
        >
          <Heart className={`h-4 w-4 ${isLiked ? 'text-red-500 fill-current' : 'text-muted-foreground'}`} />
        </button>
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
          />
        </div>
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < rating ? 'text-accent fill-current' : 'text-muted-foreground'}`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-2">({rating}.0)</span>
        </div>
        
        <div>
          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {description}
          </p>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-foreground">${price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
            )}
          </div>
          
          <Button variant="marketplace" size="sm" className="group">
            <ShoppingCart className="h-4 w-4 group-hover:scale-110 transition-transform" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ShoeCard;