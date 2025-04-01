
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface MobileNavigationProps {
  handleNavigation: (direction: 'next' | 'prev') => void;
  animating: boolean;
  activeCategory: number;
  categoriesLength: number;
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({ 
  handleNavigation, 
  animating, 
  activeCategory, 
  categoriesLength 
}) => {
  return (
    <div className="flex justify-center mt-8 space-x-4">
      <Button 
        variant="outline" 
        size="icon"
        onClick={() => handleNavigation('prev')}
        disabled={animating || activeCategory === 0}
        className="rounded-full"
      >
        <ChevronLeft size={24} />
      </Button>
      <Button 
        variant="outline" 
        size="icon"
        onClick={() => handleNavigation('next')}
        disabled={animating || activeCategory === categoriesLength - 1}
        className="rounded-full"
      >
        <ChevronRight size={24} />
      </Button>
    </div>
  );
};

export default MobileNavigation;
