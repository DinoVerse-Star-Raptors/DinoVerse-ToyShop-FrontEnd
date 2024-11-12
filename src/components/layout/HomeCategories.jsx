import React from 'react'

function HomeCategories() {
  return (
    <section class="container mx-auto my-8 ">
        <nav class="text-2xl font-bold mb-4 text-center">Categories</nav>
        <div class="grid grid-cols-1 sm:grid-cols-7 gap-4">
            {/* <!-- Empty category boxes for now --> */}
            <div class="bg-gray-200 p-8 rounded-md">Creative</div>
            <div class="bg-gray-200 p-8 rounded-md">Emotion</div>
            <div class="bg-gray-200 p-8 rounded-md">Fine Motir</div>
            <div class="bg-gray-200 p-8 rounded-md">Gross Motor</div>
            <div class="bg-gray-200 p-8 rounded-md">Language</div>
            <div class="bg-gray-200 p-8 rounded-md">Musical</div>
            <div class="bg-gray-200 p-8 rounded-md">Social</div>
        </div>
    </section>
  )
}

export default HomeCategories