import React from "react";
import ProductGrid from "./ProductGrid"; // Import ProductGrid component

const HomeRecommend = () => {
  return (
    <section className="p-8">
      {/* Title for ProductGrid */}
      <h2 className="mb-12 text-center text-5xl font-bold text-gray-700">
        Recommended
      </h2>

      {/* Product Grid */}
      <ProductGrid />
    </section>
  );
};

export default HomeRecommend;
