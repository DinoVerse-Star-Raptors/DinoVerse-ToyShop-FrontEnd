import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Trash2,
  ShoppingCart,
  CheckCircle,
  MinusCircle,
  PlusCircle,
} from "lucide-react";

const Cart = () => {
  const { removeFromCart, clearCart, user, updateCartQty, getCart } = useAuth();
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [selectedItems, setSelectedItems] = useState({});
  const [loading, setLoading] = useState(false);
  const [showClearCartModal, setShowClearCartModal] = useState(false);

  useEffect(() => {
    const fetchCart = async () => {
      if (user) {
        setLoading(true);
        try {
          const fetchedCart = await getCart();
          setCart(fetchedCart);
          console.log(fetchedCart);
          const initialSelection = fetchedCart.reduce(
            (acc, item) => ({
              ...acc,
              [item?.product?._id]: false,
            }),
            {},
          );
          setSelectedItems(initialSelection);
        } catch (error) {
          toast.error("Failed to fetch cart");
        } finally {
          setLoading(false);
        }
      }
    };
    fetchCart();
  }, [user, getCart]);

  useEffect(() => {
    const subtotal = cart.reduce(
      (acc, item) =>
        selectedItems[item?.product?._id]
          ? acc + Number(item?.product?.price) * Number(item?.quantity)
          : acc,
      0,
    );
    setTotalPrice(subtotal);
  }, [cart, selectedItems]);

  const handleItemSelectionChange = (productId) => {
    setSelectedItems((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const handleSelectAllChange = () => {
    // setSelectAll(true);
    setSelectedItems(
      Object.keys(selectedItems).reduce(
        (acc, key) => ({
          ...acc,
          [key]: true,
        }),
        {},
      ),
    );
  };

  const handleClearSelectAllChange = () => {
    // setSelectAll(false);
    setSelectedItems(
      Object.keys(selectedItems).reduce(
        (acc, key) => ({
          ...acc,
          [key]: false,
        }),
        {},
      ),
    );
  };

  const handleQuantityChange = async (item, increment) => {
    console.log(increment, item);
    const loadingToast = toast.loading("Updating cart...");
    setLoading(true);
    try {
      const updatedQuantity = item?.quantity + (increment ? 1 : -1);
      if (updatedQuantity <= 0) {
        await removeFromCart(item?._id);
      } else {
        // Update the quantity using the updateCartItemQty function
        await updateCartQty(item?._id, item?.product?._id, updatedQuantity);
      }
      toast.update(loadingToast, {
        render: "Cart updated successfully!",
        type: "success",
        autoClose: 2000,
        isLoading: false,
      });
    } catch (error) {
      toast.error("Failed to update cart");
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveItem = async (itemId) => {
    // Show a confirmation dialog before removing the item
    const isConfirmed = window.confirm(
      "Are you sure you want to remove this item from the cart?",
    );

    if (!isConfirmed) {
      return; // If the user cancels, do nothing
    }

    const loadingToast = toast.loading("Removing item...");
    setLoading(true);
    try {
      console.log(itemId);
      await removeFromCart(itemId);
      // setCart(cart.filter((item) => item?.product?._id !== productId));
      toast.update(loadingToast, {
        render: "Item removed successfully!",
        type: "success",
        autoClose: 2000,
        isLoading: false,
      });
    } catch (error) {
      toast.error("Failed to remove item");
    } finally {
      setLoading(false);
    }
  };

  const handleClearCart = async () => {
    const loadingToast = toast.loading("Removing all items...");
    setLoading(true);
    try {
      await clearCart(); // Remove each item from the cart

      // Update the cart state to be empty
      setCart([]);
      toast.update(loadingToast, {
        render: "All items removed successfully!",
        type: "success",
        autoClose: 2000,
        isLoading: false,
      });
    } catch (error) {
      toast.error("Failed to remove items from the cart");
    } finally {
      setLoading(false);
    }
  };

  const shippingFee = 20;
  const finalTotal = totalPrice + shippingFee;

  if (cart.length === 0 && !loading) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <ShoppingCart className="mx-auto mb-6 h-24 w-24 text-gray-400" />
        <h2 className="text-3xl font-bold text-gray-700">Your cart is empty</h2>
        <p className="mt-4 text-gray-500">
          Looks like you haven&apos;t added any items to your cart yet.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-800">
        Your Cart
      </h1>

      <div className="mb-4 flex items-center rounded-lg bg-gray-50 p-3">
        <div className="flex-grow space-x-2">
          {/* Select All Button */}
          {
            <button
              onClick={handleSelectAllChange}
              className="rounded-lg bg-blue-500 px-4 py-2 font-medium text-white transition-colors hover:bg-blue-600"
            >
              Select All
            </button>
          }

          {/* Deselect All Button */}
          {
            <button
              onClick={handleClearSelectAllChange}
              className="rounded-lg bg-gray-500 px-4 py-2 font-medium text-white transition-colors hover:bg-gray-600"
            >
              Deselect All
            </button>
          }
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Cart Items */}
        <div className="space-y-6 lg:col-span-2">
          {cart.map((item) => (
            <div
              key={item?._id}
              className="flex items-center rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-lg"
            >
              <input
                type="checkbox"
                checked={selectedItems[item?.product?._id]}
                onChange={() => handleItemSelectionChange(item?.product?._id)}
                className="mr-4 min-h-5 min-w-5"
              />
              <img
                src={item?.product?.imageUrl}
                alt={item?.product?.name}
                className="mr-6 h-24 w-24 rounded-md object-cover"
              />
              <div className="flex-grow">
                <h2 className="text-xl font-semibold text-gray-800">
                  {item?.product?.name}
                </h2>
                <p
                  className="mb-2 mr-6 line-clamp-2 text-gray-500"
                  title={item?.product?.description}
                >
                  {item?.product?.description}
                </p>

                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => handleQuantityChange(item, false)}
                    disabled={item?.quantity <= 1}
                    className="text-gray-600 disabled:opacity-50"
                  >
                    <MinusCircle />
                  </button>
                  <span className="text-lg font-semibold">
                    {item?.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(item, true)}
                    className="text-gray-600"
                  >
                    <PlusCircle />
                  </button>
                  <div className="flex text-pink-400">
                    (<p className="px-2">{item?.quantity || 0}</p>
                    <p>X</p>
                    <p className="px-2">฿{item?.product?.price || 0}</p>)
                  </div>
                </div>
              </div>
              <div className="text-right">
                <p className="mb-2 text-xl font-bold text-pink-600">
                  ฿{(item?.product?.price * item?.quantity).toLocaleString()}
                </p>
                <button
                  onClick={() => handleRemoveItem(item?._id)}
                  className="flex items-center text-red-500 hover:text-red-700"
                >
                  <Trash2 className="mr-2" size={16} />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="self-start rounded-lg bg-gray-50 p-6 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-gray-800">
            Order Summary
          </h2>

          <div className="space-y-4 border-b border-gray-200 pb-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-semibold">
                ฿{totalPrice.toLocaleString()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping Fee</span>
              <span className="font-semibold">
                ฿{shippingFee.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="mb-6 mt-4 flex justify-between text-xl font-bold">
            <span>Total</span>
            <span className="text-pink-600">
              ฿{finalTotal.toLocaleString()}
            </span>
          </div>

          <button className="mb-4 flex w-full items-center justify-center rounded-lg bg-pink-600 py-3 text-white transition-colors hover:bg-pink-700">
            <CheckCircle className="mr-2" />
            Proceed to Checkout
          </button>

          <button
            onClick={() => setShowClearCartModal(true)} // open the modal
            className="flex w-full items-center justify-center rounded-lg bg-red-500 py-3 text-white transition-colors hover:bg-red-600"
          >
            <Trash2 className="mr-2" />
            Clear Cart
          </button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showClearCartModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="max-w-sm rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-lg font-bold text-gray-700">Are you sure?</h2>
            <p className="mt-2 text-gray-500">
              Are you sure you want to clear all items from your cart?
            </p>
            <div className="mt-4 flex justify-end space-x-4">
              <button
                onClick={() => setShowClearCartModal(false)} // close modal
                className="text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={handleClearCart} // confirm action
                className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
