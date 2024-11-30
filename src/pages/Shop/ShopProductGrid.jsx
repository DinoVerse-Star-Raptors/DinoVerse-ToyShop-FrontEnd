import React, { useEffect, useState } from "react";
import ProductCard from "./ShopProductCard"; // Import ProductCard component
import axiosInstance from "../../services/axiosInstance"; // Import axiosInstance
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("rating"); // State for selected sorting option

  // Fetch products from API using axiosInstance
  useEffect(() => {
    async function fetchProducts() {
      try {
        // Show loading toast notification
        toast.info("Loading products...", { autoClose: false });

        const response = await axiosInstance.get("/api/products"); // Make the GET request to the products endpoint
        const filteredProducts = response.data.filter((product) => product); // Filter recommended products

        // Sort products based on selected criteria
        const sortedProducts = sortProducts(filteredProducts);
        setProducts(sortedProducts); // Set sorted products
        setLoading(false); // Set loading to false once data is fetched

        // Close the loading toast notification when done
        toast.dismiss(); // Dismiss any active toast notifications
      } catch (error) {
        console.error("Error fetching products:", error); // Log any errors
        setLoading(false); // Set loading to false in case of an error
        // Show error toast notification
        toast.error("Failed to load products. Please try again.", {
          autoClose: 5000,
        });
      }
    }

    fetchProducts(); // Call the function to fetch products
  }, [sortBy]); // Re-fetch products when sortBy changes

  // Function to sort products based on selected sorting option
  const sortProducts = (products) => {
    if (sortBy === "rating") {
      return products.sort((a, b) => b.rating.rate - a.rating.rate); // Sort by rating in descending order
    }
    if (sortBy === "priceLowToHigh") {
      return products.sort((a, b) => a.price - b.price); // Sort by price in ascending order
    }
    if (sortBy === "priceHighToLow") {
      return products.sort((a, b) => b.price - a.price); // Sort by price in descending order
    }
    return products; // Default case (no sorting)
  };

  // Array to assign different border colors
  const borderColors = [
    "border-blue-400", // Card 1 border color
    "border-amber-400", // Card 2 border color
    "border-green-400", // Card 3 border color
    "border-pink-400", // Card 4 border color
  ];

  const bgColors = [
    "bg-blue-200", // Card 1 border color
    "bg-amber-200", // Card 2 border color
    "bg-green-200", // Card 3 border color
    "bg-pink-200", // Card 4 border color
  ];

  // Handle sorting option change
  const handleSortChange = (sortOption) => {
    setSortBy(sortOption); // Update sort criteria
  };

  return (
    <div className="pt-4">
      {/* Sorting Buttons (Inline) */}
      <div className="mb-4 flex space-x-4">
        <button
          onClick={() => handleSortChange("rating")}
          className={`rounded-md px-4 py-2 font-medium ${
            sortBy === "rating"
              ? "bg-indigo-500 text-white"
              : "border bg-white text-indigo-500"
          }`}
        >
          Rating (Highest to Lowest)
        </button>
        <button
          onClick={() => handleSortChange("priceLowToHigh")}
          className={`rounded-md px-4 py-2 font-medium ${
            sortBy === "priceLowToHigh"
              ? "bg-indigo-500 text-white"
              : "border bg-white text-indigo-500"
          }`}
        >
          Price (Low to High)
        </button>
        <button
          onClick={() => handleSortChange("priceHighToLow")}
          className={`rounded-md px-4 py-2 font-medium ${
            sortBy === "priceHighToLow"
              ? "bg-indigo-500 text-white"
              : "border bg-white text-indigo-500"
          }`}
        >
          Price (High to Low)
        </button>
      </div>

      {/* Loading or Displaying Products */}
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard
              key={product._id}
              product={product}
              bgColors={bgColors[index % 4]}
              borderColor={borderColors[index % 4]} // Dynamically assign the border color based on index
            />
          ))}
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default ProductGrid;
