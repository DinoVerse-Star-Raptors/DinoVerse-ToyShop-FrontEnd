import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
// Assuming no CSS module is used for now
// import uiStyle from "./ProductItem.module.css";

const ItemInfo = ({ product = {} }) => {
  if (!product) return <></>;

  const reviews = product.reviews || [];
  const rating = product.rating?.rate || 0;
  const recommendationTag = product.recommended ? "Recommend" : null;

  return (
    <>
      <div className="ml-14">
        {/* Page Title */}
        <h2 className="mt-4 text-2xl font-bold">{product?.ageGroup}</h2>
        {/* Breadcrumb Navigation - Path */}
        <p>
          <a href="/exam-home" className="text-blue-500 hover:underline">
            Home
          </a>{" "}
          /{" "}
          <a href="/exam-shop/age" className="text-blue-500 hover:underline">
            Age
          </a>{" "}
          /{" "}
          <a
            href={`/exam-shop/age/${product?.ageGroupTagHandle}`}
            className="text-blue-500 hover:underline"
          >
            {product?.ageGroup}
          </a>{" "}
          /{" "}
          <a
            href={`/products/${product?.handle}`}
            className="text-blue-500 hover:underline"
          >
            {product?.name}
          </a>{" "}
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-2 gap-10">
        {/* Product Image */}
        <div>
          <img
            src={product?.imageUrl}
            alt={product?.name}
            className="max-w-[700px] hover:scale-100"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-4">
          <div className="text-wrap">
            {product?.stock ? (
              <h3 className="font-bold text-green-600">In Stock</h3>
            ) : (
              <h3 className="font-bold text-red-600">Out of Stock</h3>
            )}

            <div className="flex justify-between py-3">
              <h1 className="text-3xl font-bold">{product?.name}</h1>
              <Link to="#" className="text-red-500 hover:text-red-700">
                <p>Add to Wishlist</p>
              </Link>
            </div>

            <p>{product?.description}</p>

            {/* Rating stars and recommend tag */}
            <div className="mt-3 flex items-center">
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <span
                    key={index}
                    className={`text-xl text-yellow-500 ${
                      index < rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  >
                    &#9733;
                  </span>
                ))}
              {recommendationTag && (
                <span className="ml-3 rounded-full bg-yellow-100 px-3 py-1 font-bold text-yellow-600">
                  Recommend
                </span>
              )}
            </div>

            <div className="mt-3 flex justify-between">
              <p className="text-2xl font-semibold">${product?.price}</p>

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
          </div>

          {/* Additional Info */}
          <div className="mt-4 text-gray-600">
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
                    index < rating ? "text-yellow-500" : "text-gray-300"
                  }`}
                >
                  &#9733;
                </span>
              ))}
          </div>
          <span className="ml-2 font-semibold text-gray-700">
            {rating} out of 5 | {reviews.length} reviews
          </span>
        </div>

        {/* Reviews */}
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
                  {new Date(review.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="font-semibold">{review.reviewer}</div>
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
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `https://dinothink.vercel.app/api/products/${itemId}`,
        );
        const productData = await response.json();

        // Check if the product exists and set the state
        if (productData) {
          setProduct(productData);
        } else {
          setError("Product not found.");
        }
      } catch (error) {
        setError("Error loading product.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return <ItemInfo product={product} />;
};

// PropTypes definition for ItemInfo
ItemInfo.propTypes = {
  product: PropTypes.shape({
    productId: PropTypes.string.isRequired,
    handle: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    stock: PropTypes.bool.isRequired,
    quantity: PropTypes.number.isRequired,
    ageGroup: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    recommended: PropTypes.bool.isRequired,
    price: PropTypes.number.isRequired,
    isActive: PropTypes.bool.isRequired,
    rating: PropTypes.shape({
      rate: PropTypes.number.isRequired,
      count: PropTypes.number.isRequired,
    }),
    reviews: PropTypes.arrayOf(
      PropTypes.shape({
        reviewer: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
      }),
    ),
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default ProductItem;
