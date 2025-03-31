
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    position: 'Software Developer',
    message: 'The AESKEY Model One completely transformed my typing experience. The build quality is exceptional, and the switches are perfectly tuned. Worth every penny!',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: 2,
    name: 'Sarah Chen',
    position: 'Graphic Designer',
    message: 'As someone who spends hours typing, the ergonomics of the AESKEY TKL Pro have been a game-changer. My wrists thank me, and the aesthetic perfectly complements my workspace.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: 3,
    name: 'Michael Rodriguez',
    position: 'Professional Gamer',
    message: 'The responsiveness of AESKEY keyboards gives me a competitive edge. The latency is imperceptible, and the customizability lets me optimize for my specific gaming style.',
    rating: 4,
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-aeskey-dark-gray/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-metropolis mb-4 text-aeskey-dark-gray dark:text-white">
            What Our <span className="text-aeskey-sky-blue">Customers</span> Say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Don't just take our word for it—hear from the AESKEY community.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="glass-card rounded-lg p-8 md:p-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`transition-opacity duration-500 ${index === currentIndex ? 'block opacity-100' : 'hidden opacity-0'}`}
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <div className="flex mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                      {[...Array(5 - testimonial.rating)].map((_, i) => (
                        <Star key={i + testimonial.rating} className="w-5 h-5 text-gray-300" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg md:text-xl italic mb-6 text-aeskey-dark-gray dark:text-white">
                      "{testimonial.message}"
                    </blockquote>
                    
                    <div>
                      <p className="font-bold text-aeskey-dark-gray dark:text-white">
                        {testimonial.name}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full border-aeskey-sky-blue text-aeskey-sky-blue hover:bg-aeskey-sky-blue/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full border-aeskey-sky-blue text-aeskey-sky-blue hover:bg-aeskey-sky-blue/10"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
