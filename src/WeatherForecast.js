import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(){
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