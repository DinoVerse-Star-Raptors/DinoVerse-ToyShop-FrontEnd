import React from "react";
import { Link } from "react-router-dom";
import brown from "./assets/images/LOGO_BROWN.png";

export default function SimpleFooter() {
  return (
    <footer>
      <div className="flex w-full flex-col bg-[#6EA1E0] px-6 pb-4 pt-12 text-[#3a311c] md:flex md:items-center md:justify-between"
        id="contactus">
          
        <div className="mb-4 flex w-full justify-between">
          <div className="w-4/12">
            <h1 className="font-bold mb-4 text-xl">About US</h1>
            <p>
              Hi! We are DinoVerse, DinoVerse Star Raptors from the Junior Software Developer Generation Thailand Bootcamp.<br/> It’s a pleasure to meet you. Thank you for visiting our website. Enjoy shopping!
            </p>
          </div>

          <div className="flex w-7/12 pr-36 justify-between">
            <div>
              <h1 className="font-bold mb-5 text-xl">Shop Toys By Categories</h1>
              <div className="flex flex-col gap-2">
                <p>Fine Motor</p>
                <p>Gross Motor</p>
                <p>Musical</p>
                <p>Social</p>
                <p>Creative</p>
                <p>Language</p>
                <p>Emotion</p>
              </div>
            </div>

            <div>
              <h1 className="font-bold mb-5 text-xl">Shop Toys By Age</h1>
              <div className="flex flex-col gap-2">
                <p>0-6M</p>
                <p>6M+</p>
                <p>12M+</p>
                <p>18M+</p>
                <p>2Yrs+</p>
                <p>5Yrs+</p>
              </div>
            </div>

            <div>
              <h1 className="font-bold mb-5 text-xl">Contact</h1>

              <div className="flex flex-col gap-2">
                <div>
                  <p className="font-bold">Chalisa Jaroenrit</p>
                  <p className="text-sm">memee.sks@gmail.com</p>
                </div>

                <div>
                  <p className="font-bold">Phasu Nithiworasakul</p>
                  <p className="text-sm">Makephasu.work@gmail.com</p>
                </div>

                <div>
                  <p className="font-bold">Silayuth Suwanakoot</p>
                  <p className="text-sm">rockysilayuth@gmail.com</p>
                </div>

                <div>
                  <p className="font-bold">Thitikarn Kaewtippanet</p>
                  <p className="text-sm">thitikarn.ktpn@gmail.com</p>
                </div>

                <div>
                  <p className="font-bold">Virachai Wongsena</p>
                  <p className="text-sm">wvirachai@gmail.com</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="flex w-full justify-between border-t-2 border-[#3a311c] pt-4 items-center">
          <span className="text-sm font-bold sm:text-center">
            © 2024{" "}
            <Link to={`${window.location.origin}`} className="hover:underline">
              Dino Verse Team.
            </Link>{" "}
            All Rights Reserved.
          </span>

          <Link to="/" className="min-w-[150px]">
            <img
              src={brown}
              alt="Logo"
              width={149}
              height={33}
              className="max-h-[33px]"
            />
          </Link>
        </div>

        {/* <ul className="mt-3 hidden flex-wrap items-center text-sm font-medium  sm:mt-0 lg:flex">
          <li>
            <Link
              to={`${window.location.origin}/`}
              className="me-4 hover:underline md:me-6"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to={`${window.location.origin}/shop`}
              className="me-4 hover:underline md:me-6"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              to={`${window.location.origin}/contact`}
              className="me-4 hover:underline md:me-6"
            >
              About
            </Link>
          </li> */}
        {/* <li>
            <Link
              to={`${window.location.origin}`}
              className="me-4 hover:underline md:me-6"
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to={`${window.location.origin}`}
              className="me-4 hover:underline md:me-6"
            >
              Licensing
            </Link>
          </li> */}
        {/* <li>
            <a href="#contactus" className="hover:underline">
              Contact
            </a>
          </li> */}
        {/* </ul> */}
      </div>
    </footer>
  );
}
