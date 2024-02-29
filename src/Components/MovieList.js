import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pl-6 md:pl-12 pb-6">
      <h2 className="text-white text-2xl font-semibold py-3">{title}</h2>
      <div className="flex overflow-x-scroll overflow-hidden gap-2">
        {movies?.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
