import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard"; // Assuming you have a separate file for ProductCard

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://dinothink.vercel.app/api/products",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        // Assuming the response is an array of products
        setProducts(data);
      } catch (error) {
        setError("Error loading products");
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading products...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!isLoading && products.length > 0 && (
        <div>
          <h1 className="py-6 text-center text-3xl font-bold">Our Products</h1>
          <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.slice(0, 60).map((product) => {
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
