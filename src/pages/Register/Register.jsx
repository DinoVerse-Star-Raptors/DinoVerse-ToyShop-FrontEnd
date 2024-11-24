import React from "react";
// import { Eye, EyeOff, User } from "lucide-react";
import { Eye, User } from "lucide-react";
import SimpleNavbar from "../../components/layout/SimpleNavbar";
import SimpleFooter from "../../components/layout/SimpleFooter";
import uiStyle from "./Register.module.css";

function Register() {
  return (
    <>
      <header>
        <SimpleNavbar />
      </header>
      <main className={`mt-[64px] min-h-svh max-w-[1440px] ${uiStyle.mx_auto}`}>
        <section className="flex justify-center py-[64px]">
          <div className="w-full max-w-[768px]">
            <div className="flex-col items-center justify-start text-center">
              <h1 className="font-roboto text-center text-[32px] font-normal text-black">
                Let’s get you started
              </h1>
              <p className="font-roboto p-[32px] text-center text-[16px] font-normal text-black">
                Enter the detail to get going
              </p>
            </div>

            <div className="flex-col items-center justify-start text-center">
              <form className="w-full py-[24px]">
                <div>
                  <div className="mt-1 flex items-center justify-start">
                    <div className="relative mr-8">
                      <div className="flex h-32 max-h-[105px] w-32 max-w-[105px] items-center justify-center rounded-full bg-gray-100 ring-4 ring-gray-50">
                        <User className="h-16 w-16 text-gray-300" />
                      </div>
                    </div>

                    <div className="mt-1 flex grow flex-col justify-start">
                      <label
                        htmlFor="username"
                        className="block text-left text-sm font-medium text-gray-700"
                      >
                        Username
                      </label>
                      <input
                        id="username"
                        name="username"
                        type="text"
                        required
                        maxLength="255"
                        minLength="5"
                        autoComplete="off"
                        placeholder="mark"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="email"
                      className="block text-left text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="off"
                      required
                      maxLength="255"
                      minLength="5"
                      placeholder="you@example.com"
                      pattern="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="fullName"
                      className="block text-left text-sm font-medium text-gray-700"
                    >
                      Full Name
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      maxLength="255"
                      minLength="5"
                      autoComplete="off"
                      placeholder="Mark Zuckerberg"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                    />
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="password"
                      className="block text-left text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="relative mt-1">
                      <input
                        id="password"
                        name="password"
                        // type={false ? "text" : "password"}
                        type="text"
                        required
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                        maxLength="255"
                        minLength="8"
                        autoComplete="off"
                        placeholder="New password"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center bg-transparent pr-3 hover:border-transparent"
                      >
                        {/* {0 ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )} */}
                        <Eye className="h-4 w-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-left text-sm font-medium text-gray-700"
                    >
                      Confirm Password
                    </label>
                    <div className="relative mt-1">
                      <input
                        id="confirmPassword"
                        name="confirmPassword"
                        // type={false ? "text" : "password"}
                        type="text"
                        required
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                        maxLength="255"
                        minLength="8"
                        autoComplete="off"
                        placeholder="Confirm new password"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center bg-transparent pr-3 hover:border-transparent"
                      >
                        {/* {0 ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )} */}
                        <Eye className="h-4 w-4 text-gray-400" />
                      </button>
                    </div>
                  </div>
                  <div className="my-6 flex justify-center">
                    <button
                      type="submit"
                      className="flex w-full max-w-[100px] justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <SimpleFooter />
      </footer>
    </>
  );
}

export default Register;
