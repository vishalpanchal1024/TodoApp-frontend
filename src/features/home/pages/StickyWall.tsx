import { AddStickyWall } from "@/lazylord/homePages";
import { FC, ReactElement, useState } from "react";

const StickyWall:FC = ():ReactElement => {
  const [showModal,setShowModal] = useState<boolean>(false)
  return (
    <div className="w-full min-h-[80vh] border-2 border-[#EBEBEB] rounded-xl grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4 select-none" >
      <div onClick={()=>setShowModal(true)} className="h-52 bg-gray-200 rounded-lg flex items-center justify-center cursor-pointer" >
        <img src="/svg/plus.svg"  className="size-12" />
      </div>
      <AddStickyWall setShowModal={()=>setShowModal(false)} showModal={showModal} />
    </div>
  );
};

export default StickyWall;
