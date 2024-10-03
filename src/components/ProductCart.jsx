import React from "react";
import ReactStars from "react-stars";
import { useDispatch } from "react-redux";
import { addToCart } from "../../public/store/CartSlice";
// import { addToCart } from "../store/cartSlice";

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (event, product) => {
    // event.stopPropogation()
    // event.preventDefault()
    dispatch(addToCart(product));
    alert("added succesfuly");
  };
  return (
    <div
      className="bg-white p-4 shadow rounded relative border transform transition-transform 
    duration-300 hover:scale-105"
    >
      <img
        src={product.image}
        alt=""
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="whitespace-nowrap font-semibold">{product.name}</h3>
      <p className="text-gray-500 ">${product.price}</p>
      <div className="flex items-center mt-2">
        <ReactStars value={product.stars} />
      </div>
      <div
        onClick={(event) => handleAddToCart(event, product)}
        className="absolute bottom-4 right-4 flex items-center justify-center w-8 md:w-24 h-8 
      bg-red-600 text-white text-sm rounded-full hover:bg-red-700 transition-all hover:cursor-pointer"
      >
        <span className="bock md:hidden">+</span>
        <span className="hidden md:block">Add to cart</span>
      </div>
    </div>
  );
};

export default ProductCart;
