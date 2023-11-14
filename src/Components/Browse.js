import React, { useEffect } from "react";
import Header from "./Header";
import { nowPlayingAPI } from "../APIs/api";

const Browse = () => {
  const getNowPlayingAPI = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', nowPlayingAPI)
    const json = await data?.json();
    console.log(json);
  }
  useEffect(() => {
    getNowPlayingAPI()
  }, []); //Call only once;
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
