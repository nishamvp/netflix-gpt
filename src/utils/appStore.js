import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import { apiSlice } from "./apiSlice";
import gptReducer from "./gptSlice"
import configReducer from "./configSlice"

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies:movieReducer,
    api:apiSlice.reducer,
    gpt:gptReducer,
    config:configReducer
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

export default appStore;
