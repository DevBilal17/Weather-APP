import React from 'react'
import WeatherAppBox from './components/WeatherAppBox'
import { ToastContainer } from "react-toastify";
const App = () => {
  return (
    <div>
     <WeatherAppBox/> 
     <ToastContainer />
    </div>
  )
}

export default App
