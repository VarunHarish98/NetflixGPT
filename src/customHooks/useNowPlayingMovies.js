import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { useEffect } from "react";
import { apiOptions } from "../constants/constants";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingAPI = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      apiOptions
    );
    const json = await data?.json();
    console.log("Output", json)
    dispatch(addNowPlayingMovies(json.results));
    //console.log(json);
  };
  useEffect(() => {
    getNowPlayingAPI();
  }, []); //Call only once;
};

export default useNowPlayingMovies;
