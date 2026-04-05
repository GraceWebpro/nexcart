import { flyToCart } from "../../utils/flyToCart";
import { useCart } from "../../context/CartContext";

export default function QuickView({ product, onClose }) {
    const { addToCart } = useCart();

    return (
      <div className="fixed inset-0 z-[99999] flex items-center justify-center">
  
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
        />
  
        {/* MODAL */}
        <div className="relative bg-white rounded-2xl p-6 w-[90%] max-w-3xl grid md:grid-cols-2 gap-6 shadow-xl">
  
          <img
            src={product.images?.[0]}
            alt={product.name}
            className="rounded-xl w-full h-[300px] object-cover"
          />
  
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-bold mb-2">
                {product.name}
              </h2>
  
              <p className="text-lg text-primary font-semibold mb-4">
                ₦{product.price.toLocaleString()}
              </p>
  
              <p className="text-text-secondary text-sm">
                Premium quality product designed for modern lifestyle.
              </p>
            </div>
  
            <button 
                onClick={(e) => {
                    flyToCart(e);
                    addToCart(product);
                }}
                className="mt-6 bg-primary text-white py-3 rounded-xl hover:bg-black/50 transition">
              Add to Cart
            </button>
          </div>
  
          <button
            onClick={onClose}
            className="absolute text-primary top-2 right-2 text-xl"
          >
            ✕
          </button>
        </div>
      </div>
    );
  }