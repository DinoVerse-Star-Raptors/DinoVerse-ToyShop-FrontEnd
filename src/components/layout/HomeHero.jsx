import React from "react";
import uiStyle from "./Layout.module.css";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

function HomeHero() {
  return (
    <section className={`${uiStyle.HomeHero}`}>
      {/* <div className={`${uiStyle.HomeHeroText}`}> */}
      <div className= "flex flex-col justify-center p-12 text-left">
        <h1 className="font-bold text-8xl">
          Play, Learn
          <br />
          Enjoy & Repeat
        </h1>
        <h3 className="text-2xl my-10">
          Find your best toys for your children. <br />
          We deliver best of age appropriate toys to your door.
        </h3>
        <Link
          to="shop"
          className="transform transition-all duration-300 hover:scale-105 font-bold text-2xl">
          Get Your Toy
        </Link>
      </div>
    </section>
  );
}

export default HomeHero;
