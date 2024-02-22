import React from "react";
import Header from "./Header";
import { useNowPlaying } from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const { isLoading } = useNowPlaying();

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
