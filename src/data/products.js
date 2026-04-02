import Sneak from '../assets/sneakers.jpeg'
import Head from '../assets/headphone.jpeg'
import Watch from '../assets/mens_watch.jpeg'

export const heroproducts = [
    {
      id: 1,
      name: "Premium Headphones",
      price: 129,
      image: Head,
    },
    {
      id: 2,
      name: "Minimal Sneakers",
      price: 89,
      image: Sneak,
    },
    {
      id: 3,
      name: "Elegant Handbag",
      price: 149,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
    },
  ];

  const products = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 129000,
      category: "tech",
      image: Head,
      image2:
        "https://images.unsplash.com/photo-1518441902117-35baf4b6d1a3",
      isBestSeller: true,
      isNew: true,
      isSale: false,
    },
    {
      id: 2,
      name: "Minimal Sneakers",
      price: 89000,
      category: "men",
      image: Sneak,
      image2:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      isBestSeller: true,
      isNew: false,
      isSale: false,
    },
    {
      id: 3,
      name: "Elegant Leather Handbag",
      price: 149000,
      category: "women",
      image:
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
      image2:
        "https://images.unsplash.com/photo-1593032465175-481ac7f401a0",
      isBestSeller: false,
      isNew: true,
      isSale: false,
    },
    {
      id: 4,
      name: "Smart Watch Series X",
      price: 99000,
      category: "tech",
      image: Watch,
      image2:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      isBestSeller: true,
      isNew: false,
      isSale: true,
    },
    {
      id: 5,
      name: "Classic Denim Jacket",
      price: 65000,
      category: "men",
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
      image2:
        "https://images.unsplash.com/photo-1520975922284-9d3b0f6b1c57",
      isBestSeller: false,
      isNew: true,
      isSale: false,
    },
    {
      id: 6,
      name: "Luxury Sunglasses",
      price: 45000,
      category: "accessories",
      image:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
      image2:
        "https://images.unsplash.com/photo-1508296695146-257a814070b4",
      isBestSeller: true,
      isNew: false,
      isSale: false,
    },
    {
      id: 7,
      name: "Women’s Casual Heels",
      price: 72000,
      category: "women",
      image:
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
      image2:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      isBestSeller: false,
      isNew: false,
      isSale: true,
    },
    {
      id: 8,
      name: "Slim Fit T-Shirt",
      price: 25000,
      category: "men",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      image2:
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
      isBestSeller: false,
      isNew: true,
      isSale: false,
    },
  ];
  
  export default products;