import { IHomeLayout, ISideBarProps } from "@/shared/types/Home.types";
import { FC, lazy, LazyExoticComponent } from "react";

// auth pages lazyLoard
export const HomeLayout:LazyExoticComponent<FC<IHomeLayout>> = lazy(()=>import("@/features/home/pages/HomeLayout"))
export const Upcomming:LazyExoticComponent<FC> = lazy(()=>import("@/features/home/pages/Upcoming"))
export const Today:LazyExoticComponent<FC> = lazy(()=>import("@/features/home/pages/Today"))
export const Calendar:LazyExoticComponent<FC> = lazy(()=>import("@/features/home/pages/Calendar"))
export const StickyWall:LazyExoticComponent<FC> = lazy(()=>import("@/features/home/pages/StickyWall"))







// auth components lazyLoard
export const Sidebar:LazyExoticComponent<FC<ISideBarProps>> = lazy(()=>import("@/features/home/Components/Sidebar"))