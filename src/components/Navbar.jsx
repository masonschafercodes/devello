import React from "react";

const Navbar = (props) => {
  return (
    <div className="flex flex-row m-4">
      <h1 className="font-commissioner text-3xl">
        Devello<span className="text-blue-600">.</span>
      </h1>
      <a
        href={props.left_url}
        className="self-center bg-transparent rounded-full absolute right-0 m-40"
      >
        <p className="justify-self-end text-blue-600">{props.left_text}</p>
      </a>
      <a
        href={props.right_url}
        className="self-center bg-blue-600 pr-6 pl-6 pt-1 pb-1 rounded-full absolute right-0 m-10 hover:bg-blue-700"
      >
        <p className="justify-self-end text-white">{props.right_text}</p>
      </a>
    </div>
  );
};

export default Navbar;
