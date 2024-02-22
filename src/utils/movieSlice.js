import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    movieTrailer: null,
  },
  reducers: {
    addNowPlaying: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieVideo: (state, action) => {
      state.movieTrailer = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const { addNowPlaying, addMovieVideo } = movieSlice.actions;
