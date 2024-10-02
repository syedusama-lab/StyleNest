import React from "react";

const Login = ({openSignUp}) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <form action="">
        <div className="mb-4">
          <label htmlFor="" className="block text-gray-700">
            Email:{" "}
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full px-3 py-2 border"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="" className="block text-gray-700">
            Password:{" "}
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-3 py-2 border"
          />
        </div>
        <div className="mb-4 flex items-center justify-between">
          <label htmlFor="" className="inline-flex items-center">
            <input type="checkbox" className="form-checkbox" />
            <span className="ml-2 text-gray-700">Remeber Me</span>
          </label>
          <a href="" className="text-red-800">
            Forget Password
          </a>
        </div>
        <div className="mb-4">
          <button className="w-full bg-red-600 text-white py-2">Login</button>
        </div>
      </form>
      <div className="text-center">
        <span className="text-gray-700">Dont Have an Account? </span>
        <button className="text-red-800" onClick={openSignUp}>Sign Up</button>
      </div>
    </div>
  );
};

export default Login;
