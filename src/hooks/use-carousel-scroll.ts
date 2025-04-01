
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface UseCarouselScrollProps {
  categoriesLength: number;
}

export const useCarouselScroll = ({ categoriesLength }: UseCarouselScrollProps) => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Use intersection observer for detecting when the section is visible
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  
  // Track scroll position within the section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !inView) return;
      
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate how far we've scrolled through the section (0 to 1)
      const scrollPosition = 1 - (sectionTop / (sectionHeight - viewportHeight));
      const boundedProgress = Math.max(0, Math.min(1, scrollPosition));
      
      setScrollProgress(boundedProgress);
      
      // Change category based on scroll progress
      if (!animating) {
        const categoryIndex = Math.min(
          categoriesLength - 1,
          Math.floor(boundedProgress * categoriesLength)
        );
        
        if (categoryIndex !== activeCategory) {
          setAnimating(true);
          setActiveCategory(categoryIndex);
          setTimeout(() => setAnimating(false), 400);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [inView, activeCategory, animating, categoriesLength]);

  // Function to change the category
  const changeCategory = (index: number) => {
    if (animating) return;
    
    setAnimating(true);
    setActiveCategory(index);
    
    // Scroll to the appropriate position in the section
    if (sectionRef.current) {
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollTarget = sectionRef.current.offsetTop + (sectionHeight * (index / categoriesLength));
      window.scrollTo({
        top: scrollTarget,
        behavior: 'smooth'
      });
    }
    
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
      setActiveCategory((prev) => Math.min(prev + 1, categoriesLength - 1));
    } else {
      setActiveCategory((prev) => Math.max(prev - 1, 0));
    }
    
    setTimeout(() => setAnimating(false), 800);
  };

  return {
    activeCategory,
    animating,
    scrollProgress,
    sectionRef,
    inView,
    changeCategory,
    setRefs,
    handleNavigation
  };
};
