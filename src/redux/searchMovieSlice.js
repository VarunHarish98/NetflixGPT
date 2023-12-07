import { createSlice } from "@reduxjs/toolkit";

const searchMovieSlice = createSlice({
  name: "searchMovieList",
  initialState: {
    searchMovieResults: null,
    searchMovieLists: null,
  },
  reducers: {
    setSearchMovieList: (state, action) => {
      const { searchMovieList, movieList } = action.payload;
      state.searchMovieResults = searchMovieList;
      state.movieList = movieList;
    }
  },
});

export const { setSearchMovieList } = searchMovieSlice.actions;
export default searchMovieSlice.reducer;
