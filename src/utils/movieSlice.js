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
    addPopular: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRated: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addUpcoming: (state, action) => {
      state.upcomingMovies = action.payload;
    },
  },
});

export default movieSlice.reducer;
export const {
  addNowPlaying,
  addMovieVideo,
  addPopular,
  addTopRated,
  addUpcoming,
} = movieSlice.actions;
