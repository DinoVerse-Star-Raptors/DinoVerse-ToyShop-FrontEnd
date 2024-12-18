import React from 'react'

function Recommended() {
  return (
    <div className="bg-white p-4 rounded-md shadow-md text-center">
                <div className="bg-blue-200 p-6 rounded-md">
                    {/* <!-- Replace this with product image --> */}
                <div className="h-24 w-24 bg-gray-300 mx-auto"></div>
                </div>
                <h3 className="text-xl font-semibold mt-4">Product Name</h3>
                <p className="text-gray-600">$20</p>
                <p className="text-yellow-500">★★★★☆</p>
                </div>
  )
}

export default Recommended