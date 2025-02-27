import { Api } from "@/store/api/api";



const AuthApi = Api.injectEndpoints({
    endpoints:(build) => ({
        signUp:build.mutation({
            query(body) {
                return {
                    url:"/user/register",
                    method:"POST",
                    body
                }
            }
        })
    })
})

export const {useSignUpMutation} = AuthApi