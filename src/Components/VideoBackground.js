import React from "react";
import { useSelector } from "react-redux";
import useMovieTrailer from "../customHooks/useMovieTrailer";

const VideoBackground = (movieId) => {
  const trailerVideoKey = useSelector((store) => {
    //console.log("Redux Store:", store); // Log the entire store to inspect its structure
    return store.movies?.trailerDataKey;
  });

  //console.log("Trailer Video Key:", trailerVideoKey);

  useMovieTrailer(movieId?.id);

  let url = `https://www.youtube.com/embed/${trailerVideoKey}`;
  //console.log("Video URL:", url);

  return (
    <div className="w-screen h-screen">
      <iframe
        className="h-full w-full bg-gray-900 flex items-center justify-center overflow"
        src={`${url}?autoplay=1&mute=1&controls=0`}
        allowFullScreen
        //allow="autoplay; clipboard-write; encrypted-media; web-share"
        title="Video Player"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
