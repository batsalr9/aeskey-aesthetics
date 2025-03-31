
import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const keyboardRef = useRef<HTMLDivElement>(null);

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!keyboardRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = clientX - innerWidth / 2;
      const moveY = clientY - innerHeight / 2;
      
      keyboardRef.current.style.transform = `translate3d(-50%, -50%, 0) rotateY(${moveX / 50}deg) rotateX(${-moveY / 50}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);

    // Trigger animations on load
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach((el, index) => {
      setTimeout(() => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'translateY(0)';
      }, index * 300);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-16">
      {/* 3D Keyboard */}
      <div className="absolute w-full h-full flex items-center justify-center">
        <div 
          ref={keyboardRef}
          className="w-[600px] h-[250px] bg-gradient-to-br from-aeskey-sky-blue via-aeskey-sky-blue/70 to-aeskey-dark-gray rounded-lg shadow-2xl absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 perspective-1000 transition-transform duration-300 ease-out animate-on-load"
          style={{ transformStyle: 'preserve-3d', opacity: 0, transition: 'opacity 0.5s ease, transform 0.5s ease' }}
        >
          {/* Keyboard Keys */}
          <div className="absolute inset-4 bg-aeskey-dark-gray rounded grid grid-cols-12 gap-1 p-2" style={{ transform: 'translateZ(10px)' }}>
            {Array.from({ length: 60 }).map((_, i) => (
              <div key={i} className="bg-aeskey-light-gray/90 rounded-sm" style={{ height: '20px' }}></div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 mt-40 md:mt-0">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-metropolis mb-6 animate-on-load text-aeskey-dark-gray dark:text-white"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease, transform 0.8s ease' }}
          >
            Aesthetic. Precision. <span className="text-aeskey-sky-blue">Performance.</span>
          </h1>
          
          <p 
            className="text-lg md:text-xl mb-10 max-w-2xl animate-on-load" 
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease, transform 0.8s ease', transitionDelay: '0.3s' }}
          >
            Experience the perfect blend of stunning design and unparalleled typing experience with AESKEY premium mechanical keyboards.
          </p>
          
          <div 
            className="flex flex-col sm:flex-row gap-4 animate-on-load"
            style={{ opacity: 0, transform: 'translateY(30px)', transition: 'opacity 0.8s ease, transform 0.8s ease', transitionDelay: '0.6s' }}
          >
            <Button className="bg-aeskey-sky-blue hover:bg-aeskey-sky-blue/90 text-white px-8 py-6 transition-transform hover:scale-105">
              Shop Now
            </Button>
            <Button 
              variant="outline" 
              onClick={scrollToFeatures}
              className="border-aeskey-sky-blue text-aeskey-sky-blue hover:bg-aeskey-sky-blue/10 px-8 py-6 transition-transform hover:scale-105"
            >
              See Features
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToFeatures}
      >
        <ArrowDown className="text-aeskey-dark-gray dark:text-white" />
      </div>
    </section>
  );
};

export default HeroSection;
