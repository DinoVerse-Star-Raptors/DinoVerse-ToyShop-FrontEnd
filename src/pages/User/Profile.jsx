import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Auth context for accessing user data

function Profile() {
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

  if (isLoading) {
    return <div>Loading...</div>; // Show loading state while checking user data
  }

  return (
    <>
      <section className="flex justify-center bg-gray-50 py-16">
        <div className="w-full max-w-5xl px-6">
          <div className="flex flex-col md:flex-row">
            {/* Sidebar */}
            <div className="w-full border-r border-gray-200 pr-6 md:w-1/3">
              <div className="flex flex-col items-center">
                <img
                  src="path/to/your-image.jpg"
                  alt="Profile"
                  className="h-20 w-20 rounded-full"
                />
                <h2 className="font-roboto mt-2 text-lg">chalisamie</h2>
                <button className="text-sm text-blue-500 underline">
                  Edit
                </button>
              </div>
              <div className="mt-8">
                <h3 className="font-bold text-gray-800">My Account</h3>
                <ul className="mt-4 space-y-2">
                  <li className="font-medium text-gray-800">Profile</li>
                  <li className="text-gray-500">Banks & Cards</li>
                  <li className="text-gray-500">Address</li>
                  <li className="text-gray-500">My purchase</li>
                </ul>
              </div>
            </div>

            {/* Main Content */}
            <div className="w-full pl-6 md:w-2/3">
              <h1 className="font-roboto text-2xl font-bold text-gray-800">
                Account Details
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                Manage your personal information to enhance your account
                security.
              </p>

              {/* Form */}
              <div className="mt-6 space-y-4">
                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <p className="text-gray-800">chalisamie</p>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    value="mie"
                    className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <p className="text-gray-800">
                    me*******@gmail.com{" "}
                    <a href="#" className="text-blue-500 underline">
                      [Change]
                    </a>
                  </p>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <p className="text-gray-800">
                    ********18{" "}
                    <a href="#" className="text-blue-500 underline">
                      [Change]
                    </a>
                  </p>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">
                    Gender
                  </label>
                  <p className="text-gray-800">Male / Female / Other</p>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <p className="text-gray-800">
                    30/10/19**{" "}
                    <a href="#" className="text-blue-500 underline">
                      [Change]
                    </a>
                  </p>
                </div>
              </div>

              {/* Save Button */}
              <div className="mt-8">
                <button className="rounded-md bg-pink-500 px-6 py-2 text-white hover:bg-pink-600">
                  SAVE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Profile;
