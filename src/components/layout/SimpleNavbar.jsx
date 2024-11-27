import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useAuth } from "../../context/AuthContext"; // Adjust the path as needed
import utilStyles from "./Layout.module.css";

function SimpleNavbar() {
  const { user } = useAuth(); // Destructure the user and logout function

  return (
    <header>
      <nav
        className={`relative z-50 w-[100%] bg-white shadow-md ${utilStyles.nav}`}
      >
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-[16px]">
            <div className="flex-shrink-0">
              <Link className="flex items-center" to="/">
                <span className="font-roboto w-[107px] text-left text-[24px] font-medium text-black opacity-100">
                  Dinoverse
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <div className="flex items-center space-x-4">
                {/* Conditionally render links based on whether the user is authenticated */}
                {user ? (
                  <>
                    <Link
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition duration-150 ease-in-out hover:text-gray-900"
                      to="/user/profile"
                    >
                      Profile
                    </Link>
                    <Link
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition duration-150 ease-in-out hover:text-gray-900"
                      to="/user/logout"
                    >
                      Logout
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition duration-150 ease-in-out hover:text-gray-900"
                      to="/login"
                    >
                      Login
                    </Link>
                    <Link
                      className="rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 px-3 py-2 text-sm font-medium text-white transition duration-150 ease-in-out hover:bg-indigo-700"
                      to="/register"
                    >
                      Register
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default SimpleNavbar;
