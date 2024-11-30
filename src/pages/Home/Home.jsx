import React from "react";
import uiStyle from "./Home.module.css"; // Import CSS Module for Home styles
import HomeHero from "../../components/layout/HomeHero";
import HomeRecommend from "./HomeRecommend";
import HomeDev from "./HomeDev";
import HomeBanner from "./HomeBanner";
import HomeAge from "./HomeAge";

const Home = () => {
  return (
    <div className={uiStyle.home}>
      <HomeHero />
      <HomeRecommend />
      <HomeDev />
      <HomeBanner />
      <HomeAge />
    </div>
  );
};

export default Home;
