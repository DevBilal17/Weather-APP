import React, { useContext, useState } from "react";
import { BsWind } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import ForecastWeather from "./ForecastWeather";
import { weatherData } from "../context/ContextApi";
import { Spinner } from "flowbite-react";
const TempratureBox = () => {
  let { apiData,forecast, loading } = useContext(weatherData);
  const [celcius, setCelcius] = useState(true);
  const getCurrentDate = () => {
    let options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };

    const currentDate = new Date().toLocaleDateString("en-US", options);
    return currentDate;
  };
  
  const tempToCelcius = () => {
    return Math.floor(apiData.main.temp - 273.15);
  };
  const tempToFahrenheit = () => {
    return Math.floor(((apiData.main.temp - 273.15) * 9) / 5 + 32);
  };
  return (
    <>
      {loading && apiData && (
        <div className="mt-4 text-center">
          <Spinner color="info" aria-label="Info spinner example" />
        </div>
      )}
      {apiData && !loading && (
        <div className="flex flex-col items-center mt-8 gap-4">
          <h2 className="text-4xl font-bold">
            {apiData.name}, {apiData.sys.country}{" "}
          </h2>
          <p className="italic font-semibold">{getCurrentDate()}</p>
          <div>
            <div className="flex md:flex-row flex-col items-center gap-4">
              <img
                src={`https://openweathermap.org/img/wn/${apiData.weather[0].icon}@2x.png`}
                alt={apiData.weather[0].description}
                className="w-[140px]"
              />
              {celcius ? (
                <div className="flex md:text-6xl text-5xl font-bold">
                  {tempToCelcius()}
                  <div
                    className="flex gap-1 items-start justify-center text-2xl"
                    onClick={() => setCelcius(!celcius)}
                  >
                    <div className="flex">
                      <div>&deg;</div> C
                    </div>
                    <div className=" mt-1 h-6 w-1 bg-black"></div>
                    <div className="flex">
                      <div>&deg;</div> F
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex md:text-6xl text-5xl font-bold">
                  {tempToFahrenheit()}
                  <div
                    className="flex gap-1 items-start justify-center text-2xl"
                    onClick={() => setCelcius(!celcius)}
                  >
                    <div className="flex">
                      <div>&deg;</div> F
                    </div>
                    <div className=" mt-1 h-6 w-1 bg-black"></div>
                    <div className="flex">
                      <div>&deg;</div> C
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="text-center mt-3 text-pink-500 text-xl font-semibold">
              {apiData.weather[0].description}
            </div>
          </div>

          <div className="w-full flex  items-center justify-around mt-4">
            <div className="flex gap-0.5 sm:gap-2 items-center">
              <div className="h-full">
                <BsWind className="md:text-4xl text-2xl" />
              </div>
              <div className="flex flex-col">
                <div className="font-semibold md:text-lg text-sm">
                  {apiData.wind.speed} m/s
                </div>
                <div className="font-semibold md:text-lg text-sm">Wind speed</div>
              </div>
            </div>
            <div className="flex gap-0.5 sm:gap-2 items-center">
              <div className="h-full">
                <WiHumidity className="md:text-4xl text-3xl" />
              </div>
              <div className="flex flex-col">
                <div className="font-semibold md:text-lg text-sm">
                  {apiData.main.humidity}%
                </div>
                <div className="font-semibold md:text-lg text-sm">Humidity</div>
              </div>
            </div>
          </div>
          <ForecastWeather forecast={forecast} />
        </div>
      )}
    </>
  );
};

export default TempratureBox;
