import React from "react";

function HomeCategories() {
  return (
    <section className="container mx-auto my-8 ">
      <nav className="text-2xl font-bold mb-4 text-center">Categories</nav>
      <div className="grid grid-cols-1 sm:grid-cols-7 gap-4">
        {/* <!-- Empty category boxes for now --> */}
        <div className="bg-gray-200 p-8 rounded-md">Creative</div>
        <div className="bg-gray-200 p-8 rounded-md">Emotion</div>
        <div className="bg-gray-200 p-8 rounded-md">Fine Motir</div>
        <div className="bg-gray-200 p-8 rounded-md">Gross Motor</div>
        <div className="bg-gray-200 p-8 rounded-md">Language</div>
        <div className="bg-gray-200 p-8 rounded-md">Musical</div>
        <div className="bg-gray-200 p-8 rounded-md">Social</div>
      </div>
    </section>
  );
}

export default HomeCategories;
