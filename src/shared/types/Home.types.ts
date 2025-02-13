import { ReactNode } from "react";

export interface IHomeLayout {
    children:ReactNode
}

export interface ITaskNavLinks {
    path:string,
    title:string,
    icons:string
}


export interface ISideBarProps {
    setShowSideBar:()=>void
}

export interface IAddTaskProp{
    setOpenModal:()=>void;
    openModal?:boolean;
}