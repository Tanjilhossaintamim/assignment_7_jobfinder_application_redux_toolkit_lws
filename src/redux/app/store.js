import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "../features/Job/jobSlice";

const store = configureStore({
    reducer: {
        jobs: jobSlice,
    }
})

export default store;