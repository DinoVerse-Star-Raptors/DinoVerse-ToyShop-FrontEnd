// src/services/axiosInstance.js
import axios from "axios";
// import process from "process";

// Get the base URL from environment variables or set default
// const API_URL = "http://dinothink.vercel.app" || "http://localhost:5000";
const API_URL = "https://dinothink.vercel.app";

// Create an Axios instance with the base URL and other configurations
const axiosInstance = axios.create({
  baseURL: API_URL,
});

export default axiosInstance;
