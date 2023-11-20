import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies: null,
        trailerDataKey: ''
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerDataKey: (state, action) => {
            state.trailerDataKey = action.payload;
        }
    }
})

export const { addNowPlayingMovies, addTrailerDataKey } = movieSlice.actions;
export default movieSlice.reducer;