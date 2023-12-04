import React from "react";
import { tmdbURL } from "../constants/constants";

export const MovieCard = ({id, moviesPoster }) => {
  return (
    <div className="w-52 pr-1">
      <img src={tmdbURL + moviesPoster} alt="Movie Card Text" />
    </div>
  );    
};
