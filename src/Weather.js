import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import WeatherIcon from "./WeatherIcon";
import WeatherInfo from "./WeatherInfo";
import WeatherTemperature from "./WeatherTemperature";



export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
 const[city, setCity] = useState(props.defaultCity);
   
 function handleResponse(response) {
    setWeatherData({
        ready:true,
        coord: response.data.coord,
         date: new Date(response.data.dt * 1000) ,
         temperature: Math.round(response.data.main.temp),
         humidity: response.data.main.humidity,
         wind: response.data.wind.speed,
         city: response.data.name,
         description: response.data.weather[0].description,
         icon:  response.data.weather[0].icon
     })
 }
 function handleSubmit(event) {
 event.preventDefault();
 search();
 }
  function handleCityChange(event) {
setCity(event.target.value);
 }

function search(){
 let apiKey = "f5ee6fe9739269adb6179e45323cceb3"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
   axios.get(apiUrl).then(handleResponse);
}


 if (weatherData.ready) {
 return (
       <div>
<div className>
            <form 
            className="Weather" 
            onSubmit={handleSubmit} >
        <input 
        type="text" 
        placeholder="Type a city" 
        onChange={handleCityChange}/> 
        <input
                className="btn"
                type="submit"
                value="Let's go" />
       </form>
       </ div>
            <div className="title">
       <h2>
           {weatherData.city}
       </h2>
         <p className="description">{weatherData.description}</p>
       </div>
       <div className="icon">
       <WeatherIcon code={weatherData.icon} size="52"/>
        </div> 
        <WeatherTemperature celsius={weatherData.temperature} />
     <ul>
       <WeatherInfo data={weatherData}/>
    </ul>
   <WeatherForecast coord={weatherData.coord} /> 
    </div>
    
    )
 } else {
   search();
   return "Loading..."
   }
 
}