import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation
import PropTypes from "prop-types";

const ItemCard = ({ product }) => {
  const {
    productId,
    imageUrl,
    name,
    price,
    rating,
    stock,
    quantity,
    recommended,
  } = product;

  // Determine stock status based on 'stock' and 'quantity'
  const stockStatus = stock && quantity > 0 ? 1 : 0; // 1 for In Stock, 0 for Out of Stock
  const recommendationTag = recommended ? 1 : 0; // 1 for recommended, 0 for not

  return (
    <div className="transform overflow-hidden rounded-lg border border-gray-300 bg-white shadow-md transition-transform hover:translate-y-[-10px]">
      {/* Link to product detail page */}
      <Link to={`/item/${productId}`} className="block">
        <img
          src={imageUrl || "https://via.placeholder.com/150"} // Placeholder if no image
          alt={name}
          className="h-80 w-full border-b border-gray-300 object-cover"
        />
      </Link>
      <div className="p-4" title={`${name}`}>
        {/* Product Name with Link */}
        <Link
          to={`/item/${productId}`}
          className="mb-2 line-clamp-1 text-xl font-semibold text-gray-900 hover:text-blue-600"
        >
          {name}
        </Link>
        <div className="mb-2 text-yellow-500">
          Rating: {rating.rate.toFixed(1)} / 5 ({rating.count} reviews)
        </div>
        <div className="mb-2 text-lg font-bold text-gray-900">${price}</div>
        {stockStatus === 1 ? (
          <div className="text-sm text-green-600">In Stock</div> // Green color for In Stock
        ) : stockStatus === 0 ? (
          <div className="text-sm text-red-600">Out of Stock</div> // Red color for Out of Stock
        ) : null}
        {recommendationTag === 1 && (
          <span className="mt-2 inline-block rounded-md bg-yellow-400 px-3 py-1 text-sm font-semibold text-gray-800">
            Recommended
          </span>
        )}
      </div>
    </div>
  );
};

// Define PropTypes for the `ItemCard` component
ItemCard.propTypes = {
  product: PropTypes.shape({
    productId: PropTypes.string.isRequired, // Product ID (string, required)
    name: PropTypes.string.isRequired, // Product Name (string, required)
    imageUrl: PropTypes.string, // Product Image URL (string, optional)
    price: PropTypes.number.isRequired, // Product Price (number, required)
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired, // Rating value (number, required)
      count: PropTypes.number.isRequired, // Review count (number, required)
    }).isRequired, // Rating is an object with 'rate' and 'count' (required)
    stock: PropTypes.bool.isRequired, // In stock status (boolean, required)
    quantity: PropTypes.number.isRequired, // Product quantity (number, required)
    recommended: PropTypes.bool, // Whether the product is recommended (boolean, optional)
  }).isRequired, // The product prop must be an object and is required
};

export default ItemCard;
