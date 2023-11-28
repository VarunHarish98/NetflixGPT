import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../redux/movieSlice";
import { useEffect } from "react";
import { apiOptions } from "../constants/constants";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingAPI = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated",
      apiOptions
    );
    const json = await data?.json();
    dispatch(addTopRatedMovies(json.results));
    //console.log(json);
  };
  useEffect(() => {
    getNowPlayingAPI();
  }, []); //Call only once;
};

export default useTopRatedMovies;
