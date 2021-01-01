import React from 'react';

const DashboardNavbar = () => {
  return (
    <div className="flex flex-row m-8">
      <h1 className="font-commissioner text-3xl">
        Devello<span className="text-blue-600">.</span>
      </h1>
      <a
        href="/dashboard"
        className="self-center bg-blue-600 pr-6 pl-6 pt-1 pb-1 rounded-full absolute right-0 m-10 hover:bg-blue-700"
      >
        <p className="justify-self-end text-white">New Dashboard</p>
      </a>
      <a
        href="/dashboard"
        className="self-center bg-transparent rounded-full absolute right-0 m-10"
      >
        <p className="justify-self-end text-blue-600 hover:text-blue-700 pr-48">Accounts</p>
      </a>
    </div>
  );
}

export default DashboardNavbar;