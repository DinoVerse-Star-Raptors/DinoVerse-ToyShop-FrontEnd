import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { useHistory } from "react-router-dom";
import { authService } from "../services/authService"; // Service for handling API calls related to auth

// Create a context for authentication
const AuthContext = createContext();

// AuthProvider component to wrap around the app to provide auth context
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User data
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authenticated state
  const [loading, setLoading] = useState(true); // Loading state while fetching user data
  const history = useHistory();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await authService.checkAuthStatus(); // Check if user is logged in
        if (response.status === 200) {
          setUser(response.data); // Set user data if authenticated
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuthentication(); // Run on component mount
  }, []);

  const login = async (credentials) => {
    try {
      const response = await authService.login(credentials); // Call login service
      if (response.status === 200) {
        setUser(response.data.user); // Set user data after successful login
        setIsAuthenticated(true);
        history.push("/dashboard"); // Redirect to dashboard on successful login
      }
    } catch (error) {
      console.error("Login error:", error.message); // Handle error
    }
  };

  const logout = () => {
    authService.logout(); // Call logout service to clear token/session
    setUser(null); // Clear user data
    setIsAuthenticated(false); // Set authentication to false
    history.push("/login"); // Redirect to login page
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Define prop types
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate 'children' prop
};
