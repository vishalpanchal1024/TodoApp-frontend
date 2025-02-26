import { FC, ReactElement } from 'react'
import { Link } from 'react-router-dom';
import InputField from '../Components/InputField';
import { useFormik } from 'formik';

const Register: FC = (): ReactElement => {

    const { values, handleBlur, handleChange } = useFormik({
        initialValues: { full_name: "", phone: "", email: "", password: "", role: "", department: "", Organization: "" },
        //validationSchema: SignUpValidation,
        onSubmit: (value) => {
            console.log(value, "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$")

        }
    })
    return (
        <form className='w-[80%]'>
            <h2 className="text-4xl font-bold mb-6">Join Us ! </h2>
            <h4 className="text-sm text-gray-500 font-semibold mb-6">Please fill in the details to create your account. </h4>
            <div className='flex flex-col gap-3' >
                {/* <div className='flex  w-full h-12 border-2 border-gray-200 rounded-lg  ' >
                    <input type='text' placeholder='Fullname ' className='w-full h-full px-2 rounded-lg ' />
                </div>
                <div className='flex  w-full h-12 border-2 border-gray-200 rounded-lg  ' >
                    <input type='text' placeholder='Username ' className='w-full h-full px-2 rounded-lg ' />
                </div>
                <div className='flex  w-full h-12 border-2 border-gray-200 rounded-lg  ' >
                    <input type='email' placeholder='email Address' className='w-full h-full px-2 rounded-lg ' />
                </div><div className='flex  w-full h-12 border-2 border-gray-200 rounded-lg  ' >
                    <input type='text' placeholder='Description ' className='w-full h-full px-2 rounded-lg ' />
                </div><div className='flex  w-full h-12 border-2 border-gray-200 rounded-lg  ' >
                    <input type='text' placeholder='Occupation ' className='w-full h-full px-2 rounded-lg ' />
                </div>
                <div className='flex  w-full h-12 border-2 border-gray-200 rounded-lg  ' >
                    <input type='password' placeholder='Password' className=
                    'w-full h-full px-2 rounded-lg ' />
                </div> */}

                <InputField
                    label={"Fullname"}
                    type={"text"}
                    showPassword={false}
                    value={values.department}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter your Fullname"
                    name="department"
                />
                <InputField
                    label={"Username"}
                    type={"text"}
                    showPassword={false}
                    value={values.department}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter your Username"
                    name="department"
                />
                <InputField
                    label={"Email Address"}
                    type={"text"}
                    showPassword={false}
                    value={values.department}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter your Email Address"
                    name="department"
                />
                <InputField
                    label={"Occupation"}
                    type={"text"}
                    showPassword={false}
                    value={values.department}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter your Occupation"
                    name="department"
                />
                <InputField
                    label={"Description"}
                    type={"text"}
                    showPassword={false}

                    value={values.full_name}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter your Description"
                    name="full_name"
                />
                <InputField
                    label={"Password"}
                    type={"password"}
                    showPassword={true}
                    value={values.password}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Enter your Password"
                    name="password"
                />
            </div>
            <div className="flex items-center justify-start m-3">
                <input
                    type="checkbox"
                    id="terms"
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    required
                />
                <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                    I agree to the{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-700">Terms of Service</a>
                    {' '}and{' '}
                    <a href="#" className="text-blue-600 hover:text-blue-700">Privacy Policy</a>
                </label>
            </div>
            <button className='cursor-pointer w-full h-12 bg-[#FFD43B] rounded-lg my-5 font-medium text-xl ' >
                Register
            </button>

            <p className='text-center font-medium py-2' >Already have an account? <Link to="/login" className='text-blue-500 cursor-pointer' >Log in</Link></p>
        </form>
    );
};

export default Register
