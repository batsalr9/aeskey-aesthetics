
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
        transform: `scale(${animating ? 0.98 : 1}) translateY(${animating ? '-5px' : '0'})`,
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
          {category.products.map((product, idx) => (
            <CarouselItem 
              key={product.id} 
              className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 pl-4"
              style={{
                animationDelay: `${idx * 50}ms`,
              }}
            >
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-2 md:-left-6" />
        <CarouselNext className="-right-2 md:-right-6" />
      </Carousel>
    </div>
  );
};

export default ProductsDisplay;
