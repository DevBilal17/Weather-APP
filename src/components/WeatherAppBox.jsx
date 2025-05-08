import React from "react";
import SearchBox from "./SearchBox";
import TempratureBox from "./TempratureBox";

const WeatherAppBox = () => {
  return <div className="max-w-[700px] mx-auto bg-white/30 rounded-3xl  my-16 backdrop-blur-sm p-5">
      <SearchBox/>
      <TempratureBox/>
  </div>;
};

export default WeatherAppBox;
