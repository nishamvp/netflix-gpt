import { useEffect } from "react";
import { useGetTopRatedMoviesQuery } from "../utils/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { addTopRated } from "../utils/movieSlice";

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetTopRatedMoviesQuery();
  const topRatedMovies = useSelector(store=>store.movies?.topRatedMovies)

  useEffect(() => {
    if (!isLoading && data && !topRatedMovies) {
      dispatch(addTopRated(data?.results));
    }
  }, [dispatch, isLoading, data,topRatedMovies]);

  return { isLoading };
};
