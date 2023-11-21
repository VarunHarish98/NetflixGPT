import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";

const VideoBackground = (movieId) => {
  const trailerVideoKey = useSelector((store) => store.movies?.trailerDataKey);
  console.log(trailerVideoKey);
  useMovieTrailer(movieId?.id);

  let url = `https://www.youtube.com/embed/${trailerVideoKey}`;
  
  return (
    <div className="w-screen h-screen overflow-hidden relative">
      <iframe
        className="w-full h-full aspect-w-16 aspect-h-9 transform scale-150 relative"
        src={`${url}?autoplay=1&mute=1&controls=0&loop=1&frameborder=0&autoplay&modestbranding=1=1&vq=hd2360`}
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
