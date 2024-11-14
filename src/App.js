import "./App.css";
import React from "react";
import Navbar from "./components/layout/Navbar";
import SimpleFooter from "./components/layout/SimpleFooter";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Fillter from "./components/product/Fillter";
import { Products } from "./components/product/Products";



function App() {
  return (
    <>
      <Navbar />
      <main id="detail" className="min-h-svh max-w-[1440px]">
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <SimpleFooter />
    </>
  );
}

export default App;
