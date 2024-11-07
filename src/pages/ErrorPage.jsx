import React from "react";
import { useRouteError } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Navbar />
      <main className="min-h-svh flex justify-center items-center flex-col">
        <h1 className="text-2xl text-red-600">Oops!</h1>
        <p className="p-2">Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </main>
    </div>
  );
}
