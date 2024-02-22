import { useEffect } from "react";
import { useGetMovieDetailsQuery } from "../utils/apiSlice";
import { useDispatch } from "react-redux";
import { addNowPlaying } from "../utils/movieSlice";

export const useNowPlaying = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useGetMovieDetailsQuery();

  useEffect(() => {
    if (!isLoading && data) {
      dispatch(addNowPlaying(data?.results));
    }
  }, [dispatch, isLoading, data]);

  return { isLoading };
};
