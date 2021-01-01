import React from 'react'

import Navbar from '../components/Navbar'

const ResetPassword = () => {
  return (
    <div>
      <Navbar 
        left_text="Home"
        right_text="Login"
        left_url="/"
        right_url="login"
      />
      <div className="flex flex-col justify-center items-center mt-12">
        <h1 className="font-commissioner flex-1 text-2xl">Uh Oh! Looks Like you Forgot your Password!</h1>
        <form className="m-2 text-center">
        <input
            type="email"
            className="border-solid border-2 m-2 focus:underline border-gray-600 rounded-md p-2 mb-4"
            placeholder="email"
            required
          />
          <br/>
          <input
            type="text"
            className="border-solid border-2 m-2 focus:underline border-gray-600 rounded-md p-2 mb-4"
            placeholder="firstname"
            required
          />
          <br/>
          <br />
          <button className="bg-blue-600 text-white rounded-full pr-8 pl-8 pt-2 pb-2 mt-2 hover:bg-blue-700">
            Send Reset Password Link
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;