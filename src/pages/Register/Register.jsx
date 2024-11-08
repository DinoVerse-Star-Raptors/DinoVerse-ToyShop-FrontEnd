import React from "react";
// import uiStyle from "./Register.module.css";
// import reactLogo from "./assets/logo192.png";
// import { Link } from "react-router-dom";
// import { Eye, EyeOff, User } from "lucide-react";
import { Eye, User } from "lucide-react";
import SimpleNavbar from "../../components/layout/SimpleNavbar";
import SimpleFooter from "../../components/layout/SimpleFooter";

// const Register = () => {
//   return (
//     <div className="flex flex-col items-center">
//       <div className="flex flex-row justify-center">
//         <Link to="#" target="_blank" rel="noreferrer">
//           <img src={reactLogo} className="logo" alt="React logo" />
//         </Link>
//       </div>
//       <h1>Register</h1>
//       <div className="card">
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   );
// };

function Register() {
  return (
    <>
      <header>
        <SimpleNavbar />
      </header>
      <main className="mt-[64px]">
        <section className="py-[64px] flex justify-center">
          <div className="w-full max-w-[768px]">
            <div className="flex-col justify-start items-center text-center">
              <h1 className="text-black font-roboto font-normal text-[32px] text-center">
                Let’s get you started
              </h1>
              <p className="text-black font-roboto font-normal text-[16px] p-[32px] text-center ">
                Enter the detail to get going
              </p>
            </div>

            <div className="flex-col justify-start items-center text-center">
              <form className="w-full py-[24px]">
                <div>
                  <div className="mt-1 flex justify-start items-center">
                    <div className="relative mr-8">
                      <div className="h-32 w-32 max-w-[105px] max-h-[105px] rounded-full bg-gray-100 flex items-center justify-center ring-4 ring-gray-50">
                        <User className="h-16 w-16 text-gray-300" />
                      </div>
                    </div>

                    <div className="mt-1 flex flex-col justify-start grow">
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700 text-left"
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
                        placeholder="Mark Zuckerberg"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 text-left"
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
                      className="block text-sm font-medium text-gray-700 text-left"
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
                      className="block text-sm font-medium text-gray-700 text-left"
                    >
                      Password
                    </label>
                    <div className="mt-1 relative">
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
                        className="absolute inset-y-0 right-0 flex items-center pr-3 bg-transparent hover:border-transparent"
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
                      className="block text-sm font-medium text-gray-700 text-left"
                    >
                      Confirm Password
                    </label>
                    <div className="mt-1 relative">
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
                        className="absolute inset-y-0 right-0 flex items-center pr-3 bg-transparent hover:border-transparent"
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
                      className="flex w-full max-w-[100px] justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
