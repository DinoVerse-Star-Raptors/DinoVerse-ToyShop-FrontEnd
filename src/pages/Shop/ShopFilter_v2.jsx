import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory

const ShopFilter = () => {
  const [category, setCategory] = useState([]);
  const [priceRange, setPriceRange] = useState("");
  const [ageTags, setAgeTags] = useState([]);
  const [devTags, setDevTags] = useState([]);

  const navigate = useNavigate(); // Hook to programmatically navigate

  useEffect(() => {
    // Fetch Age Tags from API
    const fetchAgeTags = async () => {
      try {
        const response = await fetch(
          "https://dinothink.vercel.app/api/age-tags",
        );
        const data = await response.json();
        setAgeTags(data); // Assuming the API returns an array of age tags
      } catch (error) {
        console.error("Error fetching age tags:", error);
      }
    };

    // Fetch Development Tags from API
    const fetchDevTags = async () => {
      try {
        const response = await fetch(
          "https://dinothink.vercel.app/api/dev-tags",
        );
        const data = await response.json();
        setDevTags(data); // Assuming the API returns an array of development tags
      } catch (error) {
        console.error("Error fetching development tags:", error);
      }
    };

    fetchAgeTags();
    fetchDevTags();
  }, []);

  // Function to handle category (age range) change
  const handleCategoryChange = (event) => {
    const selectedCategories = Array.from(
      event.target.selectedOptions,
      (option) => option.value,
    );
    setCategory(selectedCategories);
  };

  // Function to handle price range change
  const handlePriceChange = (event) => {
    setPriceRange(event.target.value);
  };

  // Function to redirect to URL with filters
  const handleRedirect = () => {
    const url = new URL(window.location.href);

    // Set category and priceRange as URL search parameters
    if (category.length > 0)
      url.searchParams.set("category", category.join(","));
    if (priceRange) url.searchParams.set("priceRange", priceRange);

    navigate(url.pathname + url.search); // Use navigate to redirect to the new URL with parameters
  };

  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md">
      <h3 className="mb-4 text-2xl font-semibold">Filter</h3>

      {/* Development Filter */}
      <div className="mb-4">
        <label htmlFor="devArea" className="mb-2 block text-lg font-medium">
          Development Area
        </label>
        <select
          id="devArea"
          value={priceRange}
          onChange={handlePriceChange}
          className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select Development Area</option>
          {devTags.map((tag) => (
            <option key={tag._id} value={tag.handle}>
              {tag.name}
            </option>
          ))}
        </select>
      </div>

      {/* Age Filter */}
      <div className="mb-4">
        <label htmlFor="ageRange" className="mb-2 block text-lg font-medium">
          Age Range
        </label>
        <select
          id="ageRange"
          value={category}
          onChange={handleCategoryChange}
          multiple
          className="w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">Select Age Range</option>
          {ageTags.map((tag) => (
            <option key={tag._id} value={tag.handle}>
              {tag.name}
            </option>
          ))}
        </select>
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
