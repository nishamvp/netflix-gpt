import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    isShowSearch: false,
    searchMovieResults:null,
    movieNames:null
  },
  reducers: {
    setIsShowSearch: (state) => {
      state.isShowSearch = !state.isShowSearch;
    },
    addSearchedMovies:(state,action)=>{
      const {searchMovieResults,movieNames} =action.payload
      state.searchMovieResults= searchMovieResults
      state.movieNames= movieNames
    }
    
  },
});

export default gptSlice.reducer;
export const { setIsShowSearch,addSearchedMovies } = gptSlice.actions;
