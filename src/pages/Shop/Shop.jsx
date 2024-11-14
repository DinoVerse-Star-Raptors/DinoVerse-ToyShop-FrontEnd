import React from "react";
// import uiStyle from "./Shop.module.css";
import reactLogo from "./assets/logo192.png";
import { Link } from "react-router-dom";
import Fillter from "../../components/product/Fillter";
import { Products } from "../../components/product/Products";
import { Buttons } from "@testing-library/user-event/dist/cjs/system/pointer/buttons.js";

export const Shop = () => {
  return (
    <div className=" flex">
      <Fillter />
      <Products />
    </div>
  );
};

export default Shop;
