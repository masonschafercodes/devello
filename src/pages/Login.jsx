import React from "react";

import Navbar from "../components/Navbar";

const Login = () => {
  return (
    <div>
      <Navbar
        left_text="Home"
        right_text="Sign Up"
        left_url="/"
        right_url="/signup"
      />
      <div className="flex flex-col justify-center items-center mt-12">
        <h1 className="font-commissioner flex-1 text-2xl">Welcome Back.</h1>
        <form className="m-2 text-center">
          <input
            type="email"
            className="border-solid focus:underline border-2 m-2 border-gray-600 rounded-md p-2 mb-4"
            placeholder="email"
            required
          />
          <br />
          <input
            type="password"
            className="border-solid focus:underline border-2 border-gray-600 rounded-md p-2 mb-4"
            placeholder="password"
            required
          />
          <br />
          <button className="bg-blue-600 text-white rounded-full pr-8 pl-8 pt-2 pb-2 mt-2 hover:bg-blue-700">
            Login
          </button>
        </form>
        <a href="/resetpassword">
          <p className="text-sm text-gray-500 hover:underline hover:text-blue-600 pt-2">
            Forget password?
          </p>
        </a>
        <a href="/signup">
          <p className="text-sm text-gray-500 hover:underline hover:text-blue-600 pt-2">
            Sign Up!
          </p>
        </a>
      </div>
    </div>
  );
};

export default Login;
