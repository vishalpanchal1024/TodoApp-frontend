import { Tasks } from "@/constant/Home.constants";
import { ITaskNavLinks } from "@/shared/types/Home.types";
import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

const Sidebar: FC = (): ReactElement => {
  return (
    <div className="h-full bg-[#F4F4F4] w-full p-2 text-gray-600" >
      {/* head */}
      <div className="flex items-center justify-between px-2" >
        <span className="text-xl font-bold  " >Menu</span>
        <span className="flex hover:bg-gray-200 rounded-full px-1 py-1 cursor-pointer">
          <img src="/svg/bar.svg" alt="bar" />
        </span>
      </div>

      {/* search bar */}

      <div className="my-5 h-8 rounded-md overflow-hidden border border-gray-400">
        <input type="search" className=" w-full h-full px-3 focus:outline-0" placeholder="search" />
      </div>

      {/* tasks list */}
      <div className="px-2 py-5">
        <h3 className="text-xs font-bold mb-3" >TASKS</h3>
        {
          Tasks.map((item: ITaskNavLinks) => (
            <Link to={item.path} className="flex gap-2 px-3 py-2  hover:bg-gray-200 rounded-lg text-sm items-center justify-between group" >
              <span className="flex gap-2"><img src={item.icons} alt={item.icons} />{item.title}</span>
              {item.title === "Upcoming" && <span className=" px-2 bg-gray-200 group-hover:bg-white rounded-full" >1</span>}
              {item.title === "Today" && <span className=" px-2 bg-gray-200 group-hover:bg-white rounded-full" >1</span>}
            </Link>
          ))
        }
      </div>

      <div className="px-2 py-5">
        <h3 className="text-xs font-bold mb-3" >LISTS</h3>
       
      </div>
      
    </div>
  );
};

export default Sidebar;
