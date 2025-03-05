import { Tasks } from "@/constant/Home.constants";
import { useLogoutUserMutation } from "@/service/Auth.serveice";
import { ISideBarProps, ITaskNavLinks } from "@/shared/types/Home.types";
import { FC, ReactElement, useEffect, useState,} from "react";
import {  NavLink, useNavigate, } from "react-router-dom";
import { toast } from "react-toastify";

const Sidebar: FC<ISideBarProps> = ({ setShowSideBar }): ReactElement => {
  const [screenWidth,setScreenWidth] = useState<number>(0);
  const [LogoutUser,{isLoading}] = useLogoutUserMutation();
  const navigate =  useNavigate();




  const handleLogout = async () => {
    try {
      const res = await LogoutUser("").unwrap();
      toast.success(res.message);
      navigate("/login");
    } catch (error:any) {
      toast.error(error.data.message);
    }
  }


  useEffect(() => {
    
    setScreenWidth(window.innerWidth)
    window.addEventListener('resize', ()=>{
      setScreenWidth(window.innerWidth)
    });

    return () => {
      window.removeEventListener('resize', ()=>{});
    };
  }, []); 

  return (
    <div className="h-full bg-[#F4F4F4] w-full p-2 text-gray-600 relative" >
      {/* head */}
      <div className="flex items-center justify-between px-2" >
        <span className="text-xl font-bold  " >Menu</span>
        <span onClick={setShowSideBar} className="flex hover:bg-gray-200 rounded-full px-1 py-1 cursor-pointer">
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
            <NavLink state={item.title} to={item.path} key={item.path} className={` ${({isActive}:any)=>isActive ? "bg-gray-200" : ""} flex gap-2 px-3 py-2  hover:bg-gray-200 rounded-lg text-sm items-center justify-between group [&.active]:bg-gray-200`} onClick={()=> {screenWidth < 767 && setShowSideBar()}} >
              <span className="flex gap-2"><img src={item.icons} alt={item.icons} />{item.title}</span>
              {item.title === "Upcoming" && <span className=" px-2 bg-gray-200 group-hover:bg-white rounded-full" >1</span>}
              {item.title === "Today" && <span className=" px-2 bg-gray-200 group-hover:bg-white rounded-full" >1</span>}
            </NavLink>
          ))
        }
      </div>

      {/* Lists  */}
      <div className="px-2 py-5">
        <h3 className="text-xs font-bold mb-3" >LISTS</h3>
        <div className="flex items-center gap-2 text-sm px-3 py-2  hover:bg-gray-200 rounded-lg" >
          <img src="/svg/plus.svg" />
          <span>Add New List</span>
        </div>
      </div>

      {/* tags */}

      <div className="px-2 py-5">
        <h3 className="text-xs font-bold mb-3" >Tags</h3>
        <div>
          <button className="flex items-center gap-1 text-sm py-1 px-2  hover:bg-gray-200 rounded-lg" >
            <img src="/svg/plus.svg" />
            <span>Add Tags</span>
          </button>
        </div>

      </div>

      {/* end of sidebar */}
      <div className="absolute bottom-5 left-3 right-3 z-20" onClick={()=> {screenWidth < 767 && setShowSideBar()}}>
        <NavLink state={"Settings"}   to={"/settings"} className={`${({isActive}:any)=>isActive ? "bg-gray-200" : ""} flex gap-2 px-3 py-2  hover:bg-gray-200 rounded-lg text-sm items-center font-medium [&.active]:bg-gray-200`} >
        <img src="/svg/settings.svg" />
          settings
        </NavLink>
        <button type="button" onClick={handleLogout} disabled={isLoading}  className="flex gap-2 px-3 py-2 w-full  hover:bg-gray-200 rounded-lg text-sm items-center font-medium" >
        <img src="/svg/signout.svg" />
          Sign out
        </button>
      </div>

    </div>
  );
};

export default Sidebar;
