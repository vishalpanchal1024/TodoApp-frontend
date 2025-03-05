import { useResendOtpMutation, useVerifyOtpMutation } from "@/service/Auth.serveice";
import { useFormik } from "formik";
import { FC, ReactElement, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";


const OtpVerify: FC = (): ReactElement => {

    const [verifyOtp, { isLoading }] = useVerifyOtpMutation();
    const [resendOtp] = useResendOtpMutation();

    const navigate = useNavigate();

    const [secondsLeft, setSecondsLeft] = useState(60);

    const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: { otp: "" },
        validationSchema: yup.object({ otp: yup.number().required() }),
        onSubmit: async (value) => {
            try {
                const res = await verifyOtp(value).unwrap();
                toast.success(res.message);
                navigate("/")
            } catch (error:any) {
                toast.error(error.data.message)
            }
        }
    });

    const handleResendOtp = async () => {
        console.log("this is running")
        try {
            const res = await resendOtp("").unwrap();
            setSecondsLeft(60)
            toast.success(res.message);
        } catch (error:any) {
            toast.error(error.data.message)
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setSecondsLeft((prevSeconds) => prevSeconds - 1);
        }, 1000);

        if (secondsLeft === 0) {
            clearInterval(interval)
        }

        return () => clearInterval(interval);
    }, [secondsLeft]);
    return (
        <form className='w-[80%]' onSubmit={handleSubmit} >
            <h2 className="text-4xl font-bold mb-6">Verify OTP</h2>
            <h4 className="text-sm text-gray-500 font-semibold mb-6">Put your OTP below  </h4>
            <div className='flex flex-col gap-3' >
                <div className='flex  w-full h-12 border-2 border-gray-200 rounded-lg  ' >
                    <input type='number' placeholder='OTP' className='w-full h-full px-2 rounded-lg ' value={values.otp} name="otp" onChange={handleChange} onBlur={handleBlur} />
                </div>
                {touched.otp && errors.otp && <p className='text-red-500 text-sm' >{errors.otp}</p>}
                <div className="text-end flex items-center justify-between" >
                    <span>Seconds Left : {secondsLeft}</span>
                    <button type="button" onClick={handleResendOtp} disabled={secondsLeft !== 0} className={`${secondsLeft !== 0 ? "text-gray-400" : "cursor-pointer"} w-fit py-1 px-3 text-end `} >Resend OTP</button>
                </div>
                <button disabled={isLoading} type='submit' className='cursor-pointer w-full h-12 bg-[#FFD43B] rounded-lg my-5 font-medium text-xl ' >
                    Verify OTP
                </button>

                <p className='text-center font-medium py-2' >Don't have an account? <Link to="/login" className='text-blue-500 cursor-pointer' >Login</Link></p>
            </div>
        </form>
    );
};

export default OtpVerify;
