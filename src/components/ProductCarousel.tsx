
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
  
  // Dynamic height calculation that's more compact
  const sectionHeight = React.useMemo(() => {
    const baseHeight = Math.max(200, window.innerHeight * 0.8);
    // Multiply by categories length for enough scroll room without excess space
    return `${baseHeight * categories.length * 0.8}px`;
  }, []);
  
  // Lazy loading for performance
  const [isLoaded, setIsLoaded] = React.useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Category styling based on active state
  const getCategoryStyle = (index: number) => {
    const distance = Math.abs(index - activeCategory);
    const scale = distance === 0 ? 1 : Math.max(0.85, 1 - distance * 0.1);
    const opacity = distance === 0 ? 1 : Math.max(0.4, 1 - distance * 0.2);
    
    return {
      transform: `scale(${scale})`,
      opacity,
      transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
    };
  };
  
  return (
    <section 
      ref={setRefs} 
      id="product-carousel" 
      className="relative overflow-hidden"
      style={{ 
        height: sectionHeight,
        paddingTop: '5vh',
      }}
    >
      {/* Background animation with parallax effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute -right-[200px] top-[15%] w-[400px] h-[400px] rounded-full bg-aeskey-sky-blue/10 blur-3xl"
          style={{ 
            transform: `translateY(${scrollProgress * 80}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
        <div 
          className="absolute -left-[150px] top-[50%] w-[300px] h-[300px] rounded-full bg-aeskey-sky-blue/5 blur-xl"
          style={{ 
            transform: `translateY(${-scrollProgress * 40}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        ></div>
      </div>
      
      {/* Fixed position content that stays in view */}
      <div className="sticky top-0 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 relative z-10">
          <div 
            className="text-center mb-8"
            style={{
              transform: `translateY(${scrollProgress * -15}px)`,
              opacity: Math.max(0.6, 1 - scrollProgress),
              transition: 'all 0.4s ease-out'
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-metropolis mb-3 text-aeskey-dark-gray dark:text-white">
              Our <span className="text-aeskey-sky-blue">Collections</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Explore our premium product categories
            </p>
          </div>
          
          {/* Category navigation */}
          <CategoryNav 
            categories={categories}
            activeCategory={activeCategory}
            changeCategory={changeCategory}
            getCategoryStyle={getCategoryStyle}
          />
          
          {/* Products display */}
          <div className="relative">
            <CategoryHeader 
              category={categories[activeCategory]}
              scrollProgress={scrollProgress}
            />
            
            <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
              <ScrollArea className="h-full w-full rounded-md">
                <ProductsDisplay 
                  category={categories[activeCategory]} 
                  animating={animating}
                />
              </ScrollArea>
            </div>
          </div>
          
          {/* Mobile navigation */}
          {isMobile && (
            <MobileNavigation 
              handleNavigation={handleNavigation}
              animating={animating}
              activeCategory={activeCategory}
              categoriesLength={categories.length}
            />
          )}
          
          {/* Desktop scroll indicator */}
          {!isMobile && <DesktopScrollIndicator />}
          
          {/* Category progress indicator */}
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
