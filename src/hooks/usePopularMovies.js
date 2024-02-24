import { useEffect } from "react";
import { useGetPopularMoviesQuery } from "../utils/apiSlice";
import { useDispatch } from "react-redux";
import {  addPopular } from "../utils/movieSlice";

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetPopularMoviesQuery();

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(addPopular(data?.results));
    }
  }, [dispatch, isLoading, data]);

  return { isLoading };
};
