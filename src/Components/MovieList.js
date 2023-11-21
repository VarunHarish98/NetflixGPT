import React from "react";
import { MovieCard } from "./MovieCard";

export const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div>
      <h2 className="text-2xl p-2 m-2">{title}</h2>
      <div className="flex p-1 m-1 space-x-1">
        {/* {movies.map((item) => (
          <MovieCard key={item.id} moviesPoster={item.poster_path} />
        ))} */}
      </div>
    </div>
  );
};
