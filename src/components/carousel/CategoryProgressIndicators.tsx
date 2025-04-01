
import React from 'react';
import { Progress } from '@/components/ui/progress';

interface CategoryProgressIndicatorsProps {
  categoriesLength: number;
  activeCategory: number;
  changeCategory: (index: number) => void;
  scrollProgress?: number;
}

const CategoryProgressIndicators: React.FC<CategoryProgressIndicatorsProps> = ({ 
  categoriesLength, 
  activeCategory, 
  changeCategory,
  scrollProgress = 0
}) => {
  // Calculate overall progress for the progress bar
  const overallProgress = ((activeCategory / (categoriesLength - 1)) * 100) + 
    (scrollProgress * (100 / (categoriesLength - 1)));

  return (
    <div className="flex flex-col items-center mt-8 space-y-4">
      {/* Progress bar showing overall position */}
      <div className="w-full max-w-md px-4">
        <Progress 
          value={Math.min(100, overallProgress)} 
          className="h-1.5 bg-gray-200 dark:bg-gray-700"
        />
      </div>
      
      {/* Dot indicators */}
      <div className="flex space-x-2">
        {[...Array(categoriesLength)].map((_, index) => (
          <div
            key={index}
            onClick={() => changeCategory(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-500 ${
              activeCategory === index 
                ? "bg-aeskey-sky-blue scale-125 shadow-md" 
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
            style={{
              transform: activeCategory === index ? 'scale(1.25)' : 'scale(1)',
              transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
            }}
          ></div>
        ))}
      </div>
      
      {/* Category name indicator */}
      <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
        {activeCategory + 1} of {categoriesLength}
      </p>
    </div>
  );
};

export default CategoryProgressIndicators;
