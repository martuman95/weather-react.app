import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props){
 let [loaded, setLoaded] = useState(false);
 let [forecast, loadForecast] = useState(null);
    function handleResponse(response){
loadForecast(response.data.daily);
setLoaded(true);
    }
    if (loaded) {
return (
       <div className="WeatherForecast">
           <div className="row">
<div className="col">
   <WeatherForecastDay data={forecast[0]}/>
</div> 
 </div>
      </div>    
);
    } else { 
        let longitude = props.coord.lon;
  let latitude = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=f5ee6fe9739269adb6179e45323cceb3&units=metric`;
    
  axios.get(apiUrl).then(handleResponse);
  return null; 
    }}