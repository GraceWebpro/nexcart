import { useEffect, useState } from "react";
import BrandMarquee from "../ui/BrandMarque";
import Sneak from '../../assets/sneakers.jpeg'
import Head from '../../assets/headphone.jpeg'
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Premium Headphones",
    price: "$129.00",
    category: "Tech",
    image: Head,
  },
  {
    id: 2,
    name: "Minimal Sneakers",
    price: "$89.00",
    category: "Men",
    image: Sneak,
  },
  {
    id: 3,
    name: "Elegant Handbag",
    price: "$149.00",
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
  },
  {
    id: 3,
    name: "Luxury Sunglasses",
    price: "$129.00",
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083",
  },
];

const categories = ["All", "Men", "Women", "Tech"];

export default function Hero() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filtered, setFiltered] = useState(products);
  const [index, setIndex] = useState(0);

  // Filter by category
  useEffect(() => {
    if (activeCategory === "All") {
      setFiltered(products);
    } else {
      setFiltered(products.filter(p => p.category === activeCategory));
    }
    setIndex(0); // reset index on category change
  }, [activeCategory]);

  // Auto-change product every 3s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % filtered.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [filtered]);

  const product = filtered[index];

  return (
    <section className="relative bg-background overflow-hidden mt-16">
      
      {/* BACKGROUND GLOW */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary-light blur-3xl opacity-30 rounded-full" />
      <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-primary-light blur-3xl opacity-20 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">        
        {/* LEFT */}
        <div className="w-full">
          <p className="text-sm text-primary font-medium mb-4">
            NEW COLLECTION 2026
          </p>

          <h1 className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
            font-bold leading-tight 
            text-text-primary mb-6
          ">            
            Discover Products That Elevate Your Style
          </h1>

          <p className="text-text-secondary text-base sm:text-lg mb-8 max-w-md">            
            Designed for modern living and seamless experiences.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-4">            
            <Link to='/shop'>
              <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl shadow-lg transition">
                Shop Now
              </button>
            </Link>
            <button className="px-6 py-3 rounded-xl border border-border text-text-primary hover:bg-background-secondary transition">
              Explore
            </button>
          </div>

          {/* trust badges */}
          <div className="flex flex-wrap gap-4 mt-10 text-sm text-text-muted">
            <span>✔ Free Shipping</span>
            <span>✔ Secure Payment</span>
            <span>✔ 24/7 Support</span>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">

          {/* BACK LAYER CARD */}
          <div className="absolute top-6 left-6 sm:top-10 sm:left-10 w-[200px] sm:w-[280px] h-[260px] sm:h-[360px] bg-white/40 rounded-2xl blur-2xl" />

          {/* MAIN CARD */}
          <div className="
            bg-background-card rounded-2xl shadow-2xl p-5 sm:p-6
            w-full max-w-[320px] sm:max-w-[360px] md:max-w-[420px]
            transform rotate-[-3deg] sm:rotate-[-6deg] 
            hover:rotate-0 transition duration-500
          ">            
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl mb-4 h-[220px] w-full object-cover"
            />
            <h3 className="text-text-primary font-semibold">
              {product.name}
            </h3>
            <p className="text-text-secondary">{product.price}</p>
          </div>

          {/* FLOATING PRICE CARD */}
          <div className="
            absolute bottom-[-20px] sm:bottom-[-30px] 
            right-4 sm:right-[10%] 
            bg-background-card rounded-xl shadow-lg p-3 sm:p-4 
            w-[140px] sm:w-[180px]
          ">            
            <p className="text-sm text-text-secondary">Now Trending</p>
            <p className="text-lg font-bold text-text-primary">
              {product.price}
            </p>
          </div>

          {/* MANUAL CONTROLS */}
          <div className="absolute -bottom-12 sm:-bottom-16 flex gap-2">            
            {filtered.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${
                  i === index ? "bg-primary" : "bg-border"
                }`}
              />
            ))}
          </div>

          {/* GLOW */}
          <div className="absolute -top-40 -right-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary-light blur-3xl opacity-30 rounded-full" />        </div>
      </div>

      <BrandMarquee />
    </section>
  );
}