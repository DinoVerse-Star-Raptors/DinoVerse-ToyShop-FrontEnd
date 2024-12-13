import React, { useState, useEffect } from "react";
import { Search, ShoppingCart, Menu, User, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Adjust the path as needed
import logo from "./assets/images/DinoVerse-logo.png";
import uiStyle from "./Layout.module.css";
import axiosInstance from "../../services/axiosInstance"; // Import axiosInstance

export default function Navbar() {
  const { user, cart } = useAuth(); // Access user and cart from the context
  const cartItemCount = cart.length;
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [products, setProducts] = useState([]);

  // Fetch products from the API on component mount
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // Function to toggle search modal
  const toggleSearchModal = () => {
    setSearchOpen(!isSearchOpen);
    setSearchQuery(""); // Clear search query on close
    setSearchResults([]); // Clear search results on close
  };

  // Function to handle search query
  const handleSearch = (query) => {
    setSearchQuery(query);
    const lowercasedQuery = query.toLowerCase();
    const filteredResults = products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowercasedQuery) ||
        product.description.toLowerCase().includes(lowercasedQuery) ||
        product.tags.some((tag) => tag.toLowerCase().includes(lowercasedQuery)),
    );
    setSearchResults(filteredResults);
  };

  return (
    <header className="flex max-h-16 justify-center bg-white shadow-sm">
      <nav className="flex w-full max-w-[1440px] items-center justify-between px-4 py-2">
        <Link
          to="/"
          className="flex min-w-[240px] grow-0 items-center space-x-2"
        >
          <img
            src={logo}
            alt="Logo"
            width={149}
            height={33}
            className="max-h-[33px]"
          />
        </Link>

        <div className="hidden min-h-[19px] w-full min-w-[360px] max-w-[360px] items-center justify-between lg:flex">
          <Link to="/" className="text-black hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="text-black hover:text-gray-900">
            About
          </Link>
          <a href="/shop" className="text-black hover:text-gray-900">
            Toys
          </a>
          <a href="/shop?tag=age" className="text-black hover:text-gray-900">
            Age
          </a>
          <a href="#contactus" className="text-black hover:text-gray-900">
            Contact
          </a>
        </div>

        <div className="hidden lg:flex lg:grow" />

        <div className={`${uiStyle.nav_right}`}>
          <button
            onClick={toggleSearchModal}
            className="relative w-full min-w-[125px] rounded-lg border-2 py-1 pl-10 pr-4 shadow-sm hover:border-gray-400 focus:ring focus:ring-blue-300"
          >
            <input
              type="text"
              placeholder="Search"
              className="w-full cursor-pointer bg-transparent text-gray-700 placeholder-gray-400 focus:outline-none"
              readOnly
              value={searchQuery} // Display current search query
            />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
          </button>

          <Link to="/cart" className="relative">
            <ShoppingCart className="h-[24px] min-h-[24px] w-[24px] min-w-[24px] text-gray-600" />
            {cartItemCount > 0 && (
              <span className="absolute right-[-8px] top-[-8px] flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cartItemCount}
              </span>
            )}
          </Link>

          {user ? (
            <Link
              className="rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 px-3 py-2 text-sm font-medium text-white transition duration-150 ease-in-out hover:bg-indigo-700"
              to="/user"
            >
              <User className="h-5 w-5 text-white" />
            </Link>
          ) : (
            <Link
              className="rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 px-3 py-2 text-sm font-medium text-white transition duration-150 ease-in-out hover:bg-indigo-700"
              to="/login"
            >
              Login
            </Link>
          )}

          <Menu className="h-[36px] min-h-[36px] w-[36px] min-w-[36px] text-gray-600 lg:hidden" />
        </div>
      </nav>

      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-75">
          <div className="relative w-full max-w-4xl rounded-lg bg-white p-6 shadow-lg">
            <button
              onClick={toggleSearchModal}
              className="absolute right-4 top-4 text-gray-600 hover:text-gray-900"
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="mb-4 text-xl font-semibold text-gray-700">
              Search for Products
            </h2>
            <div className="relative mb-4">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
              <input
                type="search"
                autoFocus
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search for products, categories, etc."
                className="w-full rounded-full border px-12 py-3 text-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              />
            </div>
            <div className="max-h-80 overflow-y-auto">
              {searchResults.length > 0 ? (
                searchResults.map((product) => (
                  <Link
                    to={`/item/${product?.productId}`}
                    key={product.productId}
                    onClick={toggleSearchModal} // Clear search and close modal on click
                  >
                    <div
                      key={product.productId}
                      className="mb-2 flex items-start rounded-lg border p-4 hover:bg-gray-100"
                    >
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="mr-4 h-16 w-16 object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold">
                          {product.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-gray-500">No products found.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
