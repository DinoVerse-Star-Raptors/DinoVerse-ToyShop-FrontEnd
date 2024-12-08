import React from "react";
import { Link } from "react-router-dom";

export default function SimpleFooter() {
  return (
    <footer>
      <div
        className="w-full bg-gray-700 px-6 py-4 md:flex md:items-center md:justify-between"
        id="contactus"
      >
        <span className="text-sm text-white sm:text-center">
          © 2024{" "}
          <Link to={`${window.location.origin}`} className="hover:underline">
            Dino Verse Team.
          </Link>{" "}
          All Rights Reserved.
        </span>

        <ul className="mt-3 hidden flex-wrap items-center text-sm font-medium text-white sm:mt-0 lg:flex">
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
          </li>
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
        </ul>
      </div>
    </footer>
  );
}
