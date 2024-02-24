import { useDispatch } from "react-redux";
import { useGetMovieVideosQuery } from "../utils/apiSlice";
import { addMovieVideo } from "../utils/movieSlice";
import { useEffect } from "react";

export const useVideoBackground = (movieId) => {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useGetMovieVideosQuery(movieId);

  const getTrailerVideo = async () => {
    if (data?.results && data.results.length > 0) {
      const filterData = data.results.filter(
        (video) =>
          video?.type === "Trailer" 
      );
      const trailer = filterData.length > 0 ? filterData[0] : data.results[0];
      dispatch(addMovieVideo(trailer));
    }
  };

  useEffect(() => {
    if (!isLoading && !error) {
      getTrailerVideo();
    }
  }, [movieId, isLoading, error,]);

  return { isLoading, error };
};
