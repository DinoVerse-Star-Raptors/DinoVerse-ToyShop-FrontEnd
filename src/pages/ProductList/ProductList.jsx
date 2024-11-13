import React from "react";
import PropTypes from "prop-types";
import prodMocking from "../../MockingData";
import { Link } from "react-router-dom"; // Import Link from React Router
// Adjust the import path if necessary
// import uiStyle from "./ProductList.module.css";
// import { Link } from "react-router-dom";
// import data from "../../MockingData";

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

// const ProductCard = ({ product = {} }) => {
//   const {
//     image,
//     name,
//     price,
//     rating,
//     stockStatus,
//     description,
//     recommendationTag,
//   } = product;

//   return (
//     <div className="bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden transition-transform transform hover:translate-y-[-10px]">
//       <img
//         src={image}
//         alt={name}
//         className="w-full h-48 object-cover border-b border-gray-300"
//       />
//       <div className="p-4">
//         <h3 className="text-xl font-semibold text-gray-900 mb-2">{name}</h3>
//         <p className="text-sm text-gray-600 mb-2">{description}</p>
//         <div className="text-yellow-500 mb-2">Rating: {rating} / 5</div>
//         <div className="font-bold text-lg text-gray-900 mb-2">${price}</div>
//         <div className="text-sm text-green-600">{stockStatus}</div>
//         {recommendationTag && (
//           <span className="bg-yellow-400 text-gray-800 text-sm font-semibold px-3 py-1 rounded-md mt-2 inline-block">
//             {recommendationTag}
//           </span>
//         )}
//       </div>
//     </div>
//   );
// };

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {prodMocking.map((product) => (
        <ProductCard key={product.pid} product={product} />
      ))}
    </div>
  );
};

const ProductList = () => {
  return (
    <div className="min-h-screen">
      <h1 className="py-6 text-center text-3xl font-bold">Our Products</h1>
      <ProductGrid />
      <div className="p-4 pt-2">AA</div>
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
