import { configureStore } from "@reduxjs/toolkit";
import  counterReducer  from "./counterSlice";
import apiSliceReducer from './apiSlice';


export const store = configureStore({
    reducer:{
        counter :counterReducer,
        apiSlice: apiSliceReducer ,
    }
})

