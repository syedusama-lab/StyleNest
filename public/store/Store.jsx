import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import CartSlice from "./CartSlice";
// import productSlice from "./productSlice";
// import cartSlice from "./cartSlice";



const store = configureStore({
  reducer: {
    cart: CartSlice,
    product: ProductSlice
  },
});

export default store;
