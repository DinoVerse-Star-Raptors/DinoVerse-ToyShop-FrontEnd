import React, { useEffect, useState } from "react";
// import axios from "axios"; // Import axios
import DevCard from "./DevCard"; // Import AgeCard component
import axiosInstance from "../../services/axiosInstance"; // Import axiosInstance

const DevTagSection = () => {
  const [devTags, setDevTags] = useState([]); // State to store age tags
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State to handle errors

  // Fetch data from API using Axios
  useEffect(() => {
    const fetchAgeTags = async () => {
      try {
        const response = await axiosInstance.get("api/dev-tags");
        setDevTags(response.data); // Set the fetched data into state
      } catch (error) {
        setError(error.message); // Set error message in case of failure
      } finally {
        setLoading(false); // Set loading to false after the fetch is complete
      }
    };

    fetchAgeTags();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="mb-8 text-center text-3xl font-bold">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="mb-8 text-center text-3xl font-bold text-red-500">
          Error: {error}
        </h2>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <h2 className="mb-8 text-center text-3xl font-bold">Categories</h2>

      <div className="grid grid-cols-2 gap-x-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-7">
        {devTags.map(({ handle, name, imageUrl }) => (
          <DevCard
            key={handle} // Use the handle as the unique key
            handle={handle}
            name={name}
            imageUrl={imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default DevTagSection;
