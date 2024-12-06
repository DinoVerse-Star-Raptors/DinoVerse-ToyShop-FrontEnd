import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import AddressSelection from "./AddressSelection";
import AddressForm from "./AddressForm";
import AddressList from "./AddressList";
import AddressCard from "./AddressCard"; // Import the AddressCard component
import { toast, ToastContainer } from "react-toastify"; // Import Toastify

import "react-toastify/dist/ReactToastify.css"; // Import CSS for Toastify

const Checkout = () => {
  const navigate = useNavigate();
  const { user, getCart } = useAuth();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [shippingAddress, setShippingAddress] = useState(null); // Store the selected address
  const shippingFee = 20;
  const [showAddressForm, setShowAddressForm] = useState(true); // Store selected address form visibility
  const [showAddressList, setShowAddressList] = useState(false); // Whether to show AddressList or AddressForm
  const [showDefaultAddress, setShowDefaultAddress] = useState(false); // Whether to show default address

  const mockData = [
    {
      _id: "b",
      address: "456 Oak Rd",
      province: "Bangkok",
      country: "Thailand",
      zipcode: "10110",
      recipientFullName: "Jane Smith",
      recipientPhone: "0923456789",
      isDefault: false,
    },
    {
      _id: "c",
      address: "789 Pine Ave",
      province: "Chiang Mai",
      country: "Thailand",
      zipcode: "50200",
      recipientFullName: "Alice Brown",
      recipientPhone: "0819876543",
      isDefault: true, // This is the default address
    },
    {
      _id: "d",
      address: "101 Maple Blvd",
      province: "Phuket",
      country: "Thailand",
      zipcode: "83110",
      recipientFullName: "Bob White",
      recipientPhone: "0931234567",
      isDefault: false,
    },
    {
      _id: "e",
      address: "202 Birch St",
      province: "Khon Kaen",
      country: "Thailand",
      zipcode: "40000",
      recipientFullName: "Eve Green",
      recipientPhone: "0854567890",
      isDefault: false,
    },
    {
      _id: "f",
      address: "303 Cedar Ln",
      province: "Songkhla",
      country: "Thailand",
      zipcode: "90000",
      recipientFullName: "Chris Black",
      recipientPhone: "0876543210",
      isDefault: false,
    },
  ];

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
          setError("");
          toast.error("Failed to load your cart. Please try again."); // Error toast
          console.error("Error fetching cart:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchCart();
    }
  }, [user, getCart, shippingAddress]);

  const handleCheckout = async () => {
    if (!shippingAddress) {
      setError("Please provide a shipping address.");
      setError("");
      toast.error("Please provide a shipping address."); // Show error toast
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("/api/orders", {
        userId: user.userId,
        items: cart,
        shippingFee,
        totalAmount: calculateTotal(cart),
        shippingAddress, // Include the shipping address in the order
      });

      if (response.status === 200) {
        toast.success("Order successfully created!"); // Success toast
        navigate("/payment");
      } else {
        setError("Order creation failed. Please try again.");
        setError("");
        toast.error("Order creation failed. Please try again."); // Error toast
      }
    } catch (error) {
      setError("Error during checkout. Please try again.");
      setError("");
      toast.error("Error during checkout. Please try again."); // Error toast
      console.error("Error during checkout:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddressForm = () => {
    setShowAddressForm(true);
    setShowAddressList(false);
    setShowDefaultAddress(false);
  };

  const handleUseDefault = () => {
    const defaultAddress = mockData.find((address) => address.isDefault);

    if (defaultAddress) {
      setShippingAddress(defaultAddress); // Set the default address
      toast.info("Using default address."); // Toast for default address
    }

    setShowDefaultAddress(false);
    setShowAddressList(false);
    setShowAddressForm(true);
  };

  const handleOtherAddress = () => {
    setShowDefaultAddress(false);
    setShowAddressForm(false);
    setShowAddressList(true);
  };

  const handleAddAddress = (address) => {
    setShowAddressList(false);
    setShowDefaultAddress(false);
    setShowAddressForm(true);
    if (!address?._id) address._id = uuidv4();
    console.log("handleAddAddress", address);
    setShippingAddress(address);
    toast.success("Address added successfully!"); // Success toast on address added
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
        <div className="w-[60%] px-6">
          {showAddressForm && (
            <AddressForm
              onSubmit={handleAddAddress}
              selectedAddress={shippingAddress}
            />
          )}
          {showAddressList && (
            <AddressList
              onSelectAddress={handleAddAddress}
              selectedAddress={shippingAddress}
              AddressList={mockData}
            />
          )}
          {showDefaultAddress && !shippingAddress && (
            <div className="text-center text-gray-500">
              <p>No addresses available.</p>
            </div>
          )}
          {showDefaultAddress && shippingAddress && (
            <AddressCard address={shippingAddress} />
          )}
        </div>

        {/* Order Summary Section */}
        <div className="min-h-svh w-[40%] rounded-lg bg-gray-100 p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold text-gray-700">
            Order Summary
          </h2>

          {error && <div className="mb-4 text-red-500">{error}</div>}
          <div className="mb-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-700">
                Shipping Information
              </h3>
              {!shippingAddress && (
                <span className="text-sm text-red-500">Address Required</span>
              )}
            </div>
            {shippingAddress ? (
              <AddressCard address={shippingAddress} />
            ) : (
              <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-3 text-center">
                <p className="text-yellow-700">
                  Please select or add a shipping address to proceed
                </p>
              </div>
            )}
          </div>
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
                  <span className="block w-[75%] truncate">
                    {item?.product?.name}
                  </span>
                  <span>
                    {item?.quantity} x ฿{item?.product?.price}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500">Your cart is empty.</p>
            )}
          </div>
          <div className="mt-8 flex justify-between">
            <span className="text-xl font-semibold text-gray-700">Total:</span>
            <span className="text-xl font-semibold text-gray-700">
              ฿{calculateTotal(cart)}
            </span>
          </div>
          {/* <div className="mt-6 flex justify-center">
            <button
              onClick={handleCheckout}
              className="w-full rounded-lg bg-blue-600 px-6 py-3 text-lg text-white hover:bg-blue-700"
              disabled={loading || !shippingAddress}
            >
              {loading ? "Processing..." : "Proceed to Payment"}
            </button>
          </div> */}

          <div className="mt-6 flex justify-center space-x-4">
            {/* COD Button */}
            <button
              onClick={handleCheckout}
              className="w-full rounded-lg bg-green-600 px-6 py-3 text-lg text-white hover:bg-green-700"
              disabled={loading || !shippingAddress}
            >
              {loading ? "Processing..." : "Pay on Delivery (COD)"}
            </button>

            {/* Stripe Button */}
            <button
              onClick={handleCheckout}
              className="w-full rounded-lg bg-blue-600 px-6 py-3 text-lg text-white hover:bg-blue-700"
              disabled={loading || !shippingAddress}
            >
              {loading ? "Processing..." : "Proceed to Stripe"}
            </button>
          </div>

          <Link to="/cart" className="text-blue-600 hover:text-blue-700">
            <button className="mt-4 w-full rounded-lg border-2 border-blue-600 py-3 font-semibold text-blue-600 transition-colors">
              Go back to Cart
            </button>
          </Link>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        style={{ width: "400px" }}
      />{" "}
      {/* Add ToastContainer */}
    </div>
  );
};

export default Checkout;
