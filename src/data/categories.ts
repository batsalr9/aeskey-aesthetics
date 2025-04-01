
import { Category } from "@/types/product";

export const categories: Category[] = [
  {
    id: 1,
    name: "Mechanical Keyboards",
    products: [
      {
        id: 101,
        name: "AESKEY Model One",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=2940&auto=format&fit=crop",
        description: "Our flagship 75% mechanical keyboard with premium aluminum frame"
      },
      {
        id: 102,
        name: "AESKEY TKL Pro",
        price: 169.99,
        image: "https://images.unsplash.com/photo-1595044426077-d36d9e0100a7?q=80&w=2940&auto=format&fit=crop",
        description: "Tenkeyless design with RGB lighting and hot-swappable switches"
      },
      {
        id: 103,
        name: "AESKEY Compact 60%",
        price: 129.99,
        image: "https://images.unsplash.com/photo-1558050032-160f36233a07?q=80&w=2832&auto=format&fit=crop",
        description: "Ultra-portable 60% keyboard perfect for minimalists on the go"
      }
    ]
  },
  {
    id: 2,
    name: "Keycaps Collections",
    products: [
      {
        id: 201,
        name: "PBT Double-shot Keycap Set",
        price: 59.99,
        image: "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?q=80&w=2832&auto=format&fit=crop",
        description: "Premium PBT double-shot keycaps with custom designs"
      },
      {
        id: 202,
        name: "Artisan Galaxy Keycaps",
        price: 89.99,
        image: "https://images.unsplash.com/photo-1696496965846-c9f1edeaf9f7?q=80&w=2836&auto=format&fit=crop",
        description: "Hand-crafted artisan keycaps with galaxy theme"
      },
      {
        id: 203,
        name: "Minimalist Monochrome Set",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1589578527966-200b3fa9f872?q=80&w=2787&auto=format&fit=crop",
        description: "Clean monochromatic keycaps for a minimalist aesthetic"
      }
    ]
  },
  {
    id: 3,
    name: "Switches & Accessories",
    products: [
      {
        id: 301,
        name: "Premium Linear Switches (70pcs)",
        price: 45.99,
        image: "https://images.unsplash.com/photo-1626955949583-2c764a3bd179?q=80&w=2940&auto=format&fit=crop",
        description: "Ultra-smooth linear switches for a premium typing experience"
      },
      {
        id: 302,
        name: "Silent Tactile Switches (70pcs)",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1671726203394-3fb856bdd8d3?q=80&w=2940&auto=format&fit=crop",
        description: "Tactile feedback without the noise - perfect for office use"
      },
      {
        id: 303,
        name: "Custom Coiled Cable",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1617470852543-1caca5baa231?q=80&w=2831&auto=format&fit=crop",
        description: "Braided, custom-colored coiled cable with aviator connector"
      }
    ]
  },
  {
    id: 4,
    name: "Limited Editions",
    products: [
      {
        id: 401,
        name: "AESKEY Celestial Edition",
        price: 299.99,
        image: "https://images.unsplash.com/photo-1618172193622-ae2d025f3e06?q=80&w=2864&auto=format&fit=crop",
        description: "Limited edition keyboard with star-inspired design and custom keycaps"
      },
      {
        id: 402,
        name: "AESKEY Vintage Collection",
        price: 249.99,
        image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=2940&auto=format&fit=crop",
        description: "Retro-inspired design with modern functionality"
      },
      {
        id: 403,
        name: "Collaboration Artist Series",
        price: 349.99,
        image: "https://images.unsplash.com/photo-1615869442320-fd02a129c77c?q=80&w=2865&auto=format&fit=crop",
        description: "Special artist collaboration with unique artwork and premium features"
      }
    ]
  }
];
