import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BrandMarquee from "../ui/BrandMarque";

const products = [
  {
    id: 1,
    name: "Premium Headphones",
    price: "$129.00",
    category: "Tech",
    image: "/assets/headphone.jpeg",
  },
  {
    id: 2,
    name: "Minimal Sneakers",
    price: "$89.00",
    category: "Men",
    image: "/assets/sneakers.jpeg",
  },
  {
    id: 3,
    name: "Elegant Handbag",
    price: "$149.00",
    category: "Women",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3",
  },
];

const categories = ["All", "Men", "Women", "Tech"];

export default function HeroSec() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [filtered, setFiltered] = useState(products);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (activeCategory === "All") {
      setFiltered(products);
    } else {
      setFiltered(products.filter((p) => p.category === activeCategory));
    }
    setIndex(0);
  }, [activeCategory]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % filtered.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [filtered]);

  const product = filtered[index];

  return (
    <section className="relative bg-background overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute -top-32 -right-32 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary-light blur-3xl opacity-30 rounded-full" />
      <div className="absolute -bottom-32 -left-32 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-primary-light blur-3xl opacity-20 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="w-full">

          {/* Badge */}
          <span className="inline-block text-xs sm:text-sm text-primary font-medium mb-4 tracking-wide">
            NEW COLLECTION 2026
          </span>

          {/* Heading */}
          <h1 className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
            font-bold leading-tight text-text-primary mb-6
          ">
            Discover Products That Elevate Your Style
          </h1>

          {/* Description */}
          <p className="text-text-secondary text-base sm:text-lg mb-8 max-w-md">
            Premium quality items crafted for modern living. Designed to enhance your lifestyle with elegance and performance.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
            <Link to="/shop">
              <button className="w-full sm:w-auto bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-xl shadow-lg transition">
                Shop Now
              </button>
            </Link>

            <button className="w-full sm:w-auto px-6 py-3 rounded-xl border border-border text-text-primary hover:bg-background-secondary transition">
              Explore
            </button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`
                  px-4 py-2 rounded-full text-sm transition
                  ${
                    activeCategory === cat
                      ? "bg-primary text-white"
                      : "bg-background-secondary text-text-secondary hover:bg-primary/10"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Trust */}
          <div className="flex flex-wrap gap-4 text-sm text-text-muted">
            <span>✔ Free Shipping</span>
            <span>✔ Secure Payment</span>
            <span>✔ 24/7 Support</span>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative flex justify-center">

          {/* Glow */}
          <div className="absolute w-[250px] sm:w-[300px] h-[250px] sm:h-[300px] bg-primary-light blur-2xl opacity-40 rounded-full" />

          {/* Back Card */}
          <div className="absolute top-6 left-6 sm:top-10 sm:left-10 w-[200px] sm:w-[260px] h-[260px] sm:h-[340px] bg-white/30 rounded-2xl blur-2xl" />

          {/* Main Card */}
          <div className="
            relative bg-background-card rounded-2xl shadow-2xl 
            p-5 sm:p-6 
            w-full max-w-[300px] sm:max-w-[360px] md:max-w-[420px]
            transform rotate-[-3deg] sm:rotate-[-6deg] 
            hover:rotate-0 transition duration-500
          ">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-xl mb-4 h-[200px] sm:h-[240px] w-full object-cover"
            />

            <h3 className="text-text-primary font-semibold">
              {product.name}
            </h3>

            <p className="text-text-secondary">{product.price}</p>
          </div>

          {/* Floating Card */}
          <div className="
            absolute bottom-[-20px] sm:bottom-[-30px] 
            right-4 sm:right-[10%]
            bg-background-card rounded-xl shadow-lg 
            p-3 sm:p-4 
            w-[140px] sm:w-[180px]
          ">
            <p className="text-xs sm:text-sm text-text-secondary">
              Now Trending
            </p>
            <p className="text-base sm:text-lg font-bold text-text-primary">
              {product.price}
            </p>
          </div>

          {/* Dots */}
          <div className="absolute -bottom-12 sm:-bottom-16 flex gap-2">
            {filtered.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === index ? "bg-primary scale-110" : "bg-border"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <BrandMarquee />
    </section>
  );
}