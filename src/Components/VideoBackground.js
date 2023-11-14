import React, { useEffect } from "react";
import { apiOptions } from "../constants/constants";

const VideoBackground = (movieId) => {
  const getMovieVideos = async () => {
    let data = await fetch(
      `https://api.themoviedb.org/3/movie/976573/videos?language=en-US`,
      apiOptions
    );
    data = await data?.json();
    let filteredDataTrailer = data.results?.filter(
      (item) => item.type === "Trailer" && item.name === "Official Trailer"
    );
    let trailerDataKey = filteredDataTrailer.length
      ? filteredDataTrailer[0]?.key
      : data.results?.[0]?.key;
    console.log(trailerDataKey);
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${trailerDataKey}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
