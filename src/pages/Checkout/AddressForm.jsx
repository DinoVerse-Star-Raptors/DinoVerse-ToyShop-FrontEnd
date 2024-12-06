import React, { useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes for prop validation
import axiosInstance from "../../services/axiosInstance"; // Import axiosInstance

const AddressForm = ({ onSubmit, selectedAddress = {} }) => {
  // Set initial state to selectedAddress or default values
  const [address, setAddress] = useState({});

  const [errors, setErrors] = useState({}); // To store validation errors
  const [isSubmitting, setIsSubmitting] = useState(false); // For showing loading state

  // Sync address state if selectedAddress changes
  useEffect(() => {
    setAddress({
      address: selectedAddress?.address || "123 Main St",
      province: selectedAddress?.province || "Si Sa Ket",
      country: selectedAddress?.country || "Thailand",
      zipcode: selectedAddress?.zipcode || "33110",
      recipientFullName: selectedAddress?.recipientFullName || "John Doe",
      recipientPhone: selectedAddress?.recipientPhone || "0812345678",
      isDefault: selectedAddress?.isDefault || false,
    });
  }, [selectedAddress]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    // Validate required fields and minimum lengths
    if (!address?.recipientFullName || address?.recipientFullName.length < 3) {
      newErrors.recipientFullName =
        "Recipient full name should be at least 3 characters";
    }

    if (!address?.address || address?.address.length < 3) {
      newErrors.address = "Street address should be at least 3 characters";
    }

    if (!address?.province || address?.province.length < 2) {
      newErrors.province = "Province should be at least 2 characters";
    }

    if (!address?.country || address?.country.length < 2) {
      newErrors.country = "Country should be at least 2 characters";
    }

    if (!address?.zipcode || !/^[1-9][0-9]{4}$/.test(address?.zipcode)) {
      newErrors.zipcode = "Please provide a valid 5-digit postal code";
    }

    if (
      !address?.recipientPhone ||
      !/^(0[1-9]{1})\d{8}$/.test(address?.recipientPhone)
    ) {
      newErrors.recipientPhone = "Please provide a valid Thai phone number";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      // If no errors, submit the form
      try {
        setIsSubmitting(true); // Start submitting

        // Make the POST request to validate the address using axios
        const response = await axiosInstance.post(
          "/api/validate/address",
          address,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        // If the response is successful, pass the address and response data to onSubmit
        if (response.status === 200) {
          onSubmit(address); // Pass the address to the parent component
          setErrors({}); // Reset errors if submission was successful
        }
      } catch (error) {
        // Handle errors (either from the server or network)
        if (error.response) {
          setErrors(
            error.response.data.errors || { network: "Something went wrong" },
          );
        } else if (error.request) {
          setErrors({
            network: "No response from the server. Please try again later.",
          });
        } else {
          setErrors({ network: "An error occurred while making the request." });
        }
      } finally {
        setIsSubmitting(false); // Stop submitting
      }
    } else {
      setErrors(validationErrors); // Show validation errors
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">
        Shipping Address Form
      </h2>

      <div>
        <label htmlFor="recipientFullName" className="block text-gray-700">
          Recipient Full Name
        </label>
        <input
          type="text"
          id="recipientFullName"
          name="recipientFullName"
          value={address?.recipientFullName || ""}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-2"
          required
        />
        {errors?.recipientFullName && (
          <p className="text-sm text-red-600">{errors?.recipientFullName}</p>
        )}
      </div>

      <div>
        <label htmlFor="recipientPhone" className="block text-gray-700">
          Recipient Phone Number
        </label>
        <input
          type="text"
          id="recipientPhone"
          name="recipientPhone"
          value={address?.recipientPhone || ""}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-2"
          required
        />
        {errors?.recipientPhone && (
          <p className="text-sm text-red-600">{errors?.recipientPhone}</p>
        )}
      </div>

      <div>
        <label htmlFor="address" className="block text-gray-700">
          Address
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={address?.address || ""}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-2"
          required
        />
        {errors?.address && (
          <p className="text-sm text-red-600">{errors?.address}</p>
        )}
      </div>

      <div>
        <label htmlFor="province" className="block text-gray-700">
          Province
        </label>
        <input
          type="text"
          id="province"
          name="province"
          value={address?.province || ""}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-2"
          required
        />
        {errors?.province && (
          <p className="text-sm text-red-600">{errors?.province}</p>
        )}
      </div>

      <div>
        <label htmlFor="country" className="block text-gray-700">
          Country
        </label>
        <input
          type="text"
          id="country"
          name="country"
          value={address?.country || ""}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-2"
          required
        />
        {errors?.country && (
          <p className="text-sm text-red-600">{errors?.country}</p>
        )}
      </div>

      <div>
        <label htmlFor="zipcode" className="block text-gray-700">
          Postal Code
        </label>
        <input
          type="text"
          id="zipcode"
          name="zipcode"
          value={address?.zipcode || ""}
          onChange={handleChange}
          className="w-full rounded-lg border px-4 py-2"
          required
        />
        {errors?.zipcode && (
          <p className="text-sm text-red-600">{errors?.zipcode}</p>
        )}
      </div>

      <div className="hidden">
        <label
          htmlFor="isDefault"
          className="inline-flex items-center text-gray-700"
        >
          <input
            type="checkbox"
            id="isDefault"
            name="isDefault"
            checked={address?.isDefault || false}
            onChange={(e) =>
              setAddress({ ...address, isDefault: e.target.checked })
            }
            className="mr-2"
          />
          Set as default address
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-4 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
      >
        {isSubmitting ? "Submitting..." : "Save Address"}
      </button>

      {errors?.network && (
        <p className="mt-2 text-sm text-red-600">{errors?.network}</p>
      )}
    </form>
  );
};

// Prop validation using PropTypes
AddressForm.propTypes = {
  onSubmit: PropTypes.func.isRequired, // onSubmit must be a function and is required
  selectedAddress: PropTypes.shape({
    address: PropTypes.string,
    province: PropTypes.string,
    country: PropTypes.string,
    zipcode: PropTypes.string,
    recipientFullName: PropTypes.string,
    recipientPhone: PropTypes.string,
    isDefault: PropTypes.bool,
  }), // selectedAddress must be an object with the right shape
};

export default AddressForm;
