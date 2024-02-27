import React from "react";
import { POSTER_URL } from "../utils/constants";

const MovieCard = ({ movie }) => {
  return movie?.poster_path ? (
    <div className=" ">
      <img
        className="h-28 min-w-48"
        alt={movie.title}
        src={POSTER_URL + movie.poster_path}
      />
    </div>
  ) : null;
};

export default MovieCard;
