import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Auth context for accessing user data

function Dashboard() {
  // const { user, logout } = useAuth(); // Access user data and logout function from context
  const { user } = useAuth(); // Access user data and logout function from context
  const navigate = useNavigate(); // Use navigate for redirection

  const [isLoading, setIsLoading] = useState(true); // Loading state to handle user data fetch

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect to login page if no user data is available
    } else {
      setIsLoading(false); // Set loading to false when user data is available
    }
  }, [user, navigate]); // Run this effect when `user` changes

  // const handleLogout = () => {
  //   logout(); // Call logout from AuthContext to clear user data
  //   navigate("/login"); // Redirect to login page after logging out
  // };

  if (isLoading) {
    return <div>Loading...</div>; // Show loading state while checking user data
  }

  return (
    <>
      <section className="flex flex-col justify-center py-[16px]">
        <div class="relative mx-auto w-full max-w-lg">
          <img
            src="https://res.cloudinary.com/dvacq67nr/image/upload/v1733546456/dinoimage/wmipflmuidexxgrzshsj.jpg"
            alt="Welcome Image"
            class="w-full rounded-lg"
          />
          <div class="absolute inset-0 flex items-center justify-center rounded-lg bg-black bg-opacity-50">
            <h1 class="font-roboto text-2xl font-medium text-white">
              Welcome back, {user.fullname}
            </h1>
          </div>
        </div>

        {/* <div className="hidden flex-col items-center justify-start text-center">
            <button
              onClick={handleLogout}
              className="w-full max-w-[200px] justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              Logout
            </button>
          </div> */}

        <div className="flex min-h-screen flex-col items-center justify-center">
          <div className="mb-[1000px] text-center">
            <h2 className="font-roboto text-[24px] text-gray-800">
              Your Profile
            </h2>
            <div className="mt-4">
              <p className="font-roboto text-sm">Username: {user.username}</p>
              <p className="font-roboto text-sm">Email: {user.email}</p>
              <p className="font-roboto text-sm">Full Name: {user.fullname}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
