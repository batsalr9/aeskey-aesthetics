
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-aeskey-dark-gray/80 shadow-md backdrop-blur-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/b8a17b08-edb6-4483-ab16-3641b0e855a0.png" 
            alt="AESKEY Logo" 
            className="h-10 md:h-12 transition-all duration-300"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/products" className="font-medium text-aeskey-dark-gray dark:text-white hover:text-aeskey-sky-blue dark:hover:text-aeskey-sky-blue transition-colors">Products</Link>
          <Link to="/features" className="font-medium text-aeskey-dark-gray dark:text-white hover:text-aeskey-sky-blue dark:hover:text-aeskey-sky-blue transition-colors">Features</Link>
          <Link to="/reviews" className="font-medium text-aeskey-dark-gray dark:text-white hover:text-aeskey-sky-blue dark:hover:text-aeskey-sky-blue transition-colors">Reviews</Link>
          <Link to="/contact" className="font-medium text-aeskey-dark-gray dark:text-white hover:text-aeskey-sky-blue dark:hover:text-aeskey-sky-blue transition-colors">Contact</Link>
          <ThemeToggle />
          <Button className="bg-aeskey-sky-blue hover:bg-aeskey-sky-blue/90">Shop Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
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
            <Link to="/products" className="font-medium text-aeskey-dark-gray dark:text-white hover:text-aeskey-sky-blue dark:hover:text-aeskey-sky-blue transition-colors">Products</Link>
            <Link to="/features" className="font-medium text-aeskey-dark-gray dark:text-white hover:text-aeskey-sky-blue dark:hover:text-aeskey-sky-blue transition-colors">Features</Link>
            <Link to="/reviews" className="font-medium text-aeskey-dark-gray dark:text-white hover:text-aeskey-sky-blue dark:hover:text-aeskey-sky-blue transition-colors">Reviews</Link>
            <Link to="/contact" className="font-medium text-aeskey-dark-gray dark:text-white hover:text-aeskey-sky-blue dark:hover:text-aeskey-sky-blue transition-colors">Contact</Link>
            <Button className="w-full bg-aeskey-sky-blue hover:bg-aeskey-sky-blue/90">Shop Now</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
