import React from "react";

export const Fillter = () => {
  return (
    <>
      <div className="font-sans  flex flex-col items-center p-5  w-96">
        <div className=" p-5 mb-5 ">
          <h1 className=" font-semibold text-4xl p-5 mb-5">Toys</h1>
          <h2 className=" cursor-pointer p-2 mb-2">HOME/TOYS</h2>
          <h2 className=" font-semibold text-2xl p-2 mb-2 ">Fillters</h2>
        </div>

        <div className=" grid grid-cols-1 gap-1 p-5 ">
          <h5 className=" font-semibold mb-5">Category</h5>

          <label>
            <input type="checkbox" />
            <span className=" m-2">Creative</span>
          </label>

          <label>
            <input type="checkbox" />
            <span className=" m-2">Emotion</span>
          </label>

          <label>
            <input type="checkbox" />
            <span className=" m-2">Fine Motor</span>
          </label>

          <label>
            <input type="checkbox" />
            <span className=" m-2">Gross Motor</span>
          </label>

          <label>
            <input type="checkbox" />
            <span className=" m-2">Language</span>
          </label>
          <label>
            <input type="checkbox" />
            <span className=" m-2">Musical</span>
          </label>

          <label>
            <input type="checkbox" />
            <span className=" m-2">Social</span>
          </label>

          <h5 className=" font-semibold mb-5 mt-5">Age</h5>
          <label>
            <input type="checkbox" />
            <span className=" m-2">0-6M</span>
          </label>

          <label>
            <input type="checkbox" />
            <span className=" m-2">6M+</span>
          </label>

          <label>
            <input type="checkbox" />
            <span className=" m-2">12M</span>
          </label>

          <label>
            <input type="checkbox" />
            <span className=" m-2"> 18M+</span>
          </label>
        </div>
      </div>
    </>
  );
};

export default Fillter;
