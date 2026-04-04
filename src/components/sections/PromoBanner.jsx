import { Link } from "react-router-dom";

export default function PromoBanner() {
    return (
      <section className="max-w-7xl mx-auto px-6 py-20 pb-4">
  
        <div className="relative rounded-3xl overflow-hidden p-10 md:p-16
        bg-[#0B0F1A] text-white">
  
          {/* SUBTLE GRADIENT OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-br 
          from-primary/30 via-transparent to-indigo-500/20" />
  
          {/* LIGHT GLOW */}
          <div className="absolute -top-32 -left-32 w-[400px] h-[400px] 
          bg-primary/20 rounded-full blur-3xl" />
  
          <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] 
          bg-indigo-500/20 rounded-full blur-3xl" />
  
          <div className="relative grid md:grid-cols-2 gap-12 items-center">
  
            {/* LEFT */}
            <div>
              <p className="text-white/60 text-xs tracking-[0.2em] uppercase mb-4">
                Limited Time Offer
              </p>
  
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                Summer Sale <br />
                <span className="text-primary">Up to 40% Off</span>
              </h2>
  
              <p className="text-white/70 mb-8 max-w-md">
                Discover premium products designed for modern living. 
                Elevate your style with exclusive discounts.
              </p>
  
              <div className="flex gap-4">
                <Link to='/shop'>
                  <button className="bg-white text-primary px-6 py-3 rounded-xl font-semibold 
                  hover:scale-105 transition">
                    Shop Now
                  </button>
                </Link>
  
                <button className="border border-white/20 px-6 py-3 rounded-xl 
                hover:bg-white/10 transition">
                  Explore Deals
                </button>
              </div>
            </div>
  
            {/* RIGHT (FLOATING PRODUCT) */}
            <div className="relative flex justify-center mb-4">
  
              {/* PRODUCT IMAGE FLOAT */}
              <div className="relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1511499767150-a48a237f0083"
                  alt=""
                  className="w-[300px] h-[300px] object-cover rounded-2xl 
                  shadow-[0_20px_80px_rgba(0,0,0,0.6)]"
                />
              </div>
  
              {/* PRICE CARD (FLOATING) */}
              <div className="absolute bottom-0 translate-y-1/2 
              bg-white z-20 text-black rounded-xl px-5 py-4 shadow-xl">
  
                <p className="text-sm opacity-60">
                  Special Price
                </p>
  
                <p className="font-bold text-lg">
                  ₦89,000
                </p>
              </div>
  
              {/* SOFT GLOW UNDER PRODUCT */}
              <div className="absolute w-[250px] h-[250px] 
              bg-primary/30 rounded-full blur-3xl opacity-40" />
  
            </div>
  
          </div>
  
        </div>
  
      </section>
    );
  }