import React, { useState } from "react"
import { flyToCart } from "../../utils/flyToCart";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product, onQuickView }) {
    const { addToCart } = useCart();
    const navigate = useNavigate();

    return (
      <div onClick={() => navigate(`/product/${product.slug}`)} className="group relative">
  
        {/* IMAGE */}
        <div className="relative overflow-hidden rounded-2xl bg-background-card group">

          {/* IMAGE */}
          <img
            src={product.images?.[0]}
            alt={product.name}
            className="w-full h-[240px] sm:h-[260px] object-cover 
            group-hover:scale-105 transition duration-500"
          />

          {/* GRADIENT FADE (for readability) */}
          <div className="
            absolute inset-x-0 bottom-0 h-32 
            bg-gradient-to-t from-black/70 to-transparent 
            opacity-0 group-hover:opacity-100 
            transition duration-300
          " />

          {/* 🔥 BOTTOM SLIDE ACTIONS */}
          <div className="
            absolute bottom-0 left-0 w-full
            translate-y-full group-hover:translate-y-0
            transition-transform duration-300
            px-3 pb-3
          ">

            <div className="
              flex flex-col sm:flex-row 
              gap-2 sm:gap-3
            ">

              <button
                  onClick={(e) => {
                    e.stopPropagation(); // STOP the Link from triggering
                    onQuickView(product); // pass product if needed
                  }}
                
                className="
                  w-full
                  bg-white text-black 
                  px-3 py-2 
                  rounded-lg text-xs sm:text-sm font-medium
                  hover:scale-[1.02] sm:hover:scale-105
                  transition
                "
              >
                Quick View
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation(); // STOP the Link from triggering
                  flyToCart(e);
                  addToCart(product);
                }}              
                className="
                  w-full
                  bg-primary text-white 
                  px-3 py-2 
                  rounded-lg text-xs sm:text-sm font-medium
                  hover:scale-[1.02] sm:hover:scale-105
                  transition
                "
              >
                Add to Cart
              </button>

            </div>
          </div>

        </div>
  
        {/* INFO */}
        <div className="mt-4">
          <h3 className="font-medium text-sm">
            {product.name}
          </h3>
  
          <p className="text-sm mt-1">
            ₦{product.price.toLocaleString()}
          </p>
        </div>
      </div>
    );
  }