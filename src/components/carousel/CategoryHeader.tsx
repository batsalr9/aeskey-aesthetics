
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Category } from '@/types/product';

interface CategoryHeaderProps {
  category: Category;
  scrollProgress: number;
}

const CategoryHeader: React.FC<CategoryHeaderProps> = ({ 
  category, 
  scrollProgress 
}) => {
  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold">
          {category.name}
        </h3>
        <Link to="/products">
          <Button 
            variant="outline" 
            className="border-aeskey-sky-blue text-aeskey-sky-blue hover:bg-aeskey-sky-blue/10"
          >
            Shop All
            <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
      
      {/* Progress indicator */}
      <div className="w-full h-1 bg-gray-200 dark:bg-gray-700 rounded-full mb-8 overflow-hidden">
        <div 
          className="h-full bg-aeskey-sky-blue transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        ></div>
      </div>
    </>
  );
};

export default CategoryHeader;
