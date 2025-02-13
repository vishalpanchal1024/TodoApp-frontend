import { AddTasks } from "@/lazylord/homePages";
import { FC, ReactElement } from "react"

const Upcoming: FC = (): ReactElement => {

  return (
    <div className="w-full">
     
      {/* Today Taks List */}
      <div className="w-full min-h-40 border rounded-2xl border-gray-200 p-4" >
        <h3 className="text-2xl font-medium my-2" >Today</h3>
        <AddTasks />
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-5" >
        <div className="w-full min-h-40 border rounded-2xl border-gray-200 p-4" >
          <h3 className="text-2xl font-medium my-2" >Tomorrow</h3>
          <AddTasks />
        </div>

        <div className="w-full min-h-40 border rounded-2xl border-gray-200 p-4" >
          <h3 className="text-2xl font-medium my-2" >This Week</h3>
          <AddTasks />
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
