import React, { useState } from "react";
import { tmdbURL } from "../constants/constants";
import Modal from "./Modal";

export const MovieCard = ({id, moviesPoster }) => {
  const [isModal, setModal] = useState(false)
  const toggleModal = () => {
    setModal(!isModal)
  }
  return (
    <div className="w-52 pr-1">
      {/* {console.log(moviesPoster)} */}
      <img src={tmdbURL + moviesPoster} alt="Movie Card Text" onClick={() => toggleModal()}/>
      {isModal && <Modal id={id} onClose={toggleModal} visible={isModal}/>}
    </div>
  );    
};
