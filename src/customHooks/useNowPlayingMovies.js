import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../redux/movieSlice";
import { nowPlayingAPI } from "../APIs/api";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingAPI = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      nowPlayingAPI
    );
    const json = await data?.json();
    dispatch(addNowPlayingMovies(json.results));
    console.log(json);
  };
  useEffect(() => {
    getNowPlayingAPI();
  }, []); //Call only once;
};

export default useNowPlayingMovies;
