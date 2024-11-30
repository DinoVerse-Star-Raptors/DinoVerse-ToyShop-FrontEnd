import React from "react";
import uiStyle from "./Shop.module.css";
import ShopFilter from "./ShopFilter";
import ProductGrid from "./ShopProductGrid";

export const Shop = () => {
  return (
    <div className={`${uiStyle.mx_auto} py-8`}>
      <div className="mx-auto px-4">
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
    </div>
  );
};

export default Shop;
