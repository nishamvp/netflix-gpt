import { useEffect } from "react";
import { useGetTopRatedMoviesQuery } from "../utils/apiSlice";
import { useDispatch } from "react-redux";
import { addTopRated } from "../utils/movieSlice";

export const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetTopRatedMoviesQuery();

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(addTopRated(data?.results));
    }
  }, [dispatch, isLoading, data]);

  return { isLoading };
};
