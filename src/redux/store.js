import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./courses/coursesSlice";

const store = configureStore({
    reducer: {
        courses: coursesReducer
    }
})
export default store;