import { useEffect } from "react";
import { useGetUpcomingMoviesQuery } from "../utils/apiSlice";
import { useDispatch } from "react-redux";
import { addUpcoming } from "../utils/movieSlice";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetUpcomingMoviesQuery();

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(addUpcoming(data?.results));
    }
  }, [dispatch, isLoading, data]);

  return { isLoading };
};
