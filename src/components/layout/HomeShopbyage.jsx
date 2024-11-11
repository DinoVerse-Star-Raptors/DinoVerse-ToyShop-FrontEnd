import React from 'react'

function HomeShopbyage() {
  return (
    <section className="container mx-auto my-8">
      <div className="flex justify-center items-center mb-4">
        <img
          src="https://via.placeholder.com/800x400"
          alt="Kids."
          className="rounded-md shadow-lg"
          width="800"
          height="400"
        />
      </div>
      <h2 className="text-2xl font-bold mb-4 text-center">Shop by Age</h2>
      <div className="flex justify-between">
        <div className="bg-gray-200 h-24 w-24 rounded-full">0-6M</div>
        <div className="bg-gray-200 h-24 w-24 rounded-full">6m+</div>
        <div className="bg-gray-200 h-24 w-24 rounded-full">12M+</div>
        <div className="bg-gray-200 h-24 w-24 rounded-full">18M+</div>
        <div className="bg-gray-200 h-24 w-24 rounded-full">2Yrs+</div>
        <div className="bg-gray-200 h-24 w-24 rounded-full">5Yrs+</div>
      </div>
    </section>
  );
}

export default HomeShopbyage