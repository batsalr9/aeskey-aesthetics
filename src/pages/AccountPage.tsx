
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  User, 
  Package, 
  Heart, 
  Settings, 
  LogOut, 
  ChevronRight 
} from "lucide-react";

const AccountPage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  
  // Sample order history data
  const orders = [
    {
      id: "ORD-2023-1254",
      date: "Dec 15, 2023",
      status: "Delivered",
      total: 249.99,
      items: 2
    },
    {
      id: "ORD-2023-0987",
      date: "Nov 28, 2023",
      status: "Processing",
      total: 89.99,
      items: 1
    },
    {
      id: "ORD-2023-0765",
      date: "Oct 12, 2023",
      status: "Delivered",
      total: 324.95,
      items: 3
    }
  ];
  
  // Sample wishlist data
  const wishlistItems = [
    {
      id: 1,
      name: "AESKEY Pro X Mechanical Keyboard",
      image: "https://placehold.co/100?text=Keyboard",
      price: 179.99
    },
    {
      id: 2,
      name: "AESKEY Artisan Keycap Set",
      image: "https://placehold.co/100?text=Keycaps",
      price: 49.99
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-16 min-h-screen">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">My Account</h1>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="w-full md:w-64 bg-white dark:bg-aeskey-dark-gray/40 rounded-lg shadow-md p-5">
              <button
                onClick={() => setActiveTab("profile")}
                className={`flex items-center w-full p-3 mb-2 rounded-md ${
                  activeTab === "profile" 
                    ? "bg-aeskey-sky-blue/20 text-aeskey-sky-blue" 
                    : "hover:bg-gray-100 dark:hover:bg-aeskey-dark-gray/60"
                }`}
              >
                <User className="h-5 w-5 mr-3" />
                <span>Profile</span>
                {activeTab === "profile" && <ChevronRight className="ml-auto h-5 w-5" />}
              </button>
              
              <button
                onClick={() => setActiveTab("orders")}
                className={`flex items-center w-full p-3 mb-2 rounded-md ${
                  activeTab === "orders" 
                    ? "bg-aeskey-sky-blue/20 text-aeskey-sky-blue" 
                    : "hover:bg-gray-100 dark:hover:bg-aeskey-dark-gray/60"
                }`}
              >
                <Package className="h-5 w-5 mr-3" />
                <span>Orders</span>
                {activeTab === "orders" && <ChevronRight className="ml-auto h-5 w-5" />}
              </button>
              
              <button
                onClick={() => setActiveTab("wishlist")}
                className={`flex items-center w-full p-3 mb-2 rounded-md ${
                  activeTab === "wishlist" 
                    ? "bg-aeskey-sky-blue/20 text-aeskey-sky-blue" 
                    : "hover:bg-gray-100 dark:hover:bg-aeskey-dark-gray/60"
                }`}
              >
                <Heart className="h-5 w-5 mr-3" />
                <span>Wishlist</span>
                {activeTab === "wishlist" && <ChevronRight className="ml-auto h-5 w-5" />}
              </button>
              
              <button
                onClick={() => setActiveTab("settings")}
                className={`flex items-center w-full p-3 mb-2 rounded-md ${
                  activeTab === "settings" 
                    ? "bg-aeskey-sky-blue/20 text-aeskey-sky-blue" 
                    : "hover:bg-gray-100 dark:hover:bg-aeskey-dark-gray/60"
                }`}
              >
                <Settings className="h-5 w-5 mr-3" />
                <span>Settings</span>
                {activeTab === "settings" && <ChevronRight className="ml-auto h-5 w-5" />}
              </button>
              
              <button
                className="flex items-center w-full p-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md"
              >
                <LogOut className="h-5 w-5 mr-3" />
                <span>Logout</span>
              </button>
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              {/* Profile Tab */}
              {activeTab === "profile" && (
                <div className="bg-white dark:bg-aeskey-dark-gray/40 rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">First Name</label>
                        <Input defaultValue="John" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Last Name</label>
                        <Input defaultValue="Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email</label>
                      <Input type="email" defaultValue="john.doe@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone</label>
                      <Input defaultValue="(123) 456-7890" />
                    </div>
                    <div className="pt-4">
                      <Button className="bg-aeskey-sky-blue hover:bg-aeskey-sky-blue/90">Save Changes</Button>
                    </div>
                  </form>
                </div>
              )}
              
              {/* Orders Tab */}
              {activeTab === "orders" && (
                <div className="bg-white dark:bg-aeskey-dark-gray/40 rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-6">Order History</h2>
                  {orders.length > 0 ? (
                    <div className="divide-y dark:divide-gray-700">
                      {orders.map(order => (
                        <div key={order.id} className="py-4">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                            <h3 className="font-bold">{order.id}</h3>
                            <div className="flex items-center">
                              <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium mr-2 ${
                                order.status === "Delivered" 
                                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" 
                                  : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                              }`}>
                                {order.status}
                              </span>
                              <span className="text-gray-500 dark:text-gray-400 text-sm">{order.date}</span>
                            </div>
                          </div>
                          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                            <div className="text-gray-600 dark:text-gray-300">
                              {order.items} {order.items === 1 ? 'item' : 'items'}
                            </div>
                            <div className="flex items-center space-x-4">
                              <div className="font-medium">${order.total.toFixed(2)}</div>
                              <Button variant="outline" size="sm" className="border-aeskey-sky-blue text-aeskey-sky-blue hover:bg-aeskey-sky-blue/10">
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500 dark:text-gray-400">You haven't placed any orders yet.</p>
                      <Button className="mt-4 bg-aeskey-sky-blue hover:bg-aeskey-sky-blue/90">Start Shopping</Button>
                    </div>
                  )}
                </div>
              )}
              
              {/* Wishlist Tab */}
              {activeTab === "wishlist" && (
                <div className="bg-white dark:bg-aeskey-dark-gray/40 rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-6">My Wishlist</h2>
                  {wishlistItems.length > 0 ? (
                    <div className="space-y-4">
                      {wishlistItems.map(item => (
                        <div key={item.id} className="flex items-center space-x-4 p-3 border rounded-lg dark:border-gray-700">
                          <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                          <div className="flex-1">
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-aeskey-sky-blue font-medium">${item.price.toFixed(2)}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" className="bg-aeskey-sky-blue hover:bg-aeskey-sky-blue/90">
                              Add to Cart
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-500 border-red-500 hover:bg-red-50 dark:hover:bg-red-900/20">
                              Remove
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-gray-500 dark:text-gray-400">Your wishlist is empty.</p>
                      <Button className="mt-4 bg-aeskey-sky-blue hover:bg-aeskey-sky-blue/90">Browse Products</Button>
                    </div>
                  )}
                </div>
              )}
              
              {/* Settings Tab */}
              {activeTab === "settings" && (
                <div className="bg-white dark:bg-aeskey-dark-gray/40 rounded-lg shadow-md p-6">
                  <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Change Password</h3>
                      <form className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-1">Current Password</label>
                          <Input type="password" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">New Password</label>
                          <Input type="password" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-1">Confirm New Password</label>
                          <Input type="password" />
                        </div>
                        <Button className="bg-aeskey-sky-blue hover:bg-aeskey-sky-blue/90">Update Password</Button>
                      </form>
                    </div>
                    
                    <div className="pt-4 border-t dark:border-gray-700">
                      <h3 className="text-lg font-medium mb-4">Email Preferences</h3>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="marketing" 
                            className="w-4 h-4 text-aeskey-sky-blue border-gray-300 rounded focus:ring-aeskey-sky-blue"
                            defaultChecked
                          />
                          <label htmlFor="marketing" className="ml-2 text-sm">Marketing emails</label>
                        </div>
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="orders" 
                            className="w-4 h-4 text-aeskey-sky-blue border-gray-300 rounded focus:ring-aeskey-sky-blue"
                            defaultChecked
                          />
                          <label htmlFor="orders" className="ml-2 text-sm">Order updates</label>
                        </div>
                        <div className="flex items-center">
                          <input 
                            type="checkbox" 
                            id="news" 
                            className="w-4 h-4 text-aeskey-sky-blue border-gray-300 rounded focus:ring-aeskey-sky-blue"
                          />
                          <label htmlFor="news" className="ml-2 text-sm">Newsletter</label>
                        </div>
                      </div>
                      <Button className="mt-4 bg-aeskey-sky-blue hover:bg-aeskey-sky-blue/90">Save Preferences</Button>
                    </div>
                    
                    <div className="pt-4 border-t dark:border-gray-700">
                      <h3 className="text-lg font-medium text-red-500 mb-4">Danger Zone</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Once you delete your account, there is no going back. Please be certain.
                      </p>
                      <Button variant="destructive">Delete Account</Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AccountPage;
