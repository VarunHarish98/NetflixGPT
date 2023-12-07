import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice";
import movieReducer from "../redux/movieSlice";
import gptReducer from "./gptSlice";
import appReducer from "./appSlice";
import searchMovieReducer from "./searchMovieSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: movieReducer,
    gpt: gptReducer,
    appConfig: appReducer,
    searchMovieList: searchMovieReducer
  },
});

export default appStore;
