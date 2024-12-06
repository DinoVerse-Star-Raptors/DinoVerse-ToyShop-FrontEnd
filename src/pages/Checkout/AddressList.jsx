import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";
import axios from "axios"; // Import axios
import AddressCard from "./AddressCard"; // Import the AddressCard component

const AddressList = ({
  onSelectAddress,
  selectedAddress = {},
  AddressList = [], // Using AddressList as default mock data
}) => {
  const [addresses, setAddresses] = useState([]); // State to store the addresses
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // console.log("AddressList", AddressList);
  // Fetch addresses on component mount or selectedAddress change
  useEffect(() => {
    const fetchAddresses = async () => {
      setError(null); // Reset error state before fetching
      try {
        const response = await axios.get("/api/address"); // Make the GET request to fetch addresses
        const sortedAddresses = response.data.sort((a, b) => {
          return a.isDefault === b.isDefault ? 0 : a.isDefault ? -1 : 1;
        });
        setAddresses(sortedAddresses); // Set sorted addresses
      } catch (error) {
        // Use mock data if API call fails
        const mockData = AddressList?.length ? AddressList : [];

        const sortedMockData = mockData.sort((a, b) => {
          return a.isDefault === b.isDefault ? 0 : a.isDefault ? -1 : 1;
        });

        setAddresses(sortedMockData); // Set sorted mock data
      } finally {
        setLoading(false); // Stop loading regardless of success/failure
      }
    };

    fetchAddresses();
  }, [selectedAddress, AddressList]); // Fetch data when selectedAddress or AddressList changes

  // Memoized function to handle address selection
  const handleSelect = useCallback(
    (address) => {
      onSelectAddress(address);
    },
    [onSelectAddress],
  );

  // Loading and error handling
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">
        My Addresses
      </h2>

      {addresses.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>No addresses available.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {addresses.map((address) => (
            <AddressCard
              key={address._id} // Use unique _id for better key management
              address={address}
              onSelectAddress={handleSelect} // Use memoized select handler
              selected={selectedAddress?._id === address?._id} // Check if the address is selected
              mode="selection" // Pass the mode prop to AddressCard
            />
          ))}
        </div>
      )}
    </div>
  );
};

// Prop validation using PropTypes
AddressList.propTypes = {
  onSelectAddress: PropTypes.func.isRequired,
  selectedAddress: PropTypes.object,
  AddressList: PropTypes.array,
};

export default AddressList;
