import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Auth context for accessing user data
import SimpleNavbar from "../../components/layout/SimpleNavbar"; // Navbar
import SimpleFooter from "../../components/layout/SimpleFooter"; // Footer
import uiStyle from "./User.module.css"; // CSS module for dashboard-specific styles

function Dashboard() {
  const { user, logout } = useAuth(); // Access user data and logout function from context
  const navigate = useNavigate(); // Use navigate for redirection

  const [isLoading, setIsLoading] = useState(true); // Loading state to handle user data fetch

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect to login page if no user data is available
    } else {
      setIsLoading(false); // Set loading to false when user data is available
    }
  }, [user, navigate]); // Run this effect when `user` changes

  const handleLogout = () => {
    logout(); // Call logout from AuthContext to clear user data
    navigate("/login"); // Redirect to login page after logging out
  };

  if (isLoading) {
    return <div>Loading...</div>; // Show loading state while checking user data
  }

  return (
    <>
      <SimpleNavbar />
      <main
        className={`mt-[64px] min-h-screen max-w-[1440px] ${uiStyle.mx_auto}`}
      >
        <section className="flex justify-center py-[64px]">
          <div className="w-full max-w-[768px]">
            <div className="flex-col items-center justify-start text-center">
              <h1 className="font-roboto text-[32px] font-normal text-black">
                Welcome back, {user.fullname}
              </h1>
              <p className="font-roboto p-[32px] text-center text-[16px] font-normal text-black">
                You are logged in and ready to explore the dashboard.
              </p>
            </div>

            <div className="flex-col items-center justify-start text-center">
              <button
                onClick={handleLogout}
                className="w-full max-w-[200px] justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Logout
              </button>
            </div>

            <div className="mt-8">
              <h2 className="font-roboto text-[24px] text-gray-800">
                Your Profile
              </h2>
              <div className="mt-4">
                <p className="font-roboto text-sm">Username: {user.username}</p>
                <p className="font-roboto text-sm">Email: {user.email}</p>
                <p className="font-roboto text-sm">
                  Full Name: {user.fullname}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
}

export default Dashboard;
