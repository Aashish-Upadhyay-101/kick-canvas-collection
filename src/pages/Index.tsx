import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collection from "@/components/Collection";
import Exclusive from "@/components/Exclusive";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Collection />
      <Exclusive />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
