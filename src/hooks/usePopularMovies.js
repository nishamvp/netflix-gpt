import { useEffect } from "react";
import { useGetPopularMoviesQuery } from "../utils/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { addPopular } from "../utils/movieSlice";

export const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const { data, isLoading } = useGetPopularMoviesQuery();

  useEffect(() => {
    if (!isLoading && data && !popularMovies) {
      dispatch(addPopular(data?.results));
    }
  }, [dispatch, isLoading, data,popularMovies]);

  return { isLoading };
};
