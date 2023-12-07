import React from "react";
import { useSelector } from "react-redux";
import { MovieList } from "./MovieList";

export const GPTMovieSugg = () => {
  const { searchMovieResults, movieList } = useSelector(
    (store) => store.searchMovieList
  );
  
  return (
    <div className="absolute top-[calc(50%+2rem)] left-1/2 transform -translate-x-1/2 text-center p-4 m-4 bg-black text-white text-2xl">
      {console.log(searchMovieResults[0][0].results)}
      <MovieList title={movieList?.[0]} movies={searchMovieResults[0][0].results}/>
      <MovieList title={movieList?.[1]} movies={searchMovieResults[1][0].results}/>
      <MovieList title={movieList?.[2]} movies={searchMovieResults[2][0].results}/>
      <MovieList title={movieList?.[3]} movies={searchMovieResults[3][0].results}/>
      <MovieList title={movieList?.[4]} movies={searchMovieResults[4][0].results}/>
    </div>
  );
};
