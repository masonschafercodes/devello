import React from "react";

const Jumbotron = () => {
  return (
    <div>
      <div className="flex flex-row mt-24 ml-auto justify-center">
        <figure>
          <img
            src="https://cdn.dribbble.com/users/2321022/screenshots/10640830/media/342b7d21f4519fbd31aeea6b5d54ae89.png"
            alt="blue drawing from dribbble"
            width="501px"
            className="rounded-xl mr-12 shadow-xl"
          />
          <figcaption className="text-gray-900 p-2">
            <a
              href="https://dribbble.com/riversneech"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              Credit: Ana R.
            </a>
          </figcaption>
        </figure>
        <div className="flex flex-col items-start justify-center">
          <h1 className="font-commissioner text-4xl">
            Welcome to the{" "}
            <span className="text-blue-600">Next Generation</span> Social Media
          </h1>
          <h1 className="font-commissioner text-4xl">Analytics Platform</h1>
          <a
            href="/signup"
            className="bg-blue-600 rounded-full pr-8 pl-8 pt-2 pb-2 hover:bg-blue-700 mt-2"
          >
            <p className="justify-self-end text-white">Get Started</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
