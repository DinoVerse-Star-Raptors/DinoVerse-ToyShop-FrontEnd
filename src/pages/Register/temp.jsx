import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "../style.css";
import viteLogo from "/vite.svg";
import SimpleNavbar from "../src/components/ui/SimpleNavbar";
import SimpleFooter from "../src/components/ui/SimpleFooter";
import { Eye, EyeOff, Upload, X, User } from "lucide-react";

function Register() {
  // State management for form inputs and validation
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    password: "",
    confirmPassword: "",
    zipCode: "",
  });

  // State for password visibility toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // State for profile image
  const [imagePreview, setImagePreview] = useState(null);
  const [error, setError] = useState("");

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        setError("Image size should be less than 5MB");
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
      setError("");
    }
  };

  // Remove uploaded image
  const removeImage = () => {
    setImagePreview(null);
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
      !formData.zipCode
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

    // Basic zip code validation (US format)
    const zipRegex = /^\d{5}(-\d{4})?$/;
    if (!zipRegex.test(formData.zipCode)) {
      setError("Please enter a valid ZIP code");
      return false;
    }

    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", { ...formData, imagePreview });
      setError("");
      // Add your registration logic here
    }
  };
  if (handleSubmit && error) {
    console.log("handleSubmit");
  }
  return (
    <section>
      <div className="flex min-h-screen flex-col justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* Logo placeholder */}
          <div className="mx-auto flex h-12 w-12 content-center justify-center rounded-full border-2 border-blue-500">
            <img className="w-[26px]" src={`${viteLogo}`} alt="Vite Logo" />
          </div>

          {/* Page title */}
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create your account
          </h2>

          {/* Secondary text */}
          <p className="mt-2 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a
              href="/login/"
              className="font-medium text-blue-600 hover:text-blue-500"
            >
              Sign in
            </a>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            {/* Error message display */}
            {/* {error && (
              <Alert variant="destructive" className="mb-6">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )} */}
            {/* <form className="space-y-6" onSubmit={handleSubmit}></form> */}
            <form className="flex flex-col justify-center space-y-6">
              {/* Profile Image Upload */}
              <div>
                {/* <label className="block text-sm font-medium text-gray-700">
                  Profile Image
                </label> */}
                <div className="mt-1 flex min-h-[214px] flex-col items-center justify-end">
                  {/* Profile Image Preview Area */}
                  <div className="relative mb-4">
                    {imagePreview ? (
                      <div className="relative inline-block">
                        <img
                          src={imagePreview}
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
                  <div className="flex flex-col items-center text-sm text-gray-600">
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
                        name="profile-image"
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={handleImageUpload}
                      />
                    </label>
                    <p className="mt-2 text-xs text-gray-500">
                      PNG, JPG up to 5MB
                    </p>
                  </div>
                </div>
              </div>
              {/* Rest of the form fields remain the same */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  maxLength="255"
                  minLength="5"
                  autoComplete="off"
                  placeholder="Mark Zuckerberg"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>
              {/* <div>
                <label
                  htmlFor="zipCode"
                  className="block text-sm font-medium text-gray-700"
                >
                  Post Code
                </label>
                <input
                  id="zipCode"
                  name="zipCode"
                  type="text"
                  required
                  value={formData.zipCode}
                  onChange={handleChange}
                  maxLength="5"
                  minLength="5"
                  autoComplete="off"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="e.g., 33110"
                />
              </div> */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="off"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  maxLength="255"
                  minLength="5"
                  placeholder="you@example.com"
                  pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={handleChange}
                  maxLength="31"
                  minLength="3"
                  autoComplete="off"
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                  placeholder="username"
                  pattern="^[a-z][a-z0-9_-]{3,32}"
                />
              </div>
              {/* [A-Za-z0-9_-]{(3, 16)} */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
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
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
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
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Create Account
                </button>
              </div>
            </form>

            {/* Social register options */}
            <div className="mt-6 hidden">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                >
                  Google
                </button>
                <button
                  type="button"
                  className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50"
                >
                  GitHub
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Layout() {
  return (
    <>
      <header>
        <SimpleNavbar />
      </header>
      <main className="mt-16 min-h-svh">
        <Register />
      </main>
      <footer className="bg-gray-800 py-8 text-white">
        <SimpleFooter />
      </footer>
    </>
  );
}

const root = createRoot(document.querySelector("#app"));
root &&
  root.render(
    <React.StrictMode>
      <Layout />
    </React.StrictMode>,
  );
