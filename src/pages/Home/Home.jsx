import React from "react";
import ProductGrid from "./ProductGrid"; // Import ProductGrid component
import uiStyle from "./Home.module.css"; // Import CSS Module for Home styles
import HomeHero from "../../components/layout/HomeHero";

const Home = () => {
  return (
    <div className={uiStyle.home}>
      <HomeHero />
      <section className="p-8 pt-10">
        {/* Title for ProductGrid */}
        <h2 className="mb-8 text-center text-5xl font-bold text-gray-700">
          Recommended
        </h2>

        {/* Product Grid */}
        <ProductGrid />
      </section>
    </div>
  );
};

export default Home;
