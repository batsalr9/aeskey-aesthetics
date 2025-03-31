
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Placeholder products data
const products = [
  {
    id: 1,
    name: 'AESKEY Model One',
    description: 'Our flagship 75% mechanical keyboard with premium aluminum frame',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'AESKEY TKL Pro',
    description: 'Tenkeyless design with RGB lighting and hot-swappable switches',
    price: 169.99,
    image: 'https://images.unsplash.com/photo-1595044426077-d36d9e0100a7?q=80&w=2940&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'AESKEY Compact 60%',
    description: 'Ultra-portable 60% keyboard perfect for minimalists on the go',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1558050032-160f36233a07?q=80&w=2832&auto=format&fit=crop',
  }
];

const ProductShowcase = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-metropolis mb-4 text-aeskey-dark-gray dark:text-white">
            Featured <span className="text-aeskey-sky-blue">Products</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Explore our collection of premium mechanical keyboards designed for enthusiasts and professionals alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              to={`/products/${product.id}`}
              key={product.id}
              className="rounded-lg overflow-hidden bg-white dark:bg-aeskey-dark-gray/40 shadow-lg transition-transform duration-300 hover:-translate-y-2"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ 
                    transform: hoveredId === product.id ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <Button className="bg-aeskey-sky-blue hover:bg-aeskey-sky-blue/90">
                    View Details
                  </Button>
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
                  <Button 
                    variant="ghost" 
                    className="text-aeskey-sky-blue hover:bg-aeskey-sky-blue/10"
                  >
                    <ArrowRight size={20} />
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            className="border-aeskey-sky-blue text-aeskey-sky-blue hover:bg-aeskey-sky-blue/10"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
