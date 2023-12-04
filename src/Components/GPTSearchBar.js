import React, { useRef } from "react";
import { netflixBackground } from "../constants/constants";
import lang from "../constants/languageConstants";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GPTSearchBar = () => {
  let language = useSelector((store) => store.appConfig?.lang);
  const searchText = useRef(null);
  const handleGPTSearchSubmit = async (e) => {
    e.preventDefault();
    console.log(searchText.current.value);
    //Call to OpenAI Call to get movie results
    const gptQuery = `Act as a movie recommendation system and suggest 5 movie names for the query ${searchText.current.value} comma seperated without numbering`;
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    const movieList = gptResults.choices?.[0].message?.content.split(",");
  };
  language = lang[language] || "en";
  return (
    <div className="">
      <img
        src={netflixBackground}
        alt="Netflix-Img"
        className="absolute inset-0 object-cover w-full h-full bg-gradient-to-b from-black-500"
      />

      <form
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center grid grid-cols-12 gap-4 w-2/3"
        onSubmit={handleGPTSearchSubmit}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 col-span-10 h-16 text-black text-2xl rounded-lg"
          placeholder={language?.placeHolder}
        />
        <button className="p-4 bg-red-700 text-white rounded-lg col-span-2 text-2xl">
          {language?.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
