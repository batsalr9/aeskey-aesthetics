
import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface UseCarouselScrollProps {
  categoriesLength: number;
}

export const useCarouselScroll = ({ categoriesLength }: UseCarouselScrollProps) => {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isProgrammaticScroll, setIsProgrammaticScroll] = useState<boolean>(false);
  const lastScrollTimeRef = useRef<number>(0);
  const scrollThrottleTimeMs = 50; // Throttle time in ms
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Enhanced multiplier for scroll distance
  const scrollMultiplier = 3;
  
  // Use intersection observer for detecting when the section is visible
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });
  
  // Enhanced scroll position tracking within the section
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !inView) return;
      
      const currentTime = Date.now();
      if (currentTime - lastScrollTimeRef.current < scrollThrottleTimeMs && !isProgrammaticScroll) return;
      lastScrollTimeRef.current = currentTime;
      
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const viewportHeight = window.innerHeight;
      
      // Calculate how far we've scrolled through the section with enhanced sensitivity
      // This makes the scroll effect last longer per category
      const rawScrollPosition = 1 - (sectionTop / (sectionHeight - viewportHeight));
      
      // Apply easing for smoother progression
      // Using cubic easing function for more natural feel
      const easeInOutCubic = (t: number): number => {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      };
      
      // Apply easing and bound the progress
      const adjustedScrollPosition = easeInOutCubic(rawScrollPosition);
      const boundedProgress = Math.max(0, Math.min(1, adjustedScrollPosition));
      
      setScrollProgress(boundedProgress);
      
      // Change category based on scroll progress with more gradual transitions
      if (!animating && !isProgrammaticScroll) {
        // Multiply by a factor to create more virtual "scroll space" per category
        const virtualProgress = boundedProgress * scrollMultiplier % 1;
        
        const categoryIndex = Math.min(
          categoriesLength - 1,
          Math.floor((boundedProgress * scrollMultiplier) % categoriesLength)
        );
        
        if (categoryIndex !== activeCategory) {
          setAnimating(true);
          setActiveCategory(categoryIndex);
          setTimeout(() => setAnimating(false), 600); // Extended animation time
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [inView, activeCategory, animating, categoriesLength, isProgrammaticScroll]);

  // Improved function to change the category with smooth scrolling
  const changeCategory = (index: number) => {
    if (animating) return;
    
    setAnimating(true);
    setActiveCategory(index);
    
    // Scroll to the appropriate position in the section with smooth easing
    if (sectionRef.current) {
      const sectionHeight = sectionRef.current.offsetHeight;
      // Calculate target position for smoother scroll positioning
      const scrollTarget = sectionRef.current.offsetTop + (sectionHeight * (index / (categoriesLength * scrollMultiplier)));
      
      setIsProgrammaticScroll(true);
      window.scrollTo({
        top: scrollTarget,
        behavior: 'smooth'
      });
      
      // Reset programmatic scroll flag after animation completes
      setTimeout(() => {
        setIsProgrammaticScroll(false);
        setAnimating(false);
      }, 1000);
    }
  };
  
  // Set both refs
  const setRefs = (element: HTMLDivElement | null) => {
    if (sectionRef.current === null && element !== null) {
      sectionRef.current = element;
    }
    // @ts-ignore: react-intersection-observer types issue
    inViewRef(element);
  };
  
  // Enhanced navigation with improved animations
  const handleNavigation = (direction: 'next' | 'prev') => {
    if (animating) return;
    
    setAnimating(true);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (activeCategory + 1) % categoriesLength; // Loop back to start
    } else {
      newIndex = (activeCategory - 1 + categoriesLength) % categoriesLength; // Loop back to end
    }
    
    setActiveCategory(newIndex);
    changeCategory(newIndex);
    
    setTimeout(() => setAnimating(false), 1000); // Extended animation time
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
