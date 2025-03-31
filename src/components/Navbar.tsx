
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, ShoppingCart } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-aeskey-dark-gray/80 shadow-md backdrop-blur-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/c6f3dcaf-2133-4d62-8544-b11c5645daa6.png" 
            alt="AESKEY Logo" 
            className="h-10 md:h-12 transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation - Middle Section */}
        <div className="hidden md:flex items-center justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/hot-deals" className="px-4 font-medium text-aeskey-dark-gray dark:text-white hover:text-aeskey-sky-blue dark:hover:text-aeskey-sky-blue transition-colors">
                  Hot Deals
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-transparent dark:bg-transparent dark:hover:bg-transparent">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px] lg:grid-cols-2">
                    <Link to="/products/keyboards" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Keyboards</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Premium mechanical keyboards for all your needs
                      </p>
                    </Link>
                    <Link to="/products/keycaps" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Keycaps</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Customize your keyboard with premium keycaps
                      </p>
                    </Link>
                    <Link to="/products/switches" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Switches</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Find the perfect switches for your typing style
                      </p>
                    </Link>
                    <Link to="/products/accessories" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                      <div className="text-sm font-medium leading-none">Accessories</div>
                      <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Complete your setup with essential accessories
                      </p>
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/driver-download" className="px-4 font-medium text-aeskey-dark-gray dark:text-white hover:text-aeskey-sky-blue dark:hover:text-aeskey-sky-blue transition-colors">
                  Driver Download
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/support" className="px-4 font-medium text-aeskey-dark-gray dark:text-white hover:text-aeskey-sky-blue dark:hover:text-aeskey-sky-blue transition-colors">
                  Support
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right Side Icons */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search */}
          <button 
            onClick={toggleSearch}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-aeskey-dark-gray/50 transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5 text-aeskey-dark-gray dark:text-white" />
          </button>
          
          {/* User Profile */}
          <Link 
            to="/account" 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-aeskey-dark-gray/50 transition-colors"
            aria-label="My Account"
          >
            <User className="h-5 w-5 text-aeskey-dark-gray dark:text-white" />
          </Link>
          
          {/* Cart */}
          <Link 
            to="/cart" 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-aeskey-dark-gray/50 transition-colors relative"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="h-5 w-5 text-aeskey-dark-gray dark:text-white" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-aeskey-sky-blue rounded-full">0</span>
          </Link>
          
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleSearch}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-aeskey-dark-gray/50 transition-colors"
            aria-label="Search"
          >
            <Search className="h-5 w-5 text-aeskey-dark-gray dark:text-white" />
          </button>
          <Link 
            to="/cart" 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-aeskey-dark-gray/50 transition-colors relative"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="h-5 w-5 text-aeskey-dark-gray dark:text-white" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-aeskey-sky-blue rounded-full">0</span>
          </Link>
          <ThemeToggle />
          <button onClick={toggleMobileMenu} className="text-aeskey-dark-gray dark:text-white">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-aeskey-dark-gray shadow-lg absolute w-full">
          <div className="flex flex-col py-4 space-y-4 px-6">
            <Link to="/hot-deals" className="font-medium text-aeskey-dark-gray dark:text-white hover:text-aeskey-sky-blue dark:hover:text-aeskey-sky-blue transition-colors">Hot Deals</Link>
            <Link to="/products" className="font-medium text-aeskey-dark-gray dark:text-white hover:text-aeskey-sky-blue dark:hover:text-aeskey-sky-blue transition-colors">Products</Link>
            <Link to="/driver-download" className="font-medium text-aeskey-dark-gray dark:text-white hover:text-aeskey-sky-blue dark:hover:text-aeskey-sky-blue transition-colors">Driver Download</Link>
            <Link to="/support" className="font-medium text-aeskey-dark-gray dark:text-white hover:text-aeskey-sky-blue dark:hover:text-aeskey-sky-blue transition-colors">Support</Link>
            <Link to="/account" className="font-medium text-aeskey-dark-gray dark:text-white hover:text-aeskey-sky-blue dark:hover:text-aeskey-sky-blue transition-colors">My Account</Link>
          </div>
        </div>
      )}

      {/* Search Overlay */}
      {searchOpen && (
        <div className="absolute top-full left-0 w-full bg-white dark:bg-aeskey-dark-gray shadow-lg py-4 px-6 flex items-center justify-center">
          <div className="w-full max-w-2xl relative">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 pr-10 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-aeskey-sky-blue dark:bg-aeskey-dark-gray/50 dark:text-white"
              autoFocus
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <Search className="h-5 w-5 text-aeskey-dark-gray dark:text-white" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
