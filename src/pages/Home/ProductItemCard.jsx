import React from "react";
import PropTypes from "prop-types";

function ProductCard({ product }) {
  // Function to render the star rating
  const renderStars = (rating) => {
    const stars = Math.round(rating);
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        fill={i < stars ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={`h-4 w-4 ${i < stars ? "text-yellow-500" : "text-gray-300"}`}
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
    <div className="overflow-hidden rounded-lg bg-white shadow-md">
      <div className="flex items-center justify-center bg-blue-50 p-0">
        {" "}
        {/* Changed to bg-blue-50 */}
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-contain"
        />
      </div>

      <div className="bg-blue-50 p-4">
        {" "}
        {/* Changed to bg-blue-50 */}
        <h3 className="mb-2 text-left text-lg font-semibold text-gray-800">
          {product.name}
        </h3>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ${(product.price / 100).toFixed(2)}
          </span>

          <div className="flex items-center">
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

// PropTypes remain the same as in the original component
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
