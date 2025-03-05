import { Sidebar } from "@/lazylord/homePages";
import { useGetLoginUserQuery } from "@/service/Auth.serveice";
import Loader from "@/shared/components/Loader";
import { IHomeLayout } from "@/shared/types/Home.types";
import { useAppDispatch } from "@/store/hooks/hooks";
import { getLogedInUser } from "@/store/Slices/AuthSlices";
import { FC, ReactElement, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const HomeLayout: FC<IHomeLayout> = ({ children }): ReactElement => {
  const [showSidebar, setShowSideBar] = useState(false);
  const { data, isLoading } = useGetLoginUserQuery("");
  const { pathname } = useLocation();

  const dispatch  = useAppDispatch();

  useEffect(()=>{
    if(data?.user){
      dispatch(getLogedInUser(data.user))
    }
  },[data])

  if (isLoading) {
    return <Loader />
  };

  return (
    <>
     {data ?  <div className="p-5 flex h-screen gap-5">
        <div className={`flex h-full ${showSidebar ? "w-64 md:w-0" : " w-0 md:w-72"} absolute md:static rounded-xl overflow-hidden transition-all duration-500`} >
          <Sidebar setShowSideBar={() => setShowSideBar(!showSidebar)} />
        </div>
        <div className="flex  flex-1 flex-col" >
          <div className="flex gap-10 " >
            <span onClick={() => setShowSideBar(!showSidebar)} className={` h-8 ${showSidebar ? "hidden md:flex" : "flex md:hidden"} hover:bg-gray-200 rounded-full px-1 py-1 cursor-pointer`}>
              <img src="/svg/bar.svg" alt="bar" className="size-6 " />
            </span>
            <h2 className=" text-3xl md:text-5xl mb-10 capitalize" >{pathname !== "/" ? pathname.replace("/", "").replace("-", " ") : "Upcoming"}</h2>
          </div>
          {children}
        </div>
      </div> : <Navigate to="/login" /> }
    </>
  );
};

export default HomeLayout;
