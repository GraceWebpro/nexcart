import { useState } from "react";
import { Star, Minus, Plus } from "lucide-react";
import { useCart } from "../context/CartContext";
import ProductCard from "../components/ui/ProductCard";
import QuickView from "../components/ui/QuickViewModal";

export default function ProductPage({ product, relatedProducts = [] }) {
  const { addToCart } = useCart();

  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showSizeGuide, setShowSizeGuide] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    setActiveImage(color.images[0]);
    setSelectedSize(null);
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 pb-32 mt-16">

      <div className="grid lg:grid-cols-2 gap-12">

        {/* IMAGE */}
        <div>
          <div className="rounded-3xl overflow-hidden group">
            <img
              src={activeImage}
              className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-500"
            />
          </div>

          <div className="flex gap-3 mt-4">
            {(selectedColor?.images || product.images).map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(img)}
                className={`w-20 h-20 rounded-xl overflow-hidden border-2 ${
                  activeImage === img ? "border-primary" : ""
                }`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* INFO */}
        <div>

          <p className="text-primary text-sm">{product.category}</p>

          <h1 className="text-3xl font-bold mt-2">{product.name}</h1>

          <div className="flex items-center gap-2 mt-3">
            <div className="flex text-yellow-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-gray-400 text-sm">(120 reviews)</span>
          </div>

          <div className="mt-4 flex gap-4 items-center">
            <p className="text-2xl font-bold">
              ₦{product.price.toLocaleString()}
            </p>
            {product.oldPrice && (
              <span className="line-through text-gray-400">
                ₦{product.oldPrice.toLocaleString()}
              </span>
            )}
          </div>

          <p className="mt-6 text-gray-500">{product.description}</p>

          {/* COLORS */}
          {product.colors && (
            <div className="mt-6">
              <p className="mb-3 font-medium">Color</p>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => handleColorChange(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor?.name === color.name
                        ? "border-black"
                        : "border-gray-300"
                    }`}
                    style={{ backgroundColor: color.value }}
                  />
                ))}
              </div>
            </div>
          )}

          {/* SIZES */}
          {selectedColor?.sizes && (
            <div className="mt-6">

              <div className="flex justify-between mb-3">
                <p className="font-medium">Select Size</p>
                <button
                  onClick={() => setShowSizeGuide(true)}
                  className="text-sm text-primary underline"
                >
                  Size Guide
                </button>
              </div>

              <div className="grid grid-cols-4 gap-3">
                {selectedColor.sizes.map((size) => (
                  <button
                    key={size.label}
                    disabled={!size.inStock}
                    onClick={() => setSelectedSize(size.label)}
                    className={`
                      py-2 rounded-lg border text-sm
                      ${!size.inStock && "opacity-40"}
                      ${
                        selectedSize === size.label
                          ? "bg-primary text-white"
                          : "border-gray-300"
                      }
                    `}
                  >
                    {size.label}
                  </button>
                ))}
              </div>

            </div>
          )}

          {/* ADD TO CART */}
          <div className="mt-6 flex gap-4">

            <div className="flex items-center border rounded-xl">
            {/* <div className="flex items-center gap-2 mt-2 bg-gray-100 dark:bg-dark px-2 py-1 rounded-lg w-fit"> */}

              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="px-3">
                <Minus size={16} />
              </button>
              <span className="px-4">{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} className="px-3">
                <Plus size={16} />
              </button>
            </div>

            <button
              onClick={() => {
                // if (!selectedSize) return alert("Select size");
                addToCart({
                  ...product,
                  quantity,
                //   size: selectedSize,
                  color: selectedColor.name,
                });
              }}
              className="flex-1 bg-primary text-white py-3 rounded-xl"
            >
              Add to Cart
            </button>

          </div>

        </div>
      </div>

      {/* TABS */}
      <div className="mt-16">
        <div className="flex gap-6 border-b">
          {["description", "reviews"].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 ${activeTab === tab ? "border-b-2 border-primary" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-6">
          {activeTab === "description" && <p>{product.longDescription}</p>}
          {activeTab === "reviews" && <p>Reviews coming soon...</p>}
        </div>
      </div>

      {/* RELATED */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-6">People also bought</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map(p => (
            <div key={p.id} className="min-w-[220px] text-black">
             <ProductCard
               product={p}
               onQuickView={() => setSelectedProduct(p)}
             />
           </div>
          ))}
        </div>
      </div>

      {/* MOBILE BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t p-4 flex lg:hidden">
        <button className="w-full bg-primary text-white py-3 rounded-xl">
          Add to Cart
        </button>
      </div>

      {/* SIZE GUIDE MODAL */}
      {showSizeGuide && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl w-[90%] max-w-md">
            <button onClick={() => setShowSizeGuide(false)}>Close</button>
            <p className="mt-4">Size guide content here</p>
          </div>
        </div>
      )}


      {/* QUICK VIEW */}
      {selectedProduct && (
        <QuickView
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </section>
  );
}