import "./App.css";
import React from "react";
import Navbar from "./components/layout/Navbar";
import SimpleFooter from "./components/layout/SimpleFooter";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

function App() {
  return (
    <>
      <main id="detail" className="min-h-svh max-w-[1440px]">
      {/* <main id="detail" className="min-h-svh"> */}
        <Navbar />
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
        <SimpleFooter />
      </main>
    </>
  );
}

export default App;
