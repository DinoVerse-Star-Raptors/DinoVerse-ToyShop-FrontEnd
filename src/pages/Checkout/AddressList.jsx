import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios"; // Import axios
import AddressCard from "./AddressCard"; // Import the AddressCard component

const AddressList = ({ onSelectAddress, selectedAddress = {} }) => {
  const [addresses, setAddresses] = useState([]); // State to store the addresses
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch addresses on component mount
  useEffect(() => {
    // const fetchAddresses = async () => {
    //   try {
    //     const response = await axios.get("/api/address"); // Make the GET request
    //     setAddresses(response.data); // Assuming the API returns an array of addresses
    //     setLoading(false); // Stop loading when data is fetched
    //   } catch (error) {
    //     setError("Failed to fetch addresses"); // Handle error
    //     setLoading(false); // Stop loading
    //   }
    // };

    // console.log("selectedAddress", selectedAddress, setError === useCallback);

    const fetchAddresses = async () => {
      setError(null);
      try {
        const response = await axios.get("/api/address"); // Make the GET request
        const sortedAddresses = response.data.sort((a, b) => {
          // Ensure default address is at the top
          if (a.isDefault === b.isDefault) {
            return 0;
          }
          return a.isDefault ? -1 : 1;
        });
        setAddresses(sortedAddresses); // Set sorted addresses
        setLoading(false); // Stop loading when data is fetched
      } catch (error) {
        // Mock data to be used when the API request fails

        const mockData = [
          // {
          //   _id: "a",
          //   address: "123 Main St",
          //   province: "Si Sa Ket",
          //   country: "Thailand",
          //   zipcode: "33110",
          //   recipientFullName: "John Doe",
          //   recipientPhone: "0812345678",
          //   isDefault: false,
          // },
          {
            _id: "b",
            address: "456 Oak Rd",
            province: "Bangkok",
            country: "Thailand",
            zipcode: "10110",
            recipientFullName: "Jane Smith",
            recipientPhone: "0923456789",
            isDefault: false,
          },
          {
            _id: "c",
            address: "789 Pine Ave",
            province: "Chiang Mai",
            country: "Thailand",
            zipcode: "50200",
            recipientFullName: "Alice Brown",
            recipientPhone: "0819876543",
            isDefault: true, // This is the default address
          },
          {
            _id: "d",
            address: "101 Maple Blvd",
            province: "Phuket",
            country: "Thailand",
            zipcode: "83110",
            recipientFullName: "Bob White",
            recipientPhone: "0931234567",
            isDefault: false,
          },
          {
            _id: "e",
            address: "202 Birch St",
            province: "Khon Kaen",
            country: "Thailand",
            zipcode: "40000",
            recipientFullName: "Eve Green",
            recipientPhone: "0854567890",
            isDefault: false,
          },
          {
            _id: "f",
            address: "303 Cedar Ln",
            province: "Songkhla",
            country: "Thailand",
            zipcode: "90000",
            recipientFullName: "Chris Black",
            recipientPhone: "0876543210",
            isDefault: false,
          },
        ];

        // Sort the mock data so default address comes first
        const sortedMockData = mockData.sort((a, b) => {
          if (a.isDefault === b.isDefault) {
            return 0;
          }
          return a.isDefault ? -1 : 1;
        });

        setAddresses(sortedMockData); // Set sorted mock data
        setLoading(false); // Stop loading
      }
    };

    fetchAddresses();
  }, [selectedAddress]); // Empty dependency array ensures this runs only once when the component mounts

  // Memoize the onSelectAddress function to avoid unnecessary re-renders
  // const handleSelect = useCallback(
  //   (address) => {
  //     onSelectAddress(address);
  //   },
  //   [onSelectAddress],
  // );

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
              onSelectAddress={onSelectAddress}
              selected={selectedAddress?._id === address?._id} // Pass the selected prop
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
  onSelectAddress: PropTypes.func,
  selectedAddress: PropTypes.object, // Ensure it's an object, and optionally set a default
};

AddressList.defaultProps = {
  selectedAddress: {}, // Provide a default empty object for selectedAddress if not provided
};

export default AddressList;
