
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const HotDealsPage = () => {
  // Sample hot deals data
  const hotDeals = [
    {
      id: 1,
      title: "Mechanical Keyboard Bundle",
      image: "https://placehold.co/600x400?text=Keyboard+Bundle",
      originalPrice: 199.99,
      salePrice: 149.99,
      description: "Complete mechanical keyboard bundle with premium keycaps and switches.",
      discountPercentage: 25
    },
    {
      id: 2,
      title: "Premium Keycap Set",
      image: "https://placehold.co/600x400?text=Keycap+Set",
      originalPrice: 89.99,
      salePrice: 59.99,
      description: "PBT double-shot keycaps with custom designs.",
      discountPercentage: 33
    },
    {
      id: 3,
      title: "Silent Tactile Switches (70pcs)",
      image: "https://placehold.co/600x400?text=Switches",
      originalPrice: 49.99,
      salePrice: 39.99,
      description: "Ultra-smooth silent tactile switches for a premium typing experience.",
      discountPercentage: 20
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2 text-center">Hot Deals</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 text-center">Limited time offers on premium products</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hotDeals.map(deal => (
              <div key={deal.id} className="bg-white dark:bg-aeskey-dark-gray/40 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
                <div className="relative">
                  <img src={deal.image} alt={deal.title} className="w-full h-56 object-cover" />
                  <div className="absolute top-0 right-0 bg-red-500 text-white py-1 px-3 rounded-bl-lg font-bold">
                    -{deal.discountPercentage}%
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{deal.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-aeskey-sky-blue">${deal.salePrice.toFixed(2)}</span>
                      <span className="text-gray-500 line-through">${deal.originalPrice.toFixed(2)}</span>
                    </div>
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                      Save ${(deal.originalPrice - deal.salePrice).toFixed(2)}
                    </span>
                  </div>
                  <Button className="w-full bg-aeskey-sky-blue hover:bg-aeskey-sky-blue/90">Add to Cart</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HotDealsPage;
