import React from "react";
import { MovieCard } from "./MovieCard";

export const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h2 className="text-4xl font-semibold py-6 text-red-500">{title}</h2>
      <div className="flex overflow-x-auto">
        <div className="flex space-x-4">
          {movies?.map((movie) => {
            return (
              <MovieCard key={movie.id} moviesPoster={movie.poster_path} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
