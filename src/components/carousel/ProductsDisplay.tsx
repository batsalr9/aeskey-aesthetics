
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from './ProductCard';
import { Category } from '@/types/product';

interface ProductsDisplayProps {
  category: Category;
  animating: boolean;
}

const ProductsDisplay: React.FC<ProductsDisplayProps> = ({ 
  category, 
  animating 
}) => {
  return (
    <div 
      className="transition-all duration-500"
      style={{
        opacity: animating ? 0.5 : 1,
        transform: `scale(${animating ? 0.98 : 1})`,
      }}
    >
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {category.products.map((product) => (
            <CarouselItem 
              key={product.id} 
              className="basis-full md:basis-1/2 lg:basis-1/3 pl-4"
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0" />
        <CarouselNext className="right-0" />
      </Carousel>
    </div>
  );
};

export default ProductsDisplay;
