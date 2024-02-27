import React from "react";
import Header from "./Header";
import { useNowPlaying } from "../hooks/useNowPlaying";
import { usePopularMovies } from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useTopRatedMovies } from "../hooks/useTopRatedMovies";
import { useUpcomingMovies } from "../hooks/useUpcomingMovies";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const isShowSearch = useSelector((store) => store.gpt.isShowSearch);
  useNowPlaying();
  const { isLoading } = usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <Header />
      {isShowSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
