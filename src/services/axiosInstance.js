// src/services/axiosInstance.js
import axios from "axios";
// import process from "process";

// Get the base URL from environment variables or set default
// const API_URL = "http://dinothink.vercel.app" || "http://localhost:5000";
const API_URL = "https://dinothink.vercel.app";

// Create an Axios instance with the base URL and other configurations
const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true, // Send cookies (e.g., JWT token) with requests
  headers: {
    "Content-Type": "application/json",
  },
});

// Optional: you can add interceptors for handling requests or responses globally
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // You can modify the request config before it's sent, like adding tokens
//     // For example, if you have a JWT token in localStorage
//     const token = localStorage.getItem("jwt_token");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   },
// );

export default axiosInstance;

// // src/services/axiosInstance.js
// import axios from "axios";
// import process from "process";

// // Get the API base URL from environment variables
// const API_URL = process.env.REACT_APP_API_URL;

// // Create an Axios instance
// const axiosInstance = axios.create({
//   baseURL: API_URL, // Use the environment variable here
//   headers: {
//     "Content-Type": "application/json", // Set default content type
//   },
// });

// export default axiosInstance;
