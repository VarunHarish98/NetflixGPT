import React from "react";
import { GPTMovieSugg } from "./GPTMovieSugg";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <div>
      <GPTSearchBar />
      <GPTMovieSugg />
    </div>
  );
};

export default GPTSearch;
