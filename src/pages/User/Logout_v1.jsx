import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Ensure path matches your project structure
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import toast styles

const LogOut = () => {
  const { logout } = useAuth(); // Access the logout function from AuthContext
  const navigate = useNavigate(); // Hook for navigation
  const [isLoggingOut, setIsLoggingOut] = useState(false); // Track logout state

  // Inactivity timer (e.g., 1 minutes of inactivity)
  //   const INACTIVITY_TIMEOUT = 1 * 60 * 1000; // 1 minutes in milliseconds

  //   useEffect(() => {
  //     let timeoutId;

  //     // Function to handle auto-logout
  //     const handleAutoLogout = () => {
  //       setIsLoggingOut(true);
  //       logout(); // Call the logout function to clear user data
  //       navigate("/login"); // Redirect to login page after logging out
  //     };

  //     // Reset the inactivity timer whenever there is activity
  //     const resetInactivityTimer = () => {
  //       if (timeoutId) clearTimeout(timeoutId); // Clear previous timeout
  //       timeoutId = setTimeout(handleAutoLogout, INACTIVITY_TIMEOUT); // Set a new timeout
  //     };

  //     // Add event listeners for activity
  //     window.addEventListener("mousemove", resetInactivityTimer);
  //     window.addEventListener("keydown", resetInactivityTimer);
  //     window.addEventListener("click", resetInactivityTimer);
  //     window.addEventListener("scroll", resetInactivityTimer);

  //     // Set the initial inactivity timeout
  //     timeoutId = setTimeout(handleAutoLogout, INACTIVITY_TIMEOUT);

  //     // Clean up event listeners when the component unmounts
  //     return () => {
  //       window.removeEventListener("mousemove", resetInactivityTimer);
  //       window.removeEventListener("keydown", resetInactivityTimer);
  //       window.removeEventListener("click", resetInactivityTimer);
  //       window.removeEventListener("scroll", resetInactivityTimer);
  //       clearTimeout(timeoutId);
  //     };
  //   }, [logout, navigate]);

  useEffect(() => {
    const AUTO_CLICK_DELAY = 3 * 1000; // Auto click delay (e.g., 1 seconds)
    const autoClickButton = () => {
      const button = document.querySelector("button");
      //   const button = document.querySelector('button[disabled="false"]');
      if (button) {
        button.click();
        // console.log("button", button);
      }
    };
    toast.success("Login successful! Redirecting...", {
      position: "top-center",
      autoClose: AUTO_CLICK_DELAY, // Automatically close after 3 seconds
      hideProgressBar: true, // Hide the progress bar
    });
    // autoClickButton();
    const autoClickTimeout = setTimeout(autoClickButton, AUTO_CLICK_DELAY);

    // Clean up the timeout if the component unmounts
    return () => clearTimeout(autoClickTimeout);
  }, []);

  return (
    <div className="mt-4 flex justify-center">
      <button
        onClick={() => {
          setIsLoggingOut(true);
          logout();
          navigate("/login");
        }}
        className="rounded-md bg-red-600 px-6 py-2 text-white transition-colors duration-200 hover:bg-red-700"
        disabled={isLoggingOut} // Disable button while logging out
      >
        {isLoggingOut ? "Logging Out..." : "Log Out"}
      </button>

      {/* ToastContainer to display notifications */}
      <ToastContainer />
    </div>
  );
};

export default LogOut;
