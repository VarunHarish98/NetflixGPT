import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../redux/movieSlice";
import { useEffect } from "react";
import { apiOptions } from "../constants/constants";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingAPI = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming",
      apiOptions
    );
    const json = await data?.json();
    dispatch(addUpcomingMovies(json.results));
    //console.log(json);
  };
  useEffect(() => {
    getNowPlayingAPI();
  }, []); //Call only once;
};

export default useUpcomingMovies;
