import React from "react";
import SearchBox from "./SearchBox";
import TempratureBox from "./TempratureBox";

const WeatherAppBox = () => {
  return <div className="max-w-[700px] mx-auto bg-white/30 rounded-3xl  my-6 md:my-16 backdrop-blur-sm md:p-5 p-4">
      <SearchBox/>
      <TempratureBox/>
  </div>;
};

export default WeatherAppBox;
