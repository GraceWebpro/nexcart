import React, { useState } from "react"
import { flyToCart } from "../../utils/flyToCart";
import { useCart } from "../../context/CartContext";

export default function ProductCard({ product, onQuickView }) {
    const { addToCart } = useCart();
    
  
    // add to cart
    const updateQty = (id, change) => {
      setCart(prev => ({
        ...prev,
        [id]: Math.max(0, (prev[id] || 0) + change),
      }))
    }

    return (
      <div className="group relative">
  
        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-2xl bg-background-card">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[260px] object-cover 
            group-hover:scale-105 transition duration-500"
          />
  
          {/* HOVER ACTIONS */}
          <div className="absolute inset-0 bg-black/40 opacity-0 
          group-hover:opacity-100 transition flex items-center justify-center gap-3">
  
            <button
              onClick={onQuickView}
              className="bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 transition"
            >
              Quick View
            </button>
  
            <button 
                onClick={(e) => {
                    flyToCart(e);
                    addToCart(product);
                }} 
                className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:scale-105 transition">
              Add to Cart
            </button>
          </div>
        </div>
  
        {/* INFO */}
        <div className="mt-4">
          <h3 className="text-background-card font-medium text-sm">
            {product.name}
          </h3>
  
          <p className="text-text-second text-sm mt-1">
            ₦{product.price.toLocaleString()}
          </p>
        </div>
      </div>
    );
  }