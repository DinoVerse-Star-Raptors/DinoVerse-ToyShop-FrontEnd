import React from "react";
import ProductGrid from "./ProductGrid"; // Import ProductGrid component
import uiStyle from "./Home.module.css"; // Import CSS Module for Home styles
import HomeHero from "../../components/layout/HomeHero";

const Home = () => {
  return (
    <div className={uiStyle.home}>
      <section>
        <HomeHero />
      </section>
      <section className="bg-gray-50 px-4 py-8">
        {/* Title for ProductGrid */}
        <h2 className="mb-8 text-center text-4xl font-bold text-gray-800">
          Recommended
        </h2>

        {/* Product Grid */}
        <ProductGrid />
      </section>
    </div>
  );
};

export default Home;
