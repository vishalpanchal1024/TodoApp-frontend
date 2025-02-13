import { AddTaskModal, AddTasks } from "@/lazylord/homePages";
import { FC, ReactElement, useState } from "react"

const Upcoming: FC = (): ReactElement => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className="w-full">
     
      {/* Today Taks List */}
      <div className="w-full min-h-40 border rounded-2xl border-gray-200 p-4" >
        <h3 className="text-2xl font-medium my-2" >Today</h3>
        <AddTasks setOpenModal={()=>setOpenModal(true)} />
      </div>
 

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5" >
        <div className="w-full min-h-40 border rounded-2xl border-gray-200 p-4" >
          <h3 className="text-2xl font-medium my-2" >Tomorrow</h3>
          <AddTasks setOpenModal={()=>setOpenModal(true)}/>
        </div>

        <div className="w-full min-h-40 border rounded-2xl border-gray-200 p-4" >
          <h3 className="text-2xl font-medium my-2" >This Week</h3>
          <AddTasks setOpenModal={()=>setOpenModal(true)}/>
        </div>
      </div>
      <AddTaskModal setOpenModal={()=>setOpenModal(false)} openModal={openModal} />
    </div>
  );
};

export default Upcoming;
