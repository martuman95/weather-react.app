import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    function handleResponse(response){
console.log(response);
    }
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=f5ee6fe9739269adb6179e45323cceb3&units=metric`;
    
  axios.get(apiUrl).then(handleResponse);
  
  return (
       <div className="WeatherForecast">
           <div className="row">
<div className="col">
    <div className="forecastDay">
        Thu
        </div>
        <span className="forecastIcon">
<WeatherIcon code="01d"size="32"/>
</span>
<div className="forecastTemp">
    <span className="temp-max">19°</span>
    -
    <span className="temp-min">10°</span>
    </div>
</div>
<div className="col">
    <div className="forecastDay">
        Thu
        </div>
        <span className="forecastIcon">
<WeatherIcon code="01d"size="32"/>
</span>
<div className="forecastTemp">
    <span className="temp-max">19°</span>
    -
    <span className="temp-min">10°</span>
    </div>
</div>
<div className="col">
    <div className="forecastDay">
        Thu
        </div>
        <span className="forecastIcon">
<WeatherIcon code="01d"size="32"/>
</span>
<div className="forecastTemp">
    <span className="temp-max">19°</span>
    -
    <span className="temp-min">10°</span>
    </div>
</div>
<div className="col">
    <div className="forecastDay">
        Thu
        </div>
        <span className="forecastIcon">
<WeatherIcon code="01d"size="32"/>
</span>
<div className="forecastTemp">
    <span className="temp-max">19°</span>
    -
    <span className="temp-min">10°</span>
    </div>
</div>

       </div>
           </div>
   )
}