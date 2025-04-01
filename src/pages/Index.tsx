
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductCarousel from "@/components/ProductCarousel";
import ProductShowcase from "@/components/ProductShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <ProductCarousel />
        <ProductShowcase />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
