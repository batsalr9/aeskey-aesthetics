
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Filter, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

// Mock products data
const productsData = [
  {
    id: 1,
    name: 'AESKEY Model One',
    description: 'Our flagship 75% mechanical keyboard with premium aluminum frame',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=2940&auto=format&fit=crop',
    category: 'Premium',
    layout: '75%',
    switch: 'Red'
  },
  {
    id: 2,
    name: 'AESKEY TKL Pro',
    description: 'Tenkeyless design with RGB lighting and hot-swappable switches',
    price: 169.99,
    image: 'https://images.unsplash.com/photo-1595044426077-d36d9e0100a7?q=80&w=2940&auto=format&fit=crop',
    category: 'Premium',
    layout: 'TKL',
    switch: 'Brown'
  },
  {
    id: 3,
    name: 'AESKEY Compact 60%',
    description: 'Ultra-portable 60% keyboard perfect for minimalists on the go',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1558050032-160f36233a07?q=80&w=2832&auto=format&fit=crop',
    category: 'Standard',
    layout: '60%',
    switch: 'Blue'
  },
  {
    id: 4,
    name: 'AESKEY Ergonomic',
    description: 'Split design for maximum comfort during extended typing sessions',
    price: 219.99,
    image: 'https://images.unsplash.com/photo-1672039777764-91fe4976b7b5?q=80&w=2832&auto=format&fit=crop',
    category: 'Ergonomic',
    layout: 'Split',
    switch: 'Brown'
  },
  {
    id: 5,
    name: 'AESKEY Numpad',
    description: 'Standalone numeric keypad with programmable macros',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1595045051853-05ef47bdfdbe?q=80&w=2940&auto=format&fit=crop',
    category: 'Accessories',
    layout: 'Numpad',
    switch: 'Red'
  },
  {
    id: 6,
    name: 'AESKEY Wireless',
    description: 'Bluetooth and 2.4GHz wireless connectivity with extended battery life',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?q=80&w=2865&auto=format&fit=crop',
    category: 'Standard',
    layout: 'Full Size',
    switch: 'Silent Red'
  }
];

// Filter options
const filters = {
  categories: ['All', 'Premium', 'Standard', 'Ergonomic', 'Accessories'],
  layouts: ['All', '60%', '75%', 'TKL', 'Full Size', 'Split', 'Numpad'],
  switchTypes: ['All', 'Red', 'Brown', 'Blue', 'Silent Red'],
  priceRanges: ['All', 'Under $100', '$100 - $150', '$150 - $200', 'Over $200']
};

const ProductsPage = () => {
  const [products] = useState(productsData);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
            <Link to="/" className="hover:text-aeskey-sky-blue">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-aeskey-dark-gray dark:text-white">Products</span>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Mobile Filter Button */}
            <div className="lg:hidden">
              <Button 
                variant="outline" 
                onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
                className="w-full flex items-center justify-between"
              >
                <span>Filters</span>
                <Filter className="w-4 h-4" />
              </Button>
            </div>

            {/* Filters Sidebar */}
            <div className={`lg:w-64 ${mobileFiltersOpen ? 'block' : 'hidden'} lg:block`}>
              <div className="sticky top-24">
                <h2 className="text-xl font-bold mb-6 text-aeskey-dark-gray dark:text-white">
                  Filters
                </h2>

                <Accordion type="multiple" defaultValue={["category", "layout", "switch", "price"]}>
                  {/* Category Filter */}
                  <AccordionItem value="category">
                    <AccordionTrigger className="text-aeskey-dark-gray dark:text-white">Category</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        {filters.categories.map((category) => (
                          <div key={category} className="flex items-center space-x-2">
                            <Checkbox id={`category-${category}`} />
                            <label 
                              htmlFor={`category-${category}`}
                              className="text-sm text-gray-600 dark:text-gray-300"
                            >
                              {category}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Layout Filter */}
                  <AccordionItem value="layout">
                    <AccordionTrigger className="text-aeskey-dark-gray dark:text-white">Layout</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        {filters.layouts.map((layout) => (
                          <div key={layout} className="flex items-center space-x-2">
                            <Checkbox id={`layout-${layout}`} />
                            <label 
                              htmlFor={`layout-${layout}`}
                              className="text-sm text-gray-600 dark:text-gray-300"
                            >
                              {layout}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Switch Type Filter */}
                  <AccordionItem value="switch">
                    <AccordionTrigger className="text-aeskey-dark-gray dark:text-white">Switch Type</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        {filters.switchTypes.map((switchType) => (
                          <div key={switchType} className="flex items-center space-x-2">
                            <Checkbox id={`switch-${switchType}`} />
                            <label 
                              htmlFor={`switch-${switchType}`}
                              className="text-sm text-gray-600 dark:text-gray-300"
                            >
                              {switchType}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  {/* Price Range Filter */}
                  <AccordionItem value="price">
                    <AccordionTrigger className="text-aeskey-dark-gray dark:text-white">Price Range</AccordionTrigger>
                    <AccordionContent>
                      <div className="flex flex-col space-y-2">
                        {filters.priceRanges.map((priceRange) => (
                          <div key={priceRange} className="flex items-center space-x-2">
                            <Checkbox id={`price-${priceRange}`} />
                            <label 
                              htmlFor={`price-${priceRange}`}
                              className="text-sm text-gray-600 dark:text-gray-300"
                            >
                              {priceRange}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-8">
                  <Button 
                    className="w-full bg-aeskey-sky-blue hover:bg-aeskey-sky-blue/90"
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold font-metropolis mb-8 text-aeskey-dark-gray dark:text-white">
                All Products
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div 
                    key={product.id}
                    className="rounded-lg overflow-hidden bg-white dark:bg-aeskey-dark-gray/40 shadow-lg transition-transform duration-300 hover:-translate-y-2"
                  >
                    <Link to={`/products/${product.id}`} className="block relative h-64 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </Link>
                    <div className="p-6">
                      <Link to={`/products/${product.id}`}>
                        <h3 className="text-xl font-bold mb-2 text-aeskey-dark-gray dark:text-white hover:text-aeskey-sky-blue dark:hover:text-aeskey-sky-blue transition-colors">
                          {product.name}
                        </h3>
                      </Link>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-aeskey-sky-blue">
                          ${product.price}
                        </span>
                        <Button 
                          className="bg-aeskey-sky-blue hover:bg-aeskey-sky-blue/90 p-2"
                        >
                          <ShoppingCart className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
