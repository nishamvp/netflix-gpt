import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import { apiSlice } from "./apiSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies:movieReducer,
    api:apiSlice.reducer
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

export default appStore;
