"use client";
import { Search, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import products from "../data/products";
import { useRouter } from "next/navigation";

export const SearchBar = ({ onSearchResults = () => {}, className }) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const router = useRouter();
  // Combine all products from collection files
  const allProducts = products;

  // Search function
  const searchProducts = (searchQuery) => {
    const lowercaseQuery = searchQuery.toLowerCase().trim();
    if (!lowercaseQuery) return allProducts;

    return allProducts.filter((product) => {
      const name = product.name?.toLowerCase() || "";
      const description = product.description?.toLowerCase() || "";
      const category = product.category?.toLowerCase() || "";
      return (
        name.includes(lowercaseQuery) ||
        description.includes(lowercaseQuery) ||
        category.includes(lowercaseQuery)
      );
    });
  };

  useEffect(() => {
    if (query.trim()) {
      const searchResults = searchProducts(query);
      setResults(searchResults);
      onSearchResults(searchResults, query);
    } else {
      onSearchResults([], "");
    }
  }, [query]);

  const handleSearchClick = () => {
    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  const handleClose = () => {
    setIsOpen(false);
    setQuery("");
    onSearchResults([], "");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      handleClose();
    }
  };

  if (!isOpen) {
    return (
      <button
        onClick={handleSearchClick}
        className={`p-2 rounded-md hover:text-pink-600 cursor-pointer ${className}`}
        aria-label="Open search"
      >
        <Search className="h-5 w-5" />
      </button>
    );
  }

  return (
    <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 pt-20">
        <div className="mx-auto max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground " />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full h-14 pl-12 pr-12 text-lg border-2 rounded-md focus:border-pink-500 focus:outline-none shadow-lg"
            />
            <button
              onClick={handleClose}
              className="absolute right-2 top-1/2 h-10 w-10 -translate-y-1/2 hover:bg-pink-600  rounded-md transition-colors flex items-center justify-center"
              aria-label="Close search"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {query && (
            <div className="mt-6">
              <div className="text-sm text-muted-foreground mb-4">
                {results.length > 0
                  ? `Found ${results.length} result${
                      results.length === 1 ? "" : "s"
                    } for "${query}"`
                  : `No results found for "${query}"`}
              </div>

              {results.length > 0 && (
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {results.slice(0, 8).map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-4 p-4 bg-card rounded-lg border hover:shadow-product transition-shadow cursor-pointer"
                      onClick={() => {
                        // Here you would navigate to the product page
                        router.push(
                          `/collection/${product.category}/${product.id}`
                        );
                        handleClose();
                      }}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-16 w-16 rounded-lg object-cover bg-muted"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-foreground">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {product.category}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="font-medium">{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
