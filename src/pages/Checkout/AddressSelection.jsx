import React from "react";
import PropTypes from "prop-types";

const AddressSelection = ({ onAddressForm, onUseDefault, onOtherAddress }) => {
  return (
    <div className="mb-4 flex w-full items-center">
      <div className="flex gap-2">
        {/* Button to Add Address */}
        <button
          onClick={onAddressForm}
          className="hidden rounded-lg bg-teal-500 px-4 py-2 font-medium text-white transition-colors hover:bg-teal-600"
        >
          Address Form
        </button>

        {/* Button to Use Default Address */}
        <button
          onClick={onUseDefault}
          className="rounded-lg bg-green-500 px-4 py-2 font-medium text-white transition-colors hover:bg-green-600"
        >
          Use Default Address
        </button>

        {/* Button for Other Address */}
        <button
          onClick={onOtherAddress}
          className="rounded-lg bg-orange-500 px-4 py-2 font-medium text-white transition-colors hover:bg-orange-600"
        >
          Select Existing Address
        </button>
      </div>
    </div>
  );
};

// Prop validation
AddressSelection.propTypes = {
  onAddressForm: PropTypes.func.isRequired,
  onUseDefault: PropTypes.func.isRequired,
  onOtherAddress: PropTypes.func.isRequired,
};

export default AddressSelection;
