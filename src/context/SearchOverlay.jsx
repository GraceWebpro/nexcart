import { useState } from "react";
import products from "../data/products";
import { useNavigate } from "react-router-dom";

export default function SearchOverlay({ searchOpen, setSearchOpen }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      className={`fixed inset-0 z-50 bg-white/80 backdrop-blur-xl flex flex-col items-center pt-32 transition ${
        searchOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {/* CLOSE BUTTON */}
      <button
        onClick={() => setSearchOpen(false)}
        className="absolute top-6 right-6 text-2xl text-text-secondary hover:text-text-primary"
      >
        ✕
      </button>

      {/* SEARCH BOX */}
      <div className="w-full max-w-2xl px-6">
        <div className="relative">
          
          <div className="flex items-center border border-border rounded-2xl px-5 py-4 bg-white shadow-xl">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for products..."
              className="w-full outline-none text-lg text-text-primary"
            />
          </div>

          {/* 🔍 RESULTS */}
          {query && (
            <div className="absolute top-full left-0 w-full bg-white border border-border rounded-2xl shadow-xl mt-3 max-h-80 overflow-y-auto">
              
              {filtered.length > 0 ? (
                filtered.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => navigate(`/product/${item.slug}`)}
                    className="flex items-center gap-4 p-4 hover:bg-background-secondary cursor-pointer transition"
                  >
                    <img
                      src={item.image}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div>
                      <p className="text-text-primary font-medium">
                        {item.name}
                      </p>
                      <p className="text-sm text-text-secondary">
                        ${item.price}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="p-4 text-text-secondary">
                  No results found
                </p>
              )}
            </div>
          )}
        </div>

        {/* ✨ EMPTY STATE (VERY IMPORTANT) */}
        {!query && (
          <div className="mt-10 text-center">
            <p className="text-text-secondary mb-4">
              Popular searches
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {["Headphones", "Sneakers", "Bags"].map((item) => (
                <button
                  key={item}
                  onClick={() => setQuery(item)}
                  className="px-4 py-2 rounded-full border border-border text-sm hover:bg-background-secondary transition"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}