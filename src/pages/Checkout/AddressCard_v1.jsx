// AddressCard.jsx
import React from "react";
import PropTypes from "prop-types";
import { CheckCircle } from "lucide-react"; // Import the CheckCircle icon from Lucide React

const AddressCard = ({ address, onSelect }) => {
  return (
    <div className="flex items-center justify-between rounded-lg border p-4 shadow-md">
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800">
          {address.recipientFullName}
        </h3>
        <p className="text-sm text-gray-600">
          {address.address}, {address.province}, {address.country} -{" "}
          {address.zipcode}
        </p>
        <p className="text-sm text-gray-600">Phone: {address.recipientPhone}</p>
        {address.isDefault && (
          <span className="text-sm text-green-600">Default Address</span>
        )}
      </div>

      <div className="flex items-center space-x-4">
        <button
          onClick={() => onSelect(address)}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
        >
          <CheckCircle className="h-5 w-5" />
          <span>Select</span>
        </button>
      </div>
    </div>
  );
};

// Prop validation using PropTypes
AddressCard.propTypes = {
  address: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    recipientFullName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    province: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    zipcode: PropTypes.string.isRequired,
    recipientPhone: PropTypes.string.isRequired,
    isDefault: PropTypes.bool.isRequired,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default AddressCard;
