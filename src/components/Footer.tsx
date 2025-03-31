
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-aeskey-dark-gray text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="font-metropolis text-2xl font-bold mb-4 block">
              AES<span className="text-aeskey-sky-blue">KEY</span>
            </Link>
            <p className="text-gray-300 mb-4">
              Premium mechanical keyboards designed for aesthetics, precision, and performance.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-aeskey-sky-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-aeskey-sky-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-aeskey-sky-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-aeskey-sky-blue transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/model-one" className="text-gray-300 hover:text-aeskey-sky-blue transition-colors">
                  AESKEY Model One
                </Link>
              </li>
              <li>
                <Link to="/products/tkl-pro" className="text-gray-300 hover:text-aeskey-sky-blue transition-colors">
                  AESKEY TKL Pro
                </Link>
              </li>
              <li>
                <Link to="/products/compact" className="text-gray-300 hover:text-aeskey-sky-blue transition-colors">
                  AESKEY Compact 60%
                </Link>
              </li>
              <li>
                <Link to="/products/accessories" className="text-gray-300 hover:text-aeskey-sky-blue transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-aeskey-sky-blue transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-aeskey-sky-blue transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-300 hover:text-aeskey-sky-blue transition-colors">
                  Warranty
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-aeskey-sky-blue transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for new product announcements and exclusive offers.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none"
              />
              <button className="bg-aeskey-sky-blue px-4 py-2 rounded-r-md hover:bg-aeskey-sky-blue/90 transition-colors flex items-center">
                <Mail size={16} className="mr-2" />
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} AESKEY. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 text-sm hover:text-aeskey-sky-blue transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 text-sm hover:text-aeskey-sky-blue transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
