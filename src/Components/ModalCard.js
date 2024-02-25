import React from "react";
import { useSelector } from "react-redux";
import { tmdbURL } from "../constants/constants";

const ModalCard = () => {
  const movieDetails = useSelector((store) => store.movies);

  let url = tmdbURL + "/pA4sNvcohTNPx3AhEEeIu8gSt7h.jpg";

  return (
    <div>
      {movieDetails && (
        <div className="justify-between">
          <img src={url} className="w-66 h-40" />
          <div className="w-30 h-56">
            <h1 className="text-white text-lg font-bold mb-2">
              Title - {movieDetails.title}
            </h1>
            <p className="text-white ">
              {" "}
              <div className="font-bold">Description</div> <br></br>
              {movieDetails.overview}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalCard;
