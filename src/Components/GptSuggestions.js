import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggestions = () => {
  const { searchMovieResults, movieNames } = useSelector((store) => store.gpt);
  console.log(searchMovieResults);
  if (!movieNames) return null;
  return (
    <div className="bg-black opacity-80 p-3 m-3 mt-5 rounded-md">
      {movieNames?.map((movieName, index) => (
        <MovieList
          title={movieName}
          movies={searchMovieResults?.[index]?.results}
          key={movieName}
          className="text-white"
        >
          {movieName}
        </MovieList>
      ))}
    </div>
  );
};

export default GptSuggestions;
