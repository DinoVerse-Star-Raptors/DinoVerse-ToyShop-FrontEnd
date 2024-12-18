import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Auth context for accessing user data

function Profile() {
  const { user } = useAuth(); // Access user data and logout function from context
  const navigate = useNavigate(); // Use navigate for redirection

  const [isLoading, setIsLoading] = useState(true); // Loading state to handle user data fetch
  const [profileData, setProfileData] = useState({
    username: user.username,
    name: user.fullname,
    email: user.email,
    phone: user.phone,
    gender: user.gender,
    profilePicture: user.profilePicture,
  });

  const [isEditing, setIsEditing] = useState({
    name: false,
    email: false,
    phone: false,
    gender: false,
    profilePicture: false,
  });

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Redirect to login page if no user data is available
    } else {
      setIsLoading(false); // Set loading to false when user data is available
    }
    console.log(user);
  }, [user, navigate]);

  const handleEditToggle = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (field, value) => {
    setProfileData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const updatedProfilePicture = reader.result;
        setProfileData((prev) => ({
          ...prev,
          profilePicture: updatedProfilePicture,
        }));
        localStorage.setItem("profilePicture", updatedProfilePicture); // Save to localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    console.log("Profile data saved:", profileData);
    // Add functionality to save the updated data to the backend or context
    localStorage.setItem("profilePicture", profileData.profilePicture); // Ensure the picture persists
    setIsEditing({
      name: false,
      email: false,
      phone: false,
      gender: false,
      profilePicture: false,
    });
  };

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
                {isEditing.profilePicture ? (
                  <>
                    <img
                      src={profileData.profilePicture}
                      alt="Profile"
                      className="h-20 w-20 rounded-full"
                    />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handlePictureChange}
                      className="mt-2"
                    />
                    <button
                      onClick={() => handleEditToggle("profilePicture")}
                      className="mt-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
                    >
                      Save Picture
                    </button>
                  </>
                ) : (
                  <>
                    <img
                      src={profileData.profilePicture}
                      alt="Profile"
                      className="h-20 w-20 rounded-full"
                    />
                    <button
                      onClick={() => handleEditToggle("profilePicture")}
                      className="mt-2 text-sm text-blue-500 underline"
                    >
                      Edit Picture
                    </button>
                  </>
                )}
                <h2 className="font-roboto mt-2 text-lg">{profileData.name}</h2>
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
                    Name
                  </label>
                  {isEditing.name ? (
                    <input
                      type="text"
                      value={profileData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {profileData.name}{" "}
                      <button
                        onClick={() => handleEditToggle("name")}
                        className="text-blue-500 underline"
                      >
                        [Edit]
                      </button>
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  {isEditing.email ? (
                    <input
                      type="text"
                      value={profileData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {profileData.email}{" "}
                      <button
                        onClick={() => handleEditToggle("email")}
                        className="text-blue-500 underline"
                      >
                        [Edit]
                      </button>
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  {isEditing.phone ? (
                    <input
                      type="text"
                      value={profileData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  ) : (
                    <p className="text-gray-800">
                      {profileData.phone}{" "}
                      <button
                        onClick={() => handleEditToggle("phone")}
                        className="text-blue-500 underline"
                      >
                        [Edit]
                      </button>
                    </p>
                  )}
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium text-gray-700">
                    Gender
                  </label>
                  {isEditing.gender ? (
                    <select
                      value={profileData.gender}
                      onChange={(e) => handleChange("gender", e.target.value)}
                      className="rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  ) : (
                    <p className="text-gray-800">
                      {profileData.gender}{" "}
                      <button
                        onClick={() => handleEditToggle("gender")}
                        className="text-blue-500 underline"
                      >
                        [Edit]
                      </button>
                    </p>
                  )}
                </div>
              </div>

              {/* Save Button */}
              <div className="mt-8">
                <button
                  onClick={handleSave}
                  className="rounded-md bg-blue-500 px-6 py-2 text-white hover:bg-blue-600"
                >
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
