import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import movieReducer from "../redux/movieSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
  },
});

export default appStore;
