import React, { useEffect, useState } from "react";
import ProductCard from "./ShopProductCard"; // Import ProductCard component
import axiosInstance from "../../services/axiosInstance"; // Import axiosInstance
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

function ProductGrid() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("rating"); // State for selected sorting option
  const [tags, setTags] = useState([]); // State for tags filter (e.g. ["fine-motor", "language-and-communications"])

  // Function to format tags from the URL (replace hyphen with space, capitalize first letter of each word, and "-and-" with " & ")
  const formatTag = (tag) => {
    // First replace "-and-" with " & "
    tag = tag.replace(/-and-/g, " & ");

    // Replace hyphens with spaces and capitalize the first letter of each word using regex
    tag = tag.replace(/(^|\s|^)(\w)/g, (match, p1, p2) => p2.toUpperCase());

    return tag;
  };

  // Fetch products from API using axiosInstance
  useEffect(() => {
    // Function to extract tags from the URL
    const getTagsFromUrl = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const tagsParam = urlParams.get("tag"); // Extract the 'tag' parameter
      if (tagsParam) {
        const decodedTags = decodeURIComponent(tagsParam); // Decode the URL-encoded string
        return decodedTags.split(","); // Split by commas to get an array of tags
      }
      return [];
    };

    const fetchedTags = getTagsFromUrl(); // Get tags from URL
    setTags(fetchedTags); // Set tags state

    async function fetchProducts() {
      try {
        const sortProducts = (products) => {
          if (sortBy === "rating") {
            return products.sort((a, b) => b.rating.rate - a.rating.rate); // Sort by rating in descending order
          }
          if (sortBy === "priceLowToHigh") {
            return products.sort((a, b) => a.price - b.price); // Sort by price in ascending order
          }
          if (sortBy === "priceHighToLow") {
            return products.sort((a, b) => b.price - a.price); // Sort by price in descending order
          }
          return products; // Default case (no sorting)
        };

        // Show loading toast notification
        toast.info("Loading products...", { autoClose: false });

        const response = await axiosInstance.get("/api/products"); // Make the GET request to the products endpoint
        const filteredProducts = response.data.filter((product) => product); // Filter recommended products

        // Filter products based on the tags, by checking if the product tags include any of the selected ones
        const filteredByTags = response.data.filter((product) => {
          return tags.every(
            (tag) => product.tags && product.tags.includes(formatTag(tag)),
          );
        });
        console.log(fetchedTags);
        // Sort products based on selected criteria
        const sortedProducts = sortProducts(filteredProducts);
        setProducts(sortedProducts); // Set sorted products
        setLoading(false); // Set loading to false once data is fetched

        // Close the loading toast notification when done
        toast.dismiss(); // Dismiss any active toast notifications
      } catch (error) {
        console.error("Error fetching products:", error); // Log any errors
        setLoading(false); // Set loading to false in case of an error
        // Show error toast notification
        toast.error("Failed to load products. Please try again.", {
          autoClose: 5000,
        });
      }
    }

    fetchProducts(); // Call the function to fetch products
  }, [sortBy]); // Re-fetch products when tags or sortBy changes

  // Function to sort products based on selected sorting option
  // const sortProducts = (products) => {
  //   if (sortBy === "rating") {
  //     return products.sort((a, b) => b.rating.rate - a.rating.rate); // Sort by rating in descending order
  //   }
  //   if (sortBy === "priceLowToHigh") {
  //     return products.sort((a, b) => a.price - b.price); // Sort by price in ascending order
  //   }
  //   if (sortBy === "priceHighToLow") {
  //     return products.sort((a, b) => b.price - a.price); // Sort by price in descending order
  //   }
  //   return products; // Default case (no sorting)
  // };

  // Handle sorting option change
  const handleSortChange = (sortOption) => {
    setSortBy(sortOption); // Update sort criteria
  };

  // Array to assign different border colors
  const borderColors = [
    "border-blue-400", // Card 1 border color
    "border-amber-400", // Card 2 border color
    "border-green-400", // Card 3 border color
    "border-pink-400", // Card 4 border color
  ];

  const bgColors = [
    "bg-blue-200", // Card 1 border color
    "bg-amber-200", // Card 2 border color
    "bg-green-200", // Card 3 border color
    "bg-pink-200", // Card 4 border color
  ];

  return (
    <div className="pt-4">
      {/* Sorting Buttons (Inline) */}
      <div className="mb-4 flex space-x-4">
        <button
          onClick={() => handleSortChange("rating")}
          className={`rounded-md px-4 py-2 font-medium ${
            sortBy === "rating"
              ? "bg-indigo-500 text-white"
              : "border bg-white text-indigo-500"
          }`}
        >
          Rating (Highest to Lowest)
        </button>
        <button
          onClick={() => handleSortChange("priceLowToHigh")}
          className={`rounded-md px-4 py-2 font-medium ${
            sortBy === "priceLowToHigh"
              ? "bg-indigo-500 text-white"
              : "border bg-white text-indigo-500"
          }`}
        >
          Price (Low to High)
        </button>
        <button
          onClick={() => handleSortChange("priceHighToLow")}
          className={`rounded-md px-4 py-2 font-medium ${
            sortBy === "priceHighToLow"
              ? "bg-indigo-500 text-white"
              : "border bg-white text-indigo-500"
          }`}
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
              borderColor={borderColors[index % 4]} // Dynamically assign the border color based on index
            />
          ))}
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}

export default ProductGrid;
