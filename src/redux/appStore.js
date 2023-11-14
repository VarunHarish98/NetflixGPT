import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import movieReducer from "../redux/movieSlice";
const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer
    }
});

export default appStore
