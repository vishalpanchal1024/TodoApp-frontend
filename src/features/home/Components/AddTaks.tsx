import { FC, ReactElement } from "react"

const AddTaks: FC = (): ReactElement => {
    return (
        <div className="w-full">
            {/* add tasks button */}
            <div className="flex items-center gap-2 text-gray-600 w-full border border-gray-200  px-3 font-medium rounded-md py-2 cursor-pointer hover:bg-gray-200" >
                <img src="/svg/plus.svg" alt="" />
                Add New Task
            </div>

            {/* tasks list */}
            <div className="border-b border-gray-200 text-gray-500 flex items-center justify-between px-5 py-1 cursor-pointer hover:bg-gray-200" >
                <div className="flex gap-3">
                    <input type="checkbox" />
                    <span  >This is First Todo Task</span>
                </div>
                <img src="/svg/rightArrow.svg" className="size-10" />
            </div>

            <div className="border-b border-gray-200 text-gray-500 flex items-center justify-between px-5 py-1 cursor-pointer hover:bg-gray-200" >
                <div className="flex gap-3">
                    <input type="checkbox" />
                    <span  >Now This is Testing</span>
                </div>
                <img src="/svg/rightArrow.svg" className="size-10" />
            </div>

            <div className="border-b border-gray-200 text-gray-500 flex items-center justify-between px-5 py-1 cursor-pointer hover:bg-gray-200" >
                <div className="flex gap-3">
                    <input type="checkbox" />
                    <span  >Test</span>
                </div>
                <img src="/svg/rightArrow.svg" className="size-10" />
            </div>
        </div>

    );
};

export default AddTaks;
