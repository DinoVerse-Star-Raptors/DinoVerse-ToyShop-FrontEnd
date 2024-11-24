import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import SimpleNavbar from "../../components/layout/SimpleNavbar";
import SimpleFooter from "../../components/layout/SimpleFooter";
import uiStyle from "./Login.module.css";
import axiosInstance from "../services/axiosInstance"; // Import the custom Axios instance
import { useHistory } from "react-router-dom"; // To navigate after successful login

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory(); // Use to redirect after login

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(""); // Reset error message

    try {
      // Make API call to login the user using axiosInstance
      const response = await axiosInstance.post("/auth/login", {
        username,
        password,
      });

      // Assuming the API returns a JWT token upon successful login
      const { token } = response.data;

      // Store the token in localStorage (or use context or redux for global state)
      localStorage.setItem("jwtToken", token);

      // Redirect to dashboard or home page after successful login
      history.push("/dashboard");
    } catch (error) {
      // Handle error (e.g., wrong credentials)
      setErrorMessage("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SimpleNavbar />
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
              <form className="w-full py-[24px]" onSubmit={handleSubmit}>
                <div>
                  <div>
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
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      maxLength="255"
                      minLength="5"
                      autoComplete="off"
                      placeholder="Enter username"
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
                        type={isPasswordVisible ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                        title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        maxLength="255"
                        minLength="8"
                        autoComplete="off"
                        placeholder="Enter password"
                        className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 flex items-center bg-transparent pr-3 hover:border-transparent"
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                      >
                        {isPasswordVisible ? (
                          <EyeOff className="h-4 w-4 text-gray-400" />
                        ) : (
                          <Eye className="h-4 w-4 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="my-4 text-sm text-red-500">
                      {errorMessage}
                    </div>
                  )}

                  <div className="my-6 flex justify-center">
                    <button
                      type="submit"
                      className="flex w-full max-w-[100px] justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                      disabled={loading}
                    >
                      {loading ? "Logging in..." : "Login"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <SimpleFooter />
    </>
  );
}

export default Login;
