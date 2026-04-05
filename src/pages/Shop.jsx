import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import products from "../data/products";
import ProductCard from "../components/ui/ProductCard";
import QuickView from "../components/ui/QuickViewModal";

const Shop = ({ onAddToCart }) => {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("all");
  const [sort, setSort] = useState("default");

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
  // let filteredMeals = products.filter((p) => {
  //   const matchesCategory =
  //     active === "all" || p.category === active;

      

  //   const matchesSearch = p.name
  //     .toLowerCase()
  //     .includes(search.toLowerCase());

  //   return matchesCategory && matchesSearch;
  // });

  // Filtered and sorted products
let filteredProducts = products
.filter((p) => {
  // Category filter
  const matchesCategory = active === "all" || p.category === active;

  // Search filter
  const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());

  // Tab filter
  let matchesTab = true;
  if (activeTab === "bestseller") matchesTab = p.isBestSeller;
  else if (activeTab === "new") matchesTab = p.isNew;
  else if (activeTab === "sale") matchesTab = p.isSale;

  return matchesCategory && matchesSearch && matchesTab;
});

// Sorting
if (sort === "low") {
filteredProducts.sort((a, b) => a.price - b.price);
} else if (sort === "high") {
  filteredProducts.sort((a, b) => b.price - a.price);
} else if (sort === "rating") {
  filteredProducts.sort((a, b) => b.rating - a.rating);
}


  

  const tabs = [
    { label: "All", value: "all" },
    { label: "Best Sellers", value: "bestseller" },
    { label: "New", value: "new" },
    { label: "Sale", value: "sale" },
  ];



  // Sorting
  // if (sort === "low") {
  //   filteredMeals.sort((a, b) => a.price - b.price);
  // } else if (sort === "high") {
  //   filteredMeals.sort((a, b) => b.price - a.price);
  // } else if (sort === "rating") {
  //   filteredMeals.sort((a, b) => b.rating - a.rating);
  // }

  const productsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  return (
    <section className="py-24 px-6 bg-primary text-white mt-4">
      <Helmet>
        <title>Browse Meals | QuickBite</title>
        <meta
          name="description"
          content="Explore delicious meals available for fast delivery with the QuickBite food ordering template."
        />
      </Helmet>
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">
            Our Full products
          </h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Explore all available products
          </p>
        </div>


        <div className="max-w-xl mx-auto mb-8"> 
          <input 
            type="text" 
            placeholder="Search products..." 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            className="w-full px-6 py-3 rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/20 focus:outline-none focus:ring-2 focus:ring-primary" 
          /> 
        </div>

        {/* Filters */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">

          {/* Categories */}
          <div className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-5 py-2 rounded-full text-sm border transition whitespace-nowrap ${
                  activeTab === tab.value
                    ? "bg-background text-primary border-background"
                    : "border-border hover:bg-background-card hover:text-primary"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className="w-full sm:w-auto sm:self-end relative">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="
                px-5 py-3 rounded-xl
                bg-gray-100 dark:bg-white/10
                border border-white/20
                apearance-auto
                focus:outline-none focus:ring-2 focus:ring-primary
              "
            >
              <option value="default">Sort By</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>

        </div>

        
        {/* Grid */}
        
        {loading ? (
          <div>
            <div className="grid md:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="animate-pulse p-4 rounded-xl bg-gray-200 h-60"
                />
              ))}
            </div>
            <div className="animate-pulse">
              <div className="h-40 bg-gray-200 rounded-xl mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <div key={product.id} className="min-w-[220px]">
                <ProductCard
                  product={product}
                  onQuickView={() => setSelectedProduct(product)}
                />
              </div>
            ))}
          </div>

        )}

         {/* PAGINATION */}
         <div className="flex justify-center items-center gap-3 mt-20">

          {/* PREV */}

          <button
            onClick={() => {
              setCurrentPage((p) => Math.max(p - 1, 1))
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-full text-sm transition
              ${
                currentPage === 1
                  ? "bg-white/10 text-gray-500 opacity-40 pointer-events-none"
                  : "bg-white/10 text-white hover:bg-primary"
              }`}
          >
            Prev
          </button>

          {/* PAGE NUMBERS */}

          {Array.from({ length: totalPages }, (_, i) => (

            <button
              key={i}
              onClick={() => {
                setCurrentPage(i + 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className={`w-10 h-10 rounded-full text-sm transition
              ${
                currentPage === i + 1
                  ? "bg-white/10 text-white hover:bg-primary"
                  : "bg-primary text-white "
              }`}
            >
              {i + 1}
            </button>

          ))}

          {/* NEXT */}

          <button
            onClick={() => {
              setCurrentPage((p) => Math.min(p + 1, totalPages));
                window.scrollTo({ top: 0, behavior: "smooth" });

            }}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-full text-sm transition
              ${
                currentPage === totalPages
                  ? "bg-white/10 text-gray-500 cursor-not-allowed"
                  : "bg-white/10 text-white hover:bg-primary"
              }`}
          >
            Next
          </button>

          </div>

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
};

export default Shop;