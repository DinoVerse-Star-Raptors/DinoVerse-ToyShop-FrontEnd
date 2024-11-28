import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

// Create the context for authentication and cart
const AuthContext = createContext();

// AuthProvider component that manages both user and cart state
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);

  // Check if the user is logged in by checking the token from cookies or localStorage
  useEffect(() => {
    const checkAuthStatus = () => {
      const token = Cookies.get("auth_token");
      if (token) {
        try {
          const userData = JSON.parse(localStorage.getItem("user"));
          if (userData) {
            setUser(userData); // Load the user from localStorage if token is present
          } else {
            logout(); // If user data is missing, log out
          }
        } catch (error) {
          console.error("Error parsing user data from localStorage:", error);
          logout(); // If parsing fails, log out
        }
      }
    };

    checkAuthStatus();
  }, []); // Empty dependency array ensures this runs only once on component mount

  // Login function to store user data and token in cookies and localStorage
  const login = (userData, token) => {
    setUser(userData);
    Cookies.set("auth_token", token, { expires: 1 }); // Token expires in 1 day
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Logout function to clear user data and token
  const logout = () => {
    setUser(null);
    Cookies.remove("auth_token");
    localStorage.removeItem("user");
    setCart([]); // Clear cart when logging out
  };

  // Add item to cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart];
      const itemIndex = updatedCart.findIndex(
        (cartItem) => cartItem.id === item.id,
      );
      if (itemIndex >= 0) {
        updatedCart[itemIndex].quantity += 1;
      } else {
        updatedCart.push({ ...item, quantity: 1 });
      }
      console.log(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Optionally save to localStorage
      return updatedCart;
    });
  };

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== itemId);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Optionally save to localStorage
      return updatedCart;
    });
  };

  // Clear cart
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart"); // Clear cart from localStorage
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        cart,
        login,
        logout,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Prop validation for children
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensures that children is required and is a valid React node
};

// Custom hook to use the Auth context (with cart management)
export const useAuth = () => useContext(AuthContext);
