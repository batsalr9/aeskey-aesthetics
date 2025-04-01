
import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/products/${product.id}`}>
      <div className="overflow-hidden rounded-lg bg-white dark:bg-aeskey-dark-gray/40 shadow-lg transition-all duration-300 hover:-translate-y-2 h-full">
        <div className="relative h-52 overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
            <span className="text-white font-medium">View Details</span>
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
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
