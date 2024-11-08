import React from "react";
import uiStyle from "./Home.module.css";

const Home = () => {
  return (
    <div className={`${uiStyle.home}`}>
       {/* >>> .home in file */}
      <div className={`${uiStyle.hero}`}>
        <h1>Welcome to Our Website</h1>
        <p>Your journey to excellence starts here.</p>
        <button className="cta-button">Get Started</button>
      </div>
      {/* Other sections of the homepage can go here */}
    </div>
  );
};

export default Home;
