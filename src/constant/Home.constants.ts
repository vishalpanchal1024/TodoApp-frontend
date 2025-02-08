import { ITaskNavLinks } from "@/shared/types/Home.types";

export const Tasks:ITaskNavLinks[] = [
    {
        title:"Upcoming",
        path:"/",
        icons:"/svg/right-arrow.svg"
    },
    {
        title:"Today",
        path:"/today",
         icons:"/svg/list.svg"
    },
    {
        title:"Calendar",
        path:"/calendar",
         icons:"/svg/calendar.svg"
    },
    {
        title:"Sticky Wall",
        path:"/sticky-wall",
         icons:"/svg/sticky.svg"
    },
]