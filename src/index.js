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
import ProductInfo from "./pages/ProductInfo";
import ProductItem from "./pages/ProductItem";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import ExamHome from "./pages/ExamHome";
import { AuthProvider } from "./context/AuthContext"; // Import the AuthProvider
import Dashboard from "./pages/User/Dashboard"; // Protected page
import ProtectedRoute from "./utils/ProtectedRoute";
import UserPanel from "./pages/User/UserPanel";
import Logout from "./pages/User/Logout";
import Test from "./pages/User/Test";

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
        path: "/Cart",
        element: <Cart />,
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
        path: "/productinfo",
        element: <ProductInfo />,
      },
      {
        path: "/item/:itemId",
        element: <ProductItem />,
      },
      {
        path: "/list",
        element: <ProductList />,
      },
      {
        path: "/exam-home",
        element: <ExamHome />,
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
        index: true, // This makes the Dashboard the default route
        element: <Dashboard />, // Default route under /user
      },
      {
        path: "dashboard", // Specific path for dashboard
        element: <Dashboard />,
      },
      {
        path: "profile", // Profile route
        element: <>profile</>,
      },
      {
        path: "settings",
        element: <>settings</>,
      },
      {
        path: "orders",
        element: <>orders</>,
      },
      {
        path: "logout",
        element: <Logout />,
      },
      {
        path: "test",
        element: <Test />,
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
