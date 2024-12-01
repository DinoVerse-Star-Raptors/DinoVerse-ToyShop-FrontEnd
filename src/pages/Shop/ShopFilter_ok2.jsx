import React, { useState, useEffect } from "react";
import axiosInstance from "../../services/axiosInstance"; // Import axiosInstance

const ShopFilter = () => {
  const [category, setCategory] = useState([]); // To store selected categories
  const [ageTags, setAgeTags] = useState([]); // List of age tags
  const [devTags, setDevTags] = useState([]); // List of development tags

  // Function to get URL query parameters (tags)
  const getTagsFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const tags = urlParams.get("tag");
    return tags ? tags.split(",") : [];
  };

  useEffect(() => {
    // Get the initial tags from the URL
    const initialTags = getTagsFromUrl();
    setCategory(initialTags);

    // Fetch Age Tags from API using axiosInstance
    const fetchAgeTags = async () => {
      try {
        const response = await axiosInstance.get("/api/age-tags");
        const data = response.data;
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
        const sortedDevTags = data.sort((a, b) => a.tagNumber - b.tagNumber);
        setDevTags(sortedDevTags); // Assuming the API returns an array of development tags
      } catch (error) {
        console.error("Error fetching development tags:", error);
      }
    };

    fetchAgeTags();
    fetchDevTags();
  }, []);

  // Handle category (age range) checkbox change
  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategory(
      (prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value) // Remove if already selected
          : [...prev, value], // Add if not already selected
    );
  };

  // Select all age tags when 'age' is part of the query
  useEffect(() => {
    if (category.includes("age")) {
      setCategory((prev) => [...prev, ...ageTags.map((tag) => tag.handle)]); // Select all age-related tags
    }
  }, [category, ageTags]);

  // Redirect with the selected filters
  const handleRedirect = () => {
    const url = new URL(window.location.href);

    // Set category as URL search parameters
    if (category.length > 0) url.searchParams.set("tag", category.join(","));

    // Force reload by setting window.location.href
    window.location.href = url.toString();
  };

  // Reset filters and redirect to /shop
  const handleResetFilters = () => {
    // Reset the category state and navigate to /shop without any filters
    setCategory([]);
    window.location.href = "/shop"; // Navigate to the shop page without any query parameters
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

      {/* Reset Filters Button */}
      <div className="mt-4">
        <button
          onClick={handleResetFilters}
          className="w-full rounded-md bg-red-500 px-4 py-2 font-semibold text-white"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default ShopFilter;
