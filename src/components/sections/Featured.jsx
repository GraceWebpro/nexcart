import { useState } from "react";
import QuickView from "../ui/QuickViewModal";
import ProductCard from "../ui/ProductCard";
import { Link } from "react-router-dom";

export default function FeaturedProducts({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { label: "All", value: "all" },
    { label: "Best Sellers", value: "bestseller" },
    { label: "New", value: "new" },
    { label: "Sale", value: "sale" },
  ];

  const filteredProducts = products.filter((p) => {
    if (activeTab === "bestseller") return p.isBestSeller;
    if (activeTab === "new") return p.isNew;
    if (activeTab === "sale") return p.isSale;
    return true;
  });

  return (
    <section className="max-w-7xl bg-primary text-background-card mx-auto px-6 py-20">

      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold">
            Featured Products
          </h2>
          <p className=" mt-2">
            Handpicked products just for you
          </p>
        </div>

        {/* FILTER TABS */}
        <div className="flex gap-3 overflow-x-auto scrollbar-hide no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-4 py-2 rounded-full text-sm border transition whitespace-nowrap ${
                activeTab === tab.value
                  ? "bg-background text-primary border-background"
                  : "border-border hover:bg-background-card hover:text-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* MOBILE SWIPE */}
      <div className="flex md:hidden gap-4 overflow-x-auto pb-2 scrollbar-hide no-scrollbar">
        {filteredProducts.slice(0, 8).map((product) => (
          <div key={product.id} className="min-w-[220px]">
            <ProductCard
              product={product}
              onQuickView={() => setSelectedProduct(product)}
            />
          </div>
        ))}
      </div>

      {/* DESKTOP GRID */}
      <div className="hidden md:grid grid-cols-4 gap-6">
        {filteredProducts.slice(0, 8).map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickView={() => setSelectedProduct(product)}
          />
        ))}
      </div>

      {/* VIEW ALL */}
      <div className="mt-10 text-center">
        <Link to='/shop'>
          <button className="text-background-card font-medium hover:underline">
            View All Products →
          </button>
        </Link>
      </div>

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