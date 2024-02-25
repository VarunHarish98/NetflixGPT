import { useDispatch } from "react-redux";
import { apiOptions } from "../constants/constants";
import { useEffect } from "react";
import { addMovieDetails } from "../redux/movieSlice";

const useMovieDetails = (movieId) => {
    let dispatch = useDispatch();
    // console.log(movieId)
    movieId = movieId ?? "976573" //Nullish Coalescing, just to test the API output
    const getMovieVideos = async () => {
        let data = movieId && await fetch(
            "https://api.themoviedb.org/3/movie/" +
            movieId,
            apiOptions
        );
        // console.log(await data)
        data = await data?.json();
        // console.log(data)
        dispatch(addMovieDetails(data));
    };
    useEffect(() => {
        getMovieVideos();
    }, [movieId]);
};

export default useMovieDetails;
