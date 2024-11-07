import React from "react";
// import uiStyle from "./Shop.module.css";
import reactLogo from "./assets/logo192.png";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-row justify-center">
        <Link to="#" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo" alt="React logo" />
        </Link>
      </div>
      <h1>Shop</h1>
      <div className="card">
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default Shop;
