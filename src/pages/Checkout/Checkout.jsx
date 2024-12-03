import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation

// Replace this with your actual logo
import reactLogo from "./assets/logo192.png";

const Checkout = () => {
  const navigate = useNavigate();

  const [orderSummary, setOrderSummary] = useState({
    items: [],
    shippingFee: 20, // Assuming a fixed shipping fee
  });

  // Calculate the total price
  const calculateTotal = () => {
    const subtotal = orderSummary.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    return subtotal + orderSummary.shippingFee;
  };

  // Effect to retrieve the cart items from localStorage when the component mounts
  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setOrderSummary((prev) => ({
      ...prev,
      items: cartItems,
    }));
  }, []);

  const handleCheckout = () => {
    // Redirect the user to a payment gateway or confirm the checkout process
    navigate("/payment");
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50 p-4">
      <div className="mb-8 flex justify-center">
        <Link to="/" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="h-16 w-16" alt="React logo" />
        </Link>
      </div>

      <h1 className="mb-6 text-3xl font-bold text-gray-800">Checkout</h1>

      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">
          Order Summary
        </h2>

        {/* Map through the cart items stored in localStorage */}
        <div className="mb-6 space-y-4">
          {orderSummary.items.length > 0 ? (
            orderSummary.items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between text-lg text-gray-600"
              >
                <span>
                  {item.name} (x{item.quantity})
                </span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Your cart is empty</p>
          )}
        </div>

        <div className="mb-4 flex justify-between text-xl font-semibold text-gray-800">
          <span>Shipping</span>
          <span>${orderSummary.shippingFee}</span>
        </div>

        <div className="mb-6 flex justify-between text-2xl font-bold text-gray-800">
          <span>Total</span>
          <span>${calculateTotal()}</span>
        </div>

        <div className="space-y-4">
          <button
            onClick={handleCheckout}
            className="w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-blue-700"
          >
            Proceed to Payment
          </button>

          <Link to="/cart" className="text-blue-600 hover:text-blue-700">
            <button className="w-full rounded-lg border-2 border-blue-600 py-3 font-semibold text-blue-600 transition-colors">
              Go back to Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
