import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const Base_url = import.meta.env.VITE_BACKEND_URL;

const baseQuery = fetchBaseQuery({
    baseUrl:`${Base_url}/api/v1`,
    prepareHeaders:(headers)=>{
        headers.set('Content-Type', 'application/json');
        return headers;
    },
    credentials:"include"
});


export const Api = createApi({
    reducerPath:"api",
    baseQuery,
    tagTypes:["Auth"],
    endpoints:()=>({})
})

