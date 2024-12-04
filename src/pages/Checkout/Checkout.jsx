// Checkout.js
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import AddressSelection from "./AddressSelection";
import AddressForm from "./AddressForm"; // Import the AddressForm component
import AddressList from "./AddressList"; // Import the AddressForm component

const Checkout = () => {
  const navigate = useNavigate();
  const { user, getCart } = useAuth();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [shippingAddress, setShippingAddress] = useState(null); // Store the address state
  const shippingFee = 20;
  const [showAddress, setShowAddress] = useState(false); // Store selected address
  const [showAddressForm, setShowAddressForm] = useState(true); // Store selected address
  const [showAddressList, setShowAddressList] = useState(false); // Whether to show AddressList or AddressForm

  // Calculate the total price
  const calculateTotal = (cart) => {
    const subtotal = cart.reduce(
      (acc, item) => acc + Number(item?.product?.price) * Number(item.quantity),
      0,
    );
    return subtotal + shippingFee;
  };

  useEffect(() => {
    if (user) {
      const fetchCart = async () => {
        setLoading(true);
        setError("");
        try {
          const fetchedCart = await getCart();
          const selectedItems =
            JSON.parse(localStorage.getItem("selectedItems")) || {};
          const filteredCart = fetchedCart.filter(
            (item) => selectedItems[item?.product?._id] === true,
          );
          setCart(filteredCart);
        } catch (error) {
          setError("Failed to load your cart. Please try again.");
          console.error("Error fetching cart:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchCart();
    }
  }, [user, getCart]);

  // Handle checkout process
  const handleCheckout = async () => {
    if (!shippingAddress) {
      setError("Please provide a shipping address.");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("/api/orders", {
        userId: user.id,
        items: cart,
        shippingFee,
        totalAmount: calculateTotal(cart),
        shippingAddress, // Include the shipping address in the order
      });

      if (response.status === 200) {
        navigate("/payment");
      } else {
        setError("Order creation failed. Please try again.");
        console.error("Failed to create order");
      }
    } catch (error) {
      setError("Error during checkout. Please try again.");
      console.error("Error during checkout:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddressForm = () => {
    setShowAddress(false);
    setShowAddressList(false);
    setShowAddressForm(true);
    console.log("handleAddressForm:");
  };

  const handleUseDefault = () => {
    console.log("Use default address");
    setShowAddressForm(false);
    setShowAddressList(false);
    setShowAddress(true);
  };

  const handleOtherAddress = () => {
    setShowAddress(false);
    setShowAddressForm(false);
    setShowAddressList(true);
    console.log("Select other address");
  };

  // Handle selecting an address from the AddressList
  const handleAddAddress = (address) => {
    setShippingAddress(address);
    setShowAddressList(false); // Close AddressList after selection
  };

  return (
    <div className="mx-auto flex min-h-screen w-full flex-col items-center px-4 py-8">
      <h1 className="mb-6 text-3xl font-bold text-gray-800">Checkout</h1>

      <AddressSelection
        onAddressForm={handleAddressForm}
        onUseDefault={handleUseDefault}
        onOtherAddress={handleOtherAddress}
      />

      <div className="flex w-full">
        {/* Address Form Section */}
        <div className="w-[60%] p-6">
          {/* Render the AddressForm component here */}
          {showAddressForm && <AddressForm onSubmit={handleAddAddress} />}
          {showAddressList && <AddressList />}
          {showAddress && <p>-</p>}
        </div>

        {/* Order Summary Section */}
        <div className="min-h-svh w-[40%] rounded-lg bg-gray-100 p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">
            Order Summary
          </h2>

          {error && <div className="mb-4 text-red-500">{error}</div>}
          <div className="mb-6 space-y-4">Show Addr</div>
          <hr />
          <div className="mb-6 mt-6 space-y-4">
            {loading ? (
              <p className="text-center text-gray-500">Loading cart...</p>
            ) : cart.length > 0 ? (
              cart.map((item, index) => (
                <div
                  title={item?.product?.name}
                  key={index}
                  className="flex justify-between text-lg text-gray-600"
                >
                  <span className="block w-[260px] max-w-[260px] overflow-hidden text-ellipsis whitespace-nowrap">
                    {item?.product?.name}
                  </span>
                  <span>(x{item.quantity})</span>
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
            <span>${calculateTotal(cart)}</span>
          </div>

          <div className="space-y-4">
            <button
              onClick={handleCheckout}
              className="mb-4 w-full rounded-lg bg-blue-600 py-3 text-lg font-semibold text-white shadow-md transition-colors hover:bg-blue-700 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Processing..." : "Proceed to Payment"}
            </button>

            <Link to="/cart" className="text-blue-600 hover:text-blue-700">
              <button className="w-full rounded-lg border-2 border-blue-600 py-3 font-semibold text-blue-600 transition-colors">
                Go back to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
