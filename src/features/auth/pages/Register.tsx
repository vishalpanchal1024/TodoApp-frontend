import { FC, ReactElement, useState } from 'react'
import { Link } from 'react-router-dom';

const Register:FC = ():ReactElement => {
        const [showPassword,setShowPassword] = useState<boolean>(false)
  return (
    <form className='w-[80%]'>
    <h2 className="text-4xl font-bold mb-6">Sign Up</h2>
    <div className='flex flex-col gap-3' >
        <div className='flex  w-full h-12 border-2 border-gray-200 rounded-lg  ' >
            <input type='text' placeholder='Username ' className='w-full h-full px-2 rounded-lg ' />
        </div>
        <div className='flex  w-full h-12 border-2 border-gray-200 rounded-lg  ' >
            <input type='email' placeholder='email' className='w-full h-full px-2 rounded-lg ' />
        </div>
        <div className='flex  w-full h-12 border-2 border-gray-200 rounded-lg relative ' >
            <input type={showPassword ? "text" :'password'} placeholder='Password' className='w-full h-full px-2 rounded-lg ' />
            <span className='absolute top-[50%] right-2 -translate-y-[50%]' onClick={()=>setShowPassword(!showPassword)}>
                       {showPassword ? <img src='/svg/slaceEye.svg'/> : <img src='/svg/eye.svg' />}
                    </span>
        </div>
    </div>
    <button className='cursor-pointer w-full h-12 bg-[#FFD43B] rounded-lg my-5 font-medium text-xl ' >
        Sign Up
    </button>
   
    <p className='text-center font-medium py-2' >Already have an account? <Link to="/login" className='text-blue-500 cursor-pointer' >Sign in</Link></p>
</form>
  );
};

export default Register
