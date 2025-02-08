import { IAuthLayout } from "@/shared/types/Auth.types"
import { FC, ReactElement } from "react"

const Layout: FC<IAuthLayout> = ({ children }): ReactElement => {
    return (
        <div className='flex h-screen w-full p-20 gap-5 ' >
            {/* left side */}
            <div className="bg-gray-800 text-white flex-1 flex flex-col justify-center items-center p-8 rounded-2xl">
                <h2 className="text-4xl font-bold mb-6">Welcome to Todo App</h2>
                <div className="relative w-64 h-64">
                    {/* Abstract Design */}
                    <div className="absolute top-0 left-0 w-16 h-16 bg-yellow-500 rounded-full"></div>
                    <div className="absolute bottom-4 right-4 w-16 h-16 bg-orange-500 rounded-full"></div>
                    <div className="absolute top-16 right-16 w-12 h-12 bg-white rounded-full"></div>
                    <div className="absolute bottom-10 left-10 w-8 h-8 bg-red-500 rounded-full"></div>
                </div>
            </div>

            {/* right side */}
            <div className="flex-1 shadow-sm shadow-gray-300 bg-white rounded-2xl flex items-center justify-center">
                {children}
            </div>
        </div>
    );
};

export default Layout;
