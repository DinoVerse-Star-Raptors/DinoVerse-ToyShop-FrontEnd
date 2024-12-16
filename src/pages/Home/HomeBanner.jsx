import React from "react";
import Banner from "./assets/Shopbyagepic.jpg";
import { Link } from "react-router-dom";

const HomeBanner = () => {
  return (
    <section className="relative">
      {/* Optionally wrap the banner image with a Link to make it clickable */}
      <Link to="/shop">
        <img
          src={Banner}
          className="h-auto max-h-[700px] w-full object-cover object-center"
          alt="Shop By Age Banner"
        />
      </Link>
    </section>
  );
};

export default HomeBanner;
