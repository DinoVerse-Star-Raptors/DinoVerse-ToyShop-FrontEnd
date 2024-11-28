import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext"; // Assuming you are using this context
import ProductImage from "./assets/product-image.png"; // Assuming this image exists
// import Cookies from "js-cookie";
// import axiosInstance from "../../services/axiosInstance"; // Import axiosInstance

const Cart = () => {
  const { removeFromCart, addToCart, clearCart, user, getCart } = useAuth(); // Get getCart from context
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Fetch cart data from context when the user is logged in
  useEffect(() => {
    if (user) {
      const fetchedCart = getCart(); // Get the current cart from context
      setCart(fetchedCart); // Set the cart from context to local state
    }
  }, [user, getCart]); // Re-run when user or getCart changes

  // Calculate the total price based on cart items
  useEffect(() => {
    const subtotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    setTotalPrice(subtotal);
  }, [cart]);

  // Handle item quantity change
  const handleQuantityChange = async (item, increment) => {
    const updatedQuantity = item.quantity + (increment ? 1 : -1);
    if (updatedQuantity <= 0) {
      await removeFromCart(item.id); // Remove item if quantity is 0 or less
    } else {
      await addToCart({ ...item, quantity: updatedQuantity }); // Update item quantity
    }
  };

  // Handle remove item action
  const handleRemoveItem = async (itemId) => {
    await removeFromCart(itemId);
    setCart(cart.filter((item) => item.id !== itemId)); // Update cart state
  };

  // Handle clear cart action
  const handleClearCart = async () => {
    await clearCart(); // Clear cart on the server
    setCart([]); // Clear local cart state
  };

  // Shipping Fee (unchanged)
  const shippingFee = 20;

  // Final total with shipping
  const finalTotal = totalPrice + shippingFee;

  // If the cart is empty, show an empty cart message
  if (cart.length === 0) {
    return (
      <div className="flex min-h-[200px] items-center justify-center">
        <p className="text-xl">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-screen-xl px-6 py-8">
      <h1 className="mb-8 text-center text-3xl font-bold">Your Cart</h1>

      {/* Cart Container */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Left Section - Cart Items */}
        <div className="col-span-2">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-gray-300 py-6"
            >
              <img
                src={ProductImage}
                alt={item.name}
                className="h-20 w-20 object-cover"
              />
              <div className="mx-4 flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="mb-2 text-sm text-gray-600">{item.description}</p>
                <div className="flex items-center gap-4">
                  <p className="text-gray-700">Qty:</p>
                  <button
                    className="rounded-md border border-gray-300 bg-gray-100 px-3 py-1"
                    onClick={() => handleQuantityChange(item, false)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button
                    className="rounded-md border border-gray-300 bg-gray-100 px-3 py-1"
                    onClick={() => handleQuantityChange(item, true)}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-lg font-semibold text-pink-600">
                  ฿{item.price * item.quantity}
                </span>
                <button
                  className="mt-2 text-sm text-red-500"
                  onClick={() => handleRemoveItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section - Order Summary */}
        <div className="rounded-lg bg-gray-50 p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-semibold">Order Summary</h2>

          {/* Subtotal */}
          <div className="flex justify-between py-2">
            <span className="font-medium">Subtotal</span>
            <span>฿{totalPrice}</span>
          </div>

          {/* Shipping Fee */}
          <div className="flex justify-between py-2">
            <span className="font-medium">Shipping Fee</span>
            <span>฿{shippingFee}</span>
          </div>

          {/* Total */}
          <div className="my-6 flex justify-between border-t border-gray-300 pt-4 text-lg font-semibold">
            <span>Total</span>
            <span>฿{finalTotal}</span>
          </div>

          {/* Buttons */}
          <button className="mb-4 w-full rounded-md bg-pink-600 py-3 font-semibold text-white transition-colors hover:bg-pink-700">
            Checkout
          </button>

          <button
            className="w-full rounded-md bg-red-500 py-3 font-semibold text-white transition-colors hover:bg-red-600"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
