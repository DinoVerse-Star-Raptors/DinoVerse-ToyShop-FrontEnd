import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import axiosInstance from "../../services/axiosInstance"; // Import axiosInstance

const ShopFilter = () => {
  const [category, setCategory] = useState([]); // To store selected categories
  // const [priceRange, setPriceRange] = useState(""); // Price range
  const [ageTags, setAgeTags] = useState([]); // List of age tags
  const [devTags, setDevTags] = useState([]); // List of development tags

  // const navigate = useNavigate(); // Hook to programmatically navigate

  useEffect(() => {
    // Fetch Age Tags from API using axiosInstance
    const fetchAgeTags = async () => {
      try {
        const response = await axiosInstance.get("/api/age-tags");
        const data = response.data;
        // Sort by tagNumber in ascending order
        const sortedAgeTags = data.sort((a, b) => a.tagNumber - b.tagNumber);
        setAgeTags(sortedAgeTags); // Assuming the API returns an array of age tags
      } catch (error) {
        console.error("Error fetching age tags:", error);
      }
    };

    // Fetch Development Tags from API using axiosInstance
    const fetchDevTags = async () => {
      try {
        const response = await axiosInstance.get("/api/dev-tags");
        const data = response.data;
        // Sort by tagNumber in ascending order
        const sortedDevTags = data.sort((a, b) => a.tagNumber - b.tagNumber);
        setDevTags(sortedDevTags); // Assuming the API returns an array of development tags
      } catch (error) {
        console.error("Error fetching development tags:", error);
      }
    };

    fetchAgeTags();
    fetchDevTags();
  }, []);

  // Function to handle category (age range) checkbox change
  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategory(
      (prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value) // Remove if already selected
          : [...prev, value], // Add if not already selected
    );
  };

  // Function to redirect to URL with filters and force a reload
  const handleRedirect = () => {
    const url = new URL(window.location.href);

    // Set category as URL search parameters
    if (category.length > 0) url.searchParams.set("tag", category.join(","));
    // if (priceRange) url.searchParams.set("priceRange", priceRange);

    // Force reload by setting window.location.href
    window.location.href = url.toString();
  };

  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md">
      <h3 className="mb-4 text-2xl font-semibold">Filter</h3>

      {/* Development Filter */}
      <div className="mb-4">
        <label className="mb-2 block text-lg font-medium">Categories</label>
        <div className="space-y-2">
          {devTags.map((tag) => (
            <div key={tag._id} className="flex items-center">
              <input
                type="checkbox"
                id={`dev-${tag._id}`}
                value={tag.handle}
                checked={category.includes(tag.handle)} // Check if the category is selected
                onChange={handleCategoryChange}
                className="mr-2"
              />
              <label htmlFor={`dev-${tag._id}`} className="text-lg">
                {tag.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Age Filter */}
      <div className="mb-4">
        <label className="mb-2 block text-lg font-medium">Age</label>
        <div className="space-y-2">
          {ageTags.map((tag) => (
            <div key={tag._id} className="flex items-center">
              <input
                type="checkbox"
                id={`age-${tag._id}`}
                value={tag.handle}
                checked={category.includes(tag.handle)} // Check if the category is selected
                onChange={handleCategoryChange}
                className="mr-2"
              />
              <label htmlFor={`age-${tag._id}`} className="text-lg">
                {tag.name}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Filters Button */}
      <div className="mt-4">
        <button
          onClick={handleRedirect}
          className="w-full rounded-md bg-indigo-500 px-4 py-2 font-semibold text-white"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default ShopFilter;
