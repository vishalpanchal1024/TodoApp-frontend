import { FC, ReactElement } from 'react'
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { useSignUpMutation } from '@/service/Auth.serveice';
import { RegisterValidation } from '@/shared/validations/auth';

const Register: FC = (): ReactElement => {

    const [signUp,{isLoading}]  = useSignUpMutation();

    const { values,errors,touched,handleSubmit, handleBlur, handleChange } = useFormik({
        initialValues: { fullname: "", username: "", email: "", password: "" },
        validationSchema: RegisterValidation,
        onSubmit: async (value) => {
            try {
               const res =  await signUp(value).unwrap();
               console.log(res);
            } catch (error) {
                console.log(error)
            }

        }
    })
    return (
        <form className='w-[80%] ' onSubmit={handleSubmit} >
            <h2 className="text-4xl font-bold mb-6">Join Us ! </h2>
            <h4 className="text-sm text-gray-500 font-semibold mb-6">Please fill in the details to create your account. </h4>
            <div className='flex flex-col gap-3' >
                <div className='flex  w-full h-12 border-2 border-gray-200 rounded-lg  ' >
                    <input type='text' placeholder='Fullname ' className='w-full h-full px-2 rounded-lg ' value={values.fullname} name='fullname' onChange={handleChange} onBlur={handleBlur} />
                </div>
                {touched.fullname && errors.fullname ? <p className='text-red-500 text-sm' >{errors.fullname}</p> : null}

                <div className='flex  w-full h-12 border-2 border-gray-200 rounded-lg  ' >
                    <input type='text' placeholder='Username ' className='w-full h-full px-2 rounded-lg ' value={values.username} name='username' onChange={handleChange} onBlur={handleBlur} />
                </div>
                {touched.username && errors.username ? <p className='text-red-500 text-sm' >{errors.username}</p> : null}

                <div className='flex  w-full h-12 border-2 border-gray-200 rounded-lg  ' >
                    <input type='email' placeholder='email Address' className='w-full h-full px-2 rounded-lg ' value={values.email} name='email' onChange={handleChange} onBlur={handleBlur}  />
                </div>
                {touched.email && errors.email ? <p className='text-red-500 text-sm' >{errors.email}</p> : null}

                <div className='flex  w-full h-12 border-2 border-gray-200 rounded-lg  ' >
                    <input type='password' placeholder='Password' className='w-full h-full px-2 rounded-lg ' value={values.password} name='password' onChange={handleChange} onBlur={handleBlur} />
                </div>
                {touched.password && errors.password ? <p className='text-red-500 text-sm' >{errors.password}</p> : null}

            </div>
            <div className="flex items-center justify-start m-3">
                <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    required
                />
                <label htmlFor="terms" className="ml-2 text-xs text-gray-600">
                    I agree to the{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-700">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-700">Privacy Policy</a>
                </label>
            </div>
            <button type='submit' className='cursor-pointer w-full h-12 bg-[#FFD43B] rounded-lg my-5 font-medium lg:text-lg ' disabled={isLoading} >
                Register
            </button>

            <p className='text-center font-medium py-2 lg:text-md' >Already have an account? <Link to="/login" className='text-blue-500 cursor-pointer' >Log in</Link></p>
        </form>
    );
};

export default Register
