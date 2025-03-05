import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IAuthSlice {
    _id: string;
    fullname: string;
    username: string;
    email: string;
    image: string;
    occupation: string;
    description: string;
}

export const initialState: IAuthSlice = {
    _id: "",
    fullname: "",
    username: "",
    email: "",
    image: "",
    occupation: "",
    description: "",
}


 const AuthSlice = createSlice({
    name: "AuthSlice",
    initialState,
    reducers: {
        getLogedInUser:(state,action:PayloadAction<IAuthSlice>)=>{
            state._id = action.payload?._id;
            state.description = action.payload?.description;
            state.email = action.payload?.email;
            state.fullname = action.payload?.fullname;
            state.image = action.payload?.image;
            state.occupation = action.payload?.occupation;
            state.username = action.payload?.username;
        }
    }
})

export const {getLogedInUser} = AuthSlice.actions;

export {AuthSlice}
