import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import FormatDate from "./FormatDate";


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [temperature, setTemperature] = useState(null);
 function handleResponse(response) {
    setWeatherData({
        ready:true,
         date: new Date(response.data.dt * 1000) ,
         temperature: Math.round(response.data.main.temp),
         humidity: response.data.main.humidity,
         wind: response.data.wind.speed,
city: response.data.name,
description: response.data.weather[0].description
     })
     
     
 }
 
 if (weatherData.ready) {
 return (
       <div>
<div className>
            <form className="Weather">
        <input type="text" placeholder="Type a city"/> 
    <button className="btn btn primary w-100"> Let's go </button>
       </form>
       </ div>
            <div className="title">
       <h2>
           {weatherData.city}
       </h2>
         </div>
        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" />
  <span className="temperature">{weatherData.temperature}</span> <span className="degrees">°C</span>
    <ul>
         <p> <FormatDate date={weatherData.date}/> </p> 
        <li className="text-capitolize">{weatherData.description} </li>
        <li>
            Humidity: {weatherData.humidity} %
        </li>
        <li>
            Wind Speed: {weatherData.wind}  Km/h
        </li>
    </ul>
    </div>
    )
 } else {
    let apiKey = "f5ee6fe9739269adb6179e45323cceb3"
    let city = "London";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);
   return "Loading..."
   }
 
}