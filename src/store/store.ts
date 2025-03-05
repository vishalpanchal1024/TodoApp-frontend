import { configureStore } from "@reduxjs/toolkit";
import { Api } from "./api/api";
import { AuthSlice } from "./Slices/AuthSlices";


export const store = configureStore({
    devTools:true,
    reducer:{
        [Api.reducerPath]: Api.reducer,
        [AuthSlice.name]:AuthSlice.reducer
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(Api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch