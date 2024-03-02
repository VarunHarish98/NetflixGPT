import React from "react";
import { useSelector } from "react-redux";
import { tmdbURL } from "../constants/constants";
// import { movieTypes } from "../constants/constants";

const ModalCard = ({ id }) => {
  const movieDetails = useSelector((store) => store.movies);
  // console.log()
  // let movieList = movieDetails["topRatedMovies"]?.filter((item) => item["id"] === id) || movieDetails["nowPlayingMovies"]?.filter((item) => item["id"] === id) || movieDetails["popularMovies"]?.filter((item) => item["id"] === id) || movieDetails["topRatedMovies"]?.filter((item) => item["id"] === id) || movieDetails["upcomingMovies"]?.filter((item) => item["id"] === id)
  
  
  const filterMovieTypes = (movieList) => movieList.find((item) => item["id"] === id)

  //Need to write better code for this
  let movieList = filterMovieTypes(movieDetails["topRatedMovies"]) || filterMovieTypes(movieDetails["nowPlayingMovies"]) || filterMovieTypes(movieDetails["popularMovies"]) || filterMovieTypes(movieDetails["topRatedMovies"]) 
  
  let url = tmdbURL + movieList.poster_path;
  // console.log(movieList)
  return (
    <div>
      {movieDetails && (
        <div className="justify-between flex space-x-3">
          <img src={url} className="w-40 h-50" />
          <div className="w-30 h-56">
            <h1 className="text-white text-lg font-bold mb-2">
              Title - {movieList?.title}
            </h1>
            <div className="flex space-x-2">
              <p className="font-bold flex"> Release Date - </p>
              <div>{movieList?.release_date}</div>
            </div>
            <p className="text-white ">
              {/* {" "} */}
              <div className="font-bold">Description</div>
              {movieList?.overview}
            </p>
            <div className="flex space-x-2">
              <p className="font-bold flex"> Rating - </p>
              <div>{Math.round(movieList?.vote_average)}/10</div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ModalCard;
