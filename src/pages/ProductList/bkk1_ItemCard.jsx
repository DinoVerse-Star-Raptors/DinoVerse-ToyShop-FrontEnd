import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import PropTypes from "prop-types";

const ItemCard = ({ product = {} }) => {
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
      <div className="p-4" title={`${name}`}>
        {/* Product Name with Link */}
        <Link
          to={`/item/${pid}`}
          className="mb-2 line-clamp-1 text-xl font-semibold text-gray-900 hover:text-blue-600"
        >
          {name}
        </Link>
        <p className="mb-2 hidden text-sm text-gray-600">{description}</p>
        <div className="mb-2 text-yellow-500">Rating: {rating} / 5</div>
        <div className="mb-2 text-lg font-bold text-gray-900">${price}</div>
        {stockStatus === 1 ? (
          <div className="text-sm text-green-600">In Stock</div> // Green color for In Stock
        ) : stockStatus === 0 ? (
          <div className="text-sm text-red-600">Out of Stock</div> // Red color for Out of Stock
        ) : null}
        {recommendationTag === 1 && (
          <span className="mt-2 inline-block rounded-md bg-yellow-400 px-3 py-1 text-sm font-semibold text-gray-800">
            Recommend
          </span>
        )}
      </div>
    </div>
  );
};

// Define PropTypes for the `ItemCard` component
ItemCard.propTypes = {
  product: PropTypes.shape({
    pid: PropTypes.string.isRequired, // Product ID (string, required)
    name: PropTypes.string.isRequired, // Product Name (string, required)
    image: PropTypes.string.isRequired, // Product Image (string, required)
    price: PropTypes.string.isRequired, // Product Price (string, required)
    rating: PropTypes.number.isRequired, // Product Rating (number, required)
    stockStatus: PropTypes.string.isRequired, // Stock Status (string, required)
    description: PropTypes.string.isRequired, // Product Description (string, required)
    recommendationTag: PropTypes.string, // Recommendation Tag (string, optional)
  }).isRequired, // The product prop must be an object and is required
};

export default ItemCard;
