// factorsDev.js
import factorsImage from "./factorsImage"; // Assuming you have this image data in a separate file
import categoriesOfInterest from "./categoriesOfInterest"; // Assuming you have categoriesOfInterest data in a separate file

// This function filters and returns factors for child development
const factorsDev = (tags) => {
  return (tags || [])
    .filter((factor) => categoriesOfInterest.includes(factor))
    .map((factor) => {
      const factorObj = factorsImage.find((item) => item.name === factor);
      return factorObj
        ? { name: factorObj.name, imageUrl: factorObj.icon }
        : null;
    })
    .filter(Boolean); // Filter out any null values if no matching icon was found
};

export default factorsDev;
