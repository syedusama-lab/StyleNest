import React, { useEffect } from "react";
import category, { mockData } from "../Data/MockData";
import InfoSec from "./InfoSec";
import CategoriesSec from "./CategoriesSec";
// import { setProducts } from "../store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCart from "./ProductCart";
import Shop from "./Shop";
import { setProducts } from "../../public/store/ProductSlice";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setProducts(mockData));
  }, []);
  return (
    <div>
      <div className="bg-white mt-[130px] px-2 md:px-16 lg:px-24">
        <div className="container  mx-auto py-4 flex flex-col items-center md:items-start md:flex-row gap-x-6">
          <div className="w-full md:w-3/12 ">
            <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
              SHOP BY CATEGORIES
            </div>
            <ul className="space-y-4 bg-gray-100 p-3 border">
              {category.map((category, index) => {
                return (
                  <li
                    key={index}
                    className=" flex items-center text-sm font-medium"
                  >
                    <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                    {category}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="relative w-full md:w-9/12 mt-8 md:mt-0 h-96">
            <img className="h-full w-full" src="/assets/images/home_shop.jpg" alt="" />
            <div className="absolute top-[55%] left-10 md:top-[60%] md:left-[55%] md:-translate-x-[50%] md:-translate-y-[50%] text-white">
              <p className="text-white-600 font-semibold mb-4">
                Syed E-Commerce
              </p>
              <h2 className="lg:text-3xl font-bold">WELCOME TO E-SHOP</h2>
              <p className="md:text-xl text-sm font-semibold">
                MILLIONS+ PRODUCTS
              </p>
              <button className="bg-red-600 px-2 text-[15px] md:px-8 font-semibold py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
        <InfoSec />
        <CategoriesSec />
        <div className="container py-12 -mb-[150px]">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {products.products.slice(0, 5).map((product) => (
              <div key={product.id}>
                <ProductCart product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Shop />
    </div>
  );
};

export default Home;
