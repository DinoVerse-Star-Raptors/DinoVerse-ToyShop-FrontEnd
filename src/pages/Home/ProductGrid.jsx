import React, { useEffect, useState } from "react";
import ProductCard from "./ProductItemCard"; // Import ProductCard component
import axiosInstance from "../../services/axiosInstance"; // Import axiosInstance

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch products from API using axiosInstance
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axiosInstance.get("/api/products"); // Make the GET request to the products endpoint
        const filteredProducts = response.data
          .filter((product) => product.recommended === true) // Filter recommended products
          .sort((a, b) => b.rating.rate - a.rating.rate); // Sort by rating in descending order
        setProducts(filteredProducts.slice(0, 4)); // Limit to top 4 products
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching products:", error); // Log any errors
        setLoading(false); // Set loading to false in case of an error
      }
    }

    fetchProducts(); // Call the function to fetch products
  }, []);

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

  return (
    <div className="pt-4">
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 gap-x-8 md:grid-cols-4">
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
