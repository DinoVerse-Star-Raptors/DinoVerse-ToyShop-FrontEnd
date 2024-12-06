import React from "react";
import PropTypes from "prop-types";
import { CheckCircle, Circle, MapPin } from "lucide-react"; // Import the MapPin icon for GPS

const AddressCard = ({ address, onSelectAddress, selected, mode }) => {
  return (
    <div
      className={`relative flex items-start justify-between rounded-lg border p-4 shadow-md ${selected ? "border-blue-500" : ""}`}
    >
      {/* GPS Icon - Positioned at the top-right corner */}
      {mode !== "selection" && (
        <div className="absolute right-2 top-2 hidden">
          <MapPin className="h-5 w-5 text-gray-600 hover:text-blue-600" />
        </div>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="mr-3 h-6 w-6 flex-shrink-0 text-blue-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
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
        {/* Render selection button only in 'selection' mode */}
        {mode === "selection" && !selected && (
          <button
            onClick={() => onSelectAddress(address)}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
          >
            <Circle className={`h-5 w-5 ${selected ? "text-blue-500" : ""}`} />
            <span>{selected ? "Selected" : "Select"}</span>
          </button>
        )}

        {/* Render unselect button only in 'selection' mode */}
        {mode === "selection" && selected && (
          <button className="flex items-center space-x-2 text-red-600 hover:text-red-700">
            <CheckCircle className="h-5 w-5 text-red-600" />
            <span>Selected</span>
          </button>
        )}
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
  onSelectAddress: PropTypes.func,
  selected: PropTypes.bool, // Add the selected prop to indicate if this address is selected
  mode: PropTypes.oneOf(["selection", "view"]), // Add the mode prop with valid values
};

export default AddressCard;
