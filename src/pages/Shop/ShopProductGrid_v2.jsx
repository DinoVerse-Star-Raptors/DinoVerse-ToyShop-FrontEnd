import React, { useEffect, useState } from "react";
import ProductCard from "./ShopProductCard"; // Import ProductCard component
import axiosInstance from "../../services/axiosInstance"; // Import axiosInstance

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("rating"); // State for selected sorting option

  // Fetch products from API using axiosInstance
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axiosInstance.get("/api/products"); // Make the GET request to the products endpoint
        const filteredProducts = response.data.filter(
          (product) => product.recommended === true,
        ); // Filter recommended products

        // Sort products based on selected criteria
        const sortedProducts = sortProducts(filteredProducts);
        setProducts(sortedProducts); // Set sorted products
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching products:", error); // Log any errors
        setLoading(false); // Set loading to false in case of an error
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
  const handleSortChange = (event) => {
    setSortBy(event.target.value); // Update sort criteria
  };

  return (
    <div className="pt-4">
      {/* Sorting Dropdown */}
      <div className="mb-4">
        <label htmlFor="sort" className="mb-2 block text-lg font-medium">
          Sort By:
        </label>
        <select
          id="sort"
          value={sortBy}
          onChange={handleSortChange}
          className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="rating">Rating (Highest to Lowest)</option>
          <option value="priceLowToHigh">Price (Low to High)</option>
          <option value="priceHighToLow">Price (High to Low)</option>
        </select>
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
              bgColors={bgColors[index]}
              borderColor={borderColors[index]} // Dynamically assign the border color based on index
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductGrid;
