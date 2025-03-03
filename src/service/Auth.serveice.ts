import { Api } from "@/store/api/api";



const AuthApi = Api.injectEndpoints({
    endpoints:(build) => ({
        signUp:build.mutation({
            query(body) {
                return {
                    url:"/user/register",
                    method:"POST",
                    body
                };
            },
            invalidatesTags:["Auth"]
        }),

        signIn:build.mutation({
            query(body){
                return {
                    url:"/user/login",
                    method:"POST",
                    body
                }
            },
            invalidatesTags:["Auth"]
        }),

        verifyOtp:build.mutation({
            query(body){
                return {
                    url:"/user/otp-verification",
                    method:"POST",
                    body
                }
            },
            invalidatesTags:["Auth"]
        }),

        resendOtp:build.mutation({
            query(){
                return {
                    url:"/user/resend-otp",
                    method:"POST"
                }
            }
        })
    })
})

export const {
    useSignUpMutation,
    useSignInMutation,
    useVerifyOtpMutation,
    useResendOtpMutation,

} = AuthApi