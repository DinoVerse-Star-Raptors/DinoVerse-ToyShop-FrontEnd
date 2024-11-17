import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AgeCard = ({ handle, name, imageUrl }) => {
  return (
    <div
      key={handle}
      className="relative mx-auto mb-4 w-full overflow-hidden p-3 hover:translate-y-[-10px] md:max-w-[240px]"
    >
      {/* Link to navigate to the individual development page using the handle */}
      <Link to={`/exam-shop/${handle}`} rel="noopener noreferrer">
        {/* Image for the Age Card */}
        <img
          src={imageUrl}
          alt={name}
          className="aspect-square w-full rounded-full object-cover shadow-lg transition-all duration-300" // Ensure the image covers the whole card
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

// Define prop types for AgeCard
AgeCard.propTypes = {
  handle: PropTypes.string.isRequired, // Unique identifier for the category
  name: PropTypes.string.isRequired, // The name of the category
  imageUrl: PropTypes.string.isRequired, // A single image URL for the card
};

export default AgeCard;

// import React from "react";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

// const AgeCard = ({ handle, name, imageUrl }) => {
//   return (
//     <div
//       key={handle}
//       className="relative transform overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105"
//     >
//       {/* The link to navigate to the individual development page using the handle */}
//       <Link
//         to={`/exam-shop/${handle}`}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         {/* Image for the Age Card */}
//         <img src={imageUrl} alt={name} className="h-64 w-full object-contain" />
//         {/* Overlay with text */}
//         <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <span className="text-2xl font-bold text-white">{name}</span>
//         </div>
//       </Link>
//     </div>
//   );
// };

// // Define prop types for AgeCard
// AgeCard.propTypes = {
//   handle: PropTypes.string.isRequired, // Unique identifier for the category
//   name: PropTypes.string.isRequired, // The name of the category
//   imageUrl: PropTypes.string.isRequired, // The URL of the image to display
// };

// export default AgeCard;
