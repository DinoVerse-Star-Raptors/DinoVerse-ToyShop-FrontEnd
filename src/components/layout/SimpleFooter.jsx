import React from "react";
import { Link } from "react-router-dom";

export default function SimpleFooter() {
  return (
    <footer>
      <div className="w-full px-6 py-4 md:flex md:items-center md:justify-between bg-gray-700">
        <span className="text-sm  text-white sm:text-center">
          © 2024{" "}
          <Link to="#" className="hover:underline">
            Dino Verse Team.{" "}
          </Link>
          All Rights Reserved.
        </span>
        <ul className="hidden flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0 lg:flex">
          <li>
            <Link to="/about" className="hover:underline me-4 md:me-6">
              About
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:underline me-4 md:me-6">
              Licensing
            </Link>
          </li>
          <li>
            <Link to="/login/" className="hover:underline me-4 md:me-6">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register/" className="hover:underline me-4 md:me-6">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
