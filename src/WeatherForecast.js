import React, { useState } from "react";
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
<div className="col">
   <WeatherForecastDay data={forecast[1]}/>
</div> 
<div className="col">
   <WeatherForecastDay data={forecast[2]}/>
 </div>
 <div className="col">
   <WeatherForecastDay data={forecast[3]}/>
 </div>
      </div>   </div>    
);
    } else { 
        let apiKey = "f5ee6fe9739269adb6179e45323cceb3";
        let longitude = props.coord.lon;
  let latitude = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
  axios.get(apiUrl).then(handleResponse);
  return null; 
    }}