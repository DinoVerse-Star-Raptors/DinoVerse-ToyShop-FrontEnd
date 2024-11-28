import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Assuming you are using this context
import axios from "axios";

const ProductItem = () => {
  const { itemId } = useParams();
  const { addToCart } = useAuth(); // Use the context to access addToCart
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://dinothink.vercel.app/api/products/${itemId}`,
        );
        setProduct(response.data);
      } catch (error) {
        setError("Error loading product.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [itemId]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity); // Add product to cart with selected quantity
    }
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className="container mx-auto grid grid-cols-2 gap-10">
      <div>
        <img
          src={product?.imageUrl}
          alt={product?.name}
          className="max-w-[700px]"
        />
      </div>
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-bold">{product?.name}</h1>
        <p>{product?.description}</p>
        <p>Price: ฿{product?.price}</p>

        <div className="flex justify-between">
          <label htmlFor="quantity">Qty: </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            max={product?.quantity}
            className="w-[80px] rounded-md border border-gray-300 p-2"
          />
        </div>

        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 py-3 font-semibold text-white hover:bg-blue-700"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.shape({
    productId: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    imageUrl: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};

export default ProductItem;
