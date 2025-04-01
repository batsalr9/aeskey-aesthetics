
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface Category {
  id: number;
  name: string;
  products: Product[];
}
