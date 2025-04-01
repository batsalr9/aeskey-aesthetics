
import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';

// Product categories with their products
interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface Category {
  id: number;
  name: string;
  products: Product[];
}

const categories: Category[] = [
  {
    id: 1,
    name: "Mechanical Keyboards",
    products: [
      {
        id: 101,
        name: "AESKEY Model One",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=2940&auto=format&fit=crop",
        description: "Our flagship 75% mechanical keyboard with premium aluminum frame"
      },
      {
        id: 102,
        name: "AESKEY TKL Pro",
        price: 169.99,
        image: "https://images.unsplash.com/photo-1595044426077-d36d9e0100a7?q=80&w=2940&auto=format&fit=crop",
        description: "Tenkeyless design with RGB lighting and hot-swappable switches"
      },
      {
        id: 103,
        name: "AESKEY Compact 60%",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1558050032-160f36233a07?q=80&w=2832&auto=format&fit=crop",
        description: "Ultra-portable 60% keyboard perfect for minimalists on the go"
      }
    ]
  },
  {
    id: 2,
    name: "Keycaps Collections",
    products: [
      {
        id: 201,
        name: "PBT Double-shot Keycap Set",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?q=80&w=2832&auto=format&fit=crop",
        description: "Premium PBT double-shot keycaps with custom designs"
      },
      {
        id: 202,
        name: "Artisan Galaxy Keycaps",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1696496965846-c9f1edeaf9f7?q=80&w=2836&auto=format&fit=crop",
        description: "Hand-crafted artisan keycaps with galaxy theme"
      },
      {
        id: 203,
        name: "Minimalist Monochrome Set",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1589578527966-200b3fa9f872?q=80&w=2787&auto=format&fit=crop",
        description: "Clean monochromatic keycaps for a minimalist aesthetic"
      }
    ]
  },
  {
    id: 3,
    name: "Switches & Accessories",
    products: [
      {
        id: 301,
        name: "Premium Linear Switches (70pcs)",
        price: 45.99,
        image: "https://images.unsplash.com/photo-1626955949583-2c764a3bd179?q=80&w=2940&auto=format&fit=crop",
        description: "Ultra-smooth linear switches for a premium typing experience"
      },
      {
        id: 302,
        name: "Silent Tactile Switches (70pcs)",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1671726203394-3fb856bdd8d3?q=80&w=2940&auto=format&fit=crop",
        description: "Tactile feedback without the noise - perfect for office use"
      },
      {
        id: 303,
        name: "Custom Coiled Cable",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1617470852543-1caca5baa231?q=80&w=2831&auto=format&fit=crop",
        description: "Braided, custom-colored coiled cable with aviator connector"
      }
    ]
  },
  {
    id: 4,
    name: "Limited Editions",
    products: [
      {
        id: 401,
        name: "AESKEY Celestial Edition",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1618172193622-ae2d025f3e06?q=80&w=2864&auto=format&fit=crop",
        description: "Limited edition keyboard with star-inspired design and custom keycaps"
      },
      {
        id: 402,
        name: "AESKEY Vintage Collection",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=2940&auto=format&fit=crop",
        description: "Retro-inspired design with modern functionality"
      },
      {
        id: 403,
        name: "Collaboration Artist Series",
        price: 349.99,
        image: "https://images.unsplash.com/photo-1615869442320-fd02a129c77c?q=80&w=2865&auto=format&fit=crop",
        description: "Special artist collaboration with unique artwork and premium features"
      }
    ]
  }
];

