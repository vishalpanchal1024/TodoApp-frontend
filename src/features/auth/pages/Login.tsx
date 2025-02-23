import { FC, ReactElement, useState } from 'react'
import { Link } from 'react-router-dom';

const Login: FC = (): ReactElement => {
    const [showPassword,setShowPassword] = useState<boolean>(false)
    return (
        <form className='w-[80%]'>
            <h2 className="text-4xl font-bold mb-6">Sign in</h2>
            <div className='flex flex-col gap-3' >
                <div className='flex  w-full h-12 border-2 border-gray-200 rounded-lg  ' >
                    <input type='text' placeholder='Username or email' className='w-full h-full px-2 rounded-lg ' />
                </div>
                <div className='flex  w-full h-12 border-2 border-gray-200 rounded-lg  relative' >
                    <input type={showPassword ? "text" :'password'} placeholder='Password' className='w-full h-full px-2 rounded-lg ' />
                    <span className='absolute top-[50%] right-2 -translate-y-[50%]' onClick={()=>setShowPassword(!showPassword)}>
                       {showPassword ? <img src='/svg/slaceEye.svg'/> : <img src='/svg/eye.svg' />}
                    </span>
                </div>
                <Link to="/forget" className='text-right text-blue-500 font-medium text-lg' >Forgot Password</Link>
            </div>
            <button className='cursor-pointer w-full h-12 bg-[#FFD43B] rounded-lg my-5 font-medium text-xl ' >
                Sign in
            </button>
            <div className='flex items-center justify-between text-xl text-gray-500 '>
                <span className='h-0.5 w-[40%] bg-gray-300' ></span>
                or
                <span className='h-0.5 w-[40%] bg-gray-300'></span>
            </div>
            <div className='flex items-center justify-between py-2 px-4' >
                <button type='button' className='bg-slate-200 w-[40%] h-8 text-lg font-medium rounded-lg cursor-pointer ' >Google</button>
                <button type='button' className='bg-slate-200 w-[40%] h-8 text-lg font-medium rounded-lg cursor-pointer' >facebook</button>
            </div>
            <p className='text-center font-medium py-2' >Don't have an account? <Link to="/register" className='text-blue-500 cursor-pointer' >Sign up</Link></p>
        </form>

    );
};

export default Login;
