import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import Address from "./Address";
// import {
//   decreaseQuantity,
//   increaseQuantity,
//   removeFromCart,
// } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../public/store/CartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("Main Store of E-Shop");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(cart);
  return (
    <div className="mt-[110px] container mx-auto py-8 min-h-96 pl-1 pr-2 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">Shopping Cart</h3>
          <div className="flex flex-col md:flex-row justify-between md:space-x-10 mt-8">
            <div className="md:w-2/3 pl-1 pr-1 md:px-0">
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p>PRODUCTS</p>
                <div className="flex md:space-x-8 space-x-4">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>
              <div>
                {cart.products.map((prod) => (
                  <div
                    key={prod.id}
                    className="flex items-center justify-between mb-2 md:my-0 md:p-3 border-b"
                  >
                    <div className="w-11 md:w-auto flex flex-col md:flex-row text-center items-center md:space-x-4">
                      <img
                        src={prod.image}
                        alt={prod.name}
                        className="md:w-16 md:h-16 mb-1 md:mb-0 w-10 h-10 object-contain rounded"
                      />
                      <div className="flex-1 md:ml-4">
                        <h3 className="text-[12px] md:text-lg font-semibold">
                          {prod.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex space-x-7 md:space-x-12 items-center">
                      <p>${prod.price.toFixed(0)}</p>
                      <div className="flex items-center justify-center border">
                        <button
                          className="text-xl font-bold px-1.5 border-r"
                          onClick={() => dispatch(decreaseQuantity(prod.id))}
                        >
                          -
                        </button>
                        <p className="text-xl px-1 border-l">{prod.quantity}</p>
                        <button
                          className="text-xl px-1 border-l"
                          onClick={() => dispatch(increaseQuantity(prod.id))}
                        >
                          +
                        </button>
                      </div>
                      <p>${(prod.price * prod.quantity).toFixed(0)}</p>
                      <button
                        className="text-red-500 hover:text-red-700"
                        onClick={() => dispatch(removeFromCart(prod.id))}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 bg-white mt-4 md:mt-0 p-6 rounded-lg shadow-md border">
              <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">
                  Total Item{cart.totalQuntity > 1 ? "'s" : ""}
                </span>
                <span>{cart.totalQuntity}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Shipping:</p>
                <p className="ml-2">
                  Shipping to:
                  <span className="text-xs font-bold">{address}</span>
                </p>
                <button
                  className="text-blue-500 hover:underline mt-1 ml-2"
                  onClick={() => setIsModalOpen(true)}
                >
                  Change Address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>
              <button
                className="w-full bg-red-600 text-white py-2 hover:bg-red-800 rounded-lg"
                onClick={() => navigate("/checkout")}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <Address setAddress={setAddress} setIsModalOpen={setIsModalOpen} />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center">
          <img
            src="/assets/images/cart.jpg"
            className="m-5 rounded-lg h-96 w-[50vw]"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
