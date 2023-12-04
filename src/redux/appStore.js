import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import movieReducer from "../redux/movieSlice";
import gptReducer from "./gptSlice";
import appReducer from "./appSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    appConfig: appReducer,
  },
});

export default appStore;
