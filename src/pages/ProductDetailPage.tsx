
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Minus, Plus, ShoppingCart, Heart, Share2, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Mock product data
const productData = {
  id: 1,
  name: 'AESKEY Model One',
  description: 'Our flagship 75% mechanical keyboard with premium aluminum frame, hot-swappable switches, and RGB lighting. Designed for both professionals and enthusiasts who demand the best typing experience without compromise.',
  price: 199.99,
  rating: 4.9,
  reviews: 128,
  images: [
    'https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1595044426077-d36d9e0100a7?q=80&w=2940&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1558050032-160f36233a07?q=80&w=2832&auto=format&fit=crop',
  ],
  colors: ['Black', 'White', 'Navy'],
  switchTypes: ['Red (Linear)', 'Brown (Tactile)', 'Blue (Clicky)'],
  features: [
    'Aircraft-grade aluminum frame',
    'Hot-swappable mechanical switches',
    'Per-key RGB lighting',
    'USB-C connectivity',
    'Programmable via AESKEY software',
    'Magnetic wrist rest included'
  ],
  specifications: {
    'Dimensions': '320 x 140 x 35 mm',
    'Weight': '950g',
    'Switch Type': 'Mechanical (Hot-Swappable)',
    'Keycaps': 'Double-shot PBT',
    'Backlight': 'RGB (16.8 million colors)',
    'Connectivity': 'Detachable USB-C',
    'Compatibility': 'Windows, macOS, Linux',
    'Polling Rate': '1000Hz',
    'Actuation Force': '45g (Red), 55g (Brown), 60g (Blue)',
    'Battery': 'N/A (Wired)'
  }
};

const ProductDetailPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSwitch, setSelectedSwitch] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // In a real application, you would fetch product data based on the ID
  const product = productData;

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
            <Link to="/" className="hover:text-aeskey-sky-blue">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/products" className="hover:text-aeskey-sky-blue">Products</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-aeskey-dark-gray dark:text-white">{product.name}</span>
          </div>

          {/* Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Product Images */}
            <div>
              <div className="mb-4 aspect-square rounded-lg overflow-hidden bg-white">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 ${
                      selectedImage === index 
                        ? 'border-aeskey-sky-blue' 
                        : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold font-metropolis mb-2 text-aeskey-dark-gray dark:text-white">
                {product.name}
              </h1>
              
              <div className="flex items-center mb-4">
                <span className="text-yellow-400 font-bold mr-2">{product.rating}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-gray-500 dark:text-gray-400 ml-2">({product.reviews} reviews)</span>
              </div>

              <p className="text-2xl font-bold text-aeskey-sky-blue mb-6">
                ${product.price}
              </p>

              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {product.description}
              </p>

              {/* Color Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3 text-aeskey-dark-gray dark:text-white">
                  Color: <span className="font-normal">{product.colors[selectedColor]}</span>
                </h3>
                <div className="flex space-x-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`w-10 h-10 rounded-full border-2 ${
                        selectedColor === index 
                          ? 'border-aeskey-sky-blue' 
                          : 'border-transparent'
                      } flex items-center justify-center`}
                      style={{ 
                        backgroundColor: 
                          color === 'Black' ? '#333' : 
                          color === 'White' ? '#fff' : 
                          color === 'Navy' ? '#001f3f' : 
                          '#ddd'
                      }}
                    >
                      {selectedColor === index && (
                        <Check className={`w-5 h-5 ${color === 'White' ? 'text-black' : 'text-white'}`} />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Switch Type Selection */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-3 text-aeskey-dark-gray dark:text-white">
                  Switch Type: <span className="font-normal">{product.switchTypes[selectedSwitch]}</span>
                </h3>
                <div className="flex flex-wrap gap-3">
                  {product.switchTypes.map((switchType, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSwitch(index)}
                      className={`py-2 px-4 rounded-md border ${
                        selectedSwitch === index 
                          ? 'border-aeskey-sky-blue text-aeskey-sky-blue bg-aeskey-sky-blue/10' 
                          : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300'
                      }`}
                    >
                      {switchType}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center mb-8">
                <h3 className="text-sm font-medium mr-6 text-aeskey-dark-gray dark:text-white">Quantity:</h3>
                <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-md">
                  <button 
                    onClick={() => handleQuantityChange(-1)}
                    className="p-2 text-gray-600 dark:text-gray-300 hover:text-aeskey-sky-blue"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 text-aeskey-dark-gray dark:text-white">{quantity}</span>
                  <button 
                    onClick={() => handleQuantityChange(1)}
                    className="p-2 text-gray-600 dark:text-gray-300 hover:text-aeskey-sky-blue"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4">
                <Button 
                  className="flex-1 bg-aeskey-sky-blue hover:bg-aeskey-sky-blue/90 text-white py-6 flex items-center justify-center"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
                <Button 
                  variant="outline" 
                  className="p-6 border-gray-300 dark:border-gray-600"
                >
                  <Heart className="w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  className="p-6 border-gray-300 dark:border-gray-600"
                >
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>

              {/* Features */}
              <div className="mt-8">
                <h3 className="text-lg font-medium mb-3 text-aeskey-dark-gray dark:text-white">
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600 dark:text-gray-300">
                      <Check className="w-4 h-4 text-aeskey-sky-blue mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Specifications */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold font-metropolis mb-6 text-aeskey-dark-gray dark:text-white">
              Technical Specifications
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <tbody>
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-800/30' : ''}>
                      <td className="py-3 px-4 font-medium text-aeskey-dark-gray dark:text-white">
                        {key}
                      </td>
                      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                        {value as string}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetailPage;
