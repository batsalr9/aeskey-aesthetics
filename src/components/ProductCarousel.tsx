
import React, { useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useCarouselScroll } from '@/hooks/use-carousel-scroll';
import { categories } from '@/data/categories';
import CategoryNav from './carousel/CategoryNav';
import CategoryHeader from './carousel/CategoryHeader';
import ProductsDisplay from './carousel/ProductsDisplay';
import MobileNavigation from './carousel/MobileNavigation';
import DesktopScrollIndicator from './carousel/DesktopScrollIndicator';
import CategoryProgressIndicators from './carousel/CategoryProgressIndicators';
import { ScrollArea } from './ui/scroll-area';

const ProductCarousel = () => {
  const isMobile = useIsMobile();
  const { 
    activeCategory, 
    animating, 
    scrollProgress, 
    setRefs, 
    changeCategory, 
    handleNavigation 
  } = useCarouselScroll({ categoriesLength: categories.length });
  
  // Enhanced dynamic height calculation for the section
  // We're making it taller to extend the scrolling effect
  const sectionHeight = React.useMemo(() => {
    const baseHeight = Math.max(300, window.innerHeight);
    // Multiply by categories length and a factor to create more virtual scroll space
    return `${baseHeight * categories.length * 1.5}px`;
  }, []);
  
  // Add lazy loading for performance
  const [isLoaded, setIsLoaded] = React.useState(false);
  
  useEffect(() => {
    // Simulate lazy loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Function to determine active category styles based on scroll progress
  const getCategoryStyle = (index: number) => {
    const distance = Math.abs(index - activeCategory);
    const scale = distance === 0 ? 1 : Math.max(0.85, 1 - distance * 0.1);
    const opacity = distance === 0 ? 1 : Math.max(0.4, 1 - distance * 0.2);
    
    return {
      transform: `scale(${scale})`,
      opacity,
      transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)'
    };
  };
  
  return (
    <section 
      ref={setRefs} 
      id="product-carousel" 
      className="relative overflow-hidden scroll-smooth"
      style={{ 
        height: sectionHeight,
        paddingTop: '10vh',
        paddingBottom: '20vh' // Extra padding at bottom for smoother experience
      }}
    >
      {/* Enhanced background animation with parallax effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute -right-[300px] top-[10%] w-[600px] h-[600px] rounded-full bg-aeskey-sky-blue/10 blur-3xl"
          style={{ 
            transform: `translateY(${scrollProgress * 100}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute -left-[200px] top-[60%] w-[400px] h-[400px] rounded-full bg-aeskey-sky-blue/5 blur-xl"
          style={{ 
            transform: `translateY(${-scrollProgress * 50}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        
        {/* Additional background elements for enhanced visual effect */}
        <div 
          className="absolute left-[50%] top-[30%] w-[200px] h-[200px] rounded-full bg-aeskey-sky-blue/7 blur-2xl"
          style={{ 
            transform: `translate(-50%, ${scrollProgress * -80}px) scale(${1 + scrollProgress * 0.2})`,
            opacity: 0.3 + scrollProgress * 0.4,
            transition: 'all 0.4s ease-out'
          }}
        ></div>
      </div>
      
      {/* Fixed position content that stays in view with enhanced animations */}
      <div className="sticky top-0 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 relative z-10">
          <div 
            className="text-center mb-12"
            style={{
              transform: `translateY(${scrollProgress * -20}px)`,
              opacity: Math.max(0.5, 1 - scrollProgress * 1.5),
              transition: 'all 0.4s ease-out'
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-metropolis mb-4 text-aeskey-dark-gray dark:text-white">
              Our <span className="text-aeskey-sky-blue">Collections</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Keep scrolling to explore our premium product categories.
            </p>
          </div>
          
          {/* Enhanced Category navigation with smooth transitions */}
          <CategoryNav 
            categories={categories}
            activeCategory={activeCategory}
            changeCategory={changeCategory}
            getCategoryStyle={getCategoryStyle}
          />
          
          {/* Products display with enhanced animations */}
          <div className="relative">
            {/* Category Header with progress */}
            <CategoryHeader 
              category={categories[activeCategory]}
              scrollProgress={scrollProgress}
            />
            
            {/* Products carousel with enhanced transition effect and lazy loading */}
            <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <ScrollArea className="h-full w-full rounded-md">
                <ProductsDisplay 
                  category={categories[activeCategory]} 
                  animating={animating}
                />
              </ScrollArea>
            </div>
          </div>
          
          {/* Enhanced Mobile navigation arrows */}
          {isMobile && (
            <MobileNavigation 
              handleNavigation={handleNavigation}
              animating={animating}
              activeCategory={activeCategory}
              categoriesLength={categories.length}
            />
          )}
          
          {/* Enhanced Scroll indicator for desktop */}
          {!isMobile && <DesktopScrollIndicator />}
          
          {/* Enhanced Category progress indicator with smooth animations */}
          <CategoryProgressIndicators 
            categoriesLength={categories.length}
            activeCategory={activeCategory}
            changeCategory={changeCategory}
            scrollProgress={scrollProgress}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
