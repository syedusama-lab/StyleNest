import React from "react";
import { useSelector } from "react-redux";
import { FixedSizeList as List } from "react-window";
import ProductCart from "./ProductCart";

const Shop = () => {
  const products = useSelector((state) => state.product);
  return (
    <div className="mt-[90px] mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {products.products.map((product) => (
          <div key={product.id}>
            <ProductCart product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
