import React from "react";
import { useSelector } from "react-redux";
import ProductCart from "./ProductCart";

const FilterData = () => {
  const filterDAta = useSelector((state) => state.product.filterData);
  console.log(filterDAta);
  return (
    <div className="mt-[100px] mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
      {filterDAta.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filterDAta.map((product) => (
            <ProductCart product={product} />
          ))}
        </div>
      ) : (
        <div className="w-full flex items-center justify-center">
            <img src="src/assets/images/nodata.jpg" alt="" className="w-[500px]" />
        </div>
      )}
    </div>
  );
};

export default FilterData;
