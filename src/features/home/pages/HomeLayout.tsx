import { Sidebar } from "@/lazylord/homePages";
import { IHomeLayout } from "@/shared/types/Home.types";
import { FC, ReactElement, useState } from "react";

const HomeLayout: FC<IHomeLayout> = ({ children }): ReactElement => {
  const [showSidebar, setShowSideBar] = useState(false);

  return (
    <div className="p-5 flex h-screen gap-5">
      <div className={`flex h-full ${showSidebar ? "w-0" : " w-64 md:w-72"} absolute md:static rounded-xl overflow-hidden transition-all duration-500`} >
        <Sidebar setShowSideBar={() => setShowSideBar(!showSidebar)} />
      </div>
      <div className="flex gap-10" >
        {showSidebar && <span onClick={() => setShowSideBar(!showSidebar)}  className="flex h-10 hover:bg-gray-200 rounded-full px-1 py-1 cursor-pointer">
          <img src="/svg/bar.svg" alt="bar" className="size-8 " />
        </span>}
        {children}
      </div>
    </div>
  );
};

export default HomeLayout;
