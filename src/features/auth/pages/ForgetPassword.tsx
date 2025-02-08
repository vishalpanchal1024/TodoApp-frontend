import { FC, ReactElement } from 'react'
import { Link } from 'react-router-dom';

const ForgetPassword: FC = (): ReactElement => {
    return (
        
            <form className='w-[80%]'>
                <h2 className="text-4xl font-bold mb-6">Forgot Password</h2>
                <div className='flex flex-col gap-3' >
                    <div className='flex  w-full h-12 border-2 border-gray-200 rounded-lg  ' >
                        <input type='email' placeholder='Email ' className='w-full h-full px-2 rounded-lg ' />
                    </div>
                </div>
                <button className='cursor-pointer w-full h-12 bg-[#FFD43B] rounded-lg my-5 font-medium text-xl ' >
                    verify
                </button>

                <p className='text-center font-medium py-2' >Back to login <Link to="/login" className='text-blue-500 cursor-pointer' >Sign in</Link></p>
            </form>

    );
};

export default ForgetPassword
