import React from "react";
import uiStyle from "./Layout.module.css";

function HomeHero() {
  return (
    <section className={`${uiStyle.HomeHero}`}>
      <div className={`${uiStyle.HomeHeroText}`}>
        <h1>
          Play, Learn <br />
          Enjoy & Repeat
        </h1>
        <h3>
          Find your best toys for your children. <br />
          We deliver best of age appropriate toys to your door
        </h3>
        <a href="shop">Get Your Toy</a>
      </div>
      <div></div>
    </section>
  );
}

export default HomeHero;
