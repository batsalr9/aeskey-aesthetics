
import React from 'react';

interface CategoryProgressIndicatorsProps {
  categoriesLength: number;
  activeCategory: number;
  changeCategory: (index: number) => void;
}

const CategoryProgressIndicators: React.FC<CategoryProgressIndicatorsProps> = ({ 
  categoriesLength, 
  activeCategory, 
  changeCategory 
}) => {
  return (
    <div className="flex justify-center mt-8">
      <div className="flex space-x-2">
        {[...Array(categoriesLength)].map((_, index) => (
          <div
            key={index}
            onClick={() => changeCategory(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              activeCategory === index 
                ? "bg-aeskey-sky-blue scale-125" 
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default CategoryProgressIndicators;
