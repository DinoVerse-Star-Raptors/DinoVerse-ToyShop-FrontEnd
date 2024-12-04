// AddressList.jsx
import React from "react";
import PropTypes from "prop-types";
import AddressCard from "./AddressCard"; // Import the AddressCard component

const AddressList = ({ onSelect, addresses = [] }) => {
  return (
    <div className="mx-auto w-full max-w-4xl py-6">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">
        My Addresses
      </h2>

      {addresses.length === 0 ? (
        <p className="text-center text-gray-500">No addresses available</p>
      ) : (
        <div className="space-y-4">
          {addresses.map((address, index) => (
            <AddressCard key={index} address={address} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  );
};

// Prop validation using PropTypes
AddressList.propTypes = {
  addresses: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      recipientFullName: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      province: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      zipcode: PropTypes.string.isRequired,
      recipientPhone: PropTypes.string.isRequired,
      isDefault: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default AddressList;
