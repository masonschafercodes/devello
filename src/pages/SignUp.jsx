import React from "react";

import Navbar from "../components/Navbar";

const SignUp = () => {
  return (
    <div>
      <Navbar
        left_text="Home"
        right_text="Login"
        left_url="/"
        right_url="/login"
      />
      <div className="flex flex-col justify-center items-center mt-12">
        <h1 className="font-commissioner flex-1 text-2xl">So Glad you could Make it!</h1>
        <form className="m-2 text-center">
        <input
            type="text"
            className="border-solid border-2 m-2 border-gray-600 rounded-md p-2 mb-4"
            placeholder="firstname"
            required
          />
          <br/>
          <input
            type="text"
            className="border-solid border-2 m-2 border-gray-600 rounded-md p-2 mb-4"
            placeholder="lastname"
            required
          />
          <br/>
          <input
            type="email"
            className="border-solid border-2 m-2 border-gray-600 rounded-md p-2 mb-4"
            placeholder="email"
            required
          />
          <br />
          <input
            type="password"
            className="border-solid border-2 border-gray-600 rounded-md p-2 mb-4"
            placeholder="password"
            required
          />
          <br />
          <button className="bg-blue-600 text-white rounded-full pr-8 pl-8 pt-2 pb-2 mt-2 hover:bg-blue-700">
            Sign Up
          </button>
        </form>
        <a href="/login">
          <p className="text-sm text-gray-500 hover:text-blue-600 pt-2">
            Already Have an Account? Login!
          </p>
        </a>
      </div>
    </div>
  );
};

export default SignUp;
