import React, { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import Cookies from "js-cookie";
// import axiosInstance from "../../services/axiosInstance"; // Import axios instance to handle API requests

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
        const userData = JSON.parse(localStorage.getItem("user"));
        setUser(userData); // Load the user from local storage if token is present
      }
    };

    // const checkAuthStatus2 = async () => {
    //   const token = Cookies.get("auth_token");
    //   if (token) {
    //     try {
    //       // Send a request to the server to validate the token
    //       const response = await axiosInstance.post(
    //         "/api/auth",
    //         {},
    //         {
    //           headers: {
    //             Authorization: `Bearer ${token}`,
    //           },
    //         },
    //       );

    //       // If the response is successful, set the user from local storage
    //       if (response.status === 200) {
    //         const userData = JSON.parse(localStorage.getItem("user"));
    //         setUser(userData); // Load the user from local storage if token is valid
    //       }
    //     } catch (error) {
    //       // If the token is invalid or the request fails, remove token and user data
    //       Cookies.remove("auth_token");
    //       localStorage.removeItem("user");
    //       setUser(null);
    //     }
    //   }
    // };

    checkAuthStatus();
  }, []); // Add checkAuthStatus to the dependency array

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

// import React, { createContext, useContext, useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import Cookies from "js-cookie";

// // Create the context for authentication
// const AuthContext = createContext();

// // Auth provider component that wraps the rest of the app
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   // Check if user is logged in by checking the token from cookies or localStorage
//   const checkAuthStatus = () => {
//     const token = Cookies.get("auth_token");
//     if (token) {
//       const userData = JSON.parse(localStorage.getItem("user"));
//       setUser(userData); // Load the user from local storage if token is present
//     }
//   };

//   useEffect(() => {
//     checkAuthStatus();
//   }, []); // This will only run on mount

//   // Login function to store user data and token in cookies and localStorage
//   const login = (response) => {
//     const { userId, username, fullname, email, token } = response.data;
//     const userData = { userId, username, fullname, email };
//     setUser(userData);
//     Cookies.set("auth_token", token, { expires: 1 }); // Token expires in 1 day
//     localStorage.setItem("user", JSON.stringify(userData));
//   };

//   // Logout function to clear user data and token
//   const logout = () => {
//     setUser(null);
//     Cookies.remove("auth_token");
//     localStorage.removeItem("user");
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Prop validation for children
// AuthProvider.propTypes = {
//   children: PropTypes.node.isRequired, // Ensures that children is required and is a valid React node
// };

// // Custom hook to use the Auth context
// export const useAuth = () => useContext(AuthContext);
