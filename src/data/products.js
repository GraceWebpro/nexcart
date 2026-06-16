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
      slug: "premium-wireless-headphones",
      name: "Premium Wireless Headphones",
      price: 129000,
      oldPrice: 159000,
      category: "tech",
      brand: "NexAudio",
      sku: "NX-HDP-001",
      stock: 12,
      rating: 4.8,
      reviews: 124,
      tags: ["audio", "wireless", "premium"],
  
      description:
        "High-end wireless headphones with immersive sound and noise cancellation.",
  
      longDescription:
        "Experience studio-quality sound with premium wireless headphones designed for comfort and performance. Featuring active noise cancellation, long battery life, and crystal-clear audio tuning for music lovers.",
  
      images: [
        Head,
        "https://images.unsplash.com/photo-1518441902117-35baf4b6d1a3",
      ],
  
      isBestSeller: true,
      isNew: true,
      isSale: true,
  
      colors: [
        {
          name: "Black",
          value: "#000",
          images: [
            Head,
            "https://images.unsplash.com/photo-1518441902117-35baf4b6d1a3",
          ],
          sizes: null, // tech product → no sizes
        },
        {
          name: "Silver",
          value: "#C0C0C0",
          images: [
            "https://images.unsplash.com/photo-1585386959984-a4155223166f",
          ],
        },
      ],
    },
  
    {
      id: 2,
      slug: "minimal-sneakers",
      name: "Minimal Sneakers",
      price: 89000,
      category: "men",
      brand: "NexWear",
      sku: "NX-SNK-002",
      stock: 20,
      rating: 4.6,
      reviews: 89,
      tags: ["shoes", "casual"],
  
      description:
        "Clean, minimal sneakers designed for everyday comfort and style.",
  
      longDescription:
        "Crafted with breathable materials and a modern silhouette, these sneakers are perfect for daily wear. Lightweight, stylish, and versatile for any outfit.",
  
      images: [
        Sneak,
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      ],
  
      isBestSeller: true,
      isNew: false,
      isSale: false,
  
      colors: [
        {
          name: "Black",
          value: "#000",
          images: [Sneak],
          sizes: [
            { label: "40", inStock: true },
            { label: "41", inStock: true },
            { label: "42", inStock: true },
            { label: "43", inStock: false },
          ],
        },
        {
          name: "White",
          value: "#fff",
          images: [
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
          ],
          sizes: [
            { label: "40", inStock: true },
            { label: "41", inStock: true },
          ],
        },
      ],
    },
  
    {
      id: 3,
      slug: "elegant-leather-handbag",
      name: "Elegant Leather Handbag",
      price: 149000,
      category: "women",
      brand: "NexLux",
      sku: "NX-BAG-003",
      stock: 8,
      rating: 4.9,
      reviews: 54,
      tags: ["bag", "luxury"],
  
      description:
        "Premium leather handbag crafted for elegance and everyday luxury.",
  
      longDescription:
        "A beautifully crafted leather handbag with premium finishing. Designed for modern women who value both functionality and luxury.",
  
      images: [
        "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
        "https://images.unsplash.com/photo-1593032465175-481ac7f401a0",
      ],
  
      isBestSeller: false,
      isNew: true,
      isSale: false,
  
      colors: [
        {
          name: "Brown",
          value: "#8B4513",
          images: [
            "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
          ],
        },
        {
          name: "Black",
          value: "#000",
          images: [
            "https://images.unsplash.com/photo-1593032465175-481ac7f401a0",
          ],
        },
      ],
    },
  
    {
      id: 4,
      slug: "smart-watch-series-x",
      name: "Smart Watch Series X",
      price: 99000,
      oldPrice: 120000,
      category: "tech",
      brand: "NexTech",
      sku: "NX-WAT-004",
      stock: 15,
      rating: 4.7,
      reviews: 210,
      tags: ["watch", "smart"],
  
      description:
        "Advanced smartwatch with health tracking and premium design.",
  
      longDescription:
        "Stay connected and track your health metrics with this sleek smartwatch featuring heart rate monitoring, notifications, and long battery life.",
  
      images: [
        Watch,
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      ],
  
      isBestSeller: true,
      isNew: false,
      isSale: true,
  
      colors: [
        {
          name: "Black",
          value: "#000",
          images: [Watch],
        },
      ],
    },
  
    {
      id: 5,
      slug: "classic-denim-jacket",
      name: "Classic Denim Jacket",
      price: 65000,
      category: "men",
      brand: "NexWear",
      sku: "NX-JKT-005",
      stock: 10,
      rating: 4.5,
      reviews: 67,
      tags: ["jacket", "denim"],
  
      description:
        "Timeless denim jacket designed for versatility and style.",
  
      longDescription:
        "A wardrobe essential crafted from durable denim fabric. Perfect for layering in any season.",
  
      images: [
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
        "https://images.unsplash.com/photo-1520975922284-9d3b0f6b1c57",
      ],
  
      isBestSeller: false,
      isNew: true,
      isSale: false,
  
      colors: [
        {
          name: "Blue",
          value: "#1E3A8A",
          images: [
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
          ],
          sizes: [
            { label: "S", inStock: true },
            { label: "M", inStock: true },
            { label: "L", inStock: true },
          ],
        },
      ],
    },
  
    {
      id: 6,
      slug: "luxury-sunglasses",
      name: "Luxury Sunglasses",
      price: 45000,
      category: "accessories",
      brand: "NexLux",
      sku: "NX-SUN-006",
      stock: 18,
      rating: 4.4,
      reviews: 45,
      tags: ["sunglasses"],
  
      description:
        "Stylish sunglasses offering UV protection and premium design.",
  
      longDescription:
        "Protect your eyes in style with these luxury sunglasses crafted for comfort and elegance.",
  
      images: [
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
        "https://images.unsplash.com/photo-1508296695146-257a814070b4",
      ],
  
      isBestSeller: true,
      isNew: false,
      isSale: false,
  
      colors: [
        {
          name: "Black",
          value: "#000",
          images: [
            "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
          ],
        },
      ],
    },
  
    {
      id: 7,
      slug: "womens-casual-heels",
      name: "Women’s Casual Heels",
      price: 72000,
      oldPrice: 90000,
      category: "women",
      brand: "NexWear",
      sku: "NX-HLS-007",
      stock: 9,
      rating: 4.6,
      reviews: 72,
      tags: ["heels"],
  
      description:
        "Comfortable and stylish heels perfect for everyday wear.",
  
      longDescription:
        "Designed for comfort without sacrificing elegance, these heels are perfect for casual and semi-formal outings.",
  
      images: [
        "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
      ],
  
      isBestSeller: false,
      isNew: false,
      isSale: true,
  
      colors: [
        {
          name: "Beige",
          value: "#D2B48C",
          images: [
            "https://images.unsplash.com/photo-1543163521-1bf539c55dd2",
          ],
          sizes: [
            { label: "37", inStock: true },
            { label: "38", inStock: true },
            { label: "39", inStock: false },
          ],
        },
      ],
    },
  
    {
      id: 8,
      slug: "slim-fit-tshirt",
      name: "Slim Fit T-Shirt",
      price: 25000,
      category: "men",
      brand: "NexWear",
      sku: "NX-TSH-008",
      stock: 30,
      rating: 4.3,
      reviews: 33,
      tags: ["tshirt"],
  
      description:
        "Soft, breathable slim fit t-shirt for everyday comfort.",
  
      longDescription:
        "Crafted from premium cotton fabric, this slim fit t-shirt offers comfort and a modern look for everyday wear.",
  
      images: [
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
        "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
      ],
  
      isBestSeller: false,
      isNew: true,
      isSale: false,
  
      colors: [
        {
          name: "White",
          value: "#fff",
          images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
          ],
          sizes: [
            { label: "S", inStock: true },
            { label: "M", inStock: true },
            { label: "L", inStock: true },
            { label: "XL", inStock: true },
          ],
        },
      ],
    },
    {
      id: 9,
      slug: "ultra-slim-laptop-backpack",
      name: "Ultra Slim Laptop Backpack",
      price: 78000,
      category: "accessories",
      brand: "NexCarry",
      sku: "NX-BAG-009",
      stock: 14,
      rating: 4.7,
      reviews: 61,
      tags: ["backpack", "laptop", "travel"],
    
      description:
        "Sleek and functional backpack designed for modern professionals.",
    
      longDescription:
        "Carry your essentials in style with this ultra-slim laptop backpack. Designed with multiple compartments, water-resistant material, and ergonomic support for daily commuting and travel.",
    
      images: [
        "https://images.unsplash.com/photo-1514477917009-389c76a86b68",
        "https://images.unsplash.com/photo-1581605405669-fcdf81165afa",
      ],
    
      isBestSeller: true,
      isNew: false,
      isSale: false,
    
      colors: [
        {
          name: "Black",
          value: "#000",
          images: [
            "https://images.unsplash.com/photo-1514477917009-389c76a86b68",
          ],
        },
        {
          name: "Gray",
          value: "#6B7280",
          images: [
            "https://images.unsplash.com/photo-1581605405669-fcdf81165afa",
          ],
        },
      ],
    },
    
    {
      id: 10,
      slug: "wireless-bluetooth-speaker-pro",
      name: "Wireless Bluetooth Speaker Pro",
      price: 67000,
      oldPrice: 85000,
      category: "tech",
      brand: "NexAudio",
      sku: "NX-SPK-010",
      stock: 22,
      rating: 4.8,
      reviews: 142,
      tags: ["speaker", "bluetooth", "audio"],
    
      description:
        "Powerful portable speaker with deep bass and crystal-clear sound.",
    
      longDescription:
        "Enjoy immersive sound anywhere with this high-performance Bluetooth speaker. Built with deep bass technology, long battery life, and a rugged waterproof design.",
    
      images: [
        "https://images.unsplash.com/photo-1585386959984-a4155223166f",
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
      ],
    
      isBestSeller: true,
      isNew: true,
      isSale: true,
    
      colors: [
        {
          name: "Black",
          value: "#000",
          images: [
            "https://images.unsplash.com/photo-1585386959984-a4155223166f",
          ],
        },
        {
          name: "Blue",
          value: "#2563EB",
          images: [
            "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
          ],
        },
      ],
    },
    
    {
      id: 11,
      slug: "premium-athleisure-joggers",
      name: "Premium Athleisure Joggers",
      price: 54000,
      category: "men",
      brand: "NexWear",
      sku: "NX-JOG-011",
      stock: 18,
      rating: 4.5,
      reviews: 76,
      tags: ["joggers", "athleisure", "comfort"],
    
      description:
        "Modern slim-fit joggers designed for comfort and performance.",
    
      longDescription:
        "Upgrade your casual wardrobe with these premium joggers. Made from breathable fabric with a tailored fit, perfect for workouts or everyday wear.",
    
      images: [
        "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7",
        "https://images.unsplash.com/photo-1584865288642-42078afe6942",
      ],
    
      isBestSeller: false,
      isNew: true,
      isSale: false,
    
      colors: [
        {
          name: "Gray",
          value: "#6B7280",
          images: [
            "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7",
          ],
          sizes: [
            { label: "S", inStock: true },
            { label: "M", inStock: true },
            { label: "L", inStock: true },
            { label: "XL", inStock: false },
          ],
        },
        {
          name: "Black",
          value: "#000",
          images: [
            "https://images.unsplash.com/photo-1584865288642-42078afe6942",
          ],
          sizes: [
            { label: "S", inStock: true },
            { label: "M", inStock: true },
          ],
        },
      ],
    },
    
    {
      id: 12,
      slug: "designer-perfume-essence",
      name: "Designer Perfume Essence",
      price: 92000,
      category: "accessories",
      brand: "NexLux",
      sku: "NX-PRF-012",
      stock: 11,
      rating: 4.9,
      reviews: 98,
      tags: ["perfume", "luxury", "fragrance"],
    
      description:
        "A signature fragrance crafted for elegance and long-lasting impact.",
    
      longDescription:
        "Experience a luxurious blend of floral and woody notes in this premium designer perfume. Long-lasting and perfect for both day and evening wear.",
    
      images: [
        "https://images.unsplash.com/photo-1594035910387-fea47794261f",
        "https://images.unsplash.com/photo-1615634260167-c8cdede054de",
      ],
    
      isBestSeller: true,
      isNew: false,
      isSale: false,
    
      colors: [
        {
          name: "Gold",
          value: "#D4AF37",
          images: [
            "https://images.unsplash.com/photo-1594035910387-fea47794261f",
          ],
        },
      ],
    }
  ];
  
  export default products;