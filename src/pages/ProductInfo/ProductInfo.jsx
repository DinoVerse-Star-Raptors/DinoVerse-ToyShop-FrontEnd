import React from "react";
import uiStyle from "./ProductInfo.module.css";
// import { Link } from "react-router-dom";
import ProductImage from "./assets/product-image.png";

const ProductInfo = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-2 gap-10 p-10">
        {/* Product Image */}
        <div className="flex justify-center w-full max-w-[800px] max-h-[500px]">
          <img
            src={ProductImage}
            alt="Assorted Fruit & Vegetable"
            className={`rounded-lg shadow-lg h-auto hover:scale-125 ${uiStyle.Product_Image}`}
          />
        </div>

        <div className="flex flex-col space-y-4">
          {/* <!-- Age, Reviews, Wishlist --> */}
          <div className="flex justify-between items-center">
            <p className="text-gray-500">Age: 18M+</p>
            <a href="#" className="text-red-500 hover:text-red-700">
              Add to Wishlist
            </a>
          </div>

          <div>
            {/* <!-- Product Name, Price, and Ratings --> */}
            <h1 className="text-3xl font-bold text-gray-800">Toy Train</h1>
            <p className="text-2xl font-semibold text-gray-700">฿350.00</p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-yellow-500 text-2xl">&#9733;</span>
              <span className="text-yellow-500 text-2xl">&#9733;</span>
              <span className="text-yellow-500 text-2xl">&#9733;</span>
              <span className="text-yellow-500 text-2xl">&#9733;</span>
              <span className="text-yellow-500 text-2xl">&#9733;</span>
              <span className="bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full font-semibold">
                Recommend
              </span>
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 ">
                Product Description
              </h3>
              <p className="text-gray-600">
                A fun and educational toy for children featuring a colorful
                train engine and a passenger car. It encourages imaginative play
                and helps develop motor skills.
              </p>
            </div>
          </div>

          {/* <!-- Stock Status, Quantity, and Add to Cart Button --> */}
          <div className="bg-gray-100 rounded-lg p-6 space-y-4">
            <p className="text-green-500 font-semibold">In stock</p>

            {/* <!-- Quantity Selector --> */}
            <label
              htmlFor="quantity"
              className="block text-gray-600 font-medium"
            >
              Quantity
            </label>
            <select
              id="quantity"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>

            {/* <!-- Buttons --> */}
            <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-full hover:bg-blue-700">
              Add to Cart
            </button>
            <button className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-full flex items-center justify-center hover:bg-indigo-700">
              Buy Now
            </button>

            <a
              href="#"
              className="text-center block text-gray-500 hover:text-gray-700"
            >
              More payment options
            </a>
            {/* <!-- Additional Info --> */}
            <div className="mt-4 space-y-2 text-gray-600">
              <p className="flex items-center">
                <span className="text-green-500 font-bold mr-2">✓</span>{" "}
                Eco-friendly materials
              </p>
              <p className="flex items-center">
                <span className="text-green-500 font-bold mr-2">✓</span> Free
                shipping on orders over ฿500
              </p>
              <p className="flex items-center space-x-2">
                <span className="text-green-500 font-bold">✓</span>
                <span>Secure payment</span>
              </p>
              {/* <!-- Factors for Child Development Section --> */}
              <div className="mb-10 p-10">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">
                  Factors for Child Development
                </h2>
                <div className="flex space-x-6 justify-center">
                  <div className="text-center">
                    <img
                      src="../assets/icon+ChildDevelopment+no+text_Gross+Motor.png"
                      alt="Motor"
                      className={`mx-auto mb-2 ${uiStyle.Child_Image}`}
                    />
                    <p className="text-gray-600">Motor</p>
                  </div>
                  <div className="text-center">
                    <img
                      src="../assets/icon+ChildDevelopment+no+text_Concentration.png"
                      alt="Concentration"
                      className={`mx-auto mb-2 ${uiStyle.Child_Image}`}
                    />
                    <p className="text-gray-600">Concentration</p>
                  </div>
                  <div className="text-center">
                    <img
                      src="../assets/icon+ChildDevelopment+no+text_Imagination.png"
                      alt="Imagination"
                      className={`mx-auto mb-2 ${uiStyle.Child_Image}`}
                    />
                    <p className="text-gray-600">Imagination</p>
                  </div>
                  <div className="text-center">
                    <img
                      src="../assets/icon+ChildDevelopment+no+text_Creative.png"
                      alt="Creative"
                      className={`mx-auto mb-2 ${uiStyle.Child_Image}`}
                    />
                    <p className="text-gray-600">Creative</p>
                  </div>
                  <div className="text-center">
                    <img
                      src="../assets/icon+ChildDevelopment+no+text_Coordination.png"
                      alt="Coordination"
                      className={`mx-auto mb-2 ${uiStyle.Child_Image}`}
                    />
                    <p className="text-gray-600">Coordination</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8 bg-white">
        <div className="text-2xl font-bold mb-4">What Parents Are Saying</div>

        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {/* Stars */}
            <span className="text-yellow-500 text-2xl">&#9733;</span>
            <span className="text-yellow-500 text-2xl">&#9733;</span>
            <span className="text-yellow-500 text-2xl">&#9733;</span>
            <span className="text-yellow-500 text-2xl">&#9733;</span>
            <span className="text-gray-300 text-2xl">&#9733;</span>
          </div>
          <span className="ml-2 text-gray-700 font-semibold">
            4.5 out of 5 | 2 reviews
          </span>
        </div>

        {/* Star Distribution */}
        <div className="space-y-1 mb-6">
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center">
              <span className="text-gray-700 font-medium w-16">
                {star} Star
              </span>
              <div className="bg-gray-200 rounded-full w-full h-2 mx-2">
                <div
                  className={`bg-yellow-500 h-2 rounded-full`}
                  style={{
                    width: star === 5 ? "70%" : star === 4 ? "50%" : "0%",
                  }}
                ></div>
              </div>
              <span className="text-gray-700">
                ({star === 5 || star === 4 ? 1 : 0})
              </span>
            </div>
          ))}
        </div>

        {/* Reviews Header */}
        <div className="text-xl font-semibold mb-4 border-b border-yellow-400 pb-2">
          Review (2)
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Review Card 1 */}
          <div className="p-4 bg-gray-50 rounded-lg shadow">
            <div className="flex items-center mb-2">
              <span className="text-yellow-500">
                &#9733;&#9733;&#9733;&#9733;
              </span>
              <span className="text-gray-400">&#9733;</span>
              <span className="text-gray-600 ml-2 text-sm">03/10/2023</span>
            </div>
            <div className="font-semibold">Erica</div>
            <div className="text-sm text-gray-700">Happy</div>
            <p className="text-gray-600 text-sm mt-2">
              My son enjoys playing with the train, but I have to say, the
              tracks don’t always stay connected when he pushes the train around
              too quickly. It can be a bit frustrating. It’s a good toy, but it
              might be better suited for gentle play or older kids.
            </p>
          </div>

          {/* Review Card 2 */}
          <div className="p-4 bg-gray-50 rounded-lg shadow">
            <div className="flex items-center mb-2">
              <span className="text-yellow-500">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </span>
              <span className="text-gray-600 ml-2 text-sm">04/09/2023</span>
            </div>
            <div className="flex items-center">
              <div className="font-semibold">Raelyn</div>
              <span className="ml-1 text-green-500">&#10003;</span>
            </div>
            <div className="text-sm text-gray-700">Wonderful Gift Idea</div>
            <p className="text-gray-600 text-sm mt-2">
              Bought this as a birthday gift for my nephew, and he loves it! The
              train set is bright and engaging, and it came in nice packaging,
              so it felt very special. It’s also safe, with rounded edges on the
              tracks and no small parts, which I appreciate. Great purchase!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;
