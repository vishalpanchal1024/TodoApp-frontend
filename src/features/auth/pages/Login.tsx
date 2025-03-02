import { useSignInMutation } from '@/service/Auth.serveice';
import { LoginValidation } from '@/shared/validations/auth';
import { useFormik } from 'formik';
import { FC, ReactElement } from 'react';
import { Link } from 'react-router-dom';

const Login: FC = (): ReactElement => {

    const [signIn,{isLoading}] = useSignInMutation()

    const {values,errors,touched,handleChange,handleBlur,handleSubmit} = useFormik({
        initialValues:{email:"",password:""},
        validationSchema:LoginValidation,
        onSubmit:async (value) => {
            try {
               const res = await signIn(value).unwrap();
               console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
    })
    return (
        <form className='w-[80%]' onSubmit={handleSubmit} >
            <h2 className="text-4xl font-bold mb-6">Log in</h2>
            <h4 className="text-sm text-gray-500 font-semibold mb-6">Welcome Back! Please Log In </h4>
            <div className='flex flex-col gap-3' >
                <div className='flex  w-full h-12 border-2 border-gray-200 rounded-lg  ' >
                    <input type='text' placeholder='Username or email' className='w-full h-full px-2 rounded-lg ' value={values.email} name='email' onChange={handleChange} onBlur={handleBlur} />
                </div>
                {touched.email && errors.email && <p className='text-red-500 text-sm' >{errors.email}</p> }

                <div className='flex  w-full h-12 border-2 border-gray-200 rounded-lg  ' >
                    <input type='password' placeholder='Password' className='w-full h-full px-2 rounded-lg ' value={values.password} name='password' onChange={handleChange} onBlur={handleBlur} />
                </div>
                {touched.password && errors.password && <p className='text-red-500 text-sm' >{errors.password}</p> }

                <Link to="/forget" className='text-right text-blue-500 font-medium text-lg' >Forgot Password</Link>
            </div>
            <button disabled={isLoading} type='submit' className='cursor-pointer w-full h-12 bg-[#FFD43B] rounded-lg my-5 font-medium text-xl ' >
                Log in
            </button>
            <div className='flex items-center justify-between text-xl text-gray-500 '>
                <span className='h-0.5 w-[40%] bg-gray-300' ></span>
                or
                <span className='h-0.5 w-[40%] bg-gray-300'></span>
            </div>
            <div className='flex items-center justify-between py-2 px-4' >
                <button type='button' className=' flex items-center justify-center bg-slate-200 w-full h-10 text-lg font-medium rounded-lg cursor-pointer ' >
                      <img src="/svg/google.svg" alt="google-icon" className="size-6 " />
                      <p className='text-xs text-gray-500 font-semibold  pl-6'>
                        
                   Login with Google     
                      </p>
                       </button>
               
            </div>
            <p className='text-center font-medium py-2' >Don't have an account? <Link to="/register" className='text-blue-500 cursor-pointer' >Register</Link></p>
        </form>

    );
};

export default Login;
