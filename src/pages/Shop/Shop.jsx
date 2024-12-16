import React from "react";
// import uiStyle from "./Shop.module.css";
import ShopFilter from "./ShopFilter";
import ProductGrid from "./ShopProductGrid";

export const Shop = () => {
  return (
    <div className="mx-8 pb-8">
      <div className="mb-6">
        {/* Page Title */}
        <h2 className="mt-4 text-2xl font-bold">Toys</h2>
        {/* Breadcrumb Navigation - Path */}
        <p>
          <a href="/" className="text-blue-500 hover:underline">
            Home
          </a>{" "}
          /{" "}
          <a href="/shop" className="text-blue-500 hover:underline">
            Toys
          </a>
        </p>
      </div>

      <div className="flex flex-col gap-6 md:flex-row">
        {/* Shop Filter - 20% on larger screens, full width on mobile */}
        <div className="w-full md:w-[20%] md:pr-4">
          <ShopFilter />
        </div>

        {/* Product Grid - 80% on larger screens, full width on mobile */}
        <div className="w-full md:w-[80%]">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
};

export default Shop;
