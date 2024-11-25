import React, { useState, useRef } from "react";
import { Eye, EyeOff, Upload, X, User, AlertCircle } from "lucide-react";
import SimpleNavbar from "../../components/layout/SimpleNavbar";
import SimpleFooter from "../../components/layout/SimpleFooter";
import uiStyle from "./Register.module.css";
import axiosInstance from "../../services/axiosInstance"; // Import axiosInstance
import defaultImage from "./assets/logo192.png";
// import dotenv from "dotenv";
// import process from "process";
// dotenv.config();

function Register() {
  // State management for form inputs and validation
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    username: "",
  });

  // State for password visibility toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // State for profile image
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");
  const [fileInputKey, setFileInputKey] = useState(Date.now()); // Key to reset input
  const fileInput = useRef(null); // Reference to file input element

  // Handle close error alert
  const handleCloseError = () => {
    setError("");
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Check file size constraints
      if (file.size > 1 * 1024 * 1024) {
        setError("Image size should be less than 1MB");
        return;
      }

      if (file.size < 50 * 1024) {
        setError("Image size should be at least 50KB");
        return;
      }

      if (!file.type.startsWith("image/")) {
        setError("Please upload an image file");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setError(""); // Clear any previous error messages
    }
  };

  // Remove uploaded image
  const removeImage = () => {
    setFileInputKey(Date.now());
    setImagePreview(null);
    if (fileInput.current) fileInput.current.value = ""; // Reset file input value
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate form before submission
  const validateForm = () => {
    if (!imagePreview) {
      setError("Please upload a profile image");
      return false;
    }

    if (
      !formData.email ||
      !formData.fullName ||
      !formData.password ||
      !formData.confirmPassword ||
      !formData.username
    ) {
      setError("Please fill in all fields");
      return false;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long");
      return false;
    }

    setIsLoading(true);
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    // console.log(process.env.REACT_APP_API_URL);
    // Create FormData for file upload
    const formDataToSend = new FormData();
    formDataToSend.append("email", formData.email);
    formDataToSend.append("fullname", formData.fullName); // Adjusted to match backend field
    formDataToSend.append("password", formData.password);
    formDataToSend.append("username", formData.username);
    // formDataToSend.append("profilePicture", fileInput.files[0]);

    // If an image is uploaded, append it, otherwise, use a default image
    // if (imagePreview) {
    //   // Convert the image data URL to a Blob (if necessary for API compatibility)
    //   const byteString = atob(imagePreview.split(",")[1]);
    //   const ab = new ArrayBuffer(byteString.length);
    //   const ia = new Uint8Array(ab);
    //   for (let i = 0; i < byteString.length; i++) {
    //     ia[i] = byteString.charCodeAt(i);
    //   }
    //   const file = new Blob([ab], { type: "image/jpeg" }); // Use the correct MIME type for the image
    //   formDataToSend.append("profilePicture", file, "profile.jpg");
    // } else {
    //   // Use a default image if none uploaded
    //   formDataToSend.append("profilePicture", defaultImage);
    // }
    // Append the file from the file input
    if (fileInput.current && fileInput.current.files[0]) {
      console.log(fileInput);
      formDataToSend.append("profilePicture", fileInput.current.files[0]);
    } else if (imagePreview) {
      // Convert the image data URL to a Blob (if necessary for API compatibility)
      const byteString = atob(imagePreview.split(",")[1]);
      const ab = new ArrayBuffer(byteString.length);
      const ia = new Uint8Array(ab);
      for (let i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
      }
      const file = new Blob([ab], { type: "image/jpeg" }); // Use the correct MIME type for the image
      formDataToSend.append("profilePicture", file, "profile.jpg");
    } else {
      // Use a default image if no file uploaded
      formDataToSend.append("profilePicture", defaultImage);
    }

    try {
      // Make API call with relative path
      const response = await axiosInstance.post(
        "/api/user/register", // Relative API endpoint
        formDataToSend,
      );

      // const response = await fetch(
      //   "https://dinothink.vercel.app/api/user/register",
      //   {
      //     method: "POST",
      //     body: formDataToSend, // Send the form data as the request body
      //   },
      // );

      console.log(response);
      setIsLoading(false);

      if (response.status === 200) {
        // Success
        alert("Registration successful");
      } else {
        // Handle errors
        setError(response.data.message || "An error occurred");
      }
    } catch (error) {
      setIsLoading(false);
      setError("Network error, please try again.");
    }
  };

  return (
    <>
      <header>
        <SimpleNavbar />
      </header>
      <main className={`mt-[64px] min-h-svh max-w-[1440px] ${uiStyle.mx_auto}`}>
        <section className="flex justify-center py-[64px]">
          <div className="w-full max-w-[768px]">
            <div className="flex-col items-center justify-start text-center">
              <h1 className="font-roboto text-center text-[32px] font-normal text-black">
                Let’s get you started
              </h1>
              <p className="font-roboto p-[32px] text-center text-[16px] font-normal text-black">
                Enter the detail to get going
              </p>
            </div>

            <div className="flex-col items-center justify-start text-center">
              {/* Error message display */}
              {error && (
                <div className="mb-6 flex items-center justify-between rounded-lg bg-red-500 p-4 text-white">
                  <div className="flex items-center">
                    <AlertCircle className="mr-2 h-4 w-4" />
                    <span>{error}</span>
                  </div>
                  <button
                    onClick={handleCloseError}
                    className="ml-4 text-white hover:text-gray-300"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              )}
              <form
                className="w-full py-[24px]"
                onSubmit={handleSubmit}
                method="POST"
                action="/register"
              >
                <div>
                  <div className="mt-1 flex items-center justify-center">
                    <div className="">
                      <div className="flex justify-center">
                        {/* <div className="flex h-32 max-h-[105px] w-32 max-w-[105px] items-center justify-center rounded-full bg-gray-100 ring-4 ring-gray-50">
                        <User className="h-16 w-16 text-gray-300" />
                      </div> */}
                        {imagePreview ? (
                          <div className="relative inline-block">
                            <img
                              src={imagePreview || defaultImage}
                              alt="Profile preview"
                              className="h-32 w-32 rounded-full object-cover ring-4 ring-gray-100"
                            />
                            <button
                              type="button"
                              onClick={removeImage}
                              className="absolute -right-2 -top-2 rounded-full bg-red-500 p-1 text-white shadow-sm hover:bg-red-600"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </div>
                        ) : (
                          <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gray-100 ring-4 ring-gray-50">
                            <User className="h-16 w-16 text-gray-300" />
                          </div>
                        )}
                      </div>

                      {/* Upload Button Area */}
                      <div className="mt-4 flex flex-col items-center text-sm text-gray-600">
                        <label
                          htmlFor="profile-image"
                          className="relative cursor-pointer rounded-md border-2 border-dashed border-gray-300 bg-white px-4 py-2 font-medium text-blue-600 transition-colors duration-200 hover:border-blue-400 hover:text-blue-500"
                        >
                          <span className="flex items-center space-x-2">
                            <Upload className="h-4 w-4" />
                            <span>
                              {imagePreview
                                ? "Change photo"
                                : "Upload Profile photo"}
                            </span>
                          </span>
                          <input
                            id="profile-image"
                            key={fileInputKey} // Reset input by updating the key
                            name="profile-image"
                            type="file"
                            className="sr-only"
                            accept="image/*"
                            onChange={handleImageUpload}
                            ref={fileInput} // Reference to the input
                          />
                        </label>
                        <p className="mt-2 text-xs text-gray-500">
                          PNG, JPG up to 1MB
                        </p>
                      </div>
                    </div>

                    {/* <div className="mt-1 flex grow flex-col justify-start">
                      <label
                        htmlFor="username"
                        className="block text-left text-sm font-medium text-gray-700"
                      >
                        Username
                      </label>
                      <input
                        id="username"
                        name="username"
                        type="text"
                        required
                        maxLength="255"
                        minLength="5"
                        autoComplete="off"
                        placeholder="mark"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                    </div> */}
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="username"
                      className="block text-left text-sm font-medium text-gray-700"
                    >
                      Username
                    </label>
                    <input
                      id="username"
                      name="username"
                      type="text"
                      required
                      maxLength="255"
                      minLength="5"
                      autoComplete="off"
                      placeholder="mark"
                      onChange={handleChange}
                      value={formData.username}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="email"
                      className="block text-left text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="off"
                      required
                      maxLength="255"
                      minLength="5"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="fullName"
                      className="block text-left text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      maxLength="255"
                      minLength="5"
                      autoComplete="off"
                      placeholder="Mark Zuckerberg"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="password"
                      className="block text-left text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="relative mt-1">
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        required
                        value={formData.password}
                        onChange={handleChange}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                        maxLength="255"
                        minLength="8"
                        autoComplete="off"
                        placeholder="New password"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center bg-transparent pr-3 hover:border-transparent"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-left text-sm font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <div className="relative mt-1">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                        maxLength="255"
                        minLength="8"
                        autoComplete="off"
                        placeholder="Confirm new password"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center bg-transparent pr-3 hover:border-transparent"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                  <div className="my-6 flex justify-center">
                    <button
                      type={isLoading ? "button" : "submit"}
                      className="flex w-full max-w-[100px] justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      {isLoading ? "Loading..." : "Register"}
                    </button>
                  </div>
                </div>
                {/* <ToastContainer /> */}
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <SimpleFooter />
      </footer>
    </>
  );
}

export default Register;
