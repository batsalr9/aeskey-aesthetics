
import React from 'react';
import { Category } from '@/types/product';

interface CategoryNavProps {
  categories: Category[];
  activeCategory: number;
  changeCategory: (index: number) => void;
}

const CategoryNav: React.FC<CategoryNavProps> = ({ 
  categories, 
  activeCategory, 
  changeCategory 
}) => {
  return (
    <div className="flex justify-center mb-8 overflow-x-auto no-scrollbar">
      <div className="flex space-x-2 md:space-x-4">
        {categories.map((category, index) => (
          <button
            key={category.id}
            onClick={() => changeCategory(index)}
            className={`px-4 py-2 rounded-full transition-all duration-300 whitespace-nowrap ${
              activeCategory === index
                ? "bg-aeskey-sky-blue text-white font-medium"
                : "bg-gray-100 dark:bg-aeskey-dark-gray/40 hover:bg-gray-200 dark:hover:bg-aeskey-dark-gray/60"
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryNav;
