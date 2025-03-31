
import { useEffect, useRef } from 'react';
import { Monitor, Volume2, Zap, Award } from 'lucide-react';

const features = [
  {
    icon: <Monitor size={48} />,
    title: 'Ergonomic Design',
    description: 'Carefully crafted for comfort during long typing sessions, reducing strain and improving productivity.'
  },
  {
    icon: <Volume2 size={48} />,
    title: 'Premium Sound Profile',
    description: 'Each keystroke delivers a satisfying acoustic experience, engineered to produce the perfect sound.'
  },
  {
    icon: <Zap size={48} />,
    title: 'Ultra-Responsive',
    description: 'Lightning fast actuation with minimal latency, ideal for gaming and high-speed typing.'
  },
  {
    icon: <Award size={48} />,
    title: 'Built To Last',
    description: 'Constructed with aircraft-grade aluminum and premium materials for exceptional durability.'
  }
];

const FeaturesSection = () => {
  const featureSectionRef = useRef<HTMLDivElement>(null);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // If the section is visible, animate the title and feature cards
            if (entry.target === featureSectionRef.current) {
              const titleElement = featureSectionRef.current?.querySelector('h2');
              const descElement = featureSectionRef.current?.querySelector('p');
              
              if (titleElement) {
                titleElement.classList.add('animate-fade-in');
              }
              if (descElement) {
                setTimeout(() => {
                  descElement.classList.add('animate-fade-in');
                }, 200);
              }

              // Animate feature cards with staggered delay
              featureRefs.current.forEach((feature, index) => {
                if (feature) {
                  setTimeout(() => {
                    feature.style.opacity = '1';
                    feature.style.transform = 'translateY(0) scale(1)';
                  }, 400 + index * 150);
                }
              });
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe the feature section
    if (featureSectionRef.current) {
      observer.observe(featureSectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-aeskey-dark-gray/30">
      <div className="container mx-auto px-4" ref={featureSectionRef}>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-metropolis mb-4 text-aeskey-dark-gray dark:text-white opacity-0">
            Exceptional <span className="text-aeskey-sky-blue">Features</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 opacity-0">
            AESKEY keyboards combine cutting-edge technology with premium craftsmanship to deliver an unparalleled typing experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              ref={el => (featureRefs.current[index] = el)}
              className="glass-card rounded-lg p-6 transition-all duration-500 cursor-pointer"
              style={{ 
                opacity: 0, 
                transform: 'translateY(30px) scale(0.95)', 
                transition: 'opacity 0.5s ease, transform 0.5s ease' 
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              <div className="text-aeskey-sky-blue mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-aeskey-dark-gray dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
