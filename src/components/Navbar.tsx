import React from "react";
import { Link } from "react-router-dom";
import { Settings, Search } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed w-full top-0 z-30 shadow-lg flex flex-col gap-5 bg-white  p-5 transition duration-150">

       <div className="container mx-auto flex justify-between align-middle items-center">

       <div className="flex p-2">
       <div className="px-4 py-2">
       <h1>Dashboard</h1>
       </div>

       <div className="bg-gray-100 flex items-center rounded-md shadow-sm p-2 w-full max-w-sm">
  <button type="button" className="text-gray-500 hover:text-gray-700 focus:outline-none">
    <Search size={20} />
  </button>
  <input 
    type="text" 
    placeholder="Search" 
    className="bg-gray-100 focus:outline-none ml-3 w-full text-gray-700 placeholder-gray-400"
  />
</div>


        </div>

        <Link
          to="settings"
          className="flex items-center gap-2 text-black bg-slate-300 p-3 rounded-full hover:text-asphalt"
        >
          {" "}
          <Settings size={20} className="" />
        </Link>
       </div>
      </nav>
    </div>
  );
};

export default Navbar;
