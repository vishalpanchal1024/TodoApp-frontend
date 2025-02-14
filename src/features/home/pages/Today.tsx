import { AddTaskModal, AddTasks } from "@/lazylord/homePages";
import { FC, ReactElement, useState } from "react"


const Today:FC = ():ReactElement => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  console.log(openModal)
  return (
    <div>
      <AddTasks setOpenModal={()=>setOpenModal(true)} />
       <AddTaskModal setOpenModal={()=>setOpenModal(false)} openModal={openModal} />
    </div>
  );
};

export default Today
