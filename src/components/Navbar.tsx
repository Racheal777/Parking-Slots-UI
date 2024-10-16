import React from "react";
import { Link } from "react-router-dom";
import { Settings, Search } from "lucide-react";

const Navbar = () => {
  return (
    <div>
      <nav className="fixed w-full top-0 z-30 shadow-lg flex flex-col gap-5  p-5 transition duration-150">

       <div className="container mx-auto flex justify-between align-middle items-center">

       <div className="flex p-2">
       <div className="px-4">
       <h1>Dashboard</h1>
       </div>

         <div className="bg-gray-300  flex ">
        <button type="button"> <Search size={20} className="" /></button>
         <input type="text" name="" id="" placeholder="Search" className="bg-gray-300 "/>
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
