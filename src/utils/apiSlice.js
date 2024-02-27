import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TMDB_TOKEN } from "./constants";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
    headers: {
      accept: "application/json",
      Authorization: TMDB_TOKEN,
    },
  }),
  endpoints: (builder) => ({
    getMovieDetails: builder.query({
      query: () => ({
        url: "/movie/now_playing?page=1",
        method: "GET",
      }),
    }),
    getMovieVideos: builder.query({
      query: (id) => ({
        url: `/movie/${id}/videos`,
        method: "GET",
      }),
    }),
    getPopularMovies: builder.query({
      query: () => ({
        url: `/movie/popular?page=1`,
        method: "GET",
      }),
    }),
    getTopRatedMovies: builder.query({
      query: () => ({
        url: `/movie/top_rated?page=1`,
        method: "GET",
      }),
    }),
    getUpcomingMovies: builder.query({
      query: () => ({
        url: `/movie/upcoming?page=1`,
        method: "GET",
      }),
    }),
    getSearchedMovies: builder.query({
      query: (movie) => ({
        url: `/search/movie?query=${movie}&include_adult=false&page=1`,
        method: "GET",
      }),
    })
  }),
});

export const {
  useGetMovieDetailsQuery,
  useGetMovieVideosQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery,
  useGetSearchedMoviesQuery
} = apiSlice;
