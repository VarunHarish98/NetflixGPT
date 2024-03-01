// MovieCard.js
import React, { useState } from "react";
import { tmdbURL } from "../constants/constants";
import Modal from "./Modal";

export const MovieCard = ({ id, moviesPoster, onClick }) => {
  const [isModal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!isModal);
  };

  return (
    <div className="w-52 pr-1">
      <img
        src={tmdbURL + moviesPoster}
        alt="Movie Card Text"
        onClick={() => {
          onClick(id);
          toggleModal();
        }}
      />
      {isModal && <Modal id={id} onClose={toggleModal} visible={isModal} />}
    </div>
  );
};
