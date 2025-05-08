import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
export const weatherData = createContext();
const ContextApi = ({ children }) => {
  const [apiData, setApiData] = useState(null);
  const [forecast, setForcast] = useState(null);
  const [loading, setLoading] = useState(false);
  let apiKey = "f54e46f5854d06714f2aabf22e751d02";

  const fetchApi = async (city) => {
    try {
      let response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
      );
      let data = response.data;
      ForecastDataByDay(data);
      let r = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      );
      let d = r.data;

      setApiData(d);
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    } catch (err) {
      //  alert(err.response.data.message);
      toast.error(err.response.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      setLoading(false);
    }
  };

  const ForecastDataByDay = (data) => {
    let forecastData = {};
    data.list.forEach((item) => {
      let date = new Date(item.dt * 1000).toISOString().split("T")[0];
      // console.log(date)
      if (!forecastData[date]) {
        forecastData[date] = [];
      }
      forecastData[date].push(item);
    });

    console.log(forecastData);

    const dailySummary = Object.keys(forecastData).map((date) => {
      let dayData = forecastData[date];
      let weather = dayData[0].weather[0];
      let URL = `http://openweathermap.org/img/wn/${weather.icon}.png`;
      let summary = {
        date: date,
        day: new Date(date).toLocaleString("en-US", { weekday: "short" }),
        temp: dayData[0].main.temp,
        iconURL: URL,
        desc : dayData[0].weather[0].description ,
        celcius: Math.floor(dayData[0].main.temp - 273.15),
        fahrenheit: Math.floor(((dayData[0].main.temp - 273.15) * 9) / 5 + 32),
      };
      return summary;
    });

    setForcast(dailySummary);
  };
  return (
    <weatherData.Provider
      value={{ apiData, fetchApi, forecast, loading, setLoading }}
    >
      {children}
    </weatherData.Provider>
  );
};

export default ContextApi;
