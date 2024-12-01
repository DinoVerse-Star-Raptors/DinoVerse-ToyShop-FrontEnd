import React from "react";
import PropTypes from "prop-types";

// TagGrid component that displays tags as a grid of pills
const TagGrid = ({ tags }) => {
  const uniqueTags = [...new Set(tags)]; // Ensures the tags are unique

  return (
    <div className="flex flex-wrap gap-3">
      {uniqueTags.map((tag, index) => (
        <span
          key={index}
          className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 transition-colors hover:bg-blue-200"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

// Prop validation for the TagGrid component
TagGrid.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TagGrid;
