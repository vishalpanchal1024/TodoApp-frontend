import { Sidebar } from "@/lazylord/homePages";
import { IHomeLayout } from "@/shared/types/Home.types";
import { FC, ReactElement, useState } from "react";

const HomeLayout: FC<IHomeLayout> = ({ children }): ReactElement => {
  const [showSidebar, setShowSideBar] = useState(false);

  return (
    <div className="p-5 flex h-screen gap-5">
      <div className={`flex h-full ${showSidebar ? "w-64 md:w-0" : " w-0 md:w-72"} absolute md:static rounded-xl overflow-hidden transition-all duration-500`} >
        <Sidebar setShowSideBar={() => setShowSideBar(!showSidebar)} />
      </div>
      <div className="flex gap-3 md:gap-10 flex-1" >
        <span onClick={() => setShowSideBar(!showSidebar)} className={` h-8 ${showSidebar ? "hidden md:flex" : "flex md:hidden"} hover:bg-gray-200 rounded-full px-1 py-1 cursor-pointer`}>
          <img src="/svg/bar.svg" alt="bar" className="size-6 " />
        </span>
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
