
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
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-aeskey-dark-gray/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-metropolis mb-4 text-aeskey-dark-gray dark:text-white">
            Exceptional <span className="text-aeskey-sky-blue">Features</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            AESKEY keyboards combine cutting-edge technology with premium craftsmanship to deliver an unparalleled typing experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card rounded-lg p-6 transition-transform duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 100}
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
