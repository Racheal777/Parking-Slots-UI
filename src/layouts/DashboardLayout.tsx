import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <Sidebar />

      <Navbar />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
