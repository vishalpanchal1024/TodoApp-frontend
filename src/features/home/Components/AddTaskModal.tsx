import { IAddTaskProp } from '@/shared/types/Home.types'
import { FC, ReactElement } from 'react'

const AddTaskModal: FC<IAddTaskProp> = ({ openModal,setOpenModal }): ReactElement => {
    return (
        <div className={` ${openModal ? "scale-100" : "scale-0"} absolute top-[50%] bg-slate-100 border-2 p-4 border-gray-200 left-[50%] z-50 h-fit w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] -translate-y-[50%] -translate-x-[50%] rounded-2xl transition-all duration-500`} >
            <div className='flex w-full items-center justify-end cursor-pointer' onClick={setOpenModal} >
                <img src='/svg/close.svg' />
            </div>

            <form>
                <h3 className='text-2xl' >Add New Task</h3>
                <label className='block mt-5' >
                    <span className='text-gray-500' >Title</span>
                    <input type='text' className='w-full border border-gray-300 p-2 rounded-md' />
                </label>
                <label className='block mt-5' >
                    <span className='text-gray-500' >Description</span>
                    <input type='text' className='w-full border border-gray-300 p-2 rounded-md' />
                </label>
                <label className='block mt-5' >
                    <span className='text-gray-500' >Date</span>
                    <input type='text' className='w-full border border-gray-300 p-2 rounded-md' />
                </label>
                <label className='block mt-5' >
                    <span className='text-gray-500' >List</span>
                    <input type='text' className='w-full border border-gray-300 p-2 rounded-md' />
                </label>
                <label className='block mt-5' >
                    <span className='text-gray-500' >Tag</span>
                    <input type='text' className='w-full border border-gray-300 p-2 rounded-md' />
                </label>
                <div className='text-end' >
                    <button className='bg-slate-200  px-5 py-2 mt-5 rounded-md cursor-pointer' >Add Task</button>
                </div>
            </form>
        </div>
    )
}

export default AddTaskModal