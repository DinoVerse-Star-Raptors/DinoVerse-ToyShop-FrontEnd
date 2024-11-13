import React from "react";
import { useState, useEffect } from "react";
import Papa from "papaparse";
import PropTypes from "prop-types";
import prodMocking from "../../MockingData";
import { Link } from "react-router-dom"; // Import Link from React Router
// Adjust the import path if necessary
// import uiStyle from "./ProductList.module.css";
// import { Link } from "react-router-dom";
// import data from "../../MockingData";
// D:\DEV\Projects\dino\src\data\allProduct.jsx
import getAllProduct from "../../data/allProduct";

const ProductCard = ({ product }) => {
  const {
    pid,
    image,
    name,
    price,
    rating,
    stockStatus,
    description,
    recommendationTag,
  } = product;

  return (
    <div className="transform overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md transition-transform hover:translate-y-[-10px]">
      {/* Link to product detail page */}
      <Link to={`/item/${pid}`} className="block">
        <img
          src={image}
          alt={name}
          className="h-80 w-full border-b border-gray-300 object-cover"
        />
      </Link>
      <div className="p-4">
        {/* Product Name with Link */}
        <Link
          to={`/item/${pid}`}
          className="mb-2 text-xl font-semibold text-gray-900 hover:text-blue-600"
        >
          {name}
        </Link>
        <p className="mb-2 hidden text-sm text-gray-600">{description}</p>
        <div className="mb-2 text-yellow-500">Rating: {rating} / 5</div>
        <div className="mb-2 text-lg font-bold text-gray-900">${price}</div>
        <div className="text-sm text-green-600">{stockStatus}</div>
        {recommendationTag && (
          <span className="mt-2 inline-block rounded-md bg-yellow-400 px-3 py-1 text-sm font-semibold text-gray-800">
            {recommendationTag}
          </span>
        )}
      </div>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-6 p-4 sm:hidden sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {prodMocking.map((product) => (
        <ProductCard key={product.pid} product={product} />
      ))}
    </div>
  );
};

const CsvReader = () => {
  const [jsonData, setJsonData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // UseEffect to call getAllProduct and handle the result
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProduct(); // Call getAllProduct() to fetch and map the data
        if (data) {
          setJsonData(data); // Update state with the fetched data (object with 'pid' as key)
        }
      } catch (error) {
        setError("Error fetching product data: " + error.message); // Handle error
      } finally {
        setIsLoading(false); // End loading state
      }
    };

    fetchData();
  }, []); // Empty array means this effect runs once when the component mounts

  // Render the component
  return (
    <div className="csv-reader">
      <h1>CSV Data</h1>
      {isLoading && <p>Loading data...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      {!isLoading && Object.keys(jsonData).length > 0 && (
        <div>
          <h2>Products</h2>
          <ul>
            {Object.keys(jsonData).map((pid) => {
              const product = jsonData[pid].product;
              return (
                <li key={pid}>
                  <strong>{product.name}</strong>
                  <p>Price: {product.price}</p>
                  <p>Stock: {product.quantity} available</p>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {!isLoading && Object.keys(jsonData).length === 0 && (
        <p>No products found.</p>
      )}
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="min-h-screen">
      <h1 className="py-6 text-center text-3xl font-bold">Our Products</h1>
      <ProductGrid />
      <CsvReader />
      {/* {allProduct.length} */}
    </div>
  );
};

// Define prop types for the ProductCard component
ProductCard.propTypes = {
  product: PropTypes.shape({
    pid: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ageGroup: PropTypes.string.isRequired,
    breadcrumb: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    stockStatus: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    recommendationTag: PropTypes.string,
    reviewsCount: PropTypes.number.isRequired,
    starDistribution: PropTypes.arrayOf(PropTypes.number),
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        reviewer: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
      }),
    ),
    factors: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
      }),
    ),
  }).isRequired,
};

export default ProductList;
