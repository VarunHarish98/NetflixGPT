import React from "react";
import { useSelector } from "react-redux";
import { tmdbURL } from "../constants/constants";

const ModalCard = ({ id }) => {
  const movieDetails = useSelector((store) => store.movies);

  let movieList = movieDetails["nowPlayingMovies"]?.filter((item) => item["id"] === id) || movieDetails["popularMovies"]?.filter((item) => item["id"] === id) || movieDetails["topRatedMovies"]?.filter((item) => item["id"] === id) || movieDetails["upcomingMovies"]?.filter((item) => item["id"] === id)
  // console.log(movieList[0])
  let { title, overview, poster_path } = movieList[0]
  // console.log(poster_path)
  let url = tmdbURL + poster_path;
  // console.log(url)

  return (
    <div>
      {movieDetails && (
        <div className="justify-between">
          <img src={url} className="w-66 h-40" />
          <div className="w-30 h-56">
            <h1 className="text-white text-lg font-bold mb-2">
              Title - {title}
            </h1>
            <p className="text-white ">
              {" "}
              <div className="font-bold">Description</div>
              {overview}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalCard;
