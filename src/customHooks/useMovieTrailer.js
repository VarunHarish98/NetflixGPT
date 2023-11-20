import { useDispatch } from "react-redux";
import { apiOptions } from "../constants/constants";
import { useEffect } from "react";
import { addTrailerDataKey } from "../redux/movieSlice";

const useMovieTrailer = ( movieId ) => {
  let dispatch = useDispatch();
  movieId = movieId ?? "976573" //Nullish Coalescing, just to test the API output
  const getMovieVideos = async () => {
    let data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      apiOptions
    );
    data = await data?.json();
    let filteredDataTrailer = data.results?.filter(
      (item) => item.type === "Trailer" && item.name === "Official Trailer"
    );
    //console.log(filteredDataTrailer + "dfsdf")
    let trailerDataKey = filteredDataTrailer?.length
      ? filteredDataTrailer[0]?.key
      : data.results?.[0]?.key;
    dispatch(addTrailerDataKey(trailerDataKey));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
