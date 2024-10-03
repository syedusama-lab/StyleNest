import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import Login from "./Login";
import Register from "./Register";
import { setSearhTerm } from "../store/productSlice";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [search, setSearch] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const openSignUp = () => {
    setIsLogin(false);
    setIsModalOpen(true);
  };
  const openLogin = () => {
    setIsLogin(true);
    setIsModalOpen(true);
  };
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearhTerm(search));
    navigate("/filter-data");
  };

  return (
    <nav className="bg-white w-full shadow-md fixed z-[98] top-0">
      <div className="section-1 container mx-auto px-2 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="md:text-lg font-bold text-sm">
          <Link to={"/"}>e-SHOP</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search Product"
              className="w-full border py-2 px-4"
              onChange={(e) => setSearch(e.target.value)}
            />
            <FaSearch
              onClick={handleSearch}
              className="hover:cursor-pointer absolute top-3 right-3 text-red-500"
            />
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to={"/cart"} className="relative">
            <FaShoppingCart className="text-lg" />
            {products.length > 0 && (
              <span className="absolute -top-3 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white">
                {products.length}
              </span>
            )}
          </Link>
          <button
            className="hidden md:block"
            onClick={() => setIsModalOpen(true)}
          >
            Login | Register
          </button>
          <button
            className="block md:hidden"
            onClick={() => setIsModalOpen(true)}
          >
            <FaUser />
          </button>
        </div>
      </div>
      <div className="section-2 flex py-4 items-center justify-center gap-x-5 text-[13px] font-semibold md:gap-x-20 md:text-lg md:font-bold">
        <Link to={"/"} className="hover:underline">
          Home
        </Link>
        <Link to={"/shop"} className="hover:underline">
          Shop
        </Link>
        <Link to={"/"} className="hover:underline">
          Contact
        </Link>
        <Link to={"/"} className="hover:underline">
          About
        </Link>
      </div>
      <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
        {isLogin ? (
          <Login openSignUp={openSignUp} />
        ) : (
          <Register openLogin={openLogin} />
        )}
      </Modal>
    </nav>
  );
};

export default Navbar;
