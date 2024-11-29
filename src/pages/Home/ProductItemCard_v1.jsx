import React from "react";
import PropTypes from "prop-types";

function ProductCard({ product }) {
  // Render stars based on the rating value
  const renderStars = (rating) => {
    const totalStars = Math.round(rating);
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        xmlns="http://www.w3.org/2000/svg"
        fill={index < totalStars ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={`h-5 w-5 transition-colors duration-200 ${index < totalStars ? "text-yellow-400" : "text-gray-300"}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 17.27l5.18 3.73-1.64-6.91L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.85-1.64 6.91L12 17.27z"
        />
      </svg>
    ));
  };

  return (
    <div className="group relative mx-auto max-w-xs rounded-2xl bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Product Image Container */}
      <div className="relative overflow-hidden rounded-lg bg-blue-50 p-4 transition-colors duration-300 group-hover:bg-blue-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="mx-auto h-32 w-32 object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Product Details */}
      <div className="mt-4">
        {/* Product Name */}
        <h3 className="line-clamp-2 text-xl font-bold text-gray-800 transition-colors duration-200 group-hover:text-blue-600">
          {product.name}
        </h3>

        {/* Price and Rating */}
        <div className="mt-2 flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-900 transition-colors duration-200 group-hover:text-blue-700">
            ${(product.price / 100).toFixed(2)}
          </p>

          {/* Rating Section */}
          <div className="flex items-center space-x-1">
            {renderStars(product.rating.rate)}
            <span className="ml-2 text-sm text-gray-500">
              ({product.rating.rate.toFixed(1)})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// PropTypes validation
ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }).isRequired,
    stock: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ProductCard;
