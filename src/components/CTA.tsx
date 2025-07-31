import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Gift } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl gradient-hero p-12 lg:p-20 text-center">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
            <div className="absolute top-20 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-10 left-20 w-12 h-12 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
          </div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <Gift className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Ready to Step Up Your Style?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who've discovered their perfect pair. 
              Get 20% off your first order and free worldwide shipping.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button variant="secondary" size="lg" className="group bg-white text-primary hover:bg-white/90">
                Shop Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <Mail className="h-5 w-5" />
                Subscribe for Updates
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">30-Day Returns</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">Lifetime Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;