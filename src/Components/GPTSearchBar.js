import React from "react";
import { netflixBackground } from "../constants/constants";
import lang from "../constants/languageConstants";

const GPTSearchBar = () => {
  return (
    <div className="">
      <img
        src={netflixBackground}
        alt="Netflix-Img"
        className="absolute inset-0 object-cover w-full h-full bg-gradient-to-b from-black-500"
      />

      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center grid grid-cols-12 gap-4 w-2/3">
        <input
          type="text"
          className="p-4 col-span-10 h-16 text-black text-2xl rounded-lg"
          placeholder={lang.ka.placeHolder}
        />
        <button className="p-4 bg-red-700 text-white rounded-lg col-span-2 text-2xl">
          {lang.ka.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
