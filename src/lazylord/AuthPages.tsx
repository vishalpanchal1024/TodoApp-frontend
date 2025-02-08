// auth pages lazy loarding 

import { IAuthLayout } from "@/shared/types/Auth.types";
import { FC, lazy, LazyExoticComponent } from "react";


export const AuthLayout: LazyExoticComponent<FC<IAuthLayout>> = lazy(() => import("@/features/auth/pages/Layout"));
export const Login: LazyExoticComponent<FC> = lazy(() => import("@/features/auth/pages/Login"));
export const Register: LazyExoticComponent<FC> = lazy(() => import("@/features/auth/pages/Register"));
export const ForgetPassword: LazyExoticComponent<FC> = lazy(() => import("@/features/auth/pages/ForgetPassword"))