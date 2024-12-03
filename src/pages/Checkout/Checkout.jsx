import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for programmatic navigation
import { useAuth } from "../../context/AuthContext"; // Assuming you have a context for authentication
import axios from "axios"; // Import axios for making API calls

const Checkout = () => {
  const navigate = useNavigate();
  const { user, getCart } = useAuth(); // Destructure user and getCart from the auth context

  const [cart, setCart] = useState([]); // Initialize cart state
  const shippingFee = 20; // Fixed shipping fee

  // Calculate the total price
  const calculateTotal = () => {
    const subtotal = cart.reduce(
      (acc, item) => acc + Number(item?.product?.price) * Number(item.quantity),
      0,
    );
    return subtotal + shippingFee;
  };

  // Fetch user's cart when the component mounts and when the user is available
  useEffect(() => {
    if (user) {
      const fetchCart = async () => {
        try {
          const fetchedCart = await getCart();
          // setCart(fetchedCart);
          // Retrieve selected items from localStorage
          const selectedItems =
            JSON.parse(localStorage.getItem("selectedItems")) || {};
          console.log(fetchedCart, selectedItems);
          // Filter the fetched cart items based on the selectedItems object
          const filteredCart = fetchedCart.filter(
            (item) => selectedItems[item?.product?._id] === true, // Only include items marked as true in selectedItems
          );

          setCart(filteredCart); // Update the state with the filtered cart
        } catch (error) {
          console.error("Failed to fetch cart", error);
        }
      };

      fetchCart(); // Fetch the cart when the user is available
    }
  }, [user, getCart]); // Dependency array includes user and getCart to re-run on changes

  // Handle checkout process
  const handleCheckout = async () => {
    try {
      // Send the cart details to your API (assuming the cart is properly populated)
      const response = await axios.post("/api/orders", {
        userId: user.id,
        items: cart,
        shippingFee,
        totalAmount: calculateTotal(),
      });

      if (response.status === 200) {
        // On successful order creation, redirect to the payment page
        navigate("/payment");
      } else {
        // Handle API error
        console.error("Failed to create order");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center bg-gray-50 p-4">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Checkout</h1>

      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold text-gray-700">
          Order Summary
        </h2>

        {/* Map through the cart items stored in state */}
        <div className="mb-6 space-y-4">
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between text-lg text-gray-600"
              >
                <span>
                  {item?.product?.name} (x{item.quantity})
                </span>
                <span>${item?.product?.price * item.quantity}</span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Your cart is empty</p>
          )}
        </div>

        <div className="mb-4 flex justify-between text-xl font-semibold text-gray-800">
          <span>Shipping</span>
          <span>${shippingFee}</span>
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
