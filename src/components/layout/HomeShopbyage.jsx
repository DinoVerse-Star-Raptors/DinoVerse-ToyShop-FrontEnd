import React from 'react'

function HomeShopbyage() {
  return (
    <section class="container mx-auto my-8">
        <div class="flex justify-center items-center mb-4">
            <img src="https://via.placeholder.com/800x400" alt="Kids Image" class="rounded-md shadow-lg"/>
        </div>
        <h2 class="text-2xl font-bold mb-4 text-center">Shop by Age</h2>
        <div class="flex justify-between">
            <div class="bg-gray-200 h-24 w-24 rounded-full">0-6M</div>
            <div class="bg-gray-200 h-24 w-24 rounded-full">6m+</div>
            <div class="bg-gray-200 h-24 w-24 rounded-full">12M+</div>
            <div class="bg-gray-200 h-24 w-24 rounded-full">18M+</div>
            <div class="bg-gray-200 h-24 w-24 rounded-full">2Yrs+</div>
            <div class="bg-gray-200 h-24 w-24 rounded-full">5Yrs+</div>
        </div>
    </section>
  )
}

export default HomeShopbyage