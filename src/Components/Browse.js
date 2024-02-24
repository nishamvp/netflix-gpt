import React from "react";
import Header from "./Header";
import { useNowPlaying } from "../hooks/useNowPlaying";
import { usePopularMovies } from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlaying();
  const { isLoading } = usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
