import React from "react";

const Loader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex justify-center animate-pulse gap-1">
        <div className="w-10 h-10 rounded-full bg-pry-color animate-bounce transition delay-700 duration-300 ease-in-out animation-delay-150"></div>
        <div className="w-10 h-10 rounded-full bg-pry-color animate-bounce transition delay-700 duration-300 ease-in-out animation-delay-75"></div>
        <div className="w-10 h-10 rounded-full bg-pry-color animate-bounce transition delay-700 duration-300 ease-in-out animation-delay-100"></div>
      </div>
    </div>
  );
};

export default Loader;
