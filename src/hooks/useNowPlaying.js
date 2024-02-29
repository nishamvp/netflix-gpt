import { useEffect } from "react";
import { useGetMovieDetailsQuery } from "../utils/apiSlice";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";

export const useNowPlaying = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetMovieDetailsQuery();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies
  );

  useEffect(() => {
    !isLoading &&
      data &&
      !nowPlayingMovies &&
      dispatch(addNowPlaying(data?.results));
  }, [dispatch, isLoading, data,nowPlayingMovies]);

  return { isLoading };
};
