import React from "react";
import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";

const Main = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) return null;
  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;
  //console.log(id);
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default Main;
