import { useEffect } from "react";
import { useGetUpcomingMoviesQuery } from "../utils/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { addUpcoming } from "../utils/movieSlice";

export const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetUpcomingMoviesQuery();
  const upcomingMovies= useSelector(store=>store.movies.upcomingMovies)

  useEffect(() => {
    if (!isLoading && data && !upcomingMovies) {
      dispatch(addUpcoming(data?.results));
    }
  }, [dispatch, isLoading, data,upcomingMovies]);

  return { isLoading };
};
