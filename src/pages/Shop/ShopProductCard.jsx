import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function ProductCard({ product, borderColor, bgColors }) {
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
        className={`h-5 w-5 p-[2px] ${i < stars ? "text-yellow-600" : "text-gray-200"}`}
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

  // Set the border color based on the borderColor prop
  const borderClass = `border-2 ${borderColor}`;

  return (
    <div
      className={`overflow-hidden ${borderClass} transform transition-transform duration-300 hover:translate-y-[-10px]`}
    >
      <div className="flex items-center justify-center bg-blue-50 p-0">
        {/* Changed to bg-blue-50 */}
        <Link to={`/item/${product?.productId}`}>
          {/* Wrap with Link */}
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-contain"
          />
        </Link>
      </div>

      <div
        className={`p-4 ${bgColors} ${borderClass} border-b-0 border-l-0 border-r-0`}
      >
        {/* Changed to bg-blue-50 */}
        <h3 className="mb-2 text-left text-lg font-semibold text-gray-800">
          <Link
            to={`/item/${product?.productId}`}
            className="block overflow-hidden text-ellipsis whitespace-nowrap"
          >
            {/* Apply text clamp to product name */}
            {product.name}
          </Link>
        </h3>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">
            ฿{product.price}
          </span>

          <div className="flex items-center">
            {renderStars(product.rating.rate)}
            {/* <span className="ml-2 text-sm text-gray-500">
              ({product.rating.rate.toFixed(1)})
            </span> */}
          </div>
        </div>
      </div>
    </div>
  );
}

// PropTypes remain the same as in the original component
ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired, // Ensure this is the product ID
    productId: PropTypes.string.isRequired,
    recommended: PropTypes.bool,
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
  borderColor: PropTypes.oneOf([
    "border-blue-400",
    "border-amber-400",
    "border-green-400",
    "border-pink-400",
  ]).isRequired, // Ensure the prop only takes these values
  bgColors: PropTypes.oneOf([
    "bg-blue-200",
    "bg-amber-200",
    "bg-green-200",
    "bg-pink-200",
  ]).isRequired, // Ensure the prop only takes these values
};

export default ProductCard;
