import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3/movie",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDE3YjUwNDBkMDIzZDc5NDU5N2M5MmZjYjVmZGVjYSIsInN1YiI6IjYzZWNlZTMzOGU4NzAyMDA4MjNiNmM2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1UeYw3JFoujKC1eiscB-pPuJsUH_-_WJi2xzb5c1eek",
    },
  }),
  endpoints: (builder) => ({
    getMovieDetails: builder.query({
      query: () => ({
        url: "/now_playing?&page=1",
        method: "GET",
      }),
    }),
    getMovieVideos: builder.query({
      query: (id) => ({
        url: `${id}/videos`,
        method: "GET",
      }),
    }),
    getPopularMovies: builder.query({
      query: () => ({
        url: `/popular?page=1`,
        method: "GET",
      }),
    }),
    getTopRatedMovies: builder.query({
      query: () => ({
        url: `top_rated?page=1`,
        method: "GET",
      })
    }),
    getUpcomingMovies: builder.query({
      query: () => ({
        url: `upcoming?page=1`,
        method: "GET",
      })
    }),
  }),
});

export const {
  useGetMovieDetailsQuery,
  useGetMovieVideosQuery,
  useGetPopularMoviesQuery,
  useGetTopRatedMoviesQuery,
  useGetUpcomingMoviesQuery
} = apiSlice;
