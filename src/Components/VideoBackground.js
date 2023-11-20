import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";

const VideoBackground = (movieId) => {
  const trailerVideoKey = useSelector((store) => store.movies?.trailerDataKey);
  //console.log(movieId);
  useMovieTrailer(movieId?.id);
  let url = `https://www.youtube.com/embed/${trailerVideoKey}`;
  //console.log(url);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={url + "?&autoplay=1&mute=1"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
