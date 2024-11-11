import React from "react";
import uiStyle from "./Home.module.css";
import Recommended from "../../components/layout/Recommended";
import HomeCategories from "../../components/layout/HomeCategories";
import HomeShopbyage from "../../components/layout/HomeShopbyage";
import HomeHero from "../../components/layout/HomeHero";

const Home = () => {
  return (
    <div className={`${uiStyle.home}`}>
      {/* <div className={`${uiStyle.hero}`}>
        <h1>Welcome to Our Website</h1>
        <p>Your journey to excellence starts here.</p>
        <button className="cta-button">Get Started</button>
      </div> */}
      {/* Other sections of the homepage can go here */}
      {/* Hero */}
      <HomeHero />
      {/* Recommended */}
      <section className="container mx-auto my-8 ">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-center">Recommended</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <Recommended />
          <Recommended />
          <Recommended />
          <Recommended />
        </div>
      </section>
      {/* Categories */}
      <HomeCategories />
      {/* Shop by age */}
      <HomeShopbyage />
    </div>
  );
};

export default Home;
