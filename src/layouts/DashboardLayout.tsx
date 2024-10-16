import Navbar from "../components/Navbar";

import Sidebar from "../components/Sidebar";

import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="ml-60 flex min-h-screen z-20  dark:bg-gray-900 transition-colors duration-300">
      <Sidebar />

     
      <div className="flex-1 flex flex-col">
               <Navbar/>

                <main className="flex-1 overflow-y-auto p-4 hidden-scrollbar mt-16">
                    <Outlet />
                </main>
            </div>
    </div>
  );
};

export default DashboardLayout;
