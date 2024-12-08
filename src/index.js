import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductItem from "./pages/ProductItem";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import { AuthProvider } from "./context/AuthContext"; // Import the AuthProvider
import ProtectedRoute from "./utils/ProtectedRoute";
import UserPanel from "./pages/User/UserPanel";
import Logout from "./pages/User/Logout";
import Profile from "./pages/User/Profile";
import Orders from "./pages/User/Orders";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        // path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/item/:itemId",
        element: <ProductItem />,
      },
    ],
  },
  {
    path: "/user",
    errorElement: <ErrorPage />,
    element: (
      <ProtectedRoute>
        <UserPanel />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Orders />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "logout",
        element: <Logout />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root &&
  root.render(
    <React.StrictMode>
      {/* Wrap your entire app with AuthProvider */}
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>,
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
