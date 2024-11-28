import React from "react";
import uiStyle from "./Cart.module.css";
// import reactLogo from "./assets/logo192.png";
// import { Link } from "react-router-dom";
import ProductImage from "./assets/product-image.png";

const Cart = () => {
  return (
    <>
      {/* main section */}
      <div className="flex justify-center gap-8 mx-14">

          {/* Left Section - Product items in Cart */}
          <div className="w-3/4">
          <h1 className="text-2xl font-bold py-8">Cart</h1>

              {/* item no.1 */}
              <div className="flex">
                  {/* item image */}
                  <img 
                  src={ProductImage}
                  alt="" 
                  className={uiStyle.Product_Image}/>

                  {/* item details */}
                  <div className="mx-4 text-pretty">

                      {/* Title - Price */}
                      <div className="flex justify-between pb-3">
                          <h2 className="text-xl font-bold">Baby Toy Ring Tower</h2>
                          <h2 className="text-xl font-bold text-pink-600">฿500</h2>
                      </div>
                      
                      {/* Detail - Qty */}
                      <p className="pb-3">A classic stacking toy featuring colorful rings of different sizes. It helps develop fine motor skills, hand-eye coordination, and problem-solving abilities.</p>
                      <div className="flex">
                          <p>Qty:</p>
                          <button className="bg-white border border-gray-100">-</button>
                          <span>1</span>
                          <button className="bg-white border border-gray-100">+</button>
                      </div>
                  </div>
              </div>
          </div>

          {/* Right Section - Order Summary */}
          <div className="w-1/4">
          <h1 className="text-2xl font-bold py-8">Order Summary</h1>

              {/* Order Summary Details */}
              <div>
                  <div className="flex justify-between">
                      <h2>Subtotal</h2>
                      <h2>฿1000</h2>
                  </div>
                  <div className="flex justify-between">
                      <h2>Discount</h2>
                      <h2>-฿50</h2>
                  </div>
                  <div className="flex justify-between">
                      <h2>Shipping Fee</h2>
                      <h2>฿29</h2>
                  </div>
              </div>

              {/* Order Summary Total */}
              <div className="flex justify-between my-6">
                  <h2>Total</h2>
                  <h2 className="font-bold">฿921</h2>
              </div>

              {/* CheckOut Button */}
              <button className="bg-white border w-full">CHECKOUT</button>
          </div>

      </div>
    </>
  );
};

export default Cart;
