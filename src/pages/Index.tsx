
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Characters from "@/components/Characters";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Hero />
      <Features />
      <Characters />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Index;
