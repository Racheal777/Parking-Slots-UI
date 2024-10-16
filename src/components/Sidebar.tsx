import { Link } from "react-router-dom";
import { Icon } from "lucide-react";
import { K } from "../constants";

const Sidebar = () => {
  return (
    <div >
      <nav className=" fixed min-h-screen  top-0 left-0 w-60  shadow-lg flex flex-col gap-5  p-12 transition duration-150">
        <Link to="/" className="text-black ">
          Logo
        </Link>

        <ul className="flex flex-col gap-5 ">

          { 
            K.SidebarLinks.map((side) => (
              <li>

              {" "}
              <Link to={side.route} className="flex items-center gap-2 text-black hover:text-asphalt">
                {" "}
                <Icon iconNode={side.icon} size={20} />
                <span>{side.name}</span>
              </Link>{" "}
            </li>
  
            ))
          }
         
       

        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
