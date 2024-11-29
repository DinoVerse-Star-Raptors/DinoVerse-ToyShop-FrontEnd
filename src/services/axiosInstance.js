// // src/services/axiosInstance.js
// import axios from "axios";
// // import process from "process";

// // Get the base URL from environment variables or set default
// // const API_URL = "https://dinothink.vercel.app" || "http://localhost:5000";
// // const API_URL = "https://dinothink.vercel.app";
// const API_URL = "https://dinothink.onrender.com";

// // Create an Axios instance with the base URL and other configurations
// const axiosInstance = axios.create({
//   baseURL: API_URL,
// });

// export default axiosInstance;

// src/services/axiosInstance.js
import axios from "axios";
import process from "process";

// Get the base URL from the environment variable (fall back to a default if not set)
const API_URL = process.env.REACT_APP_API_URL || "https://dinothink.vercel.app"; // Default to local URL if not set

// Create an Axios instance with the base URL and other configurations
const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;
