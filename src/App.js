import "./App.css";
import React from "react";
import Navbar from "./components/layout/Navbar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Navbar />
      <main id="detail">
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}

export default App;
