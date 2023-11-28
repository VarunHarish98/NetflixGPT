import { useDispatch } from "react-redux";
import { addPopularMovies } from "../redux/movieSlice";
import { useEffect } from "react";
import { apiOptions } from "../constants/constants";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingAPI = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular",
      apiOptions
    );
    const json = await data?.json();
    dispatch(addPopularMovies(json.results));
    //console.log(json);
  };
  useEffect(() => {
    getNowPlayingAPI();
  }, []); //Call only once;
};

export default usePopularMovies;
