// import React from "react";
// import { useState, useEffect } from "react";
// import getAllProduct from "../../data/allProduct";
// import ItemCard from "./ItemCard"; // Assuming you have a separate file for ProductCard
// // import { v4 as uuidv4 } from "uuid";

// const ProductList = () => {
//   const [products, setProducts] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data = await getAllProduct(); // Assuming this fetches and returns your products
//         setProducts(data); // Update state with the fetched data (object with 'pid' as key)
//       } catch (error) {
//         setError("Error loading products");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []);

//   return (
//     <div>
//       {isLoading && <p>Loading products...</p>}
//       {error && <p style={{ color: "red" }}>{error}</p>}
//       {!isLoading && Object.keys(products).length > 0 && (
//         <div>
//           <h1 className="py-6 text-center text-3xl font-bold">Our Products</h1>
//           <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//             {Object.keys(products).slice(0, 60).map((pid) => {
//               const product = products[pid].product;
//               return <ItemCard key={product.pid} product={product} />;
//             })}
//           </div>
//         </div>
//       )}
//       {!isLoading && Object.keys(products).length === 0 && (
//         <p>No products found.</p>
//       )}
//     </div>
//   );
// };

// export default ProductList;
