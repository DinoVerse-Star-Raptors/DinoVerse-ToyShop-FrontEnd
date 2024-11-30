import React from "react";
import uiStyle from "./Layout.module.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function HomeHero() {
  return (
    <section className={`${uiStyle.HomeHero}`}>
      <div className={`${uiStyle.HomeHeroText}`}>
        <h1>
          Play, Learn
          <br />
          Enjoy & Repeat
        </h1>
        <h3>
          Find your best toys for your children. <br />
          We deliver best of age appropriate toys to your door
        </h3>
        <Link
          to="shop"
          className="transform transition-all duration-300 hover:scale-105"
        >
          Get Your Toy
        </Link>
      </div>
    </section>
  );
}

export default HomeHero;
