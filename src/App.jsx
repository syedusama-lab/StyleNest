import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Cart from "./components/Cart";
import CheckOut from "./components/CheckOut";
import OrderConfirmation from "./components/OrderConfirmation";
import FilterData from "./components/FilterData";
import ContactUs from "./components/ContactUs";

function App() {
  const [order,setOrder] = useState(null)
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<CheckOut setOrder={setOrder} />}></Route>
        <Route path="/oder-confirmation" element={<OrderConfirmation order={order}/>}></Route>
        <Route path="/filter-data" element={<FilterData />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
