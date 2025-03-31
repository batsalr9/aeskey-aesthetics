
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductShowcase from "@/components/ProductShowcase";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturesSection />
        <ProductShowcase />
        <TestimonialsSection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
