import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

// Create the context for authentication
const AuthContext = createContext();

// Auth provider component that wraps the rest of the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if user is logged in by checking the token from cookies or localStorage
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
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Prop validation for children
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensures that children is required and is a valid React node
};

// Custom hook to use the Auth context
export const useAuth = () => useContext(AuthContext);
