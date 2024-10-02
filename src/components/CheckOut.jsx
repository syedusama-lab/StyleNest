import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckOut = ({ setOrder }) => {
  const [billingToggle, setBillingToggle] = useState(true);
  const [shippingToggle, setShippingToggle] = useState(true);
  const [paymentToggle, setPaymentToggle] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [shippingInfo, setShippingInfo] = useState({
    address: "",
    city: "",
    zip: "",
  });
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate()
  const handleOrder = () =>{
    const newOrder = {
        products: cart.products,
        orderNumber: "123",
        shippingInfo: shippingInfo,
        totalPrice: cart.totalPrice,
    }
    setOrder(newOrder)
    navigate("/oder-confirmation")
  } 
  return (
    <div className="mt-[110px] container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      <h3 className="text-2xl font-semibold mb-4">CHECKOUT</h3>
      <div className="flex flex-col md:flex-row justify-between md:space-x-10 mt-8">
        <div className="md:w-2/3">
          <div className="border bg-slate-200 p-2 mb-6 rounded-lg ">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold mb-2 underline">
                Billing information
              </h3>
              {billingToggle ? (
                <FaAngleDown
                  className="hover:cursor-pointer"
                  onClick={() => setBillingToggle(!billingToggle)}
                />
              ) : (
                <FaAngleUp
                  className="hover:cursor-pointer"
                  onClick={() => setBillingToggle(!billingToggle)}
                />
              )}
            </div>
            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
              <div>
                <div>
                  <label className="block font-bold text-gray-700" htmlFor="">
                    Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    className="w-full px-3 py-2 border"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="block font-bold text-gray-700" htmlFor="">
                    Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    className="w-full px-3 py-2 border"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="block font-bold text-gray-700" htmlFor="">
                    Phone:
                  </label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="Enter Mob Number"
                    className="w-full px-3 py-2 border"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border bg-slate-200 p-2 mb-6 rounded-lg ">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold mb-2 underline">
                Shipping information
              </h3>
              {billingToggle ? (
                <FaAngleDown
                  className="hover:cursor-pointer"
                  onClick={() => setShippingToggle(!shippingToggle)}
                />
              ) : (
                <FaAngleUp
                  className="hover:cursor-pointer"
                  onClick={() => setShippingToggle(!shippingToggle)}
                />
              )}
            </div>
            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
              <div>
                <div>
                  <label className="block font-bold text-gray-700" htmlFor="">
                    Address:
                  </label>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter Address"
                    className="w-full px-3 py-2 border"
                    onChange={(e) => {
                      setShippingInfo({
                        ...shippingInfo,
                        address: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="block font-bold text-gray-700" htmlFor="">
                    City:
                  </label>
                  <input
                    type="text"
                    name="city"
                    placeholder="Enter City Name"
                    className="w-full px-3 py-2 border"
                    onChange={(e) => {
                      setShippingInfo({
                        ...shippingInfo,
                        city: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
              <div>
                <div>
                  <label className="block font-bold text-gray-700" htmlFor="">
                    Zip Code:
                  </label>
                  <input
                    type="text"
                    name="zipcode"
                    placeholder="Enter Zip Code"
                    className="w-full px-3 py-2 border"
                    onChange={(e) => {
                      setShippingInfo({ ...shippingInfo, zip: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border bg-slate-200 p-2 mb-6 rounded-lg ">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold mb-2 underline">
                Payment Method
              </h3>
              {billingToggle ? (
                <FaAngleDown
                  className="hover:cursor-pointer"
                  onClick={() => setPaymentToggle(!paymentToggle)}
                />
              ) : (
                <FaAngleUp
                  className="hover:cursor-pointer"
                  onClick={() => setPaymentToggle(!paymentToggle)}
                />
              )}
            </div>
            <div className={`space-y-4 ml-3 ${paymentToggle ? "" : "hidden"}`}>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "cod"}
                  onChange={() => setPaymentMethod("cod")}
                />
                <label className="block font-bold text-gray-700" htmlFor="">
                  Cash On Deivery:
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  checked={paymentMethod === "dc"}
                  onChange={() => setPaymentMethod("dc")}
                />
                <label className=" font-bold text-gray-700" htmlFor="">
                  Debit Card:
                </label>
              </div>
              {paymentMethod === "dc" && (
                <div className="bg-gray-100 p-4 rounded-lg mb-4">
                  <h3 className="text-xl font-semibold mb-4">Debit Card</h3>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-semibold mb-2"
                      htmlFor=""
                    >
                      Card Holder Name
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter Card Holder Name"
                      required
                      className="border p-2 w-full rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 font-semibold mb-2"
                      htmlFor=""
                    >
                      Card Number
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter Card Number"
                      required
                      className="border p-2 w-full rounded"
                    />
                  </div>
                  <div className="flex justify-between mb-4">
                    <div className="w-1/2 ml-2">
                      <label
                        className="block text-gray-700 font-semibold mb-2"
                        htmlFor=""
                      >
                        Expiry Date
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Expiry Date"
                        required
                        className="border p-2 w-full rounded"
                      />
                    </div>
                    <div className="w-1/2 ml-2">
                      <label
                        className="block text-gray-700 font-semibold mb-2"
                        htmlFor=""
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="Enter CVV"
                        required
                        className="border p-2 w-full rounded"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            {cart.products.map((product, index) => (
              <div
                key={product.id}
                className="flex justify-between items-center"
              >
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div className="ml-4">
                    <h3 className="text-md font-semibold">{product.name}</h3>
                    <p className="text-gray-600">
                      ${product.price} x {product.quantity}
                    </p>
                  </div>
                </div>
                <div className="text-gray-800">
                  ${product.price * product.quantity}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 border-t pt-4">
            <div className="flex justify-between">
              <span>Total Price</span>
              <span className="font-semibold">
                ${cart.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
          <button
            className="w-full bg-red-600 text-white py-2 mt-6 rounded-lg hover:bg-red-800"
            onClick={handleOrder}
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
