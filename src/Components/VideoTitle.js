import React from "react";

const VideoTitle = ({title, overview}) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 w-1/4 text-lg">{overview}</p>
      <div className="py-3">
        <button className="text-xl bg-gray-400 text-white p-4 px-12 bg-opacity-500 rounded-lg">▶ Play</button>
        <button className="mx-2 text-xl bg-gray-400 text-white p-4 px-12 bg-opacity-500 rounded-lg">More Info</button>
      </div>
    </div>
  );
};

export default VideoTitle;
