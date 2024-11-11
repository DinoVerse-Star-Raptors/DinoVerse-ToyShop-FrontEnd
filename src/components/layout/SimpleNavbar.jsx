import React from "react";
import utilStyles from "./Layout.module.css";

function SimpleNavbar() {
  return (
    <header>
      <nav
        className={`bg-white shadow-md relative z-50 w-[100%] ${utilStyles.nav}`}
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a className="flex items-center" href="/">
                <span className="text-black w-[107px] font-roboto font-medium text-[24px] opacity-100 text-left">
                  Dinoverse
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <div className="flex items-center space-x-4">
                <a
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                  href="/login/"
                >
                  Log In
                </a>
                <a
                  className="bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl text-white hover:bg-indigo-700 px-3 py-2 text-sm font-medium transition duration-150 ease-in-out"
                  href="/register/"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default SimpleNavbar;
