import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext"; // Assuming you are using this context
import uiStyle from "./Cart.module.css";
import ProductImage from "./assets/product-image.png"; // Assuming this image exists

const Cart = () => {
  const { cart, removeFromCart, addToCart, clearCart } = useAuth();
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate the total price based on cart items
  useEffect(() => {
    const calculateTotal = () => {
      const subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0,
      );
      setTotalPrice(subtotal);
    };

    calculateTotal();
  }, [cart]); // Recalculate total whenever cart changes

  // Handle item quantity change
  const handleQuantityChange = (item, increment) => {
    const updatedItem = {
      ...item,
      quantity: item.quantity + (increment ? 1 : -1),
    };
    if (updatedItem.quantity <= 0) {
      removeFromCart(item.id); // Remove item if quantity is 0 or less
    } else {
      addToCart(updatedItem); // Update item quantity
    }
  };

  return (
    <div className="mx-14 flex justify-center gap-8">
      {/* Left Section - Product items in Cart */}
      <div className="w-3/4">
        <h1 className="py-8 text-2xl font-bold">Cart</h1>

        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="mb-6 flex">
              {/* item image */}
              <img
                src={ProductImage}
                alt={item.name}
                className={uiStyle.Product_Image}
              />

              {/* item details */}
              <div className="mx-4 text-pretty">
                {/* Title - Price */}
                <div className="flex justify-between pb-3">
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <h2 className="text-xl font-bold text-pink-600">
                    ฿{item.price}
                  </h2>
                </div>

                {/* Detail - Description */}
                <p className="pb-3">{item.description}</p>

                {/* Qty controls */}
                <div className="flex items-center gap-4">
                  <p>Qty:</p>
                  <button
                    className="border border-gray-100 bg-white px-2 py-1"
                    onClick={() => handleQuantityChange(item, false)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="border border-gray-100 bg-white px-2 py-1"
                    onClick={() => handleQuantityChange(item, true)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="mt-3 text-red-500"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Right Section - Order Summary */}
      <div className="w-1/4">
        <h1 className="py-8 text-2xl font-bold">Order Summary</h1>

        {/* Order Summary Details */}
        <div>
          <div className="flex justify-between">
            <h2>Subtotal</h2>
            <h2>฿{totalPrice}</h2>
          </div>
          <div className="flex justify-between">
            <h2>Discount</h2>
            <h2>-฿50</h2>
          </div>
          <div className="flex justify-between">
            <h2>Shipping Fee</h2>
            <h2>฿29</h2>
          </div>
        </div>

        {/* Order Summary Total */}
        <div className="my-6 flex justify-between">
          <h2>Total</h2>
          <h2 className="font-bold">฿{totalPrice - 50 + 29}</h2>
        </div>

        {/* CheckOut Button */}
        <button className="w-full border bg-white">CHECKOUT</button>

        {/* Clear Cart Button */}
        <button
          className="mt-4 w-full bg-red-500 text-white"
          onClick={clearCart}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
