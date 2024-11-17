import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios
import AgeCard from "./AgeCard"; // Import AgeCard component

const AgeTagSection = () => {
  const [ageTags, setAgeTags] = useState([]); // State to store age tags
  const [loading, setLoading] = useState(true); // State for loading
  const [error, setError] = useState(null); // State to handle errors

  // Fetch data from API using Axios
  useEffect(() => {
    const fetchAgeTags = async () => {
      try {
        const response = await axios.get(
          "https://dinothink.vercel.app/api/age-tags",
        );
        setAgeTags(response.data); // Set the fetched data into state
      } catch (error) {
        setError(error.message); // Set error message in case of failure
      } finally {
        setLoading(false); // Set loading to false after the fetch is complete
      }
    };

    fetchAgeTags();
  }, []); // Empty dependency array ensures this runs once when the component mounts

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="mb-8 text-center text-3xl font-bold">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h2 className="mb-8 text-center text-3xl font-bold text-red-500">
          Error: {error}
        </h2>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <h2 className="mb-8 text-center text-3xl font-bold">Shop Toys By Age</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {ageTags.map(({ handle, name, imageUrl }) => (
          <AgeCard
            key={handle} // Use the handle as the unique key
            handle={handle}
            name={name}
            imageUrl={imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default AgeTagSection;

// import React from "react";
// import AgeCard from "./AgeCard"; // Import the AgeCard component

// The provided data (could come from an API or external file)
// const data = [
//   {
//     _id: "67387a328bac7fb5aa98f1b3",
//     handle: "fine-motor",
//     name: "Fine Motor",
//     tagNumber: 124,
//     isActive: true,
//     parentTagNumber: 107,
//     imageUrl:
//       "https://cdn.shopify.com/s/files/1/0608/9618/2503/files/Icon_ChildDev-08_FineMotor.2d219be.svg?v=1638866543",
//     isDefaultParent: false,
//     relativeHandle: ["child-development", "physical-dev"],
//     description: "",
//     createdAt: "2024-11-16T10:55:46.320Z",
//     updatedAt: "2024-11-16T10:55:46.320Z",
//   },
//   {
//     _id: "67387a328bac7fb5aa98f1b5",
//     handle: "gross-motor",
//     name: "Gross Motor",
//     tagNumber: 125,
//     isActive: true,
//     parentTagNumber: 107,
//     imageUrl:
//       "https://cdn.shopify.com/s/files/1/0608/9618/2503/files/Icon_ChildDev-09_GrossMotor.f9642d2.svg?v=1638866543",
//     isDefaultParent: false,
//     relativeHandle: ["child-development", "physical-dev"],
//     description: "",
//     createdAt: "2024-11-16T10:55:46.322Z",
//     updatedAt: "2024-11-16T10:55:46.322Z",
//   },
//   {
//     _id: "67387a328bac7fb5aa98f1c3",
//     handle: "musical",
//     name: "Musical",
//     tagNumber: 132,
//     isActive: true,
//     parentTagNumber: 107,
//     imageUrl:
//       "https://cdn.shopify.com/s/files/1/0608/9618/2503/files/Icon_ChildDev-16_Musical.e798fb0.svg?v=1638869694",
//     isDefaultParent: false,
//     relativeHandle: ["child-development", "social-and-emotional-dev"],
//     description: "",
//     createdAt: "2024-11-16T10:55:46.400Z",
//     updatedAt: "2024-11-16T10:55:46.400Z",
//   },
//   {
//     _id: "67387a328bac7fb5aa98f1c5",
//     handle: "social",
//     name: "Social",
//     tagNumber: 133,
//     isActive: true,
//     parentTagNumber: 107,
//     imageUrl:
//       "https://cdn.shopify.com/s/files/1/0608/9618/2503/files/Icon_ChildDev-19_ocial.315423f.svg?v=1638869694",
//     isDefaultParent: false,
//     relativeHandle: ["child-development", "social-and-emotional-dev"],
//     description: "",
//     createdAt: "2024-11-16T10:55:46.402Z",
//     updatedAt: "2024-11-16T10:55:46.402Z",
//   },
//   {
//     _id: "67387a328bac7fb5aa98f1cf",
//     handle: "creative",
//     name: "Creative",
//     tagNumber: 138,
//     isActive: true,
//     parentTagNumber: 107,
//     imageUrl:
//       "https://cdn.shopify.com/s/files/1/0608/9618/2503/files/Icon_ChildDev-05_Creative.b032348.svg?v=1638870238",
//     isDefaultParent: false,
//     relativeHandle: ["child-development", "intellectual-dev"],
//     description: "",
//     createdAt: "2024-11-16T10:55:46.442Z",
//     updatedAt: "2024-11-16T10:55:46.442Z",
//   },
//   {
//     _id: "67387a328bac7fb5aa98f1db",
//     handle: "language-and-communications",
//     name: "Language",
//     tagNumber: 144,
//     isActive: true,
//     parentTagNumber: 107,
//     imageUrl:
//       "https://cdn.shopify.com/s/files/1/0608/9618/2503/files/Icon_ChildDev-11_LanguageCommunication.1c3d631.svg?v=1638870667",
//     isDefaultParent: false,
//     relativeHandle: ["child-development", "language-dev"],
//     description: "",
//     createdAt: "2024-11-16T10:55:46.486Z",
//     updatedAt: "2024-11-16T10:55:46.486Z",
//   },
//   {
//     _id: "67387a328bac7fb5aa98f1c1",
//     handle: "emotion",
//     name: "Emotion",
//     tagNumber: 131,
//     isActive: true,
//     parentTagNumber: 107,
//     imageUrl:
//       "https://cdn.shopify.com/s/files/1/0608/9618/2503/files/Icon_ChildDev-06_Emotion.7a0ac93.svg?v=1638869694",
//     isDefaultParent: false,
//     relativeHandle: ["child-development", "social-and-emotional-dev"],
//     description: "",
//     createdAt: "2024-11-16T10:55:46.380Z",
//     updatedAt: "2024-11-16T10:55:46.380Z",
//   },
// ];

// const AgeTagSection = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h2 className="mb-8 text-center text-3xl font-bold">
//         Shop By Development Category
//       </h2>

//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//         {data.map(({ handle, name, imageUrl, _id }) => (
//           <AgeCard
//             key={_id} // Use the handle as the key
//             handle={handle}
//             name={name}
//             imageUrl={imageUrl}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AgeTagSection;
