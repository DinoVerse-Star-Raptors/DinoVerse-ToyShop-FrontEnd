import React from "react";
// import { Search, ShoppingCart, Menu } from "lucide-react";
import { Search, ShoppingCart, Menu, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext"; // Adjust the path as needed
import logo from "./assets/images/DinoVerse-logo.png";
import uiStyle from "./Layout.module.css";

export default function Navbar() {
  // const { user } = useAuth(); // Access the user from the Auth context
  const { user, cart } = useAuth(); // Access user and cart from the context

  // Get the total number of items in the cart
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="flex max-h-16 justify-center bg-white shadow-sm">
      <nav className="flex w-full max-w-[1440px] items-center justify-between px-4 py-2">
        <Link
          to="/"
          className="flex min-w-[240px] grow-0 items-center space-x-2"
        >
          <img
            src={logo}
            alt="Logo"
            width={211}
            height={49}
            className="max-h-[49px]"
          />
        </Link>

        <div className="hidden min-h-[19px] w-full min-w-[360px] max-w-[360px] items-center justify-between lg:flex">
          <Link to="/" className="text-black hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" className="text-black hover:text-gray-900">
            About
          </Link>
          <a href="/shop" className="text-black hover:text-gray-900">
            Toys
          </a>
          <a href="/shop?tag=age" className="text-black hover:text-gray-900">
            Age
          </a>
          <Link to="/contact" className="text-black hover:text-gray-900">
            Contact
          </Link>
        </div>

        <div className="hidden lg:flex lg:grow" />

        <div className={`${uiStyle.nav_right}`}>
          <div className={`${uiStyle.search_section}`}>
            <input
              type="search"
              placeholder="Search"
              className="w-full min-w-[125px] border-2 py-1 pl-10 pr-4"
            />
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
          </div>

          {/* <Link to="/cart">
            <ShoppingCart className="h-[24px] min-h-[24px] w-[24px] min-w-[24px] text-gray-600" />
          </Link> */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-[24px] min-h-[24px] w-[24px] min-w-[24px] text-gray-600" />
            {cartItemCount > 0 && (
              <span className="absolute right-[-8px] top-[-8px] flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                {cartItemCount}
              </span>
            )}
          </Link>

          {/* Conditionally render Login/Profile based on user authentication */}
          {user ? (
            <Link
              className="rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 px-3 py-2 text-sm font-medium text-white transition duration-150 ease-in-out hover:bg-indigo-700"
              to="/user"
            >
              {/* Profile */}
              <User className="h-5 w-5 text-white" />
            </Link>
          ) : (
            <Link
              className="rounded-2xl bg-gradient-to-r from-indigo-500 to-blue-500 px-3 py-2 text-sm font-medium text-white transition duration-150 ease-in-out hover:bg-indigo-700"
              to="/login"
            >
              Login
            </Link>
          )}

          <Menu className="h-[36px] min-h-[36px] w-[36px] min-w-[36px] text-gray-600 lg:hidden" />
        </div>
      </nav>
    </header>
  );
}