const ProductCarousel = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  // Use intersection observer for detecting when the section is visible
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });
  
  // Handle wheel scrolling for desktop
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Only handle wheel events when the section is in view
      if (!inView || animating) return;
      
      // Get the section's bounding rect to determine if we're inside it
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      // Check if the mouse is inside the section
      const isInsideSection = 
        e.clientY >= rect.top && 
        e.clientY <= rect.bottom && 
        e.clientX >= rect.left && 
        e.clientX <= rect.right;
      
      if (isInsideSection) {
        e.preventDefault();
        
        setAnimating(true);
        
        // Determine scroll direction
        if (e.deltaY > 0) {
          // Scroll down - next category
          setActiveCategory((prev) => (prev + 1) % categories.length);
        } else {
          // Scroll up - previous category
          setActiveCategory((prev) => (prev - 1 + categories.length) % categories.length);
        }
        
        // Reset animation flag after transition completes
        setTimeout(() => setAnimating(false), 800);
      }
    };
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [inView, animating]);
  
  // Function to change the category
  const changeCategory = (index: number) => {
    if (animating) return;
    
    setAnimating(true);
    setActiveCategory(index);
    
    // Reset animation flag after transition completes
    setTimeout(() => setAnimating(false), 800);
  };
  
  // Set both refs
  const setRefs = (element: HTMLDivElement | null) => {
    if (sectionRef.current === null && element !== null) {
      sectionRef.current = element;
    }
    // @ts-ignore: react-intersection-observer types issue
    inViewRef(element);
  };
  
  // Function to handle navigation
  const handleNavigation = (direction: 'next' | 'prev') => {
    if (animating) return;
    
    setAnimating(true);
    if (direction === 'next') {
      setActiveCategory((prev) => (prev + 1) % categories.length);
    } else {
      setActiveCategory((prev) => (prev - 1 + categories.length) % categories.length);
    }
    
    setTimeout(() => setAnimating(false), 800);
  };
  
  return (
    <section 
      ref={setRefs} 
      id="product-carousel" 
      className="py-20 min-h-screen relative overflow-hidden flex flex-col justify-center"
    >
      {/* Background circles - visual enhancement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -right-[300px] top-[10%] w-[600px] h-[600px] rounded-full bg-aeskey-sky-blue/10 blur-3xl"></div>
        <div className="absolute -left-[200px] top-[60%] w-[400px] h-[400px] rounded-full bg-aeskey-sky-blue/5 blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-metropolis mb-4 text-aeskey-dark-gray dark:text-white">
            Our <span className="text-aeskey-sky-blue">Collections</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Explore our premium product categories. Scroll to discover more.
          </p>
        </div>
        
        {/* Category navigation */}
        <div className="flex justify-center mb-8 overflow-x-auto no-scrollbar">
          <div className="flex space-x-2 md:space-x-4">
            {categories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => changeCategory(index)}
                className={`px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
                  activeCategory === index
                    ? "bg-aeskey-sky-blue text-white font-medium"
                    : "bg-gray-100 dark:bg-aeskey-dark-gray/40 hover:bg-gray-200 dark:hover:bg-aeskey-dark-gray/60"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
        
        {/* Products display with carousel */}
        <div className="relative">
          {/* Category Header */}
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold">
              {categories[activeCategory].name}
            </h3>
            <Link to="/products">
              <Button 
                variant="outline" 
                className="border-aeskey-sky-blue text-aeskey-sky-blue hover:bg-aeskey-sky-blue/10"
              >
                Shop All
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
          
          {/* Products carousel */}
          <div 
            className={`transition-opacity duration-500 ${
              animating ? "opacity-0" : "opacity-100"
            }`}
          >
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {categories[activeCategory].products.map((product) => (
                  <CarouselItem 
                    key={product.id} 
                    className={`basis-full md:basis-1/2 lg:basis-1/3 pl-4`}
                  >
                    <Link to={`/products/${product.id}`}>
                      <div className="overflow-hidden rounded-lg bg-white dark:bg-aeskey-dark-gray/40 shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
                        <div className="relative h-52 overflow-hidden">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <span className="text-white font-medium">View Details</span>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2 text-aeskey-dark-gray dark:text-white">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                            {product.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-aeskey-sky-blue">
                              ${product.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </div>
        </div>
        
        {/* Mobile navigation arrows */}
        {isMobile && (
          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => handleNavigation('prev')}
              disabled={animating}
              className="rounded-full"
            >
              <ChevronLeft size={24} />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              onClick={() => handleNavigation('next')}
              disabled={animating}
              className="rounded-full"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        )}
        
        {/* Scroll indicator for desktop */}
        {!isMobile && (
          <div className="hidden md:flex flex-col items-center mt-12">
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Scroll to explore more categories</p>
            <div className="w-8 h-12 border-2 border-aeskey-sky-blue rounded-full flex justify-center">
              <div className="w-1 h-3 bg-aeskey-sky-blue rounded-full mt-2 animate-bounce"></div>
            </div>
          </div>
        )}
        
        {/* Category progress indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex space-x-2">
            {categories.map((_, index) => (
              <div
                key={index}
                onClick={() => changeCategory(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  activeCategory === index 
                    ? "bg-aeskey-sky-blue" 
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
