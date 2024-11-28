import React from "react";
import PropTypes from "prop-types"; // Import PropTypes
import uiStyle from "./ProductItem.module.css";
import { Link } from "react-router-dom";
// import ProductImage from "./assets/product-image.png";
// import data from "../../MockingData";
import getAllProduct from "../../data/allProduct";
// import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// let fakeCache = {};

// async function fakeNetwork(key) {
//   if (!key) {
//     fakeCache = {};
//   }

//   if (fakeCache[key]) {
//     return;
//   }

//   fakeCache[key] = true;
//   return new Promise((res) => {
//     setTimeout(res, Math.random() * 800);
//   });
// }

// export async function loader({ params }) {
//   await fakeNetwork();
//   const product = data[params.itemId];
//   return { product };
// }

const ItemInfo = ({ product = {} }) => {
  // Comment
  if (!product) return <></>;
  const factorsForChildDevelopment = product.factors;
  const reviews = product.reviews;
  return (
    <>
      <div className="ml-14">
        {/* Page Title */}
        <h2 className="mt-4 text-2xl font-bold">{product?.ageGroup}</h2>
        {/* Breadcrumb Navigation - Path */}
        <p>{product?.breadcrumb}</p>
      </div>

      <div className="container mx-auto grid grid-cols-2 gap-10">
        {/* Product Image */}
        <div>
          <img
            src={product?.image}
            alt={product?.name}
            className="max-w-[700px] hover:scale-100"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-4">
          <div className="text-wrap">
            {/* <h3 className="font-bold text-green-600">{product?.stockStatus}</h3> */}
            {product?.stockStatus === 1 ? (
              <h3 className="font-bold text-green-600">In Stock</h3> // Green color for In Stock
            ) : product?.stockStatus === 0 ? (
              <h3 className="font-bold text-green-600">Out of Stock</h3> // Red color for Out of Stock
            ) : null}

            <div className="flex justify-between py-3">
              <h1 className="text-3xl font-bold">{product?.name}</h1>
              <Link to="#" className="text-red-500 hover:text-red-700">
                <p>Add to Wishlist</p>
              </Link>
            </div>

            <p>{product?.description}</p>

            {/* rating star - recommend tag */}
            <div className="mt-3 flex items-center">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <span
                    key={index}
                    className={`text-xl text-yellow-500 ${
                      index < product.rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    &#9733;
                  </span>
                ))}
              {product?.recommendationTag === 1 && (
                <span className="ml-3 rounded-full bg-yellow-100 px-3 py-1 font-bold text-yellow-600">
                  Recommend
                </span>
              )}
            </div>

            <div className="mt-3 flex justify-between">
              <p className="text-2xl font-semibold">{product?.price}</p>

              <div className="flex justify-between">
                <label
                  htmlFor="quantity"
                  className="mr-2 text-2xl font-semibold"
                >
                  Qty:&nbsp;
                </label>
                <input
                  defaultValue={1}
                  id="quantity"
                  type="number"
                  className="w-[80px] rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  min={1}
                  max={product?.quantity}
                  minLength={1}
                  maxLength={2}
                />
              </div>
            </div>
            <div className="flex justify-between gap-x-4 py-3">
              <button className="w-full rounded-full bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700">
                Add to Cart
              </button>
              <button className="flex w-full items-center justify-center rounded-full bg-indigo-600 py-3 font-semibold text-white hover:bg-indigo-700">
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
              <span className="mr-2 font-bold text-green-500">✓</span>{" "}
              Eco-friendly materials
            </p>
            <p className="flex items-center">
              <span className="mr-2 font-bold text-green-500">✓</span> Free
              shipping on orders over ฿20
            </p>
            <p className="flex items-center space-x-2">
              <span className="font-bold text-green-500">✓</span>
              <span>Secure payment</span>
            </p>

            {/* Factors for Child Development Section */}
            <div className="my-5">
              <h2 className="mb-4 text-xl font-semibold text-gray-800">
                Factors for Child Development
              </h2>
              <div className="flex justify-start space-x-6">
                {factorsForChildDevelopment.length > 0 &&
                  factorsForChildDevelopment.map((factor) => (
                    <div
                      key={factor.name}
                      className="min-w-[110px] max-w-[110px] text-center"
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
      <div className="bg-white p-8">
        <div className="mb-4 text-2xl font-bold">What Parents Are Saying</div>

        <div className="mb-4 flex items-center">
          <div className="flex items-center">
            {Array(5)
              .fill(0)
              .map((_, index) => (
                <span
                  key={index}
                  className={`text-2xl text-yellow-500 ${
                    index < product.rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  &#9733;
                </span>
              ))}
          </div>
          <span className="ml-2 font-semibold text-gray-700">
            4.5 out of 5 |
          </span>
          <span className="ml-2 font-semibold text-gray-700">
            {product?.reviewsCount} reviews
          </span>
        </div>

        {/* Review Star Distribution */}
        <div className="mb-6 space-y-1">
          {product?.starDistribution &&
            product?.starDistribution.map((star, index) => (
              <div key={index} className="flex items-center">
                <span className="w-16 font-medium text-gray-700">
                  {star.rating} Star
                </span>
                <div className="mx-2 h-2 w-full rounded-full bg-gray-200">
                  <div
                    className={`h-2 max-w-[100%] rounded-full bg-yellow-500`}
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
        <div className="mb-4 border-b border-yellow-400 pb-2 text-xl font-semibold">
          Review ({product?.reviewsCount})
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {reviews.map((review, index) => (
            <div key={index} className="rounded-lg bg-gray-50 p-4 shadow">
              <div className="mb-2 flex items-center">
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
                <span className="ml-2 text-sm text-gray-400">
                  {review.date}
                </span>
              </div>
              <div className="font-semibold">{review.reviewer}</div>
              <div className="text-sm text-gray-700">{review.title}</div>
              <p className="mt-2 text-sm text-gray-600">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const ProductItem = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProduct(); // Assuming this fetches and returns your products
        console.log(data[itemId].product);
        setProduct(data[itemId].product); // Update state with the fetched data (object with 'pid' as key)
      } catch (error) {
        setError("Error loading products");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (!itemId) return <></>;

  return (
    <div>
      {isLoading && <p>Loading products...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!isLoading && product && (
        <div>
          <ItemInfo product={product} />
        </div>
      )}
      {!isLoading && !product && <p>No products found.</p>}
    </div>
  );
};

// Prop types definition
ItemInfo.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    ageGroup: PropTypes.string.isRequired,
    breadcrumb: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    stockStatus: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    // recommendationTag: PropTypes.string.isRequired,
    reviewsCount: PropTypes.number.isRequired,
    starDistribution: PropTypes.arrayOf(
      PropTypes.shape({
        rating: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
      }),
    ).isRequired,
  }),
};

export default ProductItem;
