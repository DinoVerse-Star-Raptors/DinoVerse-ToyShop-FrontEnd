// src/components/PrivateRoute.js
import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes

// PrivateRoute component checks authentication and user role
const PrivateRoute = ({ component: Component, role, ...rest }) => {
  const token = localStorage.getItem("jwt_token");
  const userRole = localStorage.getItem("user_role"); // Assumed role stored in localStorage

  // Check if the user is authenticated and their role matches the required one
  const isAuthenticated = token && userRole;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && userRole === role ? (
          <Component {...props} />
        ) : (
          // Redirect to login if not authenticated or role doesn't match
          <Redirect to="/login" />
        )
      }
    />
  );
};

// PropTypes validation
PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired, // Validate that component is a valid React component
  role: PropTypes.string.isRequired, // Validate role is a string (e.g., 'admin' or 'user')
};

export default PrivateRoute;
