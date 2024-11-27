import React, { useState } from "react";
// import axios from "axios";
import Cookies from "js-cookie";
import axiosInstance from "../../services/axiosInstance"; // Import axiosInstance

const TestProtect = () => {
  const [message, setMessage] = useState("");
  const [userData, setUserData] = useState(null);

  // Function to make a request to the /testprotect route
  const testProtect = async () => {
    const token = Cookies.get("auth_token"); // Get the token from cookies (updated for consistency)

    if (!token) {
      setMessage("No token found. Please login first.");
      return;
    }

    try {
      const response = await axiosInstance.get("/api/user/testprotect", {
        headers: {
          Authorization: `Bearer ${token}`, // Pass token as Bearer token
        },
      });

      console.log(response);

      // If successful, display the message and user data
      setMessage(response.data.message);
      setUserData(response.data.user);
    } catch (error) {
      // Check if error is from response
      if (error.response) {
        switch (error.response.status) {
          case 401:
            setMessage("Not authorized. Please login again.");
            break;
          case 403:
            setMessage("Forbidden. You don't have access to this resource.");
            break;
          case 404:
            setMessage("The requested resource was not found.");
            break;
          default:
            setMessage(`Server Error: ${error.response.statusText}`);
        }
      } else if (error.request) {
        // Error occurs when no response is received
        setMessage("Network Error: No response from server.");
      } else {
        // Any other errors (e.g., issues with request setup)
        setMessage(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 shadow-xl">
        <h1 className="mb-6 text-center text-3xl font-semibold text-gray-800">
          Test Protected Page
        </h1>

        <button
          onClick={testProtect}
          className="mb-4 w-full rounded-lg bg-blue-500 px-4 py-2 text-white shadow-md transition duration-200 hover:bg-blue-600"
        >
          Test Authentication
        </button>

        {/* Show message */}
        {message && (
          <p
            className={`mb-4 text-center text-lg ${
              message.includes("error") ? "text-red-500" : "text-green-500"
            }`}
          >
            {message}
          </p>
        )}

        {/* Show user data if available */}
        {userData && (
          <div className="mt-4 rounded-lg bg-gray-50 p-4 shadow-md">
            <h3 className="mb-2 text-xl font-medium text-gray-700">
              User Information
            </h3>
            <p>
              <strong className="text-gray-600">ID:</strong> {userData._id}
            </p>
            <p>
              <strong className="text-gray-600">Username:</strong>{" "}
              {userData.username}
            </p>
            <p>
              <strong className="text-gray-600">Fullname:</strong>{" "}
              {userData.fullname}
            </p>
            <p>
              <strong className="text-gray-600">Email:</strong> {userData.email}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestProtect;
