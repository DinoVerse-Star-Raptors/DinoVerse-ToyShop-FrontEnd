import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogOut = () => {
  const { logout } = useAuth(); // Access logout function from context
  const navigate = useNavigate(); // Hook for navigation
  const [isLoggingOut, setIsLoggingOut] = useState(false); // Track logout state

  // Handle logout action with toast notifications and redirection
  const handleLogout = () => {
    setIsLoggingOut(true); // Disable button while logging out

    // Show success toast
    toast.success("You have successfully logged out. Redirecting...", {
      position: "top-center",
      autoClose: 3000, // Toast auto close after 3 seconds
      hideProgressBar: true, // Hide the progress bar
    });

    // Trigger auto click after the delay
    const autoClickTimeout = setTimeout(() => {
      // Call logout function to clear user data
      logout();

      setIsLoggingOut(false); // Enable the button again (if needed for next action)
      navigate("/"); // Redirect to login page
    }, 3000);

    // Cleanup timeout when the component unmounts
    return () => clearTimeout(autoClickTimeout);
  };

  // Call handleLogout when the component mounts (useEffect)
  useEffect(() => {
    // handleLogout(); // Automatically trigger logout process on mount
    const button = document.querySelector("button");
    //   const button = document.querySelector('button[disabled="false"]');
    if (button) {
      button.click();
    }
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <div className="mt-4 flex justify-center">
      <button
        onClick={handleLogout}
        className="rounded-md bg-red-600 px-6 py-2 text-white transition-colors duration-200 hover:bg-red-700"
        disabled={isLoggingOut} // Disable button while logging out
      >
        {isLoggingOut ? "Logging Out..." : "Log Out"}
      </button>

      {/* ToastContainer to display toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default LogOut;
