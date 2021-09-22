import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";


export default function WeatherForecast(props){
 let [loaded, setLoaded] = useState(false);
 let [forecast, loadForecast] = useState(null);

useEffect(() => {
 setLoaded(false);
}, [props.coord]);

    function handleResponse(response){
loadForecast(response.data.daily);
setLoaded(true);
    }

    if (loaded) {
return (
       <div className="WeatherForecast">
           <div className="row">
               {forecast.map(function(dailyForecast, index){
                   if(index < 4) {
                   return(
                    <div className="col" key="index">
   <WeatherForecastDay data={dailyForecast}/>
                    </div>    
                   )
                   } else {
                       return null;
                   }})}
      </div>  
        </div>    
);
    } else { 
        let apiKey = "f5ee6fe9739269adb6179e45323cceb3";
        let longitude = props.coord.lon;
  let latitude = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
  axios.get(apiUrl).then(handleResponse);
  return null; 
    }}