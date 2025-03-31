
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Minus, Plus, Trash2 } from "lucide-react";

const CartPage = () => {
  // Sample cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "AESKEY Pro X Mechanical Keyboard",
      image: "https://placehold.co/150?text=Keyboard",
      price: 179.99,
      quantity: 1,
      variant: "Black - Cherry MX Brown"
    },
    {
      id: 2,
      name: "AESKEY PBT Keycap Set",
      image: "https://placehold.co/150?text=Keycaps",
      price: 49.99,
      quantity: 2,
      variant: "Miami Colorway"
    }
  ]);
  
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };
  
  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  // Calculate totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 9.99 : 0;
  const total = subtotal + shipping;

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
          
          {cartItems.length > 0 ? (
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Cart Items */}
              <div className="flex-1">
                <div className="bg-white dark:bg-aeskey-dark-gray/40 rounded-lg shadow-md overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-gray-50 dark:bg-aeskey-dark-gray/60">
                      <tr>
                        <th className="py-3 px-4 text-left">Product</th>
                        <th className="py-3 px-4 text-center">Quantity</th>
                        <th className="py-3 px-4 text-right">Price</th>
                        <th className="py-3 px-4 text-right">Total</th>
                        <th className="py-3 px-4"></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y dark:divide-gray-700">
                      {cartItems.map(item => (
                        <tr key={item.id}>
                          <td className="py-4 px-4">
                            <div className="flex items-center space-x-4">
                              <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                              <div>
                                <h3 className="font-medium">{item.name}</h3>
                                <p className="text-gray-500 dark:text-gray-400 text-sm">{item.variant}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center justify-center">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-aeskey-dark-gray/60"
                              >
                                <Minus className="h-4 w-4" />
                              </button>
                              <span className="w-10 text-center">{item.quantity}</span>
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-aeskey-dark-gray/60"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-right">
                            ${item.price.toFixed(2)}
                          </td>
                          <td className="py-4 px-4 text-right font-medium">
                            ${(item.price * item.quantity).toFixed(2)}
                          </td>
                          <td className="py-4 px-4 text-right">
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Continue Shopping Button */}
                <div className="mt-6">
                  <Button variant="outline" className="border-aeskey-sky-blue text-aeskey-sky-blue hover:bg-aeskey-sky-blue/10">
                    Continue Shopping
                  </Button>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="w-full lg:w-1/3">
                <div className="bg-white dark:bg-aeskey-dark-gray/40 rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
                      <span className="font-medium">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Shipping</span>
                      <span className="font-medium">${shipping.toFixed(2)}</span>
                    </div>
                    <div className="border-t dark:border-gray-700 pt-4">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Coupon Code */}
                  <div className="mt-6">
                    <label className="block text-sm font-medium mb-2">Coupon Code</label>
                    <div className="flex space-x-2">
                      <Input placeholder="Enter coupon code" className="flex-1" />
                      <Button variant="outline" className="border-aeskey-sky-blue text-aeskey-sky-blue hover:bg-aeskey-sky-blue/10">
                        Apply
                      </Button>
                    </div>
                  </div>
                  
                  {/* Checkout Button */}
                  <Button className="w-full mt-6 bg-aeskey-sky-blue hover:bg-aeskey-sky-blue/90 py-6">
                    Proceed to Checkout
                  </Button>
                  
                  {/* Payment Icons */}
                  <div className="mt-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 text-center">We Accept</p>
                    <div className="flex justify-center space-x-2">
                      <div className="w-10 h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="w-10 h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="w-10 h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                      <div className="w-10 h-6 bg-gray-200 dark:bg-gray-700 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-aeskey-dark-gray/40 rounded-lg shadow-md p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">Looks like you haven't added any products to your cart yet.</p>
              <Button className="bg-aeskey-sky-blue hover:bg-aeskey-sky-blue/90">Start Shopping</Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CartPage;
