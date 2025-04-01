
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useCarouselScroll } from '@/hooks/use-carousel-scroll';
import { categories } from '@/data/categories';
import CategoryNav from './carousel/CategoryNav';
import CategoryHeader from './carousel/CategoryHeader';
import ProductsDisplay from './carousel/ProductsDisplay';
import MobileNavigation from './carousel/MobileNavigation';
import DesktopScrollIndicator from './carousel/DesktopScrollIndicator';
import CategoryProgressIndicators from './carousel/CategoryProgressIndicators';

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
  
  return (
    <section 
      ref={setRefs} 
      id="product-carousel" 
      className="relative overflow-hidden wheel-scroll-snap"
      style={{ 
        height: `${Math.max(300, window.innerHeight * categories.length)}px`,
        paddingTop: '10vh',
        paddingBottom: '10vh'
      }}
    >
      {/* Background circles - visual enhancement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -right-[300px] top-[10%] w-[600px] h-[600px] rounded-full bg-aeskey-sky-blue/10 blur-3xl"></div>
        <div className="absolute -left-[200px] top-[60%] w-[400px] h-[400px] rounded-full bg-aeskey-sky-blue/5 blur-xl"></div>
      </div>
      
      {/* Fixed position content that stays in view */}
      <div className="sticky top-0 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-metropolis mb-4 text-aeskey-dark-gray dark:text-white">
              Our <span className="text-aeskey-sky-blue">Collections</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Keep scrolling to explore our premium product categories.
            </p>
          </div>
          
          {/* Category navigation */}
          <CategoryNav 
            categories={categories}
            activeCategory={activeCategory}
            changeCategory={changeCategory}
          />
          
          {/* Products display with carousel */}
          <div className="relative">
            {/* Category Header with progress */}
            <CategoryHeader 
              category={categories[activeCategory]}
              scrollProgress={scrollProgress}
            />
            
            {/* Products carousel with transition effect */}
            <ProductsDisplay 
              category={categories[activeCategory]} 
              animating={animating} 
            />
          </div>
          
          {/* Mobile navigation arrows */}
          {isMobile && (
            <MobileNavigation 
              handleNavigation={handleNavigation}
              animating={animating}
              activeCategory={activeCategory}
              categoriesLength={categories.length}
            />
          )}
          
          {/* Scroll indicator for desktop */}
          {!isMobile && <DesktopScrollIndicator />}
          
          {/* Category progress indicator */}
          <CategoryProgressIndicators 
            categoriesLength={categories.length}
            activeCategory={activeCategory}
            changeCategory={changeCategory}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
