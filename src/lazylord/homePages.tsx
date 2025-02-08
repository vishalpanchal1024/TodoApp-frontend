import { IHomeLayout } from "@/shared/types/Home.types";
import { FC, lazy, LazyExoticComponent } from "react";

// auth pages lazyLoard
export const HomeLayout:LazyExoticComponent<FC<IHomeLayout>> = lazy(()=>import("@/features/home/pages/HomeLayout"))
export const Upcomming:LazyExoticComponent<FC> = lazy(()=>import("@/features/home/pages/Upcoming"))







// auth components lazyLoard
export const Sidebar:LazyExoticComponent<FC> = lazy(()=>import("@/features/home/Components/Sidebar"))