import { AuthLayout, ForgetPassword, Login, Register } from "@/lazylord/AuthPages";
import { HomeLayout, Upcomming } from "@/lazylord/homePages";
import { Suspense } from "react";
import {RouteObject, useRoutes } from "react-router-dom";


const AppRoutes = () => {
 
    const routes:RouteObject[] = [
        {
            path:"/login",
            element:<Suspense><AuthLayout><Login/></AuthLayout></Suspense>
        },
        {
            path:"/register",
            element:<Suspense><AuthLayout><Register/></AuthLayout></Suspense>
        },
        {
            path:"/forget",
            element:<Suspense><AuthLayout><ForgetPassword/></AuthLayout></Suspense>
        },
        {
            path:"/",
            element:<Suspense><HomeLayout><Upcomming/></HomeLayout></Suspense>
        }
    ]

    return useRoutes(routes)
}

export default AppRoutes
