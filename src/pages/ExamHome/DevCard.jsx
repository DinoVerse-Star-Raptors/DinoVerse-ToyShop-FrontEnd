import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DevCard = ({ handle, name, imageUrl }) => {
  return (
    <div
      key={handle}
      className="relative mx-auto mb-4 w-full overflow-hidden p-3 hover:translate-y-[-10px] md:max-w-[220px]"
    >
      {/* Link to navigate to the individual development page using the handle */}
      <Link to={`/exam-shop/${handle}`} rel="noopener noreferrer">
        {/* Image for the Age Card */}
        <img
          src={imageUrl}
          alt={name}
          className="aspect-square w-full rounded-l-md object-cover duration-300" // Ensure the image covers the whole card
        />
        {/* Overlay with text at the bottom */}
        <div className="w-full py-2 text-center">
          <span className="font-bold text-gray-600">{name}</span>
        </div>
        {/* <div className="absolute bottom-0 w-full bg-black bg-opacity-50 py-2 text-center">
          <span className="text-lg font-bold text-white">{name}</span>
        </div> */}
      </Link>
    </div>
  );
};

// Define prop types for DevCard
DevCard.propTypes = {
  handle: PropTypes.string.isRequired, // Unique identifier for the category
  name: PropTypes.string.isRequired, // The name of the category
  imageUrl: PropTypes.string.isRequired, // A single image URL for the card
};

export default DevCard;
