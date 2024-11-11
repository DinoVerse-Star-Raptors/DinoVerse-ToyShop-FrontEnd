import React from "react";
// import uiStyle from "./Cart.module.css";
import reactLogo from "./assets/logo192.png";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <main className="min-h-svh mt-16 py-2 max-w-[1440px] mx-auto px-4">
        <h1 className="text-3xl">Cart</h1>

          {/* main section */}
          <div className="flex gap-4 mt-4">

              {/* Left Section - Product items in Cart */}
              <div className="w-[500px]">

                  {/* item no.1 */}
                  <div className="flex border">
                      {/* item image */}
                      <img 
                      src={ProductImage}
                      alt="" 
                      className={utilStyles.Product_Image}/>

                      {/* item details */}
                      <div className="ml-4 text-wrap">

                          {/* Title - Price */}
                          <div className="flex">
                              <h2 className="text-2xl">Baby Toy Ring Tower</h2>
                              <h2 className="text-2xl">฿500</h2>
                          </div>
                          
                          <p>A classic stacking toy featuring colorful rings of different sizes. It helps develop fine motor skills, hand-eye coordination, and problem-solving abilities.</p>
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
              <div className="border w-[300px] p-4">
                  <h2 className="text-2xl border-b">ORDER SUMMARY</h2>

                  {/* Order Summary Details */}
                  <div>
                      <div className="flex">
                          <h2>Subtotal</h2>
                          <h2>฿1000</h2>
                      </div>
                      <div className="flex">
                          <h2>Discount</h2>
                          <h2>-฿50</h2>
                      </div>
                      <div className="flex">
                          <h2>Shipping Fee</h2>
                          <h2>฿29</h2>
                      </div>
                  </div>

                  {/* Order Summary Total */}
                  <div className="flex">
                      <h2>Total</h2>
                      <h2>฿921</h2>
                  </div>

                  {/* CheckOut Button */}
                  <button className="bg-white border">CHECKOUT</button>
              </div>

            </div>
        </main>
    </>
  );
};

export default Cart;
