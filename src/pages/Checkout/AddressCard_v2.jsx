import React from "react";
import PropTypes from "prop-types";
import { CheckCircle, Circle } from "lucide-react"; // Import CheckCircle and XCircle icons from Lucide React

const AddressCard = ({ address, onSelectAddress, selected }) => {
  return (
    <div
      className={`flex items-center justify-between rounded-lg border p-4 shadow-md ${selected ? "border-blue-500" : ""}`}
    >
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
        {!selected && (
          <button
            onClick={() => onSelectAddress(address)}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
          >
            <Circle className={`h-5 w-5 ${selected ? "text-blue-500" : ""}`} />
            <span>{selected ? "Selected" : "Select"}</span>
          </button>
        )}

        {/* Button to unselect the address */}
        {selected && (
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
};

export default AddressCard;
