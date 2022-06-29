import { configureStore } from "@reduxjs/toolkit";
import Slices from "./Slices";

export const Store = configureStore({
    reducer:{
        cart:Slices
    }
})
