import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import Main from "./Main";
import Secondary from "./Secondary";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <Main />
      <Secondary />
    </div>
  );
};

export default Browse;
