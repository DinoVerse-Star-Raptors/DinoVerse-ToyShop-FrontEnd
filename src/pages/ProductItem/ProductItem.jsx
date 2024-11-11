import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import uiStyle from "./ProductItem.module.css";
import { Link } from "react-router-dom";
// import ProductImage from "./assets/product-image.png";
import data from "../../MockingData";
// MockingData.jsx;

const ItemInfo = ({
  product = {},
  reviews = [],
  factorsForChildDevelopment = [],
}) => {
  if (!product && !reviews && !factorsForChildDevelopment) return <></>;
  return (
    <>
      <div className="ml-14">
        {/* Page Title */}
        <h2 className="text-2xl font-bold mt-4">{product?.ageGroup}</h2>
        {/* Breadcrumb Navigation - Path */}
        <p>{product?.breadcrumb}</p>
      </div>

      <div className="container mx-auto grid grid-cols-2 gap-10">
        {/* Product Image */}
        <div>
          <img
            src={product?.image}
            alt={product?.name}
            className="hover:scale-125 max-w-[700px]"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-4">
          <div className="text-wrap">
            <h3 className="text-green-600 font-bold">{product?.stockStatus}</h3>

            <div className="flex justify-between py-3">
              <h1 className="text-3xl font-bold">{product?.name}</h1>
              <Link to="#">
                <p>Add to Wishlist</p>
              </Link>
            </div>

            <p>{product?.description}</p>

            {/* rating star - recommend tag */}
            <div className="flex items-center mt-3">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <span
                    key={index}
                    className={`text-yellow-500 text-xl ${
                      index < product.rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    &#9733;
                  </span>
                ))}
              <span className="bg-yellow-100 text-yellow-600 ml-3 px-3 py-1 rounded-full font-bold">
                {product?.recommendationTag}
              </span>
            </div>

            <div className="mt-3 flex justify-between">
              <p className="text-2xl font-semibold">{product?.price}</p>

              <div className="flex justify-between">
                <label
                  htmlFor="quantity"
                  className="text-2xl font-semibold mr-2"
                >
                  Qty:&nbsp;
                </label>
                <input
                  defaultValue={1}
                  id="quantity"
                  type="number"
                  className="w-[80px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
                  min={1}
                  max={product?.quantity}
                  minLength={1}
                  maxLength={2}
                />
              </div>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-full hover:bg-blue-700">
                Add to Cart
              </button>
              <button className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-full flex items-center justify-center hover:bg-indigo-700">
                Buy Now
              </button>
            </div>

            <Link
              to="#payment"
              className="hidden text-center text-gray-500 hover:text-gray-700"
            >
              More payment options
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-4 text-gray-600">
            {/* {product?.additionalInfo.map((info, index) => (
              <p key={index} className="flex items-center">
                <span className="text-green-500 font-bold mr-2">✓</span> {info}
              </p>
            ))} */}
            {/* <!-- Additional Info --> */}
            <p className="flex items-center">
              <span className="text-green-500 font-bold mr-2">✓</span>{" "}
              Eco-friendly materials
            </p>
            <p className="flex items-center">
              <span className="text-green-500 font-bold mr-2">✓</span> Free
              shipping on orders over ฿20
            </p>
            <p className="flex items-center space-x-2">
              <span className="text-green-500 font-bold">✓</span>
              <span>Secure payment</span>
            </p>

            {/* Factors for Child Development Section */}
            <div className="my-5">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Factors for Child Development
              </h2>
              <div className="flex space-x-6 justify-start">
                {factorsForChildDevelopment.map((factor) => (
                  <div
                    key={factor.name}
                    className="text-center min-w-[110px] max-w-[110px]"
                  >
                    <img
                      src={factor.icon}
                      alt={factor.name}
                      className={`mx-auto mb-2 ${uiStyle.Child_Image}`}
                    />
                    <p className="text-gray-600">{factor.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Review Section */}
      <div className="p-8 bg-white">
        <div className="text-2xl font-bold mb-4">What Parents Are Saying</div>

        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <span
                  key={index}
                  className={`text-yellow-500 text-2xl ${
                    index < product.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  &#9733;
                </span>
              ))}
          </div>
          <span className="ml-2 text-gray-700 font-semibold">
            4.5 out of 5 |
          </span>
          <span className="ml-2 text-gray-700 font-semibold">
            {product?.reviewsCount} reviews
          </span>
        </div>

        {/* Review Star Distribution */}
        <div className="space-y-1 mb-6">
          {product?.starDistribution.map((star, index) => (
            <div key={index} className="flex items-center">
              <span className="text-gray-700 font-medium w-16">
                {star.rating} Star
              </span>
              <div className="bg-gray-200 rounded-full w-full h-2 mx-2">
                <div
                  className={`bg-yellow-500 h-2 rounded-full max-w-[100%]`}
                  style={{
                    width: `${(star.count / product.reviewsCount) * 100}%`,
                  }}
                ></div>
              </div>
              <span className="text-gray-700">({star.count})</span>
            </div>
          ))}
        </div>

        {/* Reviews Header */}
        <div className="text-xl font-semibold mb-4 border-b border-yellow-400 pb-2">
          Review ({product?.reviewsCount})
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((review, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg shadow">
              <div className="flex items-center mb-2">
                {Array(5)
                  .fill(0)
                  .map((_, starIndex) => (
                    <span
                      key={starIndex}
                      className={`text-yellow-500 ${
                        starIndex < review.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }`}
                    >
                      &#9733;
                    </span>
                  ))}
                <span className="text-gray-400 ml-2 text-sm">
                  {review.date}
                </span>
              </div>
              <div className="font-semibold">{review.reviewer}</div>
              <div className="text-sm text-gray-700">{review.title}</div>
              <p className="text-gray-600 text-sm mt-2">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const ProductItem = () => {
  // const productData = {
  //   name: "Toy Train",
  //   ageGroup: "18M+",
  //   breadcrumb: "Home / Age / 18M+ / Toy Train",
  //   image: "./assets/product-image.png",
  //   stockStatus: "In Stock",
  //   description:
  //     "A fun and educational toy for children featuring a colorful train engine and a passenger car. It encourages imaginative play and helps develop motor skills.",
  //   rating: 5,
  //   price: "฿350.00",
  //   quantity: 1,
  //   recommendationTag: "Recommend",
  //   additionalInfo: [
  //     "Eco-friendly materials",
  //     "Free shipping on orders over ฿500",
  //     "Secure payment",
  //   ],
  //   reviewsCount: 11,
  //   starDistribution: [
  //     { rating: 5, count: 4 },
  //     { rating: 4, count: 5 },
  //     { rating: 3, count: 2 },
  //     { rating: 2, count: 0 },
  //     { rating: 1, count: 0 },
  //   ],
  // };
  const productData = data[0];

  const reviewsData = [
    {
      reviewer: "Erica",
      rating: 4,
      date: "03/10/2023",
      title: "Happy",
      comment:
        "My son enjoys playing with the train, but I have to say, the tracks don’t always stay connected when he pushes the train around too quickly. It can be a bit frustrating. It’s a good toy, but it might be better suited for gentle play or older kids.",
    },
    {
      reviewer: "Raelyn",
      rating: 5,
      date: "04/09/2023",
      title: "Wonderful Gift Idea",
      comment:
        "Bought this as a birthday gift for my nephew, and he loves it! The train set is bright and engaging, and it came in nice packaging, so it felt very special. It’s also safe, with rounded edges on the tracks and no small parts, which I appreciate. Great purchase!",
    },
  ];

  const factorsData = [
    {
      name: "Motor Skills",
      icon: "../assets/icon-ChildDevelopment-GrossMotor.png",
    },
    {
      name: "Concentration",
      icon: "../assets/icon-ChildDevelopment-Concentration.png",
    },
    {
      name: "Imagination",
      icon: "../assets/icon-ChildDevelopment-Imagination.png",
    },
    {
      name: "Creativity",
      icon: "../assets/icon-ChildDevelopment-Creative.png",
    },
    {
      name: "Coordination",
      icon: "../assets/icon-ChildDevelopment-Coordination.png",
    },
  ];

  return (
    <>
      <ItemInfo
        product={productData}
        reviews={reviewsData}
        factorsForChildDevelopment={factorsData}
      />
    </>
  );
};

// Prop types definition
ItemInfo.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ageGroup: PropTypes.string.isRequired,
    breadcrumb: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stockStatus: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    recommendationTag: PropTypes.string.isRequired,
    additionalInfo: PropTypes.arrayOf(PropTypes.string).isRequired,
    reviewsCount: PropTypes.number.isRequired,
    starDistribution: PropTypes.arrayOf(
      PropTypes.shape({
        rating: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
      })
    ).isRequired,
  }),
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      reviewer: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
    })
  ),
  factorsForChildDevelopment: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ),
};

// // Default props (optional)
// ItemInfo.defaultProps = {
//   reviews: [],
//   factorsForChildDevelopment: [],
// };

export default ProductItem;
