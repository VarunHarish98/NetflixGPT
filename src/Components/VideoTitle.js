import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-0 left-0 right-0 p-8 text-white bg-gradient-to-r from-black aspect-video">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg">{overview}</p>
      <div className="py-3">
        <button className="text-xl bg-white text-black p-4 px-12 rounded-lg hover:opacity-80">
          ▶ Play
        </button>
        <button className="mx-2 text-xl bg-gray-500 text-white p-4 px-12 bg-opacity-500 rounded-lg hover:opacity-80">
          ℹ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
