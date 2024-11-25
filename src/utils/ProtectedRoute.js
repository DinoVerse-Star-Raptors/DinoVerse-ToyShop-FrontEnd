import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import PropTypes from "prop-types"; // Import PropTypes

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // If no user is authenticated, redirect to login page
    return <Navigate to="/login" />;
  }

  // If user is authenticated, render the children (protected route)
  return children;
};

// Prop validation for children
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
