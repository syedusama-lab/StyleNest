import React from "react";
import { useNavigate } from "react-router-dom";

const OrderConfirmation = ({ order }) => {
  const navigate = useNavigate();
  return (
    <div className="mt-[110px] container mx-auto py-8 px-4 md:px-16 lg:px-64">
      <h2 className="text-2xl font-semibold mb-4">Thank You for your Order</h2>
      <p>
        Your Order has been placed succesfuly you will recive an email
        confirmation shortly.
      </p>
      <div className="mt-6 p-4 border rounded-lg bg-gray-100">
        <h3 className="text-lg font-semibold mb-2">Order Summary</h3>
        <p>Order No: {order.orderNumber}</p>
        <div className="mt-4">
          <h4 className="text-md font-semibold mb-2">Shipping Information</h4>
          <p>{order.shippingInfo.address}</p>
          <p>{order.shippingInfo.city}</p>
          <p>{order.shippingInfo.zip}</p>
        </div>
        <div className="mt-4">
          <h3 className="text-md font-semibold mb-2">Product Ordered</h3>
          {order.products.map((product) => (
            <div key={product.id} className="flex justify-between mt-2">
              <p>
                {product.name} (x{product.quantity})
              </p>
              <p>${(product.price * product.quantity).toFixed(0)}</p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-between">
          <span>Total Price</span>
          <span className="font-semibold">${order.totalPrice.toFixed(0)}</span>
        </div>
        <div className="flex md:flex-row flex-col mt-6 gap-3 md:gap-0 md:ml-0">
          <button className="bg-green-500 text-white py-2 px-4 hover:bg-green-600 rounded-lg">
            Order Tracking
          </button>
          <button
            onClick={() => navigate("/")}
            className="md:ml-2 bg-red-500 text-white py-2 px-2 md:px-4 hover:bg-red-600 rounded-lg"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
