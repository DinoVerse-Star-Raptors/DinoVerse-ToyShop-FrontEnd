import Papa from "papaparse";

const readCsvToJson = async (csvUrl) => {
  try {
    // Fetch the CSV file from the remote URL
    const response = await fetch(csvUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch CSV file");
    }

    // Get the content of the CSV file as text
    const text = await response.text();

    // Parse the CSV text using PapaParse
    const result = Papa.parse(text, {
      header: true, // Use the first row as headers
      skipEmptyLines: true, // Skip empty lines
      dynamicTyping: true, // Automatically detect types of values (e.g. numbers, strings)
    });

    // If parsing is successful, return the parsed data as JSON
    return result.data;
  } catch (error) {
    console.error("Error reading CSV:", error);
    return null;
  }
};

// Example usage:
// const fullImageUrl = `${window.location.origin}/assets/`;
// const csvUrl = `${window.location.origin}/itemList.csv`;
// readCsvToJson(csvUrl).then((jsonData) => {
//   console.log("Parsed CSV Data:", jsonData);
// });
// Function to fetch and parse CSV data
const getCsvData = async () => {
  const csvUrl = `${window.location.origin}/itemList.csv`; // URL to your CSV file
  const data = await readCsvToJson(csvUrl); // Get the data from the CSV
  // console.log("getCsvData", data.length); // Log data if it has only 1 item
  return data; // Return the CSV data
};

const fullImageUrl = `${window.location.origin}/assets/`;
const factors = [
  {
    name: "Auditory",
    icon: `${fullImageUrl}${"icon-ChildDevelopment-Auditory.png"}`,
  },
  {
    name: "Cause & Effect",
    icon: `${fullImageUrl}${"icon-ChildDevelopment-CauseEffect.png"}`,
  },
  {
    name: "Concentration",
    icon: `${fullImageUrl}${"icon-ChildDevelopment-Concentration.png"}`,
  },
  {
    name: "Coordination",
    icon: `${fullImageUrl}${"icon-ChildDevelopment-Coordination.png"}`,
  },
  {
    name: "Creativity",
    icon: `${fullImageUrl}${"icon-ChildDevelopment-Creative.png"}`,
  },
  {
    name: "Emotion",
    icon: `${fullImageUrl}${"icon-ChildDevelopment-Emotion.png"}`,
  },
  {
    name: "Fine Motor",
    icon: `${fullImageUrl}${"icon-ChildDevelopment-FineMotor.png"}`,
  },
  {
    name: "Gross Motor",
    icon: `${fullImageUrl}${"icon-ChildDevelopment-GrossMotor.png"}`,
  },
  {
    name: "Imagination",
    icon: `${fullImageUrl}${"icon-ChildDevelopment-Imagination.png"}`,
  },
  {
    name: "Language & Communication",
    icon: `${fullImageUrl}${"icon-ChildDevelopment-LanguageCommunication.png"}`,
  },
  {
    name: "Musical",
    icon: `${fullImageUrl}${"icon-ChildDevelopment-Musical.png"}`,
  },
  {
    name: "Social",
    icon: `${fullImageUrl}${"icon-ChildDevelopment-text_Social.png"}`,
  },
];
const getRandomFactors = () => {
  const shuffledFactors = factors.sort(() => 0.5 - Math.random());
  return shuffledFactors.slice(0, 5);
};

// Function to map CSV data to ProductCard.propTypes
function mapCsvToProductCard(csvRow) {
  return {
    product: {
      pid: csvRow["Product ID"], // Product ID
      handle: csvRow["Handle"], // Product ID
      name: csvRow["Title"], // Product Title
      rating: parseFloat(csvRow["rating"]), // Product rating (convert to float)
      ageGroup: csvRow["ageGroup"], // Age group
      breadcrumb:
        csvRow["Breadcrumb"] ||
        `Home / Age / ${csvRow["ageGroup"]} / ${csvRow["Title"]}`, // Breadcrumb
      image: csvRow["Image Src"], // Product image URL
      quantity: parseInt(csvRow["quantity"], 0), // Quantity in stock (parse as integer)
      stockStatus: csvRow["stockStatus"], // Stock status (In Stock, etc.)
      description: csvRow["Body HTML"], // Description (Body HTML)
      price: csvRow["Variant Price"], // Product price
      recommendationTag: csvRow["recommendationTag"], // Recommendation tag
      reviewsCount: parseInt(csvRow["reviewsCount"], 0), // Number of reviews (parse as integer)
      starDistribution: [], // Star distribution (parse if exists)
      reviews: [
        {
          reviewer: "Erica",
          rating: Math.floor(Math.random() * 5) + 1,
          date: "03/10/2023",
          title: "Happy",
          comment:
            "My son enjoys playing with the train, but I have to say, the tracks don’t always stay connected when he pushes the train around too quickly. It can be a bit frustrating. It’s a good toy, but it might be better suited for gentle play or older kids.",
        },
        {
          reviewer: "Raelyn",
          rating: Math.floor(Math.random() * 5) + 1,
          date: "04/09/2023",
          title: "Wonderful Gift Idea",
          comment:
            "Bought this as a birthday gift for my nephew, and he loves it! The train set is bright and engaging, and it came in nice packaging, so it felt very special. It’s also safe, with rounded edges on the tracks and no small parts, which I appreciate. Great purchase!",
        },
      ], // Reviews not available in CSV, can be populated manually or from another source
      factors: getRandomFactors(), // Factors not available in CSV, can be populated manually
    },
  };
}

// Function to map CSV data to ProductCard.propTypes
const getAllProduct = async () => {
  const csvData = await getCsvData(); // Fetch CSV data

  // Create an object where each key is the 'pid' and its value is the mapped product data
  const mappedProductCards = csvData.reduce((acc, row) => {
    const mappedProduct = mapCsvToProductCard(row);
    const pid = mappedProduct.product.pid; // Use the 'pid' as the key
    acc[pid] = mappedProduct; // Assign the product to the key based on pid
    return acc;
  }, {});

  // console.log("Mapped products by pid:"); // Log the mapped product cards object
  return mappedProductCards; // Return the object
};

// Call the function to map the products and log the output
// getAllProduct();
// Call the function to map and log the data
// mapAllCsvDataToProductCards();
// export default mapAllCsvDataToProductCards;
export default getAllProduct;
