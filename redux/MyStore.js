import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";
import AuthSlice from "./AuthSlice";

const MyStore = configureStore({
    reducer : {
        store : CartSlice,
        auth : AuthSlice        
    }
})

export default MyStore