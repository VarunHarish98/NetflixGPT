// MovieList.js
import React from "react";
import { MovieCard } from "./MovieCard";
import { useSelector } from "react-redux";

export const MovieList = ({ title, movies }) => {
  let movieKey = useSelector((store) => store.movies);
  const handleMovieClick = (movieId) => {
    console.log(movieId); // This logs the movie ID when a card is clicked
    // movieKey = movieKey["nowPlayingMovies"].filter((item) => item.id === movieId)
    // console.log(movieKey)
    
  };

  return (
    <div className="px-6">
      <h2 className="text-4xl font-semibold py-6 text-white">{title}</h2>
      <div className="flex overflow-x-auto scrollbar-hide">
        <div className="flex space-x-4">
          {movies?.map((movie) => {
            return (
              <MovieCard
                key={movie.id}
                id={movie.id}
                moviesPoster={movie.poster_path}
                onClick={handleMovieClick}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
