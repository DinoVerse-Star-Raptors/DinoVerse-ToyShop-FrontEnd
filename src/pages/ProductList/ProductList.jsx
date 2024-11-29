import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard"; // Assuming you have a separate file for ProductCard
// import axios from "axios";
import axiosInstance from "../../services/axiosInstance"; // Import axiosInstance

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/api/products");

        // Assuming the response contains an array of products
        setProducts(response.data);
      } catch (error) {
        setError("Error loading products");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures it only runs once after the initial render

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }
  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p style={{ color: "red", fontSize: "18px", fontWeight: "bold" }}>
          {error}
        </p>
      </div>
    );
  }

  return (
    <div>
      {/* {isLoading && <p>Loading products...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>} */}
      {!isLoading && products.length > 0 && (
        <div>
          <h1 className="py-6 text-center text-3xl font-bold">Our Products</h1>
          <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => {
              return <ItemCard key={product.productId} product={product} />;
            })}
          </div>
        </div>
      )}
      {!isLoading && products.length === 0 && <p>No products found.</p>}
    </div>
  );
};

export default ProductList;
