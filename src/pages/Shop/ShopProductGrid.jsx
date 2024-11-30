import React, { useEffect, useState } from "react";
import ProductCard from "./ShopProductCard"; // Import ProductCard component
import axiosInstance from "../../services/axiosInstance"; // Import axiosInstance
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("rating"); // Sorting option state
  // const [tags, setTags] = useState(["all"]); // Tags filter state

  const formatTag = (tag) => {
    // Exclude "0-6M"
    if (tag === "0-6m") {
      return "0-6M"; // Returning null will exclude this tag when filtering
    }

    // Check for the special case "language-and-communications" and replace it with "language"
    if (tag === "language-and-communications") {
      return "Language";
    }

    // Regex to match age ranges like "1-2M", "18M+", "6M+", "2Yrs+" etc.
    const ageRegex = /^(\d{1,2})(m|yrs)\+?$/;

    // Check if the tag matches the age pattern
    const match = tag.match(ageRegex);
    if (match) {
      const number = match[1]; // The number (e.g., 18, 6, 2)
      const unit = match[2]; // The unit (M or Yrs)

      // Capitalize the first character of the unit and keep the rest in lowercase
      const formattedUnit =
        unit.charAt(0).toUpperCase() + unit.slice(1).toLowerCase();

      // Format the tag to "18M+" or "2Yrs+" style
      return `${number}${formattedUnit}+`;
    }

    // Format other tags by replacing hyphens with spaces, capitalizing the first letter of each word
    return tag
      .replace(/-and-/g, " & ") // Replace "-and-" with " & "
      .replace(/-/g, " ") // Replace hyphens with spaces
      .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
  };

  // Fetch products and apply filters and sorting
  useEffect(() => {
    // Fetch tags from the URL query string
    const getTagsFromUrl = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const tagsParam = urlParams.get("tag");
      if (tagsParam) {
        const decodedTags = decodeURIComponent(tagsParam);
        return decodedTags.split(","); // Split tags by commas
      }
      return [];
    };

    const fetchedTags = getTagsFromUrl().map((itm) => formatTag(itm)); // Extract tags
    // setTags(fetchedTags); // Set tags state from URL

    const fetchProducts = async () => {
      try {
        const sortProducts = (products) => {
          // Sort products based on the selected criteria
          if (sortBy === "rating") {
            return products.sort((a, b) => b.rating.rate - a.rating.rate);
          }
          if (sortBy === "priceLowToHigh") {
            return products.sort((a, b) => a.price - b.price);
          }
          if (sortBy === "priceHighToLow") {
            return products.sort((a, b) => b.price - a.price);
          }
          return products; // Default case (no sorting)
        };

        // Show loading toast notification
        toast.info("Loading products...", { autoClose: false });

        const response = await axiosInstance.get("/api/products"); // Fetch products
        let filteredProducts = response.data.filter((product) => product); // Filter out null or undefined products

        // Apply tag filtering
        if (fetchedTags.length > 0) {
          console.log(fetchedTags);
          filteredProducts = filteredProducts.filter(
            (product) => product.tags.some((tag) => fetchedTags.includes(tag)),
            // fetchedTags.every((tag) => product.tags.includes(tag)),
          );
        }

        // Sort the filtered products
        const sortedProducts = sortProducts(filteredProducts);
        console.log(sortedProducts);
        setProducts(sortedProducts); // Update products state with sorted products
        setLoading(false); // Set loading to false when data is fetched

        // Dismiss loading toast notification
        toast.dismiss();
      } catch (error) {
        console.error("Error fetching products:", error); // Log any errors
        setLoading(false); // Stop loading in case of error
        // Show error toast notification
        toast.error("Failed to load products. Please try again.", {
          autoClose: 5000,
        });
      }
    };

    fetchProducts(); // Call the function to fetch products
  }, [sortBy]); // Re-fetch products when tags or sortBy changes

  // Handle sorting option change
  const handleSortChange = (sortOption) => {
    setSortBy(sortOption); // Update the sort criteria
  };

  // Array to assign different border colors for each product card
  const borderColors = [
    "border-blue-400",
    "border-amber-400",
    "border-green-400",
    "border-pink-400",
  ];

  // Background colors for each product card
  const bgColors = [
    "bg-blue-200",
    "bg-amber-200",
    "bg-green-200",
    "bg-pink-200",
  ];

  return (
    <div className="pt-4">
      {/* Sorting Buttons */}
      <div className="mb-4 flex space-x-4">
        <button
          onClick={() => handleSortChange("rating")}
          className={`rounded-md px-4 py-2 font-medium ${sortBy === "rating" ? "bg-indigo-500 text-white" : "border bg-white text-indigo-500"}`}
        >
          Rating (Highest to Lowest)
        </button>
        <button
          onClick={() => handleSortChange("priceLowToHigh")}
          className={`rounded-md px-4 py-2 font-medium ${sortBy === "priceLowToHigh" ? "bg-indigo-500 text-white" : "border bg-white text-indigo-500"}`}
        >
          Price (Low to High)
        </button>
        <button
          onClick={() => handleSortChange("priceHighToLow")}
          className={`rounded-md px-4 py-2 font-medium ${sortBy === "priceHighToLow" ? "bg-indigo-500 text-white" : "border bg-white text-indigo-500"}`}
        >
          Price (High to Low)
        </button>
      </div>

      {/* Loading or Displaying Products */}
      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard
              key={product._id}
              product={product}
              bgColors={bgColors[index % 4]}
              borderColor={borderColors[index % 4]} // Assign border color based on index
            />
          ))}
        </div>
      )}

      {/* Toast Notifications */}
      <ToastContainer />
    </div>
  );
}

export default ProductGrid;
