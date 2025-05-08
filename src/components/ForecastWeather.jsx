import React from "react";
import ForecastCard from "./ForecastCard";
import { Tooltip } from "flowbite-react";
const ForecastWeather = ({ forecast }) => {
  return (
    <div className="w-full">
      <h3 className="text-center font-bold">5-Day Forecast:</h3>
      <div className="w-full flex items-center justify-between my-5">
        {forecast?.slice(1).map((item, index) => {
          return (
            <Tooltip key={item.date} content={item.desc} >
              <ForecastCard
                day={item.day}
                celcius={item.celcius}
                fahrenheit={item.fahrenheit}
                image={item.iconURL}
              />
            </Tooltip>
          );
        })}
        {/* <ForecastCard day={'Wed'} celcius={'23'} fahrenheit={'74'} image={'/few-clouds-day.png'}/>
      <ForecastCard day={'Thu'} celcius={'25'} fahrenheit={'51'} image={'/scattered-clouds-day.png'}/>
      <ForecastCard day={'Fri'} celcius={'22'} fahrenheit={'64'} image={'/clear-sky-day.png'}/>
      <ForecastCard day={'Sat'} celcius={'28'} fahrenheit={'59'} image={'/broken-clouds-day.png'}/> */}
      </div>
    </div>
  );
};

export default React.memo(ForecastWeather);
